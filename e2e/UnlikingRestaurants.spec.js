const assert = require('assert');

Feature('Unliking Restos');
Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('Unliking one resto', async ({ I }) => {
  I.see('Tidak Ada Restoran Favorit', '.restaurants');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item',5);
  I.seeElement('.restaurant-item');

  const firstResto = locate('.restaurants .header-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.waitForElement('#likeButton',5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestoName = await I.grabTextFrom('.header-name');
  assert.strictEqual(firstRestoName, likedRestoName);

  const firstRestoLiking = locate('.header-name').first();
  I.click(firstRestoLiking);
 
  
});