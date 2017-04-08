import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';

import ConnectedIdeasList from '../../src/components/IdeasList';
import { IdeasList } from '../../src/components/IdeasList';

function setupContainer() {
  const mockStore = configureMockStore()
  const store = mockStore({ ideas: {all: []} })
  const enzymeWrapper = shallow(<ConnectedIdeasList store={store} />);
  return { 
    enzymeWrapper,
    output: enzymeWrapper.renderer.getRenderOutput()
  };
}

function setupComponent() {
  const props = {
    ideas: [
      {id: 3, created_date: "2017-04-07T14:02:34.354Z", title: "a", body: "b"},
      {id: 4, created_date: "2017-04-07T14:02:34.354Z", title: "a", body: "b"},
      ],
    fetchIdeas: jest.fn(),
    addIdea: jest.fn(),
  }

  const enzymeWrapper = shallow(<IdeasList {...props} />)

  return  {
    props,
    enzymeWrapper
  }
}

describe('IdeasList component', () => {
  it('should render connected component', () => {
    const { enzymeWrapper, output } = setupContainer();

    expect(enzymeWrapper).toBeTruthy();
    expect(output.type).toBe(IdeasList)
  })

  it('should pass the state and dispatch as prop to connected component', () => {
    const { enzymeWrapper } = setupContainer();
    
    expect(enzymeWrapper.props().ideas).toEqual([]);
    expect(enzymeWrapper.props().fetchIdeas).toBeTruthy();
    expect(enzymeWrapper.props().addIdea).toBeTruthy();
  });

  it('should render its items', () => {
    const { enzymeWrapper, props } = setupComponent();

    expect(enzymeWrapper.find('.ideas-list-wrapper').exists()).toBe(true);

    expect(enzymeWrapper.find('button').hasClass('btn-add-idea')).toBe(true);
    expect(enzymeWrapper.find('ul').hasClass('ideas-list')).toBe(true);

    expect(enzymeWrapper.find('ul').children('Connect(IdeasItem)').length).toBe(2);

    expect(enzymeWrapper.find('Connect(IdeasItem)').first().props().idea).toEqual(props.ideas[0])
  });

  it('should call fetchIdeas on initiation', () => {
    const { enzymeWrapper, props } = setupComponent();

    expect(props.fetchIdeas.mock.calls.length).toBe(1)
  })

  it('should call addIdea when add idea button is clicked', () => {
    const {enzymeWrapper, props } = setupComponent();

    expect(props.addIdea.mock.calls.length).toBe(0);
    enzymeWrapper.find('.btn-add-idea').simulate('click');
    expect(props.addIdea.mock.calls.length).toBe(1);
  })
})