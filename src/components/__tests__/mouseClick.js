import React from "react";
import {cleanup, fireEvent, render} from '@testing-library/react';
import renderer from "react-test-renderer";
import {shallow} from 'enzyme';
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('Test Button component', () => {
    it('Test click event', () => {
      // when someone clicks in the first box it will test to see if an x is placed there
      fireEvent.click(getByLabelText(/off/i));


    });
  });