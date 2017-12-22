import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import CameraRecordDetail from './CameraRecordDetail';

let query = gql`query {
  cameras {
    id
    name
    createdAt
  }
}`;


export default compose (
  graphql(query, {
    name: 'data',
    props: ({ownProps, data: {loading, cameras, refetch, error, fetchMore}}) => {
      return ({
        cameraLoading: loading,
        cameraData: cameras,
      })
    }
  }),
)(CameraRecordDetail);
