import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiEventLength extends RESTDataSource {
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

  // add EventLength
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('eventLength', entity);

    // an example making an HTTP POST request.
    // return this.post('eventLength', entity);
  }

  // delete EventLength
  async deleteEntity(id: string) {
    return KapiCrud.delete('eventLength', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`eventLength/${id}`);
  }

  // list EventLength
  async listEntity(params: any) {
    return KapiCrud.list('eventLength', params);

    // an example making an HTTP GET request.
    // return this.get('eventLength', params);
  }

  // get EventLength
  async getEntity(id: string) {
    return KapiCrud.get('eventLength', id);

    // an example making an HTTP GET request.
    // return this.get(`eventLength/${id}`);
  }

  // update EventLength
  async updateEntity(entity) {
    return KapiCrud.update('eventLength', entity);

    // an example making an HTTP PATH request.
    // return this.patch(eventLength, entity);
  }

  // auto complete for EventLength
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('eventLength');

    return results.map((obj: { eventLength: { displayValue: string; value?: any } }) => ({
      ...obj.eventLength,
    }));
  }

  // Flag action for EventLength
  async customAction_flag(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
