import { makeApiUrl , makeAxiosHttpClient } from '@/main/factories/http'
import { LoadCountry } from '@/domain/usecases'
import { RemoteLoadCountry } from '@/data/usecases'

export const makeRemoteLoadCountry = (country: string): LoadCountry =>
  new RemoteLoadCountry(makeApiUrl(`/name/country${country}?fields=name,capital,currencies,population,flags,languages`), makeAxiosHttpClient())
