// vendors
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import RadioInput from "./RadioInput";

configure({ adapter: new Adapter() });

describe("RadioInput component", () => {
    it("should call change handler on change event of Full Name input control", () => {
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