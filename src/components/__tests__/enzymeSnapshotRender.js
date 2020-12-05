import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../Game';
 
 
test('snapshot renders', () => {
    const component = renderer.create(<Game />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot
})