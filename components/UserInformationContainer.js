import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import UserInformation from './UserInformation';

let query = gql`query { clicks }`;

let mutation = gql`mutation { onClick }`;

export default compose (
  graphql(query),
  graphql(mutation, {name: 'onClick'})
)(UserInformation);