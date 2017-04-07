import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ConnectedIdeasList from '../../src/components/IdeasList';
import { IdeasList } from '../../src/components/IdeasList';

function setup() {
  const mockStore = configureMockStore()
  const store = mockStore({ ideas: {all: []} })
  const enzymeWrapper = shallow(<ConnectedIdeasList store={store} />);
  return { 
    enzymeWrapper,
    output: enzymeWrapper.renderer.getRenderOutput()
  };
}

describe('IdeasList component', () => {
  it('should render connected component', () => {
    const { enzymeWrapper, output } = setup();

    console.log(enzymeWrapper.debug());
    expect(enzymeWrapper).toBeTruthy();
    expect(output.type).toBe(IdeasList)
  })

  it('should pass the state and dispatch as prop to connected component', () => {
    const { enzymeWrapper } = setup();
    
    expect(enzymeWrapper.props().ideas).toEqual([]);
    expect(enzymeWrapper.props().fetchIdeas).toBeTruthy();
    expect(enzymeWrapper.props().addIdea).toBeTruthy();
  });
})