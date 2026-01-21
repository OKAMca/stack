# ESLint Discovery Lint Results

**Date:** 2026-01-19
**Total Violations:** 221 (136 errors, 85 warnings)
**Fixable:** 37 errors and 59 warnings (96 total) with `--fix`

## Summary by Rule Category

### 1. perfectionist/sort-imports (37 errors) - AUTO-FIXABLE
**Status:** Currently disabled (`'off'`)
**Assessment:** Low priority - cosmetic, auto-fixable

Files affected:
- directus-flexible-content (1)
- directus-next (2)
- core-lib (2)
- next-component (1)
- stack-ui (25+)

**Recommendation:** Could be enabled with `--fix` on initial run. Decision depends on whether team values alphabetical import order.

---

### 2. node/prefer-global/process (35 errors)
**Status:** Currently disabled (`'off'`)
**Assessment:** Low priority - Node.js style preference

Files affected:
- apps/demo (2)
- directus-next-component (3)
- directus-next (8)
- directus-node (8)
- directus-query (7)
- stack/logger (1)
- stack/stack-ui (1)

**Recommendation:** Keep disabled. Using `process.env` directly is standard practice in Node.js/Next.js. Requiring `require("process")` adds no value.

---

### 3. ts/no-unsafe-* (31 errors) - SIGNIFICANT
**Status:** Currently `'warn'`, would be `'error'` in strict mode
**Assessment:** High priority - type safety

Breakdown:
- `ts/no-unsafe-assignment`: 24 errors
- `ts/no-unsafe-member-access`: 4 errors
- `ts/no-unsafe-argument`: 1 error
- `ts/no-unsafe-call`: 1 error
- `ts/no-unsafe-return`: 1 error

Files affected:
- AriaAccordionItem.tsx (15 - react-stately Node.props)
- ListBox/index.tsx (5 - react-hook-form)
- Checkbox/index.tsx (2 - react-hook-form)
- ComboBox/index.tsx (1 - react-hook-form)
- Radio/index.tsx (1 - react-hook-form)
- Select/Select.tsx (1 - react-hook-form)
- TabPanel.tsx (1 - react-stately Node.props)
- TagGroup/index.tsx (1 - react-stately)
- getBlock.ts (2 - GraphQL)
- getNavigationItems (3 - CMS data)
- renderView.ts (3 - TipTap JSON)

**Recommendation:** These are legitimate library API boundaries. Current config has targeted file exceptions. Upgrading to 'error' globally would require ~31 inline disables or expanding file exceptions.

---

### 4. ts/strict-boolean-expressions (20 errors)
**Status:** Currently `'error'` with allowString/allowNumber options
**Assessment:** Medium priority - some legitimate, some need fixing

Breakdown:
- "Unexpected nullable object value" (8) - need `!= null` checks
- "Unexpected any value in conditional" (4) - react-stately/TipTap `any` types
- "Unexpected value in conditional" (5) - boolean coercion issues
- "Unexpected nullable string value" (3) - need explicit checks

Files affected:
- renderView.ts (8 - TipTap JSON conditionals)
- TagItem.tsx (7 - react-stately)
- TagGroup/index.tsx (3 - react-stately)
- ListBoxSection.tsx (1 - react-stately)
- getBlockProps.ts (2)
- injectDataIntoContent.ts (3)
- getNavigationItems (2)
- AriaAccordionItem.tsx (1)

**Recommendation:** The "any in conditional" errors are library API boundaries (react-stately, TipTap). These should have targeted file exceptions. The "nullable object" errors could be fixed with explicit null checks.

---

### 5. jsdoc/* (59 warnings)
**Status:** Currently disabled (`'off'`)
**Assessment:** Low priority - documentation style

Breakdown:
- `jsdoc/require-param`: 50 warnings
- `jsdoc/check-param-names`: 6 warnings
- `jsdoc/require-returns-description`: 3 warnings

Files affected: 19 files across the codebase

**Recommendation:** Keep disabled. JSDoc enforcement is not part of the project's coding standards. TypeScript provides type information; JSDoc docs are optional.

---

### 6. react/no-children-* and react/no-clone-element (15 warnings)
**Status:** Currently disabled for specific files
**Assessment:** Expected - these are approved react-stately patterns

Breakdown:
- `react/no-children-for-each`: 5
- `react/no-children-count`: 4
- `react/no-children-to-array`: 2
- `react/no-clone-element`: 4

