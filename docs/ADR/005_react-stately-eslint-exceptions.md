# ADR 005: React Stately/React Aria ESLint Exceptions

## Status

Implemented

## Context

The @okam/stack component library is built on Adobe's [react-aria](https://react-spectrum.adobe.com/react-aria/) and
[react-stately](https://react-spectrum.adobe.com/react-stately/) libraries. These libraries provide accessible,
unstyled primitives for building UI components.

Adobe's architecture uses patterns that conflict with modern ESLint rules:

1. **React.Children API** - Required for the Collection pattern
2. **React.cloneElement** - Required for prop injection in composed components

These patterns are intentional design decisions by Adobe and are unlikely to change. The ESLint rules that flag these
patterns (`react/no-children-*` and `react/no-clone-element`) exist because these APIs can cause issues when misused,
but Adobe's libraries use them correctly and in a controlled manner.

## Decision

### Why React.Children API is Required

React-stately's [Collection](https://react-spectrum.adobe.com/react-stately/collections.html) pattern uses a static
`getCollectionNode` generator function to build accessible data structures from JSX children. This is the same pattern
used in Adobe's own [react-spectrum library](https://github.com/adobe/react-spectrum).

**How it works:**

```tsx
// User writes declarative JSX
<Accordion>
  <AccordionItem key="1" title="First">Content 1</AccordionItem>
  <AccordionItem key="2" title="Second">Content 2</AccordionItem>
</Accordion>

// Internally, getCollectionNode uses Children.forEach to build nodes
AccordionItem.getCollectionNode = function* (props) {
  // ...
  React.Children.forEach(children, (child) => {
    items.push({ type: 'item', element: child })
  })
  // ...
}
```

This pattern enables:

- Type-safe, JSX-based collection APIs (vs passing data arrays)
- Automatic key propagation and aria labeling
- Nested collections (items within sections)
- Mixed static and dynamic children

**Reference implementations:**

- [react-spectrum Item.ts](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts)
- [react-stately collections documentation](https://react-spectrum.adobe.com/react-stately/collections.html)

**Affected components using Children API:**

| Component | File | Methods Used |
|-----------|------|--------------|
| AccordionItem | `components/Accordion/components/AccordionItem.tsx` | `Children.forEach` |
| TabItem | `components/TabList/components/TabItem.tsx` | `Children.count`, `Children.forEach` |
| TagItem | `components/TagGroup/components/TagItem.tsx` | `Children.count`, `Children.forEach` |
| Option | `components/fields/Option/index.tsx` | `Children.count`, `Children.toArray` |
| Node | `components/Node/index.tsx` | `Children.count`, `Children.forEach` |

### Why React.cloneElement is Required

React-aria uses `cloneElement` for prop injection in composed components. This allows parent components to pass
accessibility props, event handlers, and theming to children without requiring explicit prop drilling.

**Common use cases:**

1. **Arrow prop injection in Popover:**
   ```tsx
   // Parent injects arrowProps from usePopover into arrow element
   {arrow && cloneElement(arrow, { ...arrowProps, themeName: `${themeName}.arrow` })}
   ```

2. **Accessibility prop injection in Option:**
   ```tsx
   // useOption provides labelProps/descriptionProps that must be spread onto children
   {cloneElement(label, labelProps)}
   {cloneElement(description, descriptionProps)}
   ```

3. **Theme token injection in AlertsItem:**
   ```tsx
   // Content component receives theme tokens from parent
   {React.cloneElement(content, { themeName: `${themeName}.content`, tokens })}
   ```

**Reference implementations:**

- [react-aria Popover](https://react-spectrum.adobe.com/react-aria/Popover.html)
- [react-aria useOption](https://react-spectrum.adobe.com/react-aria/useListBox.html#option)

**Affected components using cloneElement:**

| Component | File | Purpose |
|-----------|------|---------|
| Option | `components/fields/Option/index.tsx` | Inject label/description a11y props |
| Popover | `components/Popover/index.tsx` | Inject arrow positioning props |
| AlertsItem | `components/Alerts/components/AlertsItem.tsx` | Inject theme tokens |

### ESLint Configuration

These exceptions are configured in `eslint.config.js` under the `react-stately-children-api` section:

```javascript
{
  name: 'react-stately-children-api',
  files: [
    '**/AccordionItem.tsx',
    '**/TabItem.tsx',
    // ... other files
  ],
  rules: {
    'react/no-children-count': 'off',
    'react/no-children-for-each': 'off',
    'react/no-children-map': 'off',
    'react/no-children-only': 'off',
    'react/no-children-to-array': 'off',
    'react/no-clone-element': 'off',
  },
}
```

## Consequences

### Positive

- Components maintain compatibility with react-aria/react-stately patterns
- Developers can follow Adobe's documentation directly
- Accessible, well-tested patterns are preserved
- Type safety is maintained through getCollectionNode generators

### Negative

- Some ESLint rules that catch legitimate issues are disabled for these files
- New developers unfamiliar with react-aria may find the patterns unfamiliar
- Updates to react-aria patterns may require ESLint config changes

### Mitigation

1. **Scoped overrides**: Rules are only disabled for specific files, not globally
2. **Documentation**: This ADR and code comments explain the patterns
3. **Reference links**: Source files link to Adobe's implementations

## When Adding New Collection Components

When creating new components that use react-stately collections:

1. Use the `getCollectionNode` static method pattern from existing components
2. Add the component file to `eslint.config.js` under `react-stately-children-api`
3. Add a comment linking to Adobe's reference implementation:
   ```tsx
   // Pattern: https://github.com/adobe/react-spectrum/blob/main/packages/@react-stately/collections/src/Item.ts
   ```

## References

- [react-stately Collections](https://react-spectrum.adobe.com/react-stately/collections.html)
- [react-aria Component Architecture](https://react-spectrum.adobe.com/architecture.html)
- [react-spectrum Item.ts source](https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/collections/src/Item.ts)
- [react-aria useOption](https://react-spectrum.adobe.com/react-aria/useListBox.html#option)
- [react-aria Popover](https://react-spectrum.adobe.com/react-aria/Popover.html)
