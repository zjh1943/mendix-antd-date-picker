## AntdDatePicker
[A powerful Mendix pluggable widget used to pick date and time. It brings the ant-deign widget DatePicker into Mendix and implements almost all the features of the original widget.]

## Features
[feature highlights]

## Quick Use
[step by step instructions]

## Demo project

1. You can access the online demo from [here](https://demo-antdwidgets100.apps.ap-2a.mendixcloud.com) to show the features of this widget.   
2. You can also download the demo project from [here](https://github.com/zjh1943/mendx-antd-widgets-show) to run it on your own PC.
    
## Datail of properties
[todo]

## Comparison with `antd` `DatePicker` features

| Property              | Property Description                                                                                                                                                             | Property Type                                                             | Implement or not |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------- |
| allowClear            | Whether to show clear button                                                                                                                                                     | boolean                                                                   | Y                |
| autoFocus             | If get focus when component mounted                                                                                                                                              | boolean                                                                   | Y                |
| bordered              | Whether has border style                                                                                                                                                         | boolean                                                                   | Y                |
| className             | The picker className                                                                                                                                                             | string                                                                    | Y                |
| dateRender            | Custom rendering function for date cells                                                                                                                                         | function(currentDate: dayjs, today: dayjs) => React.ReactNode             | N                |
| disabled              | Determine whether the DatePicker is disabled                                                                                                                                     | boolean                                                                   | Y                |
| disabledDate          | Specify the date that cannot be selected                                                                                                                                         | (currentDate: dayjs) => boolean                                           | Y                |
| popupClassName        | To customize the className of the popup calendar                                                                                                                                 | string                                                                    | Y                |
| getPopupContainer     | To set the container of the floating layer, while the default is to create a div element in body                                                                                 | function(trigger)                                                         | N                |
| inputReadOnly         | Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)                                                                                           | boolean                                                                   | Y                |
| locale                | Localization configuration                                                                                                                                                       | object                                                                    | Y                |
| mode                  | [The picker panel mode（ Cannot select year or month anymore? )](https://ant.design/docs/react/faq#When-set-mode-to-DatePicker/RangePicker,-cannot-select-year-or-month-anymore?) | time | date | month | year| decade                                        | N                |
| nextIcon              | The custom next icon                                                                                                                                                             | ReactNode                                                                 | N                |
| open                  | The open state of picker                                                                                                                                                         | boolean                                                                   | Y                |
| panelRender           | Customize panel render                                                                                                                                                           | (panelNode) => ReactNode                                                  | N                |
| picker                | Set picker type                                                                                                                                                                  | date | week | month | quarter | year                                      | Y                |
| placeholder           | The placeholder of date input                                                                                                                                                    | string | [string,string]                                                  | Y                |
| placement             | The position where the selection box pops up                                                                                                                                     | bottomLeft bottomRighttopLeft topRight                                    | Y                |
| popupStyle            | To customize the style of the popup calendar                                                                                                                                     | CSSProperties                                                             | Y                |
| presets               | The preset ranges for quick selection                                                                                                                                            | [{ label: React.ReactNode, value: dayjs }[]](https://day.js.org/)         | N                |
| prevIcon              | The custom prev icon                                                                                                                                                             | ReactNode                                                                 | Y                |
| size                  | To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px                                                | large | middle | small                                                    | Y                |
| status                | Set validation status                                                                                                                                                            | 'error' | 'warning'                                                       | Y                |
| style                 | To customize the style of the input box                                                                                                                                          | CSSProperties                                                             | Y                |
| suffixIcon            | The custom suffix icon                                                                                                                                                           | ReactNode                                                                 | N                |
| superNextIcon         | The custom super next icon                                                                                                                                                       | ReactNode                                                                 | N                |
| superPrevIcon         | The custom super prev icon                                                                                                                                                       | ReactNode                                                                 | N                |
| onOpenChange          | Callback function, can be executed whether the popup calendar is popped up or closed                                                                                             | function(open)                                                            | Y                |
| onPanelChange         | Callback when picker panel mode is changed                                                                                                                                       | function(value, mode)                                                     | N                |
| defaultPickerValue    | To set default picker date                                                                                                                                                       | [dayjs](https://day.js.org/)                                              | N                |
| defaultValue          | To set default date, if start time or end time is null or undefined, the date range will be an open interval                                                                     | [dayjs](https://day.js.org/)                                              | N                |
| disabledTime          | To specify the time that cannot be selected                                                                                                                                      | function(date)                                                            | Y                |
| format                | To set the date format, refer to dayjs. When an array is provided, all values are used for parsing and first value is used for formatting, support Custom Format                 | string | (value: dayjs) => string | (string | (value: dayjs) => string)[] | Y                |
| renderExtraFooter     | Render extra footer in panel                                                                                                                                                     | (mode) => React.ReactNode                                                 | Y                |
| showNow               | Whether to show 'Now' button on panel when showTime is set                                                                                                                       | boolean                                                                   | Y                |
| showTime              | To provide an additional time selection                                                                                                                                          | object | boolean                                                          | Y                |
| showTime.defaultValue | [To set default time of selected date, demo](https://ant.design/components/date-picker#components-date-picker-demo-disabled-date)                                                | [dayjs](https://day.js.org/)                                              | N                |
| showToday             | Whether to show Today button                                                                                                                                                     | boolean                                                                   | Y                |
| value                 | To set date                                                                                                                                                                      | [dayjs](https://day.js.org/)                                              | Y                |
| onChange              | Callback function, can be executed when the selected time is changing                                                                                                            | function(date: dayjs, dateString: string)                                 | Y                |
| onOk                  | Callback when click ok button                                                                                                                                                    | function()                                                                | Y                |


## Issues, suggestions and feature requests

[Github Issue](https://github.com/zj1943/mendix-antd-date-picker/issues)

At the same time, your are welcome to get into the China Technology Forum to get more in Mendix widget development. [check this out](https://marketplace.siemens.com.cn/low-code-community)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

