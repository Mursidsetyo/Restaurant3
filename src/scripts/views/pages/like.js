import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = `
      <div class="emptyText">
        <h3 tabindex="0">Tidak Ada Restoran Favorit</h3>
      </div>
      `;
    }
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Like;
