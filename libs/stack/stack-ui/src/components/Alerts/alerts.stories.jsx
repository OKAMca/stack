import Box from '../Box'
import Typography from '../Typography'
import Alerts from '.'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Template = (args) => <Alerts {...args} />

export default {
  title: 'Base components/Alerts',

  parameters: {
    layout: 'fullscreen',

    controls: {
      include: ['slides'],
    },
  },

  component: Alerts,

  args: {
    a11y: {
      nextSlideMessage: 'Next alert',
      prevSlideMessage: 'Previous alert',
      paginationBulletMessage: 'Navigate to slide number {{index}}',
    },

    closeButtonAriaLabel: 'Close alerts',
    onOpenChange: (isOpen) => console.log(`Alerts component was ${isOpen ? 'opened' : 'closed'}`),
    onNavigationPrev: () => console.log('Navigated to previous slide'),
    onNavigationNext: () => console.log('Navigated to next slide'),
  },

  argTypes: {
    closeButton: {
      table: {
        defaultValue: {
          summary: 'AlertsCloseButton',
        },
      },
    },

    a11y: {
      description: "React Swiper's accessibility module parameters",
    },

    children: {
      description:
        'Function looping through every alert and passing the current alert. Can be used for rendering all alerts wrapping `AlertsItem` in another component',

      table: {
        type: {
          summary: '(slide: TAlertsItem) => React.ReactNode',
        },

        defaultValue: {
          summary: '(slide: TAlertsItem) => <AlertsItem {...slide />}',
        },
      },
    },

    prevButton: {
      description: 'Custom previous button component for the carousel. Falls back to an arrow button',

      table: {
        defaultValue: {
          summary: 'CarouselPrevNavigationButton',
        },
      },
    },

    nextButton: {
      description: 'Custom previous button component for the carousel. Falls back to an arrow button',

      table: {
        defaultValue: {
          summary: 'CarouselNextNavigationButton',
        },
      },
    },

    setOpen: {
      description: 'For controlled states',
    },

    onOpenChange: {
      table: {
        type: {
          summary: '(isOpen) => void',
        },
      },

      description: 'Triggered when the alerts are closed or opened',
    },

    modules: {
      table: {
        defaultValue: {
          summary: "['A11y', 'Keyboard']",
        },

        type: {
          summary:
            'Array<A11y | Autoplay | Controller | EffectCoverflow | EffectCube | EffectFade | EffectFlip | EffectCreative | EffectCards | HashNavigation | History | Keyboard | Lazy | Mousewheel | Navigation | Pagination | Parallax | Scrollbar | Thumbs | Virtual | Zoom | FreeMode | Grid | Manipulation>',
        },
      },

      description: 'String list of modules the swiper will automatically import',
    },
  },
}

export const SingleAlert = {
  render: Template.bind({}),
  name: 'Single alert',

  args: {
    slides: [
      {
        id: '1',
        title: 'Alert 1 title',
        'aria-label': 'Alert 1 aria',
        icon: 'X',

        content: (
          <>
            <Box>
              <Typography
                tokens={{
                  size: 'h4',
                }}
              >
                This is alert 1 large content
              </Typography>
            </Box>
            <Box>
              <Typography
                tokens={{
                  size: 'xs',
                }}
              >
                This is alert 1 small content
              </Typography>
            </Box>
          </>
        ),
      },
    ],
  },
}

export const Navigation = {
  render: Template.bind({}),

  args: {
    modules: ['Navigation'],

    slides: [
      {
        id: '1',
        title: 'Alert 1 title',
        'aria-label': 'Alert 1 aria',
        icon: 'X',

        content: (
          <>
            <Box>
              <Typography
                tokens={{
                  size: 'h4',
                }}
              >
                This is alert 1 large content
              </Typography>
            </Box>
            <Box>
              <Typography
                tokens={{
                  size: 'xs',
                }}
              >
                This is alert 1 small content
              </Typography>
            </Box>
          </>
        ),
      },
      {
        button: {
          href: '#',
          as: 'a',
          children: 'Consulter toutes les alertes',
        },

        id: '2',
        title: 'Alert 2 title',
        'aria-label': 'Alert 2 aria',
        icon: 'YouTube',
      },
      {
        id: '3',
        title: 'Alert 3 title',
        'aria-label': 'Alert 3 aria',
        icon: 'Mail',
      },
    ],
  },
}

export const Pagination = {
  render: Template.bind({}),

  args: {
    modules: ['Pagination'],

    slides: [
      {
        id: '1',
        'aria-label': 'Alert 1 aria',
        icon: 'X',

        content: (
          <>
            <Box>
              <Typography
                tokens={{
                  size: 'h4',
                }}
              >
                This is alert 1 large content
              </Typography>
            </Box>
            <Box>
              <Typography
                tokens={{
                  size: 'xs',
                }}
              >
                This is alert 1 small content
              </Typography>
            </Box>
          </>
        ),
      },
      {
        id: '2',
        title: 'Alert 2 title',
        'aria-label': 'Alert 2 aria',
        icon: 'YouTube',
      },
      {
        id: '3',
        title: 'Alert 3 title',
        'aria-label': 'Alert 3 aria',
        icon: 'Mail',
      },
    ],
  },
}

export const PaginationNavigation = {
  render: Template.bind({}),
  name: 'Pagination & Navigation',

  args: {
    modules: ['Pagination', 'Navigation'],

    slides: [
      {
        id: '1',
        title: 'Alert 1 title',
        'aria-label': 'Alert 1 aria',
        icon: 'X',

        content: (
          <>
            <Box>
              <Typography
                tokens={{
                  size: 'h4',
                }}
              >
                This is alert 1 large content
              </Typography>
            </Box>
            <Box>
              <Typography
                tokens={{
                  size: 'xs',
                }}
              >
                This is alert 1 small content
              </Typography>
            </Box>
          </>
        ),
      },
      {
        id: '2',
        title: 'Alert 2 title',
        'aria-label': 'Alert 2 aria',
        icon: 'YouTube',
      },
      {
        id: '3',
        title: 'Alert 3 title',
        'aria-label': 'Alert 3 aria',
        icon: 'Mail',
      },
    ],
  },
}
