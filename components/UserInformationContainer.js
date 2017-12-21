import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import UserInformation from './UserInformation';

let query = gql`query {
  clicks
  name
}`;

let mutation = gql`mutation { onClick }`;

export default compose (
  graphql(query, {name: 'data'}),
  graphql(mutation, {name: 'onClick'})
)(UserInformation);

//TODO(yangye):
// 1. Add query handler
// 2. Add fetchMore
