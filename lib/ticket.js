class Ticket {
  constructor(client) {
    this.client = client
    this.properties = new Property(this.client)
  }

  getById(id, options) {
    return this.client._request({
      method: 'GET',
      path: '/crm-objects/v1/change-log/tickets/' + id,
      qs: options
    })
  }

  get(properties,options) {
    return this.client._request({
      method: 'GET',
      path: '/crm-objects/v1/change-log/tickets/paged/',
      
      qs: options
    })
  }


  create(data) {
    return this.client._request({
      method: 'POST',
      path: '/crm-objects/v1/change-log/tickets//',
      body: data,
    })
  }

  delete(id) {
    return this.client._request({
      method: 'DELETE',
      path: '/crm-objects/v1/change-log/tickets/' + id,
    })
  }

  updateById(id, data) {
    return this.client._request({
      method: 'PUT',
      path: '/crm-objects/v1/change-log/tickets/' + id,
      body: data,
    })
  }

  updateBatch(data) {
    return this.client._request({
      method: 'POST',
      path: '/companies/v1/batch-async/update',
      body: data,
    })
  }

  addContactToCompany(data) {
    if (!data || !data.companyId || !data.contactVid) {
      return Promise.reject(
        new Error('companyId and contactVid params must be provided')
      )
    }

    return this.client._request({
      method: 'PUT',
      path:
        '/companies/v2/companies/' +
        data.companyId +
        '/contacts/' +
        data.contactVid,
    })
  }

  getContactIds(id, options) {
    return this.client._request({
      method: 'GET',
      path: '/companies/v2/companies/' + id + '/vids',
      qs: options,
    })
  }

  getContacts(id, options) {
    return this.client._request({
      method: 'GET',
      path: '/companies/v2/companies/' + id + '/contacts',
      qs: options,
    })
  }
}

module.exports = Company
