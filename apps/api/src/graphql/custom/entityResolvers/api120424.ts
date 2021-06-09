import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { KapiCrud, dispatchCustomAction } from '../../../realisticFakeData';
import { AutoCompleteParams, CustomActionArgs, DispatchCustomActionResults } from '../../../types';

export class ApiSiteMap extends RESTDataSource {
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

  // add SiteMap
  async addEntity(entity: { [key: string]: unknown }, parent?: { id: string; entity: string }) {
    if (parent) console.log('parent', parent);
    return KapiCrud.add('siteMap', entity);

    // an example making an HTTP POST request.
    // return this.post('siteMap', entity);
  }

  // delete SiteMap
  async deleteEntity(id: string) {
    return KapiCrud.delete('siteMap', id);

    // an example making an HTTP DELETE request.
    // return this.delete(`siteMap/${id}`);
  }

  // list SiteMap
  async listEntity(params: any) {
    return KapiCrud.list('siteMap', params);

    // an example making an HTTP GET request.
    // return this.get('siteMap', params);
  }

  // get SiteMap
  async getEntity(id: string) {
    return KapiCrud.get('siteMap', id);

    // an example making an HTTP GET request.
    // return this.get(`siteMap/${id}`);
  }

  // update SiteMap
  async updateEntity(entity) {
    return KapiCrud.update('siteMap', entity);

    // an example making an HTTP PATH request.
    // return this.patch(siteMap, entity);
  }

  // auto complete for SiteMap
  async getAutoCompleteValues(entity: AutoCompleteParams) {
    const results = await KapiCrud.list('siteMap');

    return results.map((obj: { siteMap: { displayValue: string; value?: any } }) => ({ ...obj.siteMap }));
  }
}
