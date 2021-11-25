import React from "react";
import { shallow } from "enzyme";
import { Div } from "./index";

describe("Sidebar component", () => {
  it("should be show sidebar component", () => {
    const wrapper = shallow(<Div />);
    expect(wrapper.find("main")).toHaveLength(1);
  });
});
