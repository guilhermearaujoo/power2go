import { makeApiUrl , makeAxiosHttpClient } from '@/main/factories/http'
import { LoadCountry } from '@/domain/usecases'
import { RemoteLoadCountry } from '@/data/usecases'

export const makeRemoteLoadCountry = (): LoadCountry =>
  new RemoteLoadCountry(makeApiUrl('/name/country?fields=name,capital,currencies,population,flags,languages'), makeAxiosHttpClient())
