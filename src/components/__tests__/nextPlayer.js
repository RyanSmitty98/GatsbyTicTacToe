import React from 'react';
import Game from '../Game';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


  it('Display next player', () => {
    const wrapper = mount(<Game/>)

    //Making the first player click
    const firstPlayer = wrapper.find('div.game-info').children().first().text()
    expect(firstPlayer).toEqual('Next player: X')
    const button = wrapper.find('button.square').first();
    console.log(wrapper.find('button.square'));
    button.simulate('click')


    //is it the second players turn
    const secondPlayer = wrapper.find('div.game-info').children().first().text()
    expect(secondPlayer).toEqual('Next player: O')
  });