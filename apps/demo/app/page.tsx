import { HelloServer } from '@okam/next-component/server'
import {
  Box,
  Button,
  Calendar,
  Checkbox,
  Date,
  DatePicker,
  Icon,
  Lightbox,
  ArrowRight,
  Popover,
  ShareButton,
  SidePanel,
  Typography,
  WysiwygBlock,
  TextArea,
  TextInputField,
  Select,
} from '@okam/stack-ui'
import image from 'libs/stack/stack-ui/static/images/image.png'
import Image from 'next/image'
import SidePanelControl from './components/SidePanelControl'

export default async function Index() {
  return (
    <div>
      <div className="flex flex-col gap-16 p-8">
        <HelloServer />
      </div>

      <div className="flex flex-col gap-16 p-8">
        <Select
          id="season"
          label="Select a season"
          name="season"
          placeholderLabel="Season"
          options={[
            { key: 'summer', value: 'Summer' },
            { key: 'fall', value: 'Fall' },
            { key: 'winter', value: 'Winter' },
            { key: 'spring', value: 'Spring' },
          ]}
        />
        <Box>
          <Typography tokens={{ size: 'h1' }}>This is a test of all available components</Typography>
        </Box>
        <div className="flex flex-col gap-8">
          <Box>
            <Typography tokens={{ size: 'h2' }}>Regular components</Typography>
          </Box>
          <Box>
            <Icon icon={<ArrowRight />} />
            <Icon icon="ArrowRight" />
          </Box>
          <Box>
            <WysiwygBlock content="<h1>This is just a regular WYSIWYG title</h1><p>That is followed by just another regular WYSIWYG paragraph</p>" />
          </Box>
        </div>
        <div className="flex flex-col gap-8">
          <Box>
            <Typography tokens={{ size: 'h2' }}>Interactive components</Typography>
          </Box>
          <Box />
          <Box>
            <Button>This is an example button</Button>
          </Box>
          <Box>
            <Lightbox
              thumbnailContent={<Image src={image} width="500" height="500" alt="image" />}
              label="Open lightbox"
            >
              <Image src={image} width="500" height="500" alt="image" />
            </Lightbox>
          </Box>
          <Box>
            <Popover placement="bottom start" offset={0} buttonProps={{}}>
              <div>This is a popover</div>
            </Popover>
          </Box>
          <Box>
            <ShareButton
              id="share-button"
              ariaLabel="Share stuff"
              sharingLinksList={[{ ariaLabel: 'Share on Facebook', icon: 'Facebook', key: 'facebook' }]}
            />
          </Box>
          <Box>
            <SidePanelControl />
            <SidePanel id="side-panel">
              <Typography tokens={{ size: 'h1', color: 'white' }}>This is the inside of the side panel</Typography>
            </SidePanel>
          </Box>
        </div>
        <div className="flex flex-col gap-8">
          <Box>
            <Typography tokens={{ size: 'h2' }}>Time & date components</Typography>
          </Box>
          <Box>
            <Calendar />
          </Box>
          <Box>
            <Date
              date="2021-12-31T00:01:00-0500"
              dateFormatterOptions={{ month: 'long', day: 'numeric', year: 'numeric' }}
            />
          </Box>
        </div>
        <div className="flex flex-col gap-8">
          <Box>
            <Typography tokens={{ size: 'h2' }}>Field components</Typography>
          </Box>
          <Box>
            <Checkbox id="check" label="Check it!" name="check" />
          </Box>
          <Box>
            <DatePicker />
          </Box>
          <Box>
            <TextArea id="text-area" name="Text area" />
          </Box>
          <Box>
            <TextInputField id="text-input" name="Text input" />
          </Box>
        </div>
      </div>
    </div>
  )
}
