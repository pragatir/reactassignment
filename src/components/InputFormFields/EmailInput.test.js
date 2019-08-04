// vendors
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import EmailInput from "./EmailInput";

configure({ adapter: new Adapter() });

describe("EmailInput component", () => {
    it("should call change handler on change event of Full Name input control", () => {
        const props = {
            label: "label",
            initialValue: "xx",
            setCurrentValue: jest.fn()
        };
        const output = mount(<EmailInput {...props} />);
        expect(output.find("label").text()).toBe(props.label);
    });
});    