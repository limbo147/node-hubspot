import { RequestPromise } from 'request-promise'

declare class Ticket {
  get(properties?: Array<string>, opts?: {}): RequestPromise

  getById(id: number, properties?: Array<string>): RequestPromise

  getBatchByID(ids: Array<number>, opts?: {}): RequestPromise

  deleteById(id: number): RequestPromise

  updateById(id: number, data: {}): RequestPromise

  create(data: {}): RequestPromise
  
  createBatch(ticks: Array<object>): RequestPromise
  
  deleteBatchByIds(ids: Array<number>): RequestPromise
  
  getChangeLogs(opts?: {}): RequestPromise

}

export { Ticket }
