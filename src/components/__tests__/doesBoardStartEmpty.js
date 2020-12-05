import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import Board from '../Board';
import Game from '../Game';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('All spaces on board are empty', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.find('button.square').first().text()).toEqual("");

    expect(wrapper.find('button.square').at(1).text()).toEqual("");
    expect(wrapper.find('button.square').at(2).text()).toEqual("");
    expect(wrapper.find('button.square').at(3).text()).toEqual("");
    expect(wrapper.find('button.square').at(4).text()).toEqual("");
    expect(wrapper.find('button.square').at(5).text()).toEqual("");
    expect(wrapper.find('button.square').at(6).text()).toEqual("");
    expect(wrapper.find('button.square').at(7).text()).toEqual("");
    expect(wrapper.find('button.square').at(8).text()).toEqual("");


    const turn2 = wrapper.find('button.square').at(1)
    turn2.simulate('click')

    expect(wrapper.find('button.square').at(1).text()).toEqual("X");
})