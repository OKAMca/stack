# directus-block

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build directus-block` to build the library.

## Components

### Dispatcher

This component will loop over every block it is sent and call the Serializer. It is possible to wrap children in any component by passing a function to children, just like so:

```tsx
  <BlockDispatcher {...props} config={baseBlockDispatcherConfig}>
    {(block) => (
      <Container tokens={{ isLowestContainerLevel: true }}>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <BlockSerializer {...block} />
        </ErrorBoundary>
      </Container>
    )}
  </BlockDispatcher>
```

This would allow to remove a lot of repetitive code accross blocks definitions, for example as they all need to be wrapped in a `Container` and an `ErrorBoundary`

If no children are passed, the Dispatcher will map every block using only the Serializer component.

### Serializer

This component calls the good component in the configuration from the `collection` prop

### Configuration

A configuration uses the `components` prop to map a key value, like so:

```tsx
const config = {
  components: {
    block_wysiwyg: {
      default: (props) => <WysiwygBlock {...props} />,
      defaultVariant: 'reversed',
      getVariant: (props) => props.settings.variants,
      variants: {
        reversed: (props) => (
          <ReversedThemeProvider>
            <WysiwygBlock {...props} />
          </ReversedThemeProvider>
        )
      }
    }
  }
}
```

#### Props

- default: The default component if no variants/invalid variants are used
- defaultVariant: Overrides the default use of the `default` prop, instead mapping the default component on a specific variant
- getVariant: Callback to specify a different variant path from the one in the block's settings
- variants: key-value mapping of `{[variant]: component}`

#### Having multiple configuration

By default, the Dispatcher will use its base configuration, and merge another configuration with it. However, any components in the base configuration can be overriden.