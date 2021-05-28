import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiZDeleteGdp extends RESTDataSource {
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

  // add ZDeleteGdp
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('zDeleteGdp', entity);

    // an example making an HTTP POST request.
    // return this.post('zDeleteGdp', entity);
  }

  // delete ZDeleteGdp
  async deleteEntity(id: string) {
    return KapiCrud.delete('zDeleteGdp', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`zDeleteGdp/${id}`);
  }

  // list ZDeleteGdp
  async listEntity(params: any) {
    return KapiCrud.list('zDeleteGdp', params);

    // an example making an HTTP GET request.
    // return this.get('zDeleteGdp', params);
  }

  // get ZDeleteGdp
  async getEntity(id: string) {
    return KapiCrud.get('zDeleteGdp', id);

    // an example making an HTTP GET request.
    // return this.get(`zDeleteGdp/${id}`);
  }

  // update ZDeleteGdp
  async updateEntity(entity) {
    return KapiCrud.update('zDeleteGdp', entity);

    // an example making an HTTP PATH request.
    // return this.patch(zDeleteGdp, entity);
  }

  // auto complete for ZDeleteGdp
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('zDeleteGdp');

    return results.map((obj: { zDeleteGdp: { displayValue: string; value?: any } }) => ({
      ...obj.zDeleteGdp,
    }));
  }
}
