import {codeInput} from '@sanity/code-input'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

import deskStructure from './components/studio/deskStructure'

export default defineConfig({
  name: 'default',
  title: "Lewi's Portfolio Studio",

  projectId: 'kwbqck4f',
  dataset: 'production',

  plugins: [
    codeInput(),
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
