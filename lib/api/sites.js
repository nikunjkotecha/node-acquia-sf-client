var sites = function (client) {
  this.client = client
}

sites.prototype.get = function (args = { limit: 2 }) {
  var endpoint = 'api/v1/sites'
  return this.client.getEndpoint(endpoint, args)
}

module.exports = sites
