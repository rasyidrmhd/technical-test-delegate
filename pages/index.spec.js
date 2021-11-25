import React from "react";
import { shallow, mount } from "enzyme";
import Home from "./index";
import Sidebar from "../components/sidebar";

describe("Sidebar component", () => {
  let wrapper = null;
  // beforeEach(() => {
  //   wrapper = shallow(<Sidebar />);
  // });

  // it("should be show sidebar component", () => {
  //   console.log(wrapper);
  //   // expect(wrapper.find("Link")).toHaveLength(9);
  // });

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should be show sidebar component", () => {
    console.log(wrapper);
  });
});
