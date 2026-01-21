# ADR 004: ESLint Disable Comment Policy

## Status

Implemented

## Context

ESLint disable comments (`eslint-disable`, `eslint-disable-next-line`, etc.) allow developers to bypass lint rules for
specific code. While sometimes necessary, undocumented disables can:

1. Accumulate over time without clear justification
2. Hide technical debt or code smells
3. Make it difficult to determine if the bypass is still necessary
4. Create confusion for future maintainers

To maintain code quality while allowing legitimate exceptions, we need a policy that balances strictness with pragmatism.

## Decision

### Require Justifications for All Disable Comments

All ESLint disable comments **must include a justification** explaining why the rule is being bypassed. This is enforced
by the `eslint-comments/require-description` rule.

**Format:**
```typescript
// eslint-disable-next-line rule-name -- Justification explaining why this is necessary
problematicCode()
```

**Block format:**
```typescript
/* eslint-disable rule-name -- Justification explaining why this is necessary */
code()
moreCode()
/* eslint-enable rule-name */
```

### When Disable Comments Are Appropriate

Use disable comments for:

1. **Library API constraints** - When external libraries require patterns that conflict with lint rules
   ```typescript
   // eslint-disable-next-line react/no-children-for-each -- react-stately collections require Children API
   ```

2. **Framework requirements** - When frameworks like Storybook or Next.js need specific patterns
   ```typescript
   // eslint-disable-next-line react-hooks/rules-of-hooks -- CSF3 render() is treated as a component
   ```

3. **Intentional type loosening** - When `any` or unsafe operations are genuinely required
   ```typescript
   // eslint-disable-next-line ts/no-explicit-any -- CMS response type is dynamic and validated at runtime
   ```

4. **SSR/hydration patterns** - When React state must be set during effects for SSR compatibility
   ```typescript
   // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect -- SSR requires client-side init
   ```

### When NOT to Use Disable Comments

**CRITICAL POLICY: Do not add inline `eslint-disable` comments to "fix" lint violations.**

Adding a disable comment is not fixing the issue—it's hiding it. The rule violation still represents a potential problem in your code.

**Do not** use disable comments for:

- Quick fixes to make CI pass without understanding the error
- Suppressing warnings you intend to fix "later"
- Avoiding refactoring that a rule is correctly suggesting
- Hiding code that should be improved
- Bypassing type-safety rules without architectural justification
- Silencing rules because you disagree with them

**The correct response to a lint error is:**

