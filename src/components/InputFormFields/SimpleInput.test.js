// vendors
import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import SimpleInput from "./SimpleInput";

configure({ adapter: new Adapter() });

describe("SimpleInput component", () => {
    it("should have label as described in input parameters", () => {
        const props = {
            label: "label",
            initialValue: "xx",
            setCurrentValue: jest.fn()
        };
        const output = mount(<SimpleInput {...props} />);
        expect(output.find("label").text()).toBe(props.label);
    });
});    