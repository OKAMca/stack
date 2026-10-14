import Accordion from '.'
import { Button } from '../Button'
import CloseBtn from '../icons/CloseBtn'
import AccordionItem from './components/AccordionItem'
import useAccordionState from './hooks/useAccordionState'

const Template = args => <Accordion {...args} />

function TemplateControlledState(args) {
  const state = useAccordionState(args)
  const { selectionManager } = state

  return (
    <div>
      <Button handlePress={() => selectionManager.select('item-1')}>Open item 1</Button>
      <Button handlePress={() => selectionManager.select('item-2')}>Open item 2</Button>
      <Accordion {...args} selectedKeys={selectionManager.selectedKeys} />
    </div>
  )
}

export default {
  title: 'Base Components/Accordion',
  component: Accordion,

  argTypes: {
    id: {
      description: 'Used for accessibility of controls',
    },

    tokens: {
      description: 'Takes in `textAlign` (`left` | `center`), `titleBold` (`boolean`)',

      defaultValue: {
        summary: '{ textAlign: left, titleBold: false }',
      },
    },

    children: {
      description: 'List of `AccordionItem`',

      control: {
        type: 'none',
      },
    },

    TransitionAnimation: {
      description:
        'React spring animation component that will be used for the opening/closing transition of accordion items',

      control: {
        type: 'none',
      },
    },

    selectionMode: {
      description: 'Describes the selection mode for all the children items',
      options: ['multiple', 'single', 'none'],

      defaultValue: {
        summary: 'single',
      },

      control: {
        type: 'radio',
      },
    },

    defaultSelectedKeys: {
      description: 'Array containing all the keys to be selected by default',
    },

    selectedKeys: {
      description: 'Array containing all the currently selected keys for a controlled state mechanism',
    },

    onSelectionChange: {
      description: 'Function called every time selected keys change. Passes an array containing all the open keys',
    },

    keepMounted: {
      description:
        'Keep closed panels in the DOM (and in the server-rendered HTML) with `hidden="until-found"`. Find-in-page and `#:~:text=` links open the matching item. Animated with CSS; `TransitionAnimation` is ignored.',
      defaultValue: {
        summary: 'false',
      },
      control: {
        type: 'boolean',
      },
    },

    autoFocusPanel: {
      description:
        'Move keyboard focus to the first focusable element of a panel when it opens. `false` follows the WAI-ARIA disclosure pattern (focus stays on the header button).',
      defaultValue: {
        summary: 'true (false when keepMounted)',
      },
      control: {
        type: 'boolean',
      },
    },

    headingLevel: {
      description: 'Wrap each header button in a heading element of this level (WAI-ARIA accordion pattern). No heading when omitted.',
      options: [undefined, 1, 2, 3, 4, 5, 6],
      control: {
        type: 'select',
      },
    },
  },

  args: {
    id: '1',
    onSelectionChange: keys => console.log('Selection changed to: ', keys),
    selectionMode: 'single',
  },

  parameters: {
    layout: 'fullscreen',
  },
}

export const LeftAligned = {
  render: Template.bind({}),
  name: 'Left Aligned',

  args: {
    id: 'accordion',

    tokens: {
      titleBold: true,
      textAlign: 'left',
    },

    children: [
      <AccordionItem
        key="item-1"
        title="This is an accordion"
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
        icon="Plus"
      >
        BODY TEXT: Is not the best kind of originality that which comes after a sound apprenticeship? That which shall
        prove to be the blending of a firm conception of, “useful precedent” and the progressive tendencies of an able
        mind.
      </AccordionItem>,
    ],
  },
}

export const CenterAligned = {
  render: Template.bind({}),
  name: 'Center Aligned',

  args: {
    id: 'accordion',

    tokens: {
      textAlign: 'center',
    },

    children: [
      <AccordionItem
        key="item-1"
        title="This is an accordion"
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
      >
        BODY TEXT: Is not the best kind of originality that which comes after a sound apprenticeship? That which shall
        prove to be the blending of a firm conception of, “useful precedent” and the progressive tendencies of an able
        mind.
      </AccordionItem>,
    ],
  },
}

