import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSystemHealth extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://put.your.api.here/';
    // If you need to access the current user, the token and data sources,
    // you can get them from 'this.context'
  }

  willSendRequest(request: RequestOptions) {
    // Use this line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Use this line to set a params token.
    // request.params.set('api_key', this.context.token);
  }

  // add SystemHealth
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('systemHealth', entity);

    // an example making an HTTP POST request.
    // return this.post('systemHealth', entity);
  }

  // delete SystemHealth
  async deleteEntity(id: string) {
    return KapiCrud.delete('systemHealth', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`systemHealth/${id}`);
  }

  // list SystemHealth
  async listEntity(params: any) {
    return KapiCrud.list('systemHealth', params);

    // an example making an HTTP GET request.
    // return this.get('systemHealth', params);
  }

  // get SystemHealth
  async getEntity(id: string) {
    return KapiCrud.get('systemHealth', id);

    // an example making an HTTP GET request.
    // return this.get(`systemHealth/${id}`);
  }

  // update SystemHealth
  async updateEntity(entity) {
    return KapiCrud.update('systemHealth', entity);

    // an example making an HTTP PATH request.
    // return this.patch(systemHealth, entity);
  }

  // auto complete for SystemHealth
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('systemHealth');

    return results.map((obj: { systemHealth: { displayValue: string; value?: any } }) => ({
      ...obj.systemHealth,
    }));
  }
}
