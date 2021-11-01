import * as requestFromServer from "./CheckerCrud";
import {checkerSlice, callTypes} from "./CheckerSlice";

const {actions} = checkerSlice;

export const fetchCheckers = queryParams => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .findCheckers(queryParams)
    .then(response => {
      const { totalCount, entities } = response.data;
      dispatch(actions.CheckersFetched({ totalCount, entities }));
    })
    .catch(error => {
      error.clientMessage = "Can't find products";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchChecker = id => dispatch => {
  if (!id) {
    return dispatch(actions.CheckerFetched({ productForEdit: undefined }));
  }

  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .getCheckerById(id)
    .then(response => {
      const product = response.data;
      dispatch(actions.CheckerFetched({ productForEdit: product }));
    })
    .catch(error => {
      error.clientMessage = "Can't find product";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteChecker = id => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteChecker(id)
    .then(response => {
      dispatch(actions.CheckerDeleted({ id }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete product";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const createChecker = productForCreation => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .createChecker(productForCreation)
    .then(response => {
      const { product } = response.data;
      dispatch(actions.CheckerCreated({ product }));
    })
    .catch(error => {
      error.clientMessage = "Can't create product";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateChecker = product => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateChecker(product)
    .then(() => {
      dispatch(actions.CheckerUpdated({ product }));
    })
    .catch(error => {
      error.clientMessage = "Can't update product";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const updateCheckerStatus = (ids, status) => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .updateStatusForCheckers(ids, status)
    .then(() => {
      dispatch(actions.CheckersStatusUpdated({ ids, status }));
    })
    .catch(error => {
      error.clientMessage = "Can't update products status";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};

export const deleteCheckers = ids => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.action }));
  return requestFromServer
    .deleteCheckers(ids)
    .then(() => {
      dispatch(actions.CheckersDeleted({ ids }));
    })
    .catch(error => {
      error.clientMessage = "Can't delete products";
      dispatch(actions.catchError({ error, callType: callTypes.action }));
    });
};
