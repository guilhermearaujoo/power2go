import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { ConsultHistoryModel } from '@/domain/models'

export const getConsultHistory = (): ConsultHistoryModel => {
  return makeLocalStorageAdapter().get('consult-history') || []
}
