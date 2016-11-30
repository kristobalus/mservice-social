const { NotSupportedError } = require('common-errors');

/**
 * @api {http} <prefix>.instagram.webhook Verify subscription, save media from instagram
 * @apiVersion 1.0.0
 * @apiName instagram.webhook
 * @apiGroup Instagram
 * @apiSchema {jsonschema=../../../schemas/instagram.webhook.json} apiParam
 */
function webhookAction({ params, query, method }) {
  const instagram = this.service('instagram');

  if (method === 'get' && query['hub.mode'] === 'subscribe') {
    return instagram
      .subscription()
      .verify(query);
  }

  if (method === 'post') {
    return instagram
      .subscription()
      .save(params);
  }

  throw new NotSupportedError();
}

webhookAction.schema = 'instagram.webhook';
webhookAction.transports = ['http'];

module.exports = webhookAction;
