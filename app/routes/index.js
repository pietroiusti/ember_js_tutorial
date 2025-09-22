import Route from '@ember/routing/route';

import { service } from '@ember/service';
import { query } from '@ember-data/json-api/request';

export default class IndexRoute extends Route {
  // old:

  // async model() {
  //   let response = await fetch('/api/rentals.json');

  //   let { data } = await response.json();

  //   return data.map((model) => {
  //     let { id, attributes } = model;
  //     let type;

  //     if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
  //       type = 'Community';
  //     } else {
  //       type = 'Standalone';
  //     }

  //     return { id, type, ...attributes };
  //   });
  // }

  // new:

  @service store;

  async model() {
    const { content } = await this.store.request(query('rental'));
    return content.data;
  }
}
