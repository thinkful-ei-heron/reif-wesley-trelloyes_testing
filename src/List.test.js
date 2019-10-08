import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe(`<List />`, () => {
  it('renders without smoke', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header='test header' card={[{ id: 'l' }, { id: 'm' }]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders this UI as expected...?', () => {
    const tree = renderer.create(<List header='test header' card={[{ id: 'l' }, { id: 'm' }]} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})

