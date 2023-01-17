import { Component, ReactNode, createElement, CSSProperties } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import { DatePickerProps } from "antd/es/date-picker";
import zh_CN from "antd/es/date-picker/locale/zh_CN";
import en_US from "antd/es/date-picker/locale/en_US";
import "dayjs/locale/zh-cn";
import "dayjs/locale/en";

import { AntdDatePickerContainerProps } from "../typings/AntdDatePickerProps";
import { Alert } from "./components/Alert";
import "./ui/AntdDatePicker.scss";

export class AntdDatePicker extends Component<AntdDatePickerContainerProps> {
    render(): ReactNode {
        const props = this.props;
        const pickerProps: DatePickerProps & {
            showTime?: boolean;
            popupClassName?: string;
            popupStyle?: CSSProperties;
            showNow?: boolean;
            showToday?: boolean;
        } = {
            picker: props.picker, // use this line to avoid Typescript grammer error
        };

        // this part should be at the first because we should change the locale before any dayjs function invoked.
        if (props.locale === "en_US") {
            dayjs.locale("en");
            pickerProps.locale = en_US;
        } else {
            dayjs.locale("zh-cn");
            pickerProps.locale = zh_CN;
        }

        // ====================================
        // === property group General ===
        // ====================================
        pickerProps.picker = props.picker;
        pickerProps.format = props.format;

        if (props.value !== undefined) {
            if (props.value?.status === "available" && props.value.value) {
                pickerProps.value = dayjs(props.value?.value);
            }
        }

        const hasError = !!props.value?.validation;
        const valueFeedback = props.value?.validation;
        pickerProps.status = hasError ? "error" : undefined;

        pickerProps.onChange = value => {
            props.value?.setValue(value?.toDate());
            if (props.onChange?.canExecute) {
                props.onChange?.execute();
            }
        };

        pickerProps.showTime = props.showTime;
        pickerProps.placement = props.placement;
        pickerProps.disabled = !!props.value?.readOnly;


        // ====================================
        // === property group Advanced ===
        // ====================================
        pickerProps.autoFocus = props.autoFocus;
        pickerProps.inputReadOnly = props.inputReadOnly;

        if (props.open?.status === "available") {
            console.log(`open: ${props.open?.value}`);
            pickerProps.open = props.open?.value;
        }

        pickerProps.onOpenChange = (open: boolean) => {
            console.log(`onOpenChange: open = ${open}`);
            props.open?.setValue(open);
            if (props.onOpenChange?.canExecute) {
                props.onOpenChange?.execute();
            }
        };

        pickerProps.onOk = (date: dayjs.Dayjs) => {
            console.log(`onOk: date = ${date}`);
            // props.value?.setValue(date.toDate());
            if (props.onOk?.canExecute) {
                props.onOk?.execute();
            }
        };

        if (props.defaultPickerValue?.status === "available") {
            pickerProps.defaultPickerValue = dayjs(props.defaultPickerValue?.value);
        }

        if (props.disableDateMode !== "off" && props.disableDatesDatasource?.status === "available") {
            pickerProps.disabledDate = date => {
                if (props.disableDateMode === "negative") {
                    props.disableDatesDatasource?.items?.forEach((item: any) => {
                        const newDate = dayjs(props.disableDatesAttribute?.get(item).value);
                        if (date.isSame(newDate, "day")) {
                            return true;
                        }
                    });
                    return false;
                } else {
                    // props.disableDateMode === "positive"
                    props.disableDatesDatasource?.items?.forEach((item: any) => {
                        const newDate = dayjs(props.disableDatesAttribute?.get(item).value);
                        if (date.isSame(newDate, "day")) {
                            return false;
                        }
                    });
                    return true;
                }
            };
        }

        // ====================================
        // === property group Cutomize View ===
        // ====================================
        pickerProps.size = props.size;
        pickerProps.allowClear = props.allowClear;
        pickerProps.bordered = props.bordered;
        pickerProps.popupClassName = props.popupClassName;
        pickerProps.placeholder = props.placeholder || undefined;

        pickerProps.showNow = props.showNow;
        // pickerProps.showToday = props.showToday;

        if (props.shortcutsDatasource?.status === "available") {
            pickerProps.presets = props.shortcutsDatasource.items!.map((item: any) => {
                const label = props.shortcutsLabelAttribute?.get(item).value;
                const value = dayjs(props.shortcutsValueAttribute?.get(item).value);
                return { label, value };
            });
        }
        if (props.showCustomFooter) {
            pickerProps.renderExtraFooter = () => props.pannelFooterContent;
        }

        // ====================================
        // === property group Common ===
        // ====================================
        pickerProps.tabIndex = props.tabIndex;

        // ====================================
        // === property group Apperance ===
        // ====================================
        pickerProps.className = props.class;
        pickerProps.style = props.style;

        return (
            <div className="mx-antd-date-picker">
                <DatePicker {...pickerProps} />
                <Alert>{valueFeedback}</Alert>
            </div>
        );

    }
}
