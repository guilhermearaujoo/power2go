import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteCountryModel } from '@/data/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadCountry } from '@/domain/usecases'

export class RemoteLoadCountry implements LoadCountry {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadCountry.Model[]>
  ) {}

  async load (): Promise<LoadCountry.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    const remoteCountry = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return {
        name: remoteCountry.shift().name?.common,
        capital: remoteCountry.shift().capital?.shift(),
        language: Object.values(remoteCountry.shift().languages).shift(),
        currency: Object.values(remoteCountry.shift().currencies).shift()?.name,
        population: remoteCountry.shift()?.population,
        flag: remoteCountry.shift()?.flags?.svg
      }
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadCountry {
  export type Model = RemoteCountryModel
}
