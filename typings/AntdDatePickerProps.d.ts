/**
 * This file was generated from AntdDatePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, EditableValue } from "mendix";

export type PickerEnum = "date" | "week" | "month" | "quarter" | "year";

export type PlacementEnum = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

export interface AntdDatePickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    picker: PickerEnum;
    format: string;
    sampleText: string;
    value?: EditableValue<Date>;
    onChange?: ActionValue;
    showTime: boolean;
    placement: PlacementEnum;
}

export interface AntdDatePickerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    picker: PickerEnum;
    format: string;
    sampleText: string;
    value: string;
    onChange: {} | null;
    showTime: boolean;
    placement: PlacementEnum;
}
