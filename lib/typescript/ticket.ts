import { RequestPromise } from 'request-promise'

declare class Ticket {
  get(opts?: {}): RequestPromise

  getRecentlyCreated(opts?: {}): RequestPromise

  getRecentlyModified(opts?: {}): RequestPromise

  getById(id: number): RequestPromise

  getBatchByID(ids: [], opts?:{}): RequestPromise

  deleteById(id: number): RequestPromise

  updateById(id: number, data: {}): RequestPromise

  create(data: {}): RequestPromise
  
  deleteBatchByIds(ids: []): RequestPromise
  
  getChangeLogs(opts?: {}): RequestPromise

}

export { Ticket }
