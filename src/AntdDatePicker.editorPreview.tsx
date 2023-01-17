import { Component, ReactNode, createElement } from "react";
import { AntdDatePickerPreviewProps } from "../typings/AntdDatePickerProps";

export class preview extends Component<AntdDatePickerPreviewProps> {
    render(): ReactNode {
        return <div>AntdDatePickerPreviewProps</div>;
    }
}

export function getPreviewCss(): string {
    return require("./ui/AntdDatePicker.css");
}
