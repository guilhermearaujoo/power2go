import { CountryModel } from '@/domain/models/country-model'

export interface LoadCountry {
  load: () => Promise<LoadCountry.Model>
}

export namespace LoadCountry {
  export type Model = CountryModel
}
