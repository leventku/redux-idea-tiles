import { CALL_API } from 'redux-api-middleware';

export const REQUEST_IDEAS = '/ideas/REQUEST';
export const RECEIVE_IDEAS = '/ideas/RECEIVE';
export const FAILURE_IDEAS = '/ideas/FAILURE';

const serverPath = 'http://localhost:3000';

export function fetchIdeas() {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/ideas`,
      method: 'GET',
      types: [REQUEST_IDEAS, RECEIVE_IDEAS, FAILURE_IDEAS]
    }
  }
}

export const REQUEST_UPDATE_IDEA = 'update/idea/REQUEST';
export const RECEIVE_UPDATE_IDEA = 'update/idea/RECEIVE';
export const FAILURE_UPDATE_IDEA = 'update/idea/FAILURE';

export function updateIdea(obj) {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/idea/update`,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(obj),
      types: [REQUEST_UPDATE_IDEA, RECEIVE_UPDATE_IDEA, FAILURE_UPDATE_IDEA]
    }
  }
}

export const REQUEST_NEW_IDEA = 'new/idea/REQUEST';
export const RECEIVE_NEW_IDEA = 'new/idea/RECEIVE';
export const FAILURE_NEW_IDEA = 'new/idea/FAILURE';

export function addIdea() {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/ideas/new`,
      method: 'GET',
      types: [REQUEST_NEW_IDEA, RECEIVE_NEW_IDEA, FAILURE_NEW_IDEA]
    }
  }
}

export const REQUEST_DELETE_IDEA = 'delete/idea/REQUEST';
export const RECEIVE_DELETE_IDEA = 'delete/idea/RECEIVE';
export const FAILURE_DELETE_IDEA = 'delete/idea/FAILURE';

export function deleteIdea(id) {
  return {
    [CALL_API]: {
      endpoint: `${serverPath}/idea/delete`,
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({id: id}),
      types: [REQUEST_DELETE_IDEA, RECEIVE_DELETE_IDEA, FAILURE_DELETE_IDEA]
    }
  }
}
