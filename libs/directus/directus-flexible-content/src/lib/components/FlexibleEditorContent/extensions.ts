import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import { Table } from '@tiptap/extension-table'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableRow } from '@tiptap/extension-table-row'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'

// StarterKit v3 includes: Document, Text, Paragraph, HardBreak, Heading, CodeBlock,
// BulletList, OrderedList, ListItem, Blockquote, HorizontalRule, Bold, Code, Italic,
// Link, Strike, Underline, Dropcursor, Gapcursor, Undo/Redo, ListKeymap, TrailingNode
//
// We disable Underline as it's not used in this project, and disable the functionality
// extensions (dropcursor, gapcursor, undo/redo, listKeymap, trailingNode) since this is
// a read-only content renderer, not an editor.

export default [
  StarterKit.configure({
    // Disable extensions we don't need for read-only rendering
    dropcursor: false,
    gapcursor: false,
    undoRedo: false,
    underline: false,
  }),
  // Extensions not included in StarterKit
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TextAlign,
  Subscript,
  Superscript,
]
