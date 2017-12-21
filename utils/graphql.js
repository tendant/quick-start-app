import get from "lodash/get";

const mutationHandler = function(mutationFn, mutationName, validDataCallback, invalidDataCallback, errorCallback) {
  // Note: mutationFn should bind the arguments needed
  typeof mutationFn === 'function' && mutationFn().then((response) => {
    if(!get(response, `data.${mutationName}`) || get(response, "data.error") || get(response, "errors")) {
      console.error('invalid response', response);
      typeof invalidDataCallback === 'function' && invalidDataCallback(response.data);
      return;
    }

    typeof validDataCallback === 'function' && validDataCallback(response.data);
  }).catch((error) => {
    console.error('graphql mutation error:', error);
    typeof errorCallback === 'function' && errorCallback(error);
  });
};

module.exports = {
  mutationHandler: mutationHandler
};