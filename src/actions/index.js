import { CALL_API } from 'redux-api-middleware';
import * as types from './types';

const serverPath = 'http://localhost:3000';

export function fetchIdeas() {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/ideas`,
      method: 'GET',
      types: [types.REQUEST_IDEAS, types.RECEIVE_IDEAS, types.FAILURE_IDEAS]
    }
  }
}

export function updateIdea(obj) {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/idea/update`,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(obj),
      types: [types.REQUEST_UPDATE_IDEA, types.RECEIVE_UPDATE_IDEA, types.FAILURE_UPDATE_IDEA]
    }
  }
}

export function addIdea() {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/ideas/new`,
      method: 'GET',
      types: [types.REQUEST_NEW_IDEA, types.RECEIVE_NEW_IDEA, types.FAILURE_NEW_IDEA]
    }
  }
}

export function deleteIdea(id) {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/idea/delete`,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({id: id}),
      types: [types.REQUEST_DELETE_IDEA, types.RECEIVE_DELETE_IDEA, types.FAILURE_DELETE_IDEA]
    }
  }
}