export const DefaultOpened = {
  render: Template.bind({}),
  name: 'Default opened',

  args: {
    id: 'accordion',

    tokens: {
      textAlign: 'left',
    },

    icon: <CloseBtn />,

    children: [
      <AccordionItem
        key="item-1"
        title="This is an accordion"
        defaultOpen
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
      >
        BODY TEXT: Is not the best kind of originality that which comes after a sound apprenticeship? That which shall
        prove to be the blending of a firm conception of, “useful precedent” and the progressive tendencies of an able
        mind.
      </AccordionItem>,
    ],
  },
}

export const WithFocusableItems = {
  render: Template.bind({}),
  name: 'With focusable items',

  args: {
    id: 'accordion',

    tokens: {
      textAlign: 'left',
    },

    icon: <CloseBtn />,

    children: [
      <AccordionItem
        key="item-1"
        title="This is an accordion"
        tokens={{
          bgColor: 'white',
        }}
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
        icon="Plus"
      >
        <Button>Focusable item 1</Button>
        <Button>Focusable item 2</Button>
      </AccordionItem>,
      <AccordionItem
        key="item-2"
        title="This is an accordion 2"
        tokens={{
          bgColor: 'gray',
        }}
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
        icon="Plus"
      >
        <Button>Focusable item</Button>
      </AccordionItem>,
    ],
  },
}

export const ControlledState = {
  render: TemplateControlledState.bind({}),
  name: 'Controlled state',

  args: {
    id: 'accordion',

    tokens: {
      textAlign: 'left',
    },

    icon: <CloseBtn />,

    children: [
      <AccordionItem
        key="item-1"
        title="This is an accordion"
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
      >
        Item 1
      </AccordionItem>,
      <AccordionItem
        key="item-2"
        title="This is an accordion 2"
        onOpenChange={isOpen => console.log(`Open state was change to: ${isOpen}`)}
      >
        Item 2
      </AccordionItem>,
    ],
  },
}

const sourcesItems = [
  <AccordionItem key="sources" title="Sources" icon="Plus">
    <p>
      Hidden-until-found text: search this page for “apprenticeship” with the browser’s find-in-page while the item is
      closed, and the item opens on the match.
    </p>
    <p>
      BODY TEXT: Is not the best kind of originality that which comes after a sound apprenticeship? That which shall
      prove to be the blending of a firm conception of, “useful precedent” and the progressive tendencies of an able
      mind.
    </p>
  </AccordionItem>,
  <AccordionItem key="links" title="Links" icon="Plus">
    <Button>Focusable item</Button>
  </AccordionItem>,
]

export const KeepMounted = {
  render: Template.bind({}),
  name: 'Keep mounted (hidden until found)',

  args: {
    id: 'accordion-keep-mounted',
    keepMounted: true,
    selectionMode: 'multiple',
    tokens: {
      textAlign: 'left',
    },
    children: sourcesItems,
  },
}

export const WithHeading = {
  render: Template.bind({}),
  name: 'With heading level',

  args: {
    id: 'accordion-heading',
    headingLevel: 3,
    tokens: {
      textAlign: 'left',
    },
    children: [
      <AccordionItem key="item-1" title="This header button is wrapped in an h3" icon="Plus">
        BODY TEXT: Is not the best kind of originality that which comes after a sound apprenticeship?
      </AccordionItem>,
    ],
  },
}

export const FocusStaysOnHeader = {
  render: Template.bind({}),
  name: 'Focus stays on header (autoFocusPanel false)',

  args: {
    id: 'accordion-no-autofocus',
    autoFocusPanel: false,
    tokens: {
      textAlign: 'left',
    },
    children: [
      <AccordionItem key="item-1" title="Open me with the keyboard" icon="Plus">
        <Button>Focusable item 1</Button>
        <Button>Focusable item 2</Button>
      </AccordionItem>,
    ],
  },
}
