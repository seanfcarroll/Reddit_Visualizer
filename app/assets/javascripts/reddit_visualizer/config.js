'use strict';

var RV = RV || {};

RV.config = {

  container: '#graph',

  // required, for now
  scales: {
    radius: {
      min: 5,
      max: 15,
      accessor: 'subscriber_count'
    },
    color: {
      min: '#C8E2F2',
      max: '#1a386a',
      accessor: 'subscriber_count'
    },
    connection_weight: {
      min: 1,
      max: 2,
      accessor: 'connection_weight'
    }
  },

  json: {
    base: '/api/v1/subreddits/',
    suffix: '.json',
    // TODO change to root id
    rootId: '1',
    accessor: 'id'
  }
};