Files affected: All are react-stately collection components or react-aria composition patterns.

**Recommendation:** Already handled via `react-stately-children-api` config block. Discovery config intentionally removed this exception to confirm these are the expected violations.

---

### 7. ts/naming-convention (1 error)
**Status:** Currently disabled (`'off'`)
**Assessment:** Low priority - style preference

File: `getDirectusFile/index.ts` - variable `filename_download` uses snake_case

**Recommendation:** Keep disabled. This variable likely comes from CMS API response. Renaming would require mapping.

---

### 8. Parsing Errors (2 errors)
**Issue:** `directus-data-query/src/index.ts` and `directus-data-query/src/lib/gql/index.ts`
**Cause:** These files are not in tsconfig project service

**Recommendation:** These are edge cases. The files are likely entry points that need to be added to tsconfig or handled via allowDefaultProject.

---

## Action Items for Strict Migration

### Already Handled by Current Config
1. ✅ react/no-children-* and react/no-clone-element - file-level exceptions
2. ✅ ts/no-unsafe-* for react-stately-node-props - file-level exceptions
3. ✅ ts/no-unsafe-* for graphql-cms-data-boundaries - file-level exceptions
4. ✅ ts/no-unsafe-* for react-hook-form-integration - file-level exceptions

### Rules to Keep Disabled (no value in enabling)
1. ❌ node/prefer-global/process - standard Node.js practice
2. ❌ jsdoc/* - not part of project standards
3. ❌ ts/naming-convention - CMS API response naming

### Rules That Could Be Enabled with --fix
1. ⚡ perfectionist/sort-imports - 37 auto-fixable (team decision)

### Rules That Need Code Fixes
1. 🔧 ts/strict-boolean-expressions - 8-12 nullable object checks needed
2. 🔧 Parsing errors - 2 files need tsconfig inclusion

### Rules Requiring File-Level Exceptions
1. 📁 ts/strict-boolean-expressions for renderView.ts (TipTap any types)
2. 📁 ts/strict-boolean-expressions for injectDataIntoContent.ts (TipTap any types)

## Conclusion

The current ESLint config is well-tuned. The discovery pass reveals:
- **96 violations are auto-fixable** (perfectionist/sort-imports decision pending)
- **59 are jsdoc warnings** (keep disabled - not part of standards)
- **35 are node/prefer-global/process** (keep disabled - standard practice)
- **31 are ts/no-unsafe-*** (already handled via file exceptions)
- **~20 are legitimate fixes needed** for strict-boolean-expressions

The strict migration would primarily involve:
1. Deciding on perfectionist/sort-imports (team preference)
2. Fixing ~10 nullable object conditionals with explicit null checks
3. Adding 2-3 more files to strict-boolean-expressions exception list
4. Fixing tsconfig to include directus-data-query entry points

---

## Follow-up PRD Tasks Created

Based on this discovery pass, the following actionable tasks were added to prd.json:

### 1. perfectionist/sort-imports (Team Decision Required)
- **enable-perfectionist-sort-imports-plan**: Review team preferences, test --fix preview
- **enable-perfectionist-sort-imports-execute**: Apply fix or document decision to keep disabled
- **Impact**: 37 auto-fixable violations across 5+ projects

### 2. TipTap JSON File Exceptions
- **add-tiptap-strict-boolean-exceptions-plan**: Identify TipTap JSON handling files
- **add-tiptap-strict-boolean-exceptions-execute**: Add config block with documented rationale
- **Impact**: 11 violations in renderView.ts and injectDataIntoContent.ts

### 3. directus-data-query Parsing Errors
- **fix-directus-data-query-parsing-errors-plan**: Review entry point files
- **fix-directus-data-query-parsing-errors-execute**: Add to tsconfig or configure allowDefaultProject
- **Impact**: 2 parsing errors in entry point re-export files

### Rules Confirmed to Keep Disabled (No Tasks Created)
- **node/prefer-global/process** (35 errors): Standard Node.js practice
- **jsdoc/*** (59 warnings): Not part of project coding standards
- **ts/naming-convention** (1 error): CMS API response naming
- **react/no-children-*, react/no-clone-element** (15 warnings): Already handled by react-stately config block
- **ts/no-unsafe-*** (31 errors): Already handled by file-level exceptions
