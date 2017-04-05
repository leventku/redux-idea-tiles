export const UPDATE_IDEA = 'UPDATE_IDEA';
export const CREATE_IDEA = 'CREATE_IDEA';
export const DELETE_IDEA = 'DELETE_IDEA';

import { CALL_API } from 'redux-api-middleware';

export const REQUEST_IDEAS = '/ideas/REQUEST';
export const RECEIVE_IDEAS = '/ideas/RECEIVE';
export const FAILURE_IDEAS = '/ideas/FAILURE';


export function fetchIdeas() {
  return {
    [CALL_API]: {
      endpoint: '/json/ideas.json',
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
      endpoint: 'idea/update',
      method: 'POST',
      body: JSON.stringify(obj),
      types: [REQUEST_UPDATE_IDEA,
        RECEIVE_UPDATE_IDEA,
        FAILURE_UPDATE_IDEA
      ]
    }
  }
}

let nextId = 3;
export function addIdea() {
  // GET idea/new
  console.log('GET idea/new');

  return {
    type: CREATE_IDEA,
    payload: {
      id: nextId++,
      created_date: new Date()
    }
  }
}

export function deleteIdea(id) {
  // POST idea/delete
  console.log('POST idea/delete: ', id);
  
  return {
    type: DELETE_IDEA,
    payload: id
  }
}