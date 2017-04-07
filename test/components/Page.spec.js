import React from 'react';
import { shallow } from 'enzyme';

import Page from '../../src/components/Page';
import IdeasList from '../../src/components/IdeasList';

function setup() {
  return {
    enzymeWrapper: shallow(<Page />)
  }
}

describe('Page component', () => {
  it('should render self and sub components', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find(IdeasList).exists()).toBe(true);
  })
});
