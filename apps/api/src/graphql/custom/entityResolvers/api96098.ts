import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiZDeleteCountry extends RESTDataSource {
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

  // add ZDeleteCountry
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('zDeleteCountry', entity);

    // an example making an HTTP POST request.
    // return this.post('zDeleteCountry', entity);
  }

  // delete ZDeleteCountry
  async deleteEntity(id: string) {
    return KapiCrud.delete('zDeleteCountry', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`zDeleteCountry/${id}`);
  }

  // list ZDeleteCountry
  async listEntity(params: any) {
    return KapiCrud.list('zDeleteCountry', params);

    // an example making an HTTP GET request.
    // return this.get('zDeleteCountry', params);
  }

  // get ZDeleteCountry
  async getEntity(id: string) {
    return KapiCrud.get('zDeleteCountry', id);

    // an example making an HTTP GET request.
    // return this.get(`zDeleteCountry/${id}`);
  }

  // update ZDeleteCountry
  async updateEntity(entity) {
    return KapiCrud.update('zDeleteCountry', entity);

    // an example making an HTTP PATH request.
    // return this.patch(zDeleteCountry, entity);
  }

  // auto complete for ZDeleteCountry
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('zDeleteCountry');

    return results.map((obj: { zDeleteCountry: { displayValue: string; value?: any } }) => ({
      ...obj.zDeleteCountry,
    }));
  }
}
