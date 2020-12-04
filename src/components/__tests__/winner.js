import React from 'react';
import Board from '../Board';
import Game from '../Game';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('Show winner vertically', () => {
    const wrapper = mount(<Game/>)

    //first player and their move(X in spot 1x1)
    const firstPlayer = wrapper.find('div.game-info').children().first().text()
    expect(firstPlayer).toEqual('Next player: X')
    const button = wrapper.find('button.square').first()
    button.simulate('click')

    //second player turn (place O in 2x1)
    const secondPlayer = wrapper.find('div.game-info').children().first().text()
    expect(secondPlayer).toEqual('Next player: O')
    const turn2 = wrapper.find('button.square').second
    turn2.simulate('click')
    
    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: X')
  })