import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import UserInformation from './UserInformation';

let query = gql`query { clicks }`;

let queryName = gql`query { name }`;

let mutation = gql`mutation { onClick }`;

export default compose (
  graphql(query, {name: 'data'}),
  graphql(mutation, {name: 'onClick'}),
  graphql(queryName, {name: 'queryName'})
)(UserInformation);