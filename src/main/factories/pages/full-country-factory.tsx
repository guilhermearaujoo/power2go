import { FullCountry } from '@/presentation/pages'
import { makeRemoteLoadCountry } from '@/main/factories/usecases'

import React from 'react'

export const makeFullCountry: React.FC = () => {
  return <FullCountry loadCountry={makeRemoteLoadCountry()} />
}
