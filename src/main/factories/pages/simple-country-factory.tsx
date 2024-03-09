import { SimpleCountry } from '@/presentation/pages'
import { makeRemoteLoadCountry } from '@/main/factories/usecases'

import React from 'react'

export const makeSimpleCountry: React.FC = () => {
  return <SimpleCountry loadCountry={makeRemoteLoadCountry('brasil')} />
}
