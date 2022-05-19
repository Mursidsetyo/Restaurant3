import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
// import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-idb';

const createLikeButtonPresenterWithRestaurants = async (restaurants) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurants
  });
};


export { createLikeButtonPresenterWithRestaurants };