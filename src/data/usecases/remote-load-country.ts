import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteCountryModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadCountry } from '@/domain/usecases'

export class RemoteLoadCountry implements LoadCountry {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadCountry.Model[]>
  ) {}

  async load (country: string): Promise<LoadCountry.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url.replace('country', country),
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: {
        const remoteCountry = httpResponse.body.shift()
        return {
          name: remoteCountry.name?.common,
          officialName: remoteCountry.name?.official,
          nativeName: Object.values(remoteCountry.name?.nativeName).shift()?.common,
          capital: remoteCountry.capital?.shift(),
          language: Object.values(remoteCountry.languages).shift(),
          currency: Object.values(remoteCountry.currencies).shift()?.name,
          population: remoteCountry?.population,
          flag: remoteCountry?.flags?.svg,
          latlng: remoteCountry?.latlng,
          area: remoteCountry?.area,
          startOfWeek: remoteCountry?.startOfWeek,
          continents: remoteCountry?.continents
        }
      }
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadCountry {
  export type Model = RemoteCountryModel
}
