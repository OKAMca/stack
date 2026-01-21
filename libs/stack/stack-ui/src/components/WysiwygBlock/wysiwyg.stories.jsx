import WysiwygBlock from '.'

// Define the Template component
const Template = args => <WysiwygBlock {...args} />

// Default export with component metadata
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
  parameters: {
    docs: {
      description: {
        component: 'Wysiwyg Block component for rendering sanitized HTML content',
      },
    },
  },
}

// Individual story exports
export const LinkWithTargetSelf = Template.bind({})
LinkWithTargetSelf.args = {
  content: '<a target="_self" href="https://www.google.com/">Link with target _self</a>',
}
LinkWithTargetSelf.storyName = 'Link with target _self'

export const LinkWithTargetBlank = Template.bind({})
LinkWithTargetBlank.args = {
  content: '<a target="_blank" href="https://www.google.com/">Link with target _blank</a>',
}
LinkWithTargetBlank.storyName = 'Link with target blank'

export const WithTailwindStyles = Template.bind({})
WithTailwindStyles.args = {
  content: '<div class="bg-color-1-300"><h1 class="text-5xl">Title</h1></div>',
}
WithTailwindStyles.storyName = 'With Tailwind styles'

export const WithStyleTag = Template.bind({})
WithStyleTag.args = {
  content: '<div style="background-color: red;"><h1 style="font-size: 3rem;">Title</h1></div>',
}
WithStyleTag.storyName = 'With style tag'

export const WithAriaAttributes = Template.bind({})
WithAriaAttributes.args = {
  content: `
    <a class="bg-color-1-300 disabled:opacity-50" href="#" disabled aria-label="I am a disabled link">Accessible link</a>
  `,
}
WithAriaAttributes.storyName = 'With aria attributes'

export const YoutubeEmbedVideoIframe = Template.bind({})
YoutubeEmbedVideoIframe.args = {
  content: `
    <p>Attributes of iframe : width, height, src, title, frameborder, allow, referrerpolicy, allowfullscreen</p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/p-LFh5Y89eM?si=kTfC2QRi646JaaeK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `,
}
YoutubeEmbedVideoIframe.storyName = 'Youtube embed video iframe'

export const WebsiteWithScrolling = Template.bind({})
WebsiteWithScrolling.args = {
  content: `
    <iframe src="https://storybook.js.org/docs" title="storybook doc" height="600" width="600" marginwidth="50" scrolling="yes"></iframe>
  `,
}
WebsiteWithScrolling.storyName = 'Website with scrolling'

export const WithImageTag = Template.bind({})
WithImageTag.args = {
  content: '<img src="/images/image.png" alt="image" />',
}
WithImageTag.storyName = 'With image tag'

// Examples demonstrating different configurations of allowed tags and attributes
export const WithDefaultAllowedTagsAndAttributes = Template.bind({})
WithDefaultAllowedTagsAndAttributes.args = {
  content: `
    <p>This example uses the default allowed tags and attributes.</p>
    <iframe 
      src="https://www.youtube.com/embed/p-LFh5Y89eM" 
      width="560" 
      height="315" 
      allowfullscreen
      title="YouTube video player">
    </iframe>
    <p>The component allows <code>iframe</code> and <code>img</code> tags by default, along with their common attributes.</p>
  `,
  useSanitizerDefaultAllowedTags: true,
  useSanitizerDefaultAllowedAttributes: true,
}
WithDefaultAllowedTagsAndAttributes.storyName = 'With Default Allowed Tags and Attributes'

export const WithExtendedAllowedTagsAndAttributes = Template.bind({})
WithExtendedAllowedTagsAndAttributes.args = {
  content: `
    <p>This example extends the default allowed tags and attributes to include <code>video</code> tags.</p>
    <video width="320" height="240" controls>
      <source src="/videos/sample.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <p>We've extended the default configuration to allow the <code>video</code> tag with its attributes.</p>
  `,
  useSanitizerDefaultAllowedTags: true,
  useSanitizerDefaultAllowedAttributes: true,
  allowedTags: ['video', 'source'],
  allowedAttributes: {
    video: ['width', 'height', 'controls', 'autoplay', 'muted', 'loop', 'poster'],
    source: ['src', 'type'],
  },
}
WithExtendedAllowedTagsAndAttributes.storyName = 'With Extended Allowed Tags and Attributes'

export const WithOverriddenAllowedTagsAndAttributes = Template.bind({})
WithOverriddenAllowedTagsAndAttributes.args = {
  content: `
    <p>This example overrides the default allowed tags and attributes.</p>
    <p>Only paragraph tags with class attributes are allowed in this example.</p>
    <p class="text-red-500">This paragraph has a class and should be visible.</p>
    <div>This div tag should be sanitized out.</div>
    <iframe src="https://example.com">This iframe should be sanitized out.</iframe>
  `,
  useSanitizerDefaultAllowedTags: false,
  useSanitizerDefaultAllowedAttributes: false,
  allowedTags: ['p'],
  allowedAttributes: {
    p: ['class'],
  },
}
WithOverriddenAllowedTagsAndAttributes.storyName = 'With Overridden Allowed Tags and Attributes'
