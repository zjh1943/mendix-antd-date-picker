## Introducation
![GitHub all releases](https://img.shields.io/github/downloads/zjh1943/mendix-antd-date-picker/total?style=social)

[English Document](./README.md)  

AntdDatePicker ([Github](https://github.com/zjh1943/mendix-antd-date-picker)) 是一个用来选择日期或时间的 Mendix Widget。它把 Ant Design 中的 [DatePicker](https://ant.design/components/date-picker-cn#rangepicker) 组件搬到 Mendix 世界，实现了其原始组件的绝大部分特性。

![antd date picker](./doc/DatePicker.png)

## 功能特性

1. 支持多种时间单位的选择，包括：`date`, `week`, `month`, `quarter`, `year`.
2. 支持自定义日期显示格式，比如：`yyyy-DD-mm`, `dddd-DD-mm hh:MM:ss`.
2. 支持添加常用快捷按钮，一键选择日期/时间。
3. 支持精确到时分秒的时间选择。
4. 支持自定义不可选择的日期。
5. 支持定义多国语言。
6. 支持 Mendix 的 Validation Feedback 功能。

## 快速安装和使用
<details>
<summary><h3>1. 将该组件添加到 Mendix Project 中</h3></summary>

1. 从[这里](https://github.com/zjh1943/mendix-antd-date-picker/releases)下载 mpk 文件.
3. 把 mpk 文件复制到你的 Mendix Project 目录 `{YourMendixProjectFolder}/widgets/`.
4. 用 Mendix Studio Pro 打开你的 Mendix Project，然后点击菜单 `Menu > App > Synchronize App Directory`.

</details>

<details>
<summary><h3>2. 配置组件属性</h3></summary>

1. 选择任意页面，向页面添加一个 `DataView`，并为 `DataView` 设置好 `Datasource`。`Datesource` 应该被设置为一个 Entity，这个 Entity 至少有一个类型为 Datetime 的属性。![Alt text](doc/quick-use-step-1.png)![Alt text](doc/quick-use-step-1.1.png)
2. 向上述 `DataView` 中添加 `Antd Date Range Picker` 组件。可以从 Mendix Studio Pro 的右侧 Toolbox 中找到。![Alt text](doc/quick-use-step-2.png)
3. 为该组件设置必要的属性。包括： `Picker Type`, `Date value`, `On value change` :
    * 设置 `Picker type`。可选择默认的 `Date`。
    * 设置 `Date value` 为实体的一个属性。用来设置和读取用户选择的时间。
    * 设置 `On value change` 为 `Nanoflow`，选择新建一个 `Nanoflow`。![Alt text](doc/quick-use-step-3.jpg)
    * 在该 `Nanoflow` 中读取和打印 `Date value` 属性。![Alt text](doc/quick-use-step-4.png)
4. 运行。


</details>

## Demo project

1. 你可以在[这里](https://demo-antdwidgets-sandbox.mxapps.io/)访问在线 demo。  
2. 也可以从[这里](https://github.com/zjh1943/mendx-antd-widgets-show)下载 demo project，在自己的 Mendix Studio Pro 上启动运行。  
    
## 详细配置说明

### General

Properties to control the most important behaviors or display of the widget. You will definitely use most of these properties when you add this widget into a page.

![properties-general](./doc/properties-general.png)

<details>
<summary>Click to show the detail</summary>

* Picker type. Support values: `date`, `week`, `month`, `quarter`, `year`. If you set it as `quarter`，you picker will display like this: ![](./doc/render-result-picker-type-quarter.png)
* Format. The format of DateTime value shown on the input frame. e.g. YYYY/MM/DD HH:mm:ss.
* Value. The datetime value that user select. You need to choose a attribute of a entity.
* On value Change. Will be triggered when the date value is changed.
* Show time. Whether show time picker on the picker pannel. If yes, you'd better add "HH:mm:ss" to the `format` property to show the time part. It looks like this: ![](./doc/render-result-show-time.png)
* Plannel placement. On which place is the picker pannel placed to the input frame. support values like: Bottom Left, Bottom Right, Top Left, Top Right.

</details>

### Advanced

Properties to control the behavior of the widget, which is not must for normal using.

![properties-advanced](./doc/properties-advanced.png)

<details>
<summary>Click to show the detail</summary>

* Main.
    * Auto focus. Whether auto get focus when shown.
    * Input readonly. Set the input as readonly.So that, when on mobile device, the virtual keyboard will not be open.
* Locale.
    * Locale. Set the display language. Currently only support zh_CN and en_US.
* Picker Open State.
    * Picker open. An attribute to control the open status of the picker.
    * On open change. Will be triggered when the picker pannel is opened or closed.
    * On OK cick. Will be triggered when click ok button. The ok button will be showd when "Show time" is true.
* Picker Value. (not support any more)
    * Default Picker value. The default date value on the picker pannel.
* Disable Date. 
    * Disable mode. Disable some dates, so that some invalid dates can not be choosen by user. 
        - 'Off' means no date will be disabled. 
        - 'Positive' means the dates you set below are the only available dates. 
        - 'Negative' means that all the dates excepet for the dates you set below are available.
    * Disable datasource. Choose the object list of dates you want to disable or enable.
    * Disable attribute. Choose the attribute with type of DateTime to diable or enable a date.

</details>

### Customize View

Properties to customize the view of the widget.

![properties-customize-view](./doc/properties-customize-view.png)

<details>
<summary>Click to show the detail</summary>

* Common.
    - size. Input frame size. Support value: Small, Middle, Large.
    - Placeholder.
    - Allow clear. Whether show clear button.
    - Bordered. Whether show border out of the input frame.
    - Class of popup. CSS class of the popup DOM element.
* Shortcuts. 
    - Show today button. Whether to show 'Today' button on panel.
    - Show now button. Whether to show 'Now' button on panel when show time is set as true.
    - Datasource of shortcuts. You can use this to dsiplay some shortcut buttons on the picker pannel to let user choose common dates by one click.
    - Attribute of label. Label will be shown on the shortcut button.
    - Value Attribute. When user click the shortcut button, the corresponding datetime will be selected.  
* Custom Pannel Footer
    - Show custom footer. Whether show additional widgets on the footer of the picker pannel.
    - Custom pannel footer. Put additional widgets on the footer of the picker pannel.

</details>

## 与 `antd` RangePicker 的功能对比

<details>
<summary>Click to show detail</summary>

这里列举了 `antd` 中 `RangePicker` 的所有参数，并说明了该组件是否支持该属性，以及不支持的原因。如果想查看`antd`中原属性的含义，请[移步这里](https://ant.design/components/date-picker-cn)。

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

</details>

## Issues, suggestions and feature requests

[Github Issue](https://github.com/zj1943/mendix-antd-date-picker/issues)

At the same time, your are welcome to get into the China Technology Forum to get more in Mendix widget development. [check this out](https://marketplace.siemens.com.cn/low-code-community)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

