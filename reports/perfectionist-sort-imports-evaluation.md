# perfectionist/sort-imports Rule Evaluation

**Date:** 2026-01-20
**Status:** IMPLEMENTED (Option A)
**Rule:** `perfectionist/sort-imports`
**Current Setting:** `'error'` (using @antfu/eslint-config default)
**@antfu/eslint-config Default:** `'error'` with alphabetical sorting

## Decision Outcome

**Option A was selected and implemented on 2026-01-20.**

- Removed `'perfectionist/sort-imports': 'off'` from eslint.config.js
- Ran `npx nx run-many -t lint -- --fix` to auto-sort all imports
- 35 files were automatically fixed
- Lint passes with 0 errors, 0 warnings across all 12 projects

## Summary

The `perfectionist/sort-imports` rule enforces a consistent import order. This evaluation documents the 37 violations found and provides information for the team to decide whether to enable or keep disabled.

## Violation Count

| Project | Files Affected | Violation Count |
|---------|---------------|-----------------|
| stack-ui | 26 files | 29 |
| directus-next | 1 file | 2 |
| core-lib | 2 files | 2 |
| directus-flexible-content | 1 file | 1 |
| next-component | 1 file | 1 |
| **Total** | **31 files** | **37** |

## What the Rule Does

The `perfectionist/sort-imports` rule enforces:
1. **Type imports before value imports** - `import type { X }` before `import { X }`
2. **Alphabetical order within groups** - `react` before `react-aria`
3. **Standard grouping** - external packages before internal, side-effects first

## Common Violation Patterns Found

### Pattern 1: React ecosystem imports out of order (24 violations)
```typescript
// Current (violation):
import type { Node } from 'react-stately'
import { useRef } from 'react'
import { useSelectableList } from '@react-aria/selection'

// After fix:
import type { Node } from 'react-stately'
import { useSelectableList } from '@react-aria/selection'
import { useRef } from 'react'
```
**Note:** `@react-aria/selection` > `react` alphabetically

### Pattern 2: Type imports after value imports (8 violations)
```typescript
// Current (violation):
import { useRef } from 'react'
import type { ReactNode } from 'react'

// After fix:
import type { ReactNode } from 'react'
import { useRef } from 'react'
```

### Pattern 3: External packages out of order (5 violations)
```typescript
// Current (violation):
import { useFilter } from 'react-aria'
import { isString } from 'radashi'

// After fix:
import { isString } from 'radashi'
import { useFilter } from 'react-aria'
```

## Impact Assessment

### Pros of Enabling
1. **100% auto-fixable** - Run `npx nx run-many -t lint -- --fix` once
2. **Consistent codebase** - All files follow same import order
3. **Easier code review** - Predictable import structure
4. **Aligns with @antfu/eslint-config defaults** - One less custom override

### Cons of Enabling
1. **Large initial diff** - 31 files touched in one commit
2. **Alphabetical may not match mental model** - `react` comes after `@react-aria/selection`
3. **Merge conflicts** - Any pending PRs touching imports will conflict
4. **Cosmetic only** - No runtime or type safety benefit

## Team Decision Options

### Option A: Enable the rule
```javascript
// eslint.config.js - Remove or comment out:
'perfectionist/sort-imports': 'off',
```
Then run: `npx nx run-many -t lint -- --fix`

**Recommended if:** Team values consistent import ordering and is okay with alphabetical sort.

### Option B: Keep disabled
Keep current configuration. Document decision:
```javascript
// eslint.config.js
// perfectionist/sort-imports - DISABLED: Team prefers flexible import organization
// over strict alphabetical ordering. Decision made 2026-01-20.
'perfectionist/sort-imports': 'off',
```

**Recommended if:** Team prefers flexibility or finds alphabetical order unintuitive.

### Option C: Custom grouping (future enhancement)
Configure custom groups that match team's mental model:
```javascript
'perfectionist/sort-imports': ['error', {
  groups: [
    'side-effect',
    'react',           // react, react-dom
    'react-ecosystem', // react-aria, react-stately
    'external',
    'internal',
    'parent',
    'sibling',
    'index',
  ],
}]
```

**Recommended if:** Team wants sorting but with `react` always first.

## Affected Files (Full List)

<details>
<summary>Click to expand all 31 affected files</summary>

### directus-flexible-content (1 file)
- `src/lib/components/FlexibleEditorContent/extensions.ts`

### directus-next (1 file)
- `src/pageSettings/context.ts` (2 violations)

### core-lib (2 files)
- `src/api/json-api/__tests__/json-api-response.factory.test.ts`
- `src/hooks/__tests__/use-promise.test.tsx`

### next-component (1 file)
- `src/components/Link/index.tsx`

### stack-ui (26 files)
- `src/components/Accordion/components/AriaAccordionItem.tsx`
- `src/components/Accordion/hooks/useAccordionState.ts` (2 violations)
- `src/components/Accordion/index.tsx`
- `src/components/Accordion/interface.ts`
- `src/components/Alerts/components/AlertsCloseButton.tsx`
- `src/components/Button/interface.ts`
- `src/components/Calendar/RangeCalendar.tsx`
- `src/components/Calendar/components/CalendarCell.tsx`
- `src/components/Calendar/index.tsx`
- `src/components/Carousel/navigation/LegacyCarouselNavigationButton.tsx`
- `src/components/Date/index.tsx`
- `src/components/Menu/interface.ts`
- `src/components/Modal/interface.ts`
- `src/components/TabList/components/Tab.tsx`
- `src/components/TabList/components/TabItem.tsx`
- `src/components/TabList/components/TabPanel.tsx`
- `src/components/TabList/index.tsx`
- `src/components/TabList/interface.ts`
- `src/components/TagGroup/components/TagItem.tsx`
- `src/components/fields/Checkbox/index.tsx`
- `src/components/fields/CheckboxGroup/index.tsx`
- `src/components/fields/DatePicker/components/CalendarPopover.tsx`
- `src/components/fields/DatePicker/components/DateField.tsx`
- `src/components/fields/ListBox/index.tsx` (2 violations)
- `src/components/fields/RadioGroup/index.tsx`
- `src/components/fields/TextArea/index.tsx`
- `src/components/fields/TextInputField/index.tsx`
- `src/providers/SidePanel/interface.ts`
- `src/storybook/Menu/Menu.tsx`

</details>

## Verification

```bash
# To see violations:
npx eslint --no-cache --rule '{"perfectionist/sort-imports": "error"}' "libs/**/*.ts" "libs/**/*.tsx"

# To fix (after team decision):
npx nx run-many -t lint -- --fix
```

---

**COMPLETED:** Option A implemented. Rule is now enabled with @antfu/eslint-config defaults.
