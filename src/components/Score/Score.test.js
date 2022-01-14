import React from "react";
import { shallow } from "enzyme";
import Score from "./Score";

describe("Score", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Score />);
    expect(wrapper).toMatchSnapshot();
  });
});
