import WysiwygBlock from '.'

const Template = (args) => {
  return <WysiwygBlock {...args} />
}

export default {
  title: 'BASE COMPONENTS/Wysiwyg Block',
  component: WysiwygBlock,

  argTypes: {
    content: {
      description: 'Takes HTML elements in string form from the Wysiwyg block content',
    },

    WysiwygBlockAttributes: {
      description: 'target, allow, allowfullscreen, frameborder, scrolling, iframe',
    },
  },

  args: {
    content: '<a target="_self" href="https://www.google.com/">Link with target _self</a>',
  },
}

export const LinkWithTargetSelf = {
  render: Template.bind({}),
  name: 'Link with target _self',
}

export const LinkWithTargetBlank = {
  render: Template.bind({}),
  name: 'Link with target blank',

  args: {
    content: '<a target="_blank" href="https://www.google.com/">Link with target _blank</a>',
  },
}

export const WithTailwindStyles = {
  render: Template.bind({}),
  name: 'With Tailwind styles',

  args: {
    content: '<div class="bg-color-1-300"><h1 class="text-5xl">Title</h1></div>',
  },
}

export const WithStyleTag = {
  render: Template.bind({}),
  name: 'With style tag',

  args: {
    content: '<div style="background-color: red;"><h1 style="font-size: 3rem;">Title</h1></div>',
  },
}

export const WithAriaAttributes = {
  render: Template.bind({}),
  name: 'With aria attributes',

  args: {
    content:
      '<a class="bg-color-1-300 disabled:opacity-50" href="#" disabled aria-label="I am a disabled link">Accessible link</a>',
  },
}

export const YoutubeEmbedVideoIframe = {
  render: Template.bind({}),
  name: 'Youtube embed video iframe',

  args: {
    content:
      '<p>Attributes of iframe : width, height, src, title, frameborder, allow, referrerpolicy, allowfullscreen</p><iframe width="560" height="315" src="https://www.youtube.com/embed/p-LFh5Y89eM?si=kTfC2QRi646JaaeK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
}

export const WebsiteWithScrolling = {
  render: Template.bind({}),
  name: 'Website with scrolling',

  args: {
    content:
      '<iframe src="https://storybook.js.org/docs" title="storybook doc" height="600" width="600" marginwidth="50" scrolling="yes"></iframe>',
  },
}

export const WithImageTag = {
  render: Template.bind({}),
  name: 'With image tag',

  args: {
    content: '<img src="/images/image.png" alt="image" />',
  },
}
