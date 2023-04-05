/**
 * This file was generated from AntdDatePicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
import { ActionValue, EditableValue, ListValue, ListAttributeValue, ListWidgetValue } from "mendix";

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
    value?: EditableValue<Date>;
    onChange?: ActionValue;
    showTime: boolean;
    placement: PlacementEnum;
    autoFocus: boolean;
    inputReadOnly: boolean;
    locale: LocaleEnum;
    open?: EditableValue<boolean>;
    onOpenChange?: ActionValue;
    onOk?: ActionValue;
    defaultPickerValue?: EditableValue<Date>;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource?: ListValue;
    disableDatesAttribute?: ListAttributeValue<Date>;
    dateRenderEnabled: boolean;
    dateRenderDatasource?: ListValue;
    dateRenderAttribute?: ListAttributeValue<Date>;
    dateRenderWidgets?: ListWidgetValue;
    size: SizeEnum;
    placeholder: string;
    allowClear: boolean;
    bordered: boolean;
    popupClassName: string;
    showToday: boolean;
    showNow: boolean;
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
    value: string;
    onChange: {} | null;
    showTime: boolean;
    placement: PlacementEnum;
    autoFocus: boolean;
    inputReadOnly: boolean;
    locale: LocaleEnum;
    open: string;
    onOpenChange: {} | null;
    onOk: {} | null;
    defaultPickerValue: string;
    disableDateMode: DisableDateModeEnum;
    disableDatesDatasource: {} | { type: string } | null;
    disableDatesAttribute: string;
    dateRenderEnabled: boolean;
    dateRenderDatasource: {} | { type: string } | null;
    dateRenderAttribute: string;
    dateRenderWidgets: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
    size: SizeEnum;
    placeholder: string;
    allowClear: boolean;
    bordered: boolean;
    popupClassName: string;
    showToday: boolean;
    showNow: boolean;
    shortcutsDatasource: {} | { type: string } | null;
    shortcutsLabelAttribute: string;
    shortcutsValueAttribute: string;
    showCustomFooter: boolean;
    pannelFooterContent: { widgetCount: number; renderer: ComponentType<{ caption?: string }> };
}
