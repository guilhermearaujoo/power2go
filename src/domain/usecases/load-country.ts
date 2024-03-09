import { CountryModel } from '@/domain/models/country-model'

export interface LoadCountry {
  load: (country: string) => Promise<LoadCountry.Model>
}

export namespace LoadCountry {
  export type Model = CountryModel
}
