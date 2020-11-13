# z-notify 消息通知组件

### props

| 参数       | 说明     | 类型   | 可选值 | 默认值 |
| ---------- | -------- | ------ | ------ | ------ |
| background | 定义弹出层的背景颜色 | String | - | #fff |
| duration   | 弹出停留时间（ms); 0时不会消失 | Number | - | 3000 |
| z-index    | 层级 | Number | - | 110 |
| top        | 距离顶部距离 | String | - | 30rpx |
| width      | Notify宽度 | String | - | 50% |
| selector   | 自定义节点选择器 | String | - | #z-notify |
| type       | 弹窗类型 | String | success / warning / error / info | - |
| msg        | 弹窗文字 | String | - | - |


### API

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| $Notify | 展示说明 | props |
| $Notify.clear | 关闭提示 | props |


### Scoped Slot

| name | 说明 |
| --- | --- |
| - | 定制弹窗内容 |

#### 使用示例

##### .json

*在app.json或index.json中引入组件*

```json
{
  "usingComponents": {
    "z-notify": "[path]/zWeapp/Notify/index"
  }
}
```

##### .wxml

```html
<!-- 在页面内添加对应的节点 -->

<z-notify id="z-notify"/>
```

##### .js

```javascript
import $Notify from '[path]/zWeapp/Notify/notify'; // [path]为您自己的文件路径

// 开启提示
$Notify({background: '#2d8cf0', type: 'success', msg: '这是条成功提示'})

// 关闭提示
$Notify.clear()
```
