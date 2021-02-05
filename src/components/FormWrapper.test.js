// vendors
import React from "react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import FormWrapper from "./FormWrapper";

configure({ adapter: new Adapter() });

describe("FormWrapper component", () => {
  it("should render FormField with correct formTitle", () => {
    const formTitle = "test formTitle";
    const output = mount(<FormWrapper formTitle={formTitle} />);
    expect(output.find("FormField").text()).toBe(formTitle);
  });
  //test cases movied to appropriate components
  it.skip("should call onSubmit handler on click of Submit button", () => {
    const formTitle = "test formTitle";
    const submitFeedback = jest.fn()
    const output = mount(<FormWrapper formTitle={formTitle} submitFeedback={submitFeedback} />);
    console.log(output.find("button.btn-success"))
    output
      .find("button")
      .simulate("click", {});
    // test cases here
  });
});
