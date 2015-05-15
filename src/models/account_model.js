var Model = require('ampersand-model');
var UserCollection = require('./user_collection');
var sync = require('../api/sync');

var AccountModel = Model.extend({

  props: {
    id: 'number',
    name: 'string'
  },

  collections: {
    users: UserCollection
  },

  sync: sync

});

module.exports = AccountModel;