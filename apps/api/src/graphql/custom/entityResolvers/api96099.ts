import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiZDeletePopulation extends RESTDataSource {
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

  // add ZDeletePopulation
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('zDeletePopulation', entity);

    // an example making an HTTP POST request.
    // return this.post('zDeletePopulation', entity);
  }

  // delete ZDeletePopulation
  async deleteEntity(id: string) {
    return KapiCrud.delete('zDeletePopulation', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`zDeletePopulation/${id}`);
  }

  // list ZDeletePopulation
  async listEntity(params: any) {
    return KapiCrud.list('zDeletePopulation', params);

    // an example making an HTTP GET request.
    // return this.get('zDeletePopulation', params);
  }

  // get ZDeletePopulation
  async getEntity(id: string) {
    return KapiCrud.get('zDeletePopulation', id);

    // an example making an HTTP GET request.
    // return this.get(`zDeletePopulation/${id}`);
  }

  // update ZDeletePopulation
  async updateEntity(entity) {
    return KapiCrud.update('zDeletePopulation', entity);

    // an example making an HTTP PATH request.
    // return this.patch(zDeletePopulation, entity);
  }

  // auto complete for ZDeletePopulation
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('zDeletePopulation');

    return results.map((obj: { zDeletePopulation: { displayValue: string; value?: any } }) => ({
      ...obj.zDeletePopulation,
    }));
  }
}
