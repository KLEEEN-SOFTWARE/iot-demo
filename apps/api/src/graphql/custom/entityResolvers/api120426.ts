import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSensorOverallStatus extends RESTDataSource {
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

  // add SensorOverallStatus
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('sensorOverallStatus', entity);

    // an example making an HTTP POST request.
    // return this.post('sensorOverallStatus', entity);
  }

  // delete SensorOverallStatus
  async deleteEntity(id: string) {
    return KapiCrud.delete('sensorOverallStatus', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`sensorOverallStatus/${id}`);
  }

  // list SensorOverallStatus
  async listEntity(params: any) {
    return KapiCrud.list('sensorOverallStatus', params);

    // an example making an HTTP GET request.
    // return this.get('sensorOverallStatus', params);
  }

  // get SensorOverallStatus
  async getEntity(id: string) {
    return KapiCrud.get('sensorOverallStatus', id);

    // an example making an HTTP GET request.
    // return this.get(`sensorOverallStatus/${id}`);
  }

  // update SensorOverallStatus
  async updateEntity(entity) {
    return KapiCrud.update('sensorOverallStatus', entity);

    // an example making an HTTP PATH request.
    // return this.patch(sensorOverallStatus, entity);
  }

  // auto complete for SensorOverallStatus
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('sensorOverallStatus');

    return results.map((obj: { sensorOverallStatus: { displayValue: string; value?: any } }) => ({
      ...obj.sensorOverallStatus,
    }));
  }
}
