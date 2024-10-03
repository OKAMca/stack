/* eslint-disable react/display-name */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { forwardRef } from 'react'
import { CarouselNextNavigationButton, CarouselPrevNavigationButton } from './components/CarouselNavigationButton'
import Carousel from './index'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Template = (args) => {
  return <Carousel {...args} />
}

export default {
  title: 'Base Components/Carousel',
  component: Carousel,

  argTypes: {
    a11y: {
      description: "React Swiper's accessibility module parameters",
    },

    children: {
      description:
        'Function looping through every alert and passing the current alert. Can be used for rendering all alerts wrapping `AlertsItem` in another component',

      table: {
        type: {
          summary: '(slide: TCarouselSlideProps) => React.ReactNode',
        },

        defaultValue: {
          summary: '(slide: TCarouselSlideProps) => <CarouselSlide {...slide />}',
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

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    slides: [
      {
        id: 1,
        ariaLabel: 'Slide 1 aria label',
        children: <div>Slide 1</div>,
      },
      {
        id: 2,
        title: 'Slide 2 title',
        children: <div>Slide 2</div>,
      },
      {
        id: 3,
        children: <div>Slide 3</div>,
      },
      {
        id: 4,
        ariaLabel: 'Slide 4 aria label',
        title: 'Slide 4 title',
        children: <div>Slide 4</div>,
      },
    ],

    onNavigationPrev: () => console.log('Navigated to previous slide'),
    onNavigationNext: () => console.log('Navigated to next slide'),

    a11y: {
      nextSlideMessage: 'Next alert',
      prevSlideMessage: 'Previous alert',
      paginationBulletMessage: 'Navigate to slide number {{index}}',
    },
  },
}

export const MultipleSlidesPerView = {
  render: Template.bind({}),
  name: 'Multiple slides per view',

  args: {
    slidesPerView: 2,
    modules: ['Navigation'],
  },
}

export const Autoplay = {
  render: Template.bind({}),
  name: 'Autoplay',

  args: {
    modules: ['Autoplay', 'Navigation', 'Pagination'],
    autoplay: true,
  },
}

export const FocusableContent = {
  render: Template.bind({}),
  name: 'Focusable content',

  args: {
    id: 3,
    modules: ['Navigation'],
    slidesPerView: 2,

    slides: [
      {
        id: 1,

        children: (
          <div>
            <p>Slide 1</p>
            <a href="#">Focusable content 1</a>
          </div>
        ),
      },
      {
        id: 2,

        children: (
          <div>
            <p>Slide 2</p>
            <a href="#">Focusable content 2</a>
          </div>
        ),
      },
      {
        id: 3,

        children: (
          <div>
            <p>Slide 3</p>
            <a href="#">Focusable content 3</a>
          </div>
        ),
      },
      {
        id: 4,

        children: (
          <div>
            <p>Slide 4</p>
            <a href="#">Focusable content 4</a>
          </div>
        ),
      },
    ],
  },
}

export const InfiniteLooping = {
  render: Template.bind({}),
  name: 'Infinite looping',

  args: {
    id: 4,
    loop: true,
    modules: ['Navigation'],
  },
}

export const Pagination = {
  render: Template.bind({}),
  name: 'Pagination',

  args: {
    modules: ['Pagination'],
  },
}

export const CarouselCustomNavigation = {
  render: Template.bind({}),
  name: 'Carousel custom navigation',

  args: {
    modules: ['Navigation'],

    prevButton: forwardRef((props, ref) => (
      <CarouselPrevNavigationButton {...props} ref={ref}>
        Previous slide
      </CarouselPrevNavigationButton>
    )),

    nextButton: forwardRef((props, ref) => (
      <CarouselNextNavigationButton {...props} ref={ref}>
        Next slide
      </CarouselNextNavigationButton>
    )),
  },
}
