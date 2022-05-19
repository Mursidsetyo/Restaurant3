
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restos', ({ I }) => {
  I.seeElement('.content__heading');
  I.see('Tidak Ada Restoran Favorit', '.emptyText');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak Ada Restoran Favorit', '.restaurants');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item',5);
  I.seeElement('.restaurant-item');

  const firstResto = locate('.restaurants .header-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.waitForElement('#likeButton', 5);
 
  I.seeElement('#likeButton');
  
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestoName = await I.grabTextFrom('.header-name');
  assert.strictEqual(firstRestoName, likedRestoName);
});