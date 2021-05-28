import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiNodeStatus extends RESTDataSource {
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

  // add NodeStatus
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('nodeStatus', entity);

    // an example making an HTTP POST request.
    // return this.post('nodeStatus', entity);
  }

  // delete NodeStatus
  async deleteEntity(id: string) {
    return KapiCrud.delete('nodeStatus', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`nodeStatus/${id}`);
  }

  // list NodeStatus
  async listEntity(params: any) {
    return KapiCrud.list('nodeStatus', params);

    // an example making an HTTP GET request.
    // return this.get('nodeStatus', params);
  }

  // get NodeStatus
  async getEntity(id: string) {
    return KapiCrud.get('nodeStatus', id);

    // an example making an HTTP GET request.
    // return this.get(`nodeStatus/${id}`);
  }

  // update NodeStatus
  async updateEntity(entity) {
    return KapiCrud.update('nodeStatus', entity);

    // an example making an HTTP PATH request.
    // return this.patch(nodeStatus, entity);
  }

  // auto complete for NodeStatus
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('nodeStatus');

    return results.map((obj: { nodeStatus: { displayValue: string; value?: any } }) => ({
      ...obj.nodeStatus,
    }));
  }
}
