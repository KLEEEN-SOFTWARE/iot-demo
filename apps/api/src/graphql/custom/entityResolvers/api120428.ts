import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSiteStatus extends RESTDataSource {
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

  // add SiteStatus
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('siteStatus', entity);

    // an example making an HTTP POST request.
    // return this.post('siteStatus', entity);
  }

  // delete SiteStatus
  async deleteEntity(id: string) {
    return KapiCrud.delete('siteStatus', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`siteStatus/${id}`);
  }

  // list SiteStatus
  async listEntity(params: any) {
    return KapiCrud.list('siteStatus', params);

    // an example making an HTTP GET request.
    // return this.get('siteStatus', params);
  }

  // get SiteStatus
  async getEntity(id: string) {
    return KapiCrud.get('siteStatus', id);

    // an example making an HTTP GET request.
    // return this.get(`siteStatus/${id}`);
  }

  // update SiteStatus
  async updateEntity(entity) {
    return KapiCrud.update('siteStatus', entity);

    // an example making an HTTP PATH request.
    // return this.patch(siteStatus, entity);
  }

  // auto complete for SiteStatus
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('siteStatus');

    return results.map((obj: { siteStatus: { displayValue: string; value?: any } }) => ({
      ...obj.siteStatus,
    }));
  }
}
