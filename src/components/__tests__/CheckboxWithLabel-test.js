// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import CheckboxWithLabel from '../CheckboxWithLabel';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const component = renderer.create(<CheckboxWithLabel/>);
  const {queryByLabelText, getByLabelText} = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();
  console.log(component.find('input'));

  fireEvent.click(getByLabelText(/off/i));
  console.log(component.find('input'));

  expect(queryByLabelText(/on/i)).toBeTruthy();
  console.log(component.find('input'));
  
});