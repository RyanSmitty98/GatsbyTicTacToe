import React from "react";
import {cleanup, fireEvent, getAllByDisplayValue, queryAllByDisplayValue, render} from '@testing-library/react';
import renderer from "react-test-renderer";
import CheckboxWithLabel from '../CheckboxWithLabel';

describe('Test Button component', () => {
    it('Test click event', () => {
      // when someone clicks in the first box it will test to see if an x is placed there
      fireEvent.click(getByValue(/ /i));

      expect(queryByValue(/X/i)).toBeTruthy();


    });
  });