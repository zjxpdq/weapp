# z-steps 步骤条

### props

| 参数       | 说明     | 类型   | 可选值 | 默认值 |
| ---------- | -------- | ------ | ------ | ------ |
| active                    | 当前一般步骤 | Number | - | - |
| direction                 | 展示方式 | String | `vertical` | `horizontal` |
| background                | 背景颜色 | String | - | `rgba(199, 230, 226, 0.15)` |
| show-number               | 显示下标 | Boolean | - | false |
| active-text-color         | 激活时文字颜色 | String | - | #51AFA3 |
| inactive-text-color       | 未激活时文字颜色 | String | - | #A2AAB7 |


# z-step 步骤节点 

|  参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| title     | 标题 | String | - | - |
| content   | 内容 | String | - | - |

### slot

| name | 说明 |
| --- | --- | 
| active-icon   | 激活时的图标 |
| inactive-icon | 未激活时的图标 |


#### 示例

##### .json

*在app.json或index.json中引入组件*

```json
{
  "usingComponents": {
    "z-steps": "[path]/zWeapp/Steps/index",
    "z-step": "[path]/zWeapp/Step/index"
  }
}
```

##### .wxml

```html
<!-- 在页面内添加对应的节点 -->

<z-steps active="{{ 1 }}">
  <z-step title="NO1" content="内容"/>
  <z-step>
    <view slot="title">我是头部</view>
  </z-step>
</z-steps>
```
