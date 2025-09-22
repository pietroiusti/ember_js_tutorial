import Route from '@ember/routing/route';

import { service } from '@ember/service';
import { findRecord } from '@ember-data/json-api/request';

export default class RentalRoute extends Route {
  // old:

  // async model(params) {
  //   let response = await fetch(`/api/rentals/${params.rental_id}.json`);
  //   let { data } = await response.json();

  //   let { id, attributes } = data;
  //   let type;

  //   if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
  //     type = 'Community';
  //   } else {
  //     type = 'Standalone';
  //   }

  //   return { id, type, ...attributes };
  // }

  // new:
  @service store;

  async model(params) {
    const { content } = await this.store.request(
      findRecord('rental', params.rental_id),
    );
    return content.data;
  }
}
