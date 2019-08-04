// vendors
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import RadioInput from "./RadioInput";

configure({ adapter: new Adapter() });

describe("RadioInput component", () => {
    it("should have label as described in input parameters", () => {
        const props = {
            label: "label",
            initialValue: "xx",
            setCurrentValue: jest.fn(),
            valueSet: [],
        };
        const output = mount(<RadioInput {...props} />);
        expect(output.find("label").text()).toBe(props.label);
    });
});    