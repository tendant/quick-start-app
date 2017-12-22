import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import get from "lodash/get"
import _ from "lodash"

import CameraRecordDetail from './CameraRecordDetail';

let query = gql`query($cursor:String $limit:Int) {
  cameras(cursor:$cursor limit:$limit) {
    id
    name
    createdAt
  }
}`;


export default compose (
  graphql(query, {
    name: 'data',
    options: (props) => ({
      variables: {
        cursor: null,
        limit: 8
      }
    }),
    props: ({ownProps, data: {loading, cameras, refetch, error, fetchMore}}) => {
      const lastCamera = _.last(cameras);
      const cursor = get(lastCamera, "id", null);
      return ({
        cameraLoading: loading,
        cameraData: cameras,
        fetchMoreCameras: () => {
          if(!cursor) {
            console.log("no cursor in fetchMoreCameras");
            return;
          }

          return fetchMore({
            query: query,
            variables: {
              cursor: cursor,
              limit: 2
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
              const previousCameras = get(previousResult, "cameras", []);
              const newCameras = get(fetchMoreResult, "cameras", []);
              const newLastCamera = _.last(newCameras);
              const newCursor = get(newLastCamera, "id", null);

              if(newCursor === cursor || newCameras.length < 1) {
                console.log("no new cursor or no new data");
                return previousResult;
              }

              return {
                ...previousResult,
                cameras: [...previousCameras, ...newCameras]
              }
            }
          })
        }
      })
    }
  }),
)(CameraRecordDetail);
