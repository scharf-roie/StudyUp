import React from "react";
import Enzyme from "enzyme";
import Register from "../src/pages/Register";
import LoginForm from "../src/pages/Login";
import Home from "../src/pages/Home";
import Profile from "../src/pages/Profile";
import { shallow } from 'enzyme';
import {
  Button
} from 'semantic-ui-react'

test("Register page loads", () => {
  expect(Register).toBeDefined();
});
test("Login page loads", () => {
  expect(LoginForm).toBeDefined();
});
test("Home page loads", () => {
  expect(Home).toBeDefined();
});
test("Profile Information loads", () => {
  expect(Profile).toBeDefined();
});

test("Linkable pages works", () => {
  expect(Profile).toBeDefined();
});

describe('Test Button component', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});