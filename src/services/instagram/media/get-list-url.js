const assert = require('assert');
const is = require('is');

function getMediaUrl(id, token) {
  assert.strictEqual(is.string(id), true);
  assert.strictEqual(is.string(token), true);
  assert.strictEqual(is.empty(id), false);
  assert.strictEqual(is.empty(token), false);

  return `https://api.instagram.com/v1/users/${id}/media/recent?access_token=${token}&count=200`;
}

module.exports = getMediaUrl;
