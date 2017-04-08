import reducer from '../../src/reducers/ideasReducer';
import * as types from '../../src/actions/types';

describe('ideas reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({all: []})
  })

  it('should handle RECEIVE_FETCH_IDEAS', () => {
    expect(
      reducer({all: []}, {
        type: types.RECEIVE_FETCH_IDEAS,
        payload: [1,2,3]
      })
    )
      .toEqual({all: [1,2,3]})
  })
  
  it('should handle RECEIVE_UPDATE_IDEA', () => {
    expect(
      reducer({all: [{id: 3, title: "a"}]}, {
        type: types.RECEIVE_UPDATE_IDEA,
        payload: {id: 3, title: "foo"}
      })
    )
      .toEqual({all: [{id: 3, title: "foo"}]})
  })
  
  it('should handle RECEIVE_NEW_IDEA', () => {
    expect(
      reducer({all: []}, {
        type: types.RECEIVE_NEW_IDEA,
        payload: {id: 3, title: "foo"}
      })
    )
      .toEqual({all: [{id: 3, title: "foo"}]})
  })
  
  it('should handle RECEIVE_DELETE_IDEA', () => {
    expect(
      reducer({all: [{id: 3, title: "foo"}]}, {
        type: types.RECEIVE_DELETE_IDEA,
        payload: {deletedId: 3}
      })
    )
      .toEqual({all: []})
  })
})