import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiPpm extends RESTDataSource {
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

  // add Ppm
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('ppm', entity);

    // an example making an HTTP POST request.
    // return this.post('ppm', entity);
  }

  // delete Ppm
  async deleteEntity(id: string) {
    return KapiCrud.delete('ppm', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`ppm/${id}`);
  }

  // list Ppm
  async listEntity(params: any) {
    return KapiCrud.list('ppm', params);

    // an example making an HTTP GET request.
    // return this.get('ppm', params);
  }

  // get Ppm
  async getEntity(id: string) {
    return KapiCrud.get('ppm', id);

    // an example making an HTTP GET request.
    // return this.get(`ppm/${id}`);
  }

  // update Ppm
  async updateEntity(entity) {
    return KapiCrud.update('ppm', entity);

    // an example making an HTTP PATH request.
    // return this.patch(ppm, entity);
  }

  // auto complete for Ppm
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('ppm');

    return results.map((obj: { ppm: { displayValue: string; value?: any } }) => ({ ...obj.ppm }));
  }
}
