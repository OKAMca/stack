import type { Meta, StoryObj } from '@storybook/react-webpack5'
import type { ComponentProps, ComponentType } from 'react'
import Carousel from '.'
import { Icon, Typography } from '../..'
import CarouselNextNavigation from './navigation/CarouselNextNavigation'
import CarouselPrevNavigation from './navigation/CarouselPrevNavigation'
import CarouselPagination from './pagination/CarouselPagination'
import CarouselPaginationBullet from './pagination/CarouselPaginationBullet'
import CarouselPaginationFraction from './pagination/CarouselPaginationFraction'
import CarouselSwiper from './swiper/CarouselSwiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

type CarouselArgs = ComponentProps<typeof Carousel>

const meta: Meta<typeof Carousel> = {
  title: 'Base Components/Carousel',
  component: Carousel,
  subcomponents: {
    Swiper: CarouselSwiper as ComponentType<unknown>,
    PrevNavigation: CarouselPrevNavigation as ComponentType<unknown>,
    NextNavigation: CarouselNextNavigation as ComponentType<unknown>,
    Pagination: CarouselPagination as ComponentType<unknown>,
    PaginationBullet: CarouselPaginationBullet as ComponentType<unknown>,
    PaginationFraction: CarouselPaginationFraction as ComponentType<unknown>,
  },
  argTypes: {
    slides: {
      description:
        'Array of slides to display in the carousel. The slides get rendered as `SwiperSlide` components by the `CarouselSwiper` component.',
    },
    a11y: {
      description: 'React Swiper\'s accessibility module parameters',
    },
    modules: {
      table: {
        defaultValue: {
          summary: '[\'A11y\', \'Keyboard\']',
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
        id: '1',
        ariaLabel: 'Slide 1 aria label',
        children: <Typography>Slide 1</Typography>,
      },
      {
        id: '2',
        title: 'Slide 2 title',
        children: <Typography>Slide 2</Typography>,
      },
      {
        id: '3',
        children: <Typography>Slide 3</Typography>,
      },
      {
        id: '4',
        ariaLabel: 'Slide 4 aria label',
        title: 'Slide 4 title',
        children: <Typography>Slide 4</Typography>,
      },
    ],
    onSwiper: () => {
      console.log('Swiper initialized')
    },
    onSlideChange: () => {
      console.log('Slide changed')
    },
  },
  render: (args: CarouselArgs) => (
    <Carousel {...args}>
      <CarouselPrevNavigation aria-label="Previous slide">
        <Icon icon="ArrowLeft" />
      </CarouselPrevNavigation>
      <CarouselSwiper />
      <CarouselNextNavigation aria-label="Next slide">
        <Icon icon="ArrowRight" />
      </CarouselNextNavigation>
    </Carousel>
  ),
}

export default meta

type Story = StoryObj<typeof Carousel>

export const MultipleSlidesPerView: Story = {
  name: 'Multiple slides per view',
  args: {
    slidesPerView: 2,
    modules: ['Navigation'],
  },
}

export const Autoplay: Story = {
  name: 'Autoplay',
  args: {
    modules: ['Autoplay', 'Navigation', 'Pagination'],
    autoplay: true,
  },
}

export const FocusableContent: Story = {
  name: 'Focusable content',
  args: {
    id: '3',
    modules: ['Navigation'],
    slidesPerView: 2,
    slides: [
      {
        id: '1',
        children: (
          <div>
            <p>Slide 1</p>
            <a href="#">Focusable content 1</a>
          </div>
        ),
      },
      {
        id: '2',
        children: (
          <div>
            <p>Slide 2</p>
            <a href="#">Focusable content 2</a>
          </div>
        ),
      },
      {
        id: '3',
        children: (
          <div>
            <p>Slide 3</p>
            <a href="#">Focusable content 3</a>
          </div>
        ),
      },
      {
        id: '4',
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

export const InfiniteLooping: Story = {
  name: 'Infinite looping',

  args: {
    id: '4',
    loop: true,
    modules: ['Navigation'],
  },
}

export const PaginationBullets: Story = {
  name: 'Pagination bullets',
  args: {
    modules: ['Pagination'],
  },
  render: (args: CarouselArgs) => (
    <Carousel {...args}>
      <CarouselSwiper />
      <CarouselPagination>
        {swiper =>
          // eslint-disable-next-line react/no-array-index-key -- pagination bullets map 1:1 with slide positions; index is the correct identifier
          swiper?.slides?.map((slide, index) => <CarouselPaginationBullet key={`bullet-${index}`} index={index} />)}
      </CarouselPagination>
    </Carousel>
  ),
}

export const PaginationFraction: Story = {
  name: 'Pagination fraction',
  args: {
    modules: ['Pagination', 'Navigation'],
  },
  render: (args: CarouselArgs) => (
    <Carousel {...args}>
      <CarouselPrevNavigation aria-label="Previous slide">
        <Icon icon="ArrowLeft" />
      </CarouselPrevNavigation>
      <CarouselNextNavigation aria-label="Next slide">
        <Icon icon="ArrowRight" />
      </CarouselNextNavigation>
      <CarouselPagination>
        <CarouselPaginationFraction />
      </CarouselPagination>
      <CarouselSwiper />
    </Carousel>
  ),
}

export const Legacy: Story = {
  name: 'Legacy Carousel',
  args: {
    modules: ['Navigation'],
  },
}
