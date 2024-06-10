# directus-block

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build directus-block` to build the library.

## Components

### Dispatcher

This component will loop over every block it is sent and call the Serializer. It is possible to wrap children in any component by passing a function to children, just like so:

```tsx
  <BlockDispatcher config={baseBlockDispatcherConfig}>
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
      default: (props) => <BlockWysiwyg {...props} />,
      document: BlockWysiwygDocument,
      defaultVariant: 'reversed',
      getVariant: (props) => props.settings.variants,
      variants: {
        reversed: (props) => (
          <ReversedThemeProvider>
            <BlockWysiwyg {...props} />
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
- document: The necessary document for querying the data. This prop can either be passed directly to the block or in the config. Since Stack blocks don't yet have their own documents, you can override them and add their document like so:

```tsx
import { blockWysiwygConfig } from '@okam/directus-block'

const brandConfig = {
  components: {
    block_wysiwyg: {
      document: BlockWysiwygDocument,
      ...blockWysiwygConfig.block_wysiwyg,
    },
    block_image: {
      default: (props) => <BrandBlockImage {...props} />
    },
  },
}

<BlockDispatcher config={brandConfig} />
```

#### Overriding the configuration with brand blocks

To override the base block dispatcher configuration, you name a block component configuration with the same key as the ones in the configuration.

For example, if this is the base configuration:

```tsx
const baseConfig = {
  components: {
    block_wysiwyg: {
      default: (props) => <BlockWysiwyg {...props}>,
    },
    block_hero: {
      default: (props) => <BlockHero {...props}>,
    },
  },
}
```

But that you to call a branded wysiwyg component from the dispatcher configuration, you may pass the following configuration:

```tsx
const brandConfig = {
  components: {
    block_wysiwyg: {
      default: (props) => <BrandBlockWysiwyg {...props} />
    },
    block_image: {
      default: (props) => <BrandBlockImage {...props} />
    },
  },
}

<BlockDispatcher config={brandConfig} />
```

In this example, the BlockWysiwyg definition would be overriden. However, you would now also have access to the `block_image`, and still retain access to the `block_hero`

You could also re-use only a part of the base configuration while overriding another part

```tsx
import { blockWysiwygConfig } from '@okam/directus-block'

const brandConfig = {
  components: {
    block_wysiwyg: {
      default: (props) => <BrandBlockWysiwyg {...props} />,
      variants: blockWysiwygConfig.block_wysiwyg.variants,
    },
    block_image: {
      default: (props) => <BrandBlockImage {...props} />
    },
  },
}

<BlockDispatcher config={brandConfig} />
```

#### Extending the configuration with stack blocks

Some blocks may be in the Stack without being in the base configuration. To use them, simply import their own configuration from the stack and spread them in yours

```tsx
import { blockHeroConfig } from '@okam/directus-block'

const brandConfigWithStackBlocks = {
  components: {
    block_image: {
      default: (props) => <BrandBlockImage {...props} />
    },
    ...blockHeroConfig,
  }
}
```