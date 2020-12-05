import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import Board from '../Board';
import Game from '../Game';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
 
test('snapshot renders', () => {
    const component = renderer.create(<Game />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot
})