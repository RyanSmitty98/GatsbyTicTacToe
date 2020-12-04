import React from 'react';
import Game from '../Game';
import {Enzyme, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  shallow(<Game />);
});