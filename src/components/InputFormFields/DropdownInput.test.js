// vendors
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import DropdownInput from "./DropdownInput";

configure({ adapter: new Adapter() });

describe("DropdownInput component", () => {
    it("should have label as described in input parameters", () => {
        const props = {
            label: "label",
            initialValue: "xx",
            setCurrentValue: jest.fn(),
            valueSet: [],
        };
        const output = mount(<DropdownInput {...props} />);
        expect(output.find("label").text()).toBe(props.label);
    });
});    