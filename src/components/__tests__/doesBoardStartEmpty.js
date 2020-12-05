import React from 'react';
import Game from '../Game';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('All spaces on board are empty', () => {
    const wrapper = mount(<Game />);


    //Board should be completly empty
    expect(wrapper.find('button.square').first().text()).toEqual("");
    expect(wrapper.find('button.square').at(1).text()).toEqual("");
    expect(wrapper.find('button.square').at(2).text()).toEqual("");
    expect(wrapper.find('button.square').at(3).text()).toEqual("");
    expect(wrapper.find('button.square').at(4).text()).toEqual("");
    expect(wrapper.find('button.square').at(5).text()).toEqual("");
    expect(wrapper.find('button.square').at(6).text()).toEqual("");
    expect(wrapper.find('button.square').at(7).text()).toEqual("");
    expect(wrapper.find('button.square').at(8).text()).toEqual("");


    //adding clicks one at a time
    const turn1 = wrapper.find('button.square').first()
    turn1.simulate('click')

    const turn2 = wrapper.find('button.square').at(1)
    turn2.simulate('click')

    const turn3 = wrapper.find('button.square').at(2)
    turn3.simulate('click')

    const turn4 = wrapper.find('button.square').at(3)
    turn4.simulate('click')

    const turn5 = wrapper.find('button.square').at(4)
    turn5.simulate('click')

    const turn6 = wrapper.find('button.square').at(5)
    turn6.simulate('click')

    const turn7 = wrapper.find('button.square').at(6)
    turn7.simulate('click')

    //checking if board is correct and if winner is X
    expect(wrapper.find('button.square').first().text()).toEqual("X");
    expect(wrapper.find('button.square').at(1).text()).toEqual("O");
    expect(wrapper.find('button.square').at(2).text()).toEqual("X");
    expect(wrapper.find('button.square').at(3).text()).toEqual("O");
    expect(wrapper.find('button.square').at(4).text()).toEqual("X");
    expect(wrapper.find('button.square').at(5).text()).toEqual("O");
    expect(wrapper.find('button.square').at(6).text()).toEqual("X");
    expect(wrapper.find('button.square').at(7).text()).toEqual("");
    expect(wrapper.find('button.square').at(8).text()).toEqual("");
    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: X')
})