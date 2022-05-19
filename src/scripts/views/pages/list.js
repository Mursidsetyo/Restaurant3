import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <section>
    <picture>
        <source media="(max-width: 800px)" srcset="./images/hero-image_1-small.jpg">
        <img src="./images/hero-image_1-large.jpg" alt="hero image" id="hero-image" tabindex="0"
            class="hero-image"></img>
    </picture>
</section>
  
  <div class="content">
  <h2 class="content__heading">List Restaurants</h2>
  <div id="restaurants" class="restaurants">

  </div>
</div>

      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await TheRestaurantDbSource.listRestaurant();
    // console.log(restaurant);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurants) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default ListRestaurant;
