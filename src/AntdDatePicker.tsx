import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { AntdDatePickerContainerProps } from "../typings/AntdDatePickerProps";

import "./ui/AntdDatePicker.css";

export class AntdDatePicker extends Component<AntdDatePickerContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