1. **Fix the code** - Most lint errors have straightforward fixes
2. **Understand the rule** - If unsure why the rule exists, research it
3. **Discuss with team** - If a rule seems wrong for the codebase, propose changing the config
4. **Request an exception** - If a legitimate exception is needed, follow the [Adding New Exceptions](#adding-new-exceptions) process

Instead, either:
- Fix the underlying issue
- Add a file-level or config-level override if the pattern is legitimate throughout
- Discuss with the team if a rule should be disabled project-wide

### Approved Exception List

This is the definitive list of approved ESLint exceptions. New exceptions require review and must be added here.

#### Config-Level Overrides (eslint.config.js)

| Config Block | Rule(s) Disabled | Rationale |
|--------------|------------------|-----------|
| `react-stately-children-api` | `react/no-children-*`, `react/no-clone-element` | Adobe react-stately collections require React.Children API. See [ADR 005](./005_react-stately-eslint-exceptions.md) |
| `react-stately-items` | `react-refresh/only-export-components` | Item components have static `getCollectionNode` methods |
| `react-aria-unbound-method` | `ts/unbound-method` | react-aria hooks return arrow functions, not class methods |
| `react-stately-node-props` | `ts/no-unsafe-*`, `ts/strict-boolean-expressions` | `Node<T>.props` is typed as `any` in react-stately |
| `graphql-cms-data-boundaries` | `ts/no-unsafe-*`, `ts/strict-boolean-expressions` | GraphQL JSON scalars typed as `any`; CMS attrs are `Record<string, any>` |
| `react-hook-form-integration` | `ts/no-unsafe-assignment` | `watch()`/`getValues()` return `any` by design |
| `theme-provider-hooks` | `ts/no-unsafe-assignment`, `ts/no-unsafe-return` | Theme context tokens can be any JSON value |
| `wysiwyg-sanitized-html` | `react-dom/no-dangerously-set-innerhtml` | Content sanitized via `sanitize-html` library before render. See [Security Exceptions](#security-exceptions-detailed). |
| `provider-files` | `react-refresh/only-export-components` | Provider + hook co-location pattern |
| `theme-files` | `react-refresh/only-export-components` | Theme utilities alongside components |
| `storybook` | Multiple hooks/type rules | Stories use CSF3 patterns and loose typing |
| `storybook-helpers` | `react-refresh/only-export-components` | Mock/helper files with mixed exports |
| `test-files` | All type-aware rules | Test files may not be in tsconfig |
| `declaration-files` | Type rules | `.d.ts` files define types, not runtime code |
| `automation-lib` | `ts/prefer-nullish-coalescing`, `ts/strict-boolean-expressions` | No strictNullChecks in automation lib |
| `config-files` | Type-aware rules | Config files not in tsconfig |

#### Approved Inline Disable Categories

| Rule | Approved Use Cases | Example |
|------|-------------------|---------|
| `ts/prefer-nullish-coalescing` | Empty string env var fallbacks, boolean OR logic, accessibility text chains | `process.env.VAR \|\| 'default'` |
| `ts/no-explicit-any` | react-aria callback signatures, CMS type transitions | With JSDoc explaining why |
| `react-hooks-extra/no-direct-set-state-in-use-effect` | SSR hydration, async fetch completion | Client detection, promise resolution |
| `react-hooks/exhaustive-deps` | Deep comparison via memoized params, ref.current triggering | With explanation of dependency pattern |
| `react/no-array-index-key` | Items without stable IDs (calendar cells, pagination) | With explanation why index is correct |
| `no-console` | Logger utility implementation | `libs/stack/logger/src/lib/logger.ts` only |
| `no-template-curly-in-string` | Template strings in JSDoc/argTypes | Literal text, not code |

#### Generated Code (Blanket Disable)

Generated code directories contain `/* eslint-disable */` at the top. These are approved because:
- Files are overwritten on each codegen run
- Manual edits would be lost
- See [ADR 003](./003_generated-code-policy.md) for paths

| Path | Generator |
|------|-----------|
| `apps/directus-data-query/src/lib/gql/generated/` | @graphql-codegen/cli |
| `libs/directus/directus-block/src/generated/` | @graphql-codegen/cli |

#### Summary: Exception Rationale (Short, Stable)

Each approved exception falls into one of these categories:

| Category | Examples | Rationale |
|----------|----------|-----------|
| **Library API Limitations** | react-stately `Node<T>.props: any`, react-hook-form `watch(): any`, GraphQL JSON scalars | Third-party library types intentionally use `any`; proper typing would require upstream changes |
| **Framework Patterns** | React Children API, getCollectionNode statics, Provider+hook co-location | Required by react-aria/react-stately architecture; alternative patterns don't exist |
| **Security (Approved)** | WysiwygBlock sanitized HTML | Content sanitized via allowlist before render; XSS vectors removed |
| **SSR/Hydration** | Client detection, window API access, async state | React hydration requires client-side state initialization in effects |
| **Build Tooling** | Config files, test files, declaration files | Not in tsconfig; type-aware rules can't run |
| **Generated Code** | GraphQL codegen output | Machine-generated; manual edits would be lost on regeneration |

### When Adding New Exceptions

1. **Prefer config-level overrides** for patterns that apply to multiple files
2. **Use inline disables** only for truly one-off situations
3. **Always include justification** (enforced by `eslint-comments/require-description`)
4. **Update this ADR** when adding new config-level overrides
5. **Get team review** for new exception categories

### Configuration-Level vs Inline Disables

Prefer **configuration-level overrides** (in `eslint.config.js`) when:
- The pattern applies to a category of files (e.g., all `*.stories.tsx`)
- The reason is architectural, not situational
- Multiple files would need the same inline disable

Use **inline disables** when:
- The exception is truly one-off
- The specific context matters more than the file type
- You want the justification visible at the code location

### Security Exceptions (Detailed)

#### WysiwygBlock `dangerouslySetInnerHTML` Exception

**File:** `libs/stack/stack-ui/src/components/WysiwygBlock/index.tsx`

**Why this exception is safe:**

1. **All content is sanitized** before rendering using the `sanitize-html` library
2. The sanitizer uses allowlist-based filtering (not blocklist)
3. Only explicitly allowed tags and attributes pass through:
   - Default allowed tags: Standard HTML text elements + `iframe`, `img`
   - Default allowed attributes: Limited to safe attributes per tag
4. **XSS attack vectors are removed** by the sanitizer before `dangerouslySetInnerHTML` is called

**Implementation pattern:**
```typescript
const sanitizedContent = sanitizeHtml(content, {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(allowedTags),
  allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, ...allowedAttributes },
})
return <Typography dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
```

**Requirements for maintaining this exception:**
- The `sanitize-html` library MUST be called before any `dangerouslySetInnerHTML` usage
- Never bypass the sanitizer with raw content
- Keep `sanitize-html` updated to patch any discovered vulnerabilities
- Any new `dangerouslySetInnerHTML` usage requires separate review and exception

## CI Guardrails

The following ESLint rules are enabled to prevent accumulation of unjustified or stale disable comments:

| Rule | Level | Purpose |
|------|-------|---------|
| `eslint-comments/require-description` | error | Every disable must include `-- justification` |
| `eslint-comments/no-unused-disable` | error | Catches stale disables that no longer suppress errors |
| `eslint-comments/no-unlimited-disable` | error | Blocks `/* eslint-disable */` without rule names |
| `eslint-comments/no-aggregating-enable` | error | Blocks blanket `eslint-enable` without rule names |
| `eslint-comments/no-duplicate-disable` | error | Blocks redundant disables for the same rule |
| `eslint-comments/no-unused-enable` | error | Catches stale enable comments |

These rules run on every PR via the CI workflow (`.github/workflows/ci.yml`), blocking merges that violate the policy.

### Why No Max Count Threshold

A hard cap on disable comments is **not enforced** because:

1. **Quantity ≠ Quality** - The justification matters more than the count
2. **Existing rules prevent abuse** - All disables must be justified and non-stale
3. **Projects have different needs** - react-aria/react-stately integration requires more exceptions
4. **False sense of security** - A cap could lead to removing legitimate exceptions to meet quota

The current baseline is ~34 inline disables (excluding generated code), all with documented rationale.

## Adding New Exceptions

### Process for New Inline Disables

1. **First, try to fix the underlying issue** - Disables are a last resort
2. **If an exception is needed**, add the disable with a clear justification:
   ```typescript
   // eslint-disable-next-line rule-name -- Clear explanation of why this is necessary
   ```
3. **CI will enforce the justification** - The PR will fail without `-- explanation`
4. **For patterns that repeat**, propose a config-level override instead

### Process for New Config-Level Overrides

1. **Identify the pattern** - Multiple files needing the same inline disable
2. **Create a named config block** in `eslint.config.js` with:
   - Descriptive `name` property
   - Specific `files` glob pattern (as narrow as possible)
   - Comment explaining the architectural reason
3. **Update this ADR** - Add the new override to the "Config-Level Overrides" table
4. **Get team review** - Config changes affect the entire codebase

### Example Config-Level Override

```javascript
// React-stately collection Item components (AccordionItem, TabItem, etc.)
// These have getCollectionNode static methods that trigger the warning
{
  name: 'react-stately-items',
  files: [
    '**/AccordionItem.tsx',
    '**/TabItem.tsx',
    // ... specific files only
  ],
  rules: {
    'react-refresh/only-export-components': 'off',
  },
},
```

## Consequences

### Positive

- Every disable comment documents *why* it exists
- Future maintainers can evaluate if the exception is still needed
- CI will catch new disables without justification
- CI will catch stale disables that are no longer needed
- Encourages fixing issues rather than suppressing them

### Negative

- Slightly more effort when adding disable comments
- Existing undocumented disables must be updated

### Implementation

The eslint-comments rules are enabled in `eslint.config.js`:

```javascript
rules: {
  // Require justification for all disable comments
  'eslint-comments/require-description': ['error', { ignore: [] }],
  // Catch stale/unnecessary disables
  'eslint-comments/no-unused-disable': 'error',
}
```

The remaining rules (`no-unlimited-disable`, `no-aggregating-enable`, `no-duplicate-disable`, `no-unused-enable`) are enabled at error level by `@antfu/eslint-config` defaults.

## References

- [@eslint-community/eslint-plugin-eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/)
- [require-description rule documentation](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
