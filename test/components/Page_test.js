import { renderComponent , expect } from '../test_helper';
import Page from '../../src/components/Page';

describe('Page' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Page);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
