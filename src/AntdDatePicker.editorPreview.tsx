import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { AntdDatePickerPreviewProps } from "../typings/AntdDatePickerProps";


export class preview extends Component<AntdDatePickerPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AntdDatePicker.css");
}
