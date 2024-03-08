import { GetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements GetStorage {
  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }
}
