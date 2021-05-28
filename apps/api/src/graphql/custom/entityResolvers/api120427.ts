import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSensorStatus extends RESTDataSource {
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

  // add SensorStatus
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sensorStatus', entity);

    // an example making an HTTP POST request.
    // return this.post('sensorStatus', entity);
  }

  // delete SensorStatus
  async deleteEntity(id: string) {
    return KapiCrud.delete('sensorStatus', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`sensorStatus/${id}`);
  }

  // list SensorStatus
  async listEntity(params: any) {
    return KapiCrud.list('sensorStatus', params);

    // an example making an HTTP GET request.
    // return this.get('sensorStatus', params);
  }

  // get SensorStatus
  async getEntity(id: string) {
    return KapiCrud.get('sensorStatus', id);

    // an example making an HTTP GET request.
    // return this.get(`sensorStatus/${id}`);
  }

  // update SensorStatus
  async updateEntity(entity) {
    return KapiCrud.update('sensorStatus', entity);

    // an example making an HTTP PATH request.
    // return this.patch(sensorStatus, entity);
  }

  // auto complete for SensorStatus
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sensorStatus');

    return results.map((obj: { sensorStatus: { displayValue: string; value?: any } }) => ({
      ...obj.sensorStatus,
    }));
  }
}
