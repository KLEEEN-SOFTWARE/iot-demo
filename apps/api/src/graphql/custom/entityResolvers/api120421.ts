import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';
import { environment } from '../../../environments/environment';

export class ApiNode extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = environment.backendURL;
    // If you need to access the current user, the token and data sources,
    // you can get them from 'this.context'
  }

  willSendRequest(request: RequestOptions) {
    // Use this line to set a header token.
    // request.headers.set('Authorization', this.context.token);
    // Use this line to set a params token.
    // request.params.set('api_key', this.context.token);
  }

  // add Node
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('node', entity);

    // an example making an HTTP POST request.
    // return this.post('node', entity);
  }

  // delete Node
  async deleteEntity(id: string) {
    return KapiCrud.delete('node', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`node/${id}`);
  }

  // list Node
  async listEntity(params: any) {
    return this.get('node', params);

    // an example making an HTTP GET request.
    // return this.get('node', params);
  }

  // get Node
  async getEntity(id: string) {
    return KapiCrud.get('node', id);

    // an example making an HTTP GET request.
    // return this.get(`node/${id}`);
  }

  // update Node
  async updateEntity(entity) {
    return KapiCrud.update('node', entity);

    // an example making an HTTP PATH request.
    // return this.patch(node, entity);
  }

  // auto complete for Node
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('node');

    return results.map((obj: { node: { displayValue: string; value?: any } }) => ({ ...obj.node }));
  }

  // Reboot action for Node
  async customAction_reboot(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
