import React, { Component } from 'react';
import { Root } from "native-base";
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, from } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { View } from 'react-native';

import UserInformationContainer from './UserInformationContainer';
import RootNavigation from './RootNavigation';

export default class RootApolloProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: this.createClient()
    };
  }


  createClient = () => {
    const httpLink = new HttpLink({
      uri: 'http://localhost:3002/graphql'
    });

    const client = new ApolloClient({
      link: from([
        httpLink
      ]),
      cache: new InMemoryCache({
        dataIdFromObject: object => object.id
      }) //TODO(yangye): add cache resolvers
    });

    return client;
  }

  render() {
    return (
          <Root >
            <ApolloProvider client={this.state.client}>
              <RootNavigation />
            </ApolloProvider>
          </Root>
    );
  }
}
