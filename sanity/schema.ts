import { type SchemaTypeDefinition } from 'sanity'

import pageInfo from './schemas/pageInfo'
import social from './schemas/social'
import experience from './schemas/experience'
import experienceCard from './schemas/experienceCard'
import about from './schemas/about'
import skills, { skill } from './schemas/skills'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, social, experience, experienceCard, about, skills, skill],
}
