import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiNodeOverallStatus extends RESTDataSource {
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

  // add NodeOverallStatus
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('nodeOverallStatus', entity);

    // an example making an HTTP POST request.
    // return this.post('nodeOverallStatus', entity);
  }

  // delete NodeOverallStatus
  async deleteEntity(id: string) {
    return KapiCrud.delete('nodeOverallStatus', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`nodeOverallStatus/${id}`);
  }

  // list NodeOverallStatus
  async listEntity(params: any) {
    return KapiCrud.list('nodeOverallStatus', params);

    // an example making an HTTP GET request.
    // return this.get('nodeOverallStatus', params);
  }

  // get NodeOverallStatus
  async getEntity(id: string) {
    return KapiCrud.get('nodeOverallStatus', id);

    // an example making an HTTP GET request.
    // return this.get(`nodeOverallStatus/${id}`);
  }

  // update NodeOverallStatus
  async updateEntity(entity) {
    return KapiCrud.update('nodeOverallStatus', entity);

    // an example making an HTTP PATH request.
    // return this.patch(nodeOverallStatus, entity);
  }

  // auto complete for NodeOverallStatus
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('nodeOverallStatus');

    return results.map((obj: { nodeOverallStatus: { displayValue: string; value?: any } }) => ({
      ...obj.nodeOverallStatus,
    }));
  }
}
