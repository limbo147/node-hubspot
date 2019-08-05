import { RequestPromise } from 'request-promise'

declare class Ticket {
  get(opts?: {}): RequestPromise

  getById(id: number, opts?: {}): RequestPromise

  getBatchByID(ids: Array<number>, opts?: {}): RequestPromise

  deleteById(id: number): RequestPromise

  updateById(id: number, data: {}): RequestPromise

  create(data: {}): RequestPromise
  createBatch(ticks: Array<object>): RequestPromise
  
  deleteBatchByIds(ids: []): RequestPromise
  
  getChangeLogs(opts?: {}): RequestPromise

}

export { Ticket }
