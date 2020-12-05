import React from 'react';
import Board from '../Board';
import Game from '../Game';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('Show winner diagonally', () => {
    const wrapper = mount(<Game/>)
    
    //first player and their move(X in spot 1x1)
    const button = wrapper.find('button.square').first()
    button.simulate('click')
    
    //second player turn (place O in 1x2)
    const turn2 = wrapper.find('button.square').at(3)
    turn2.simulate('click')
        
    //player 1 (2x1)
     const turn3 = wrapper.find('button.square').at(4)
    turn3.simulate('click')
    
    //player 2 (3x3)
    const turn4 = wrapper.find('button.square').at(6)
    turn4.simulate('click')
    
    //player 1 (1x3)
    const turn5 = wrapper.find('button.square').at(8)
    turn5.simulate('click')
    
    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: X')
    })

it('Show winner horizontally', () => {
    const wrapper = mount(<Game/>)
    
    //first player and their move(X in spot 1x1)
    const turn1 = wrapper.find('button.square').first()
    turn1.simulate('click')

    //second player turn (place O in 1x2)
    const turn2 = wrapper.find('button.square').at(3)
    turn2.simulate('click')
        
    //player 1 (2x1)
    const turn3 = wrapper.find('button.square').at(1)
    turn3.simulate('click')
    
    //player 2 (3x3)
    const turn4 = wrapper.find('button.square').at(4)
    turn4.simulate('click')
    
    //player 1 (1x3)
    const turn5 = wrapper.find('button.square').at(2)
    turn5.simulate('click')
    
    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: X')
    })

it('Show winner vertically, O wins', () => {
    const wrapper = mount(<Game/>)

    //first player and their move(X in spot 1x1)
    const firstPlayer = wrapper.find('div.game-info').children().first().text()
    expect(firstPlayer).toEqual('Next player: X')
    const button = wrapper.find('button.square').at(1)
    button.simulate('click')

    //second player turn (place O in 2x1)
    const secondPlayer = wrapper.find('div.game-info').children().first().text()
    expect(secondPlayer).toEqual('Next player: O')
    const turn2 = wrapper.find('button.square').first()
    turn2.simulate('click')
    
    //player 1 (1x2)
    const turn3 = wrapper.find('button.square').at(3)
    turn3.simulate('click')

    //player 2 (2x2)
    const turn4 = wrapper.find('button.square').at(4)
    turn4.simulate('click')

    //player 1 (1x3)
    const turn5 = wrapper.find('button.square').at(6)
    turn5.simulate('click')

    //player 2 (2x2)
    const turn6 = wrapper.find('button.square').at(8)
    turn6.simulate('click')

    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: O')
    })