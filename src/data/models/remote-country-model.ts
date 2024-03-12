
export type RemoteCountryModel = {
  flags: {
    svg: string
  }
  name: {
    common: string
    official: string
    nativeName: object
  }
  currencies: object
  capital: string[]
  languages: object
  population: number
  latlng: number[]
  area: number
  startOfWeek: string
  continents: string[]
}
