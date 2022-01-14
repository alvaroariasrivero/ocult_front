import React from "react";
import { shallow } from "enzyme";
import Password from "./Password";

describe("Password", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Password />);
    expect(wrapper).toMatchSnapshot();
  });
});
