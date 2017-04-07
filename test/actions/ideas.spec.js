import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware';
import * as actions from '../../src/actions'
import * as types from '../../src/actions/types'
import nock from 'nock'
import expect from 'expect' // You can use any testing library

const middlewares = [apiMiddleware, thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_FETCH_IDEAS when fetchIdeas has been done', () => {
    nock('http://localhost:3000')
      .get('/ideas')
      .reply(200, [{ id: 1 }]);

    const expectedActions = [{
      meta: undefined,
      payload: undefined,
      type: types.REQUEST_FETCH_IDEAS
    }, {
      meta: undefined,
      payload: [{ id: 1 }],
      type: types.RECEIVE_FETCH_IDEAS
    }]

    const store = mockStore({ ideas: {} })

    return store.dispatch(actions.fetchIdeas())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates RECEIVE_UPDATE_IDEA when updateIdea has been done', () => {
    const reqPayload = { id: 0, title: 'foo', body: 'bar' };
    const resPayload = Object.assign(reqPayload, {created_date: "2017-04-07T13:55:23.988Z"})
    nock('http://localhost:3000', reqPayload)
      .post('/idea/update')
      .reply(200, resPayload)

    const expectedActions = [{
      meta: undefined,
      payload: undefined,
      type: types.REQUEST_UPDATE_IDEA
    }, {
      meta: undefined,
      payload: resPayload,
      type: types.RECEIVE_UPDATE_IDEA
    }]

    const store = mockStore({ ideas: {} })

    return store.dispatch(actions.updateIdea(reqPayload))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates RECEIVE_NEW_IDEA when addIdea has been done', () => {
    const resPayload = {id: 3, created_date: "2017-04-07T14:02:34.354Z", title: "", body: ""};

    nock('http://localhost:3000')
      .get('/ideas/new')
      .reply(200, resPayload);

    const expectedActions = [{
      meta: undefined,
      payload: undefined,
      type: types.REQUEST_NEW_IDEA
    }, {
      meta: undefined,
      payload: resPayload,
      type: types.RECEIVE_NEW_IDEA
    }]

    const store = mockStore({ ideas: {} })

    return store.dispatch(actions.addIdea())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates RECEIVE_DELETE_IDEA when deleteIdea has been done', () => {
    const reqPayload = { id: 0 };
    const resPayload = { deletedId: 0 };
    nock('http://localhost:3000', reqPayload)
      .post('/idea/delete')
      .reply(200, resPayload)

    const expectedActions = [{
      meta: undefined,
      payload: undefined,
      type: types.REQUEST_DELETE_IDEA
    }, {
      meta: undefined,
      payload: resPayload,
      type: types.RECEIVE_DELETE_IDEA
    }]

    const store = mockStore({ ideas: {} })

    return store.dispatch(actions.deleteIdea(0))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})