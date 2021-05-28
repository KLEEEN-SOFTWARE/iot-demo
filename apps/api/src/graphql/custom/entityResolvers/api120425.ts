import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSensor extends RESTDataSource {
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

  // add Sensor
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sensor', entity);

    // an example making an HTTP POST request.
    // return this.post('sensor', entity);
  }

  // delete Sensor
  async deleteEntity(id: string) {
    return KapiCrud.delete('sensor', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`sensor/${id}`);
  }

  // list Sensor
  async listEntity(params: any) {
    return KapiCrud.list('sensor', params);

    // an example making an HTTP GET request.
    // return this.get('sensor', params);
  }

  // get Sensor
  async getEntity(id: string) {
    return KapiCrud.get('sensor', id);

    // an example making an HTTP GET request.
    // return this.get(`sensor/${id}`);
  }

  // update Sensor
  async updateEntity(entity) {
    return KapiCrud.update('sensor', entity);

    // an example making an HTTP PATH request.
    // return this.patch(sensor, entity);
  }

  // auto complete for Sensor
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sensor');

    return results.map((obj: { sensor: { displayValue: string; value?: any } }) => ({ ...obj.sensor }));
  }

  // Reboot action for Sensor
  async customAction_reboot(args: CustomActionArgs): Promise<DispatchCustomActionResults> {
    return dispatchCustomAction(args);
  }
}
