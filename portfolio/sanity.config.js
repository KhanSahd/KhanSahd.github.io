import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',

  projectId: '6ckjl8ek',
  dataset: 'main',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
