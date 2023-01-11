/**
 * This file was generated from AntdDatePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue } from "mendix";

export type PickerEnum = "date" | "week" | "month" | "quarter" | "year";

export type PlacementEnum = "bottomLeft" | "bottomRight" | "topLeft" | "topRight";

export type LocaleEnum = "zh_CN" | "en_US";

export type DisableDateModeEnum = "off" | "positive" | "negative";

export type SizeEnum = "small" | "middle" | "large";

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
    allowEmpty: boolean;
    autoFocus: boolean;
    inputReadOnly: boolean;
    locale: LocaleEnum;
    open?: EditableValue<boolean>;
    onOpenChange?: ActionValue;
    pickerValue?: EditableValue<Date>;
    onPickerValueChange?: ActionValue;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource?: ListValue;
    disableDatesAttribute?: ListAttributeValue<Date>;
    size: SizeEnum;
    placeholder: string;
    allowClear: boolean;
    bordered: boolean;
    popupClassName: string;
    shortcutsDatasource?: ListValue;
    shortcutsLabelAttribute?: ListAttributeValue<string>;
    shortcutsValueAttribute?: ListAttributeValue<Date>;
    showCustomFooter: boolean;
    pannelFooterContent?: ReactNode;
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
    allowEmpty: boolean;
    autoFocus: boolean;
    inputReadOnly: boolean;
    locale: LocaleEnum;
    open: string;
    onOpenChange: {} | null;
    pickerValue: string;
    onPickerValueChange: {} | null;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource: {} | { type: string } | null;
    disableDatesAttribute: string;
    size: SizeEnum;
    placeholder: string;
    allowClear: boolean;
    bordered: boolean;
    popupClassName: string;
    shortcutsDatasource: {} | { type: string } | null;
    shortcutsLabelAttribute: string;
    shortcutsValueAttribute: string;
    showCustomFooter: boolean;
    pannelFooterContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
