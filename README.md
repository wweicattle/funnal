## Project setup
```
npm install
npm run serve
```
# 全局配置说明

## 基本技术栈
elment-ui：^2.15.6
Vue：2.6.11

## 二级路由封装的组件 RouteSonItems 组件(routes配置好，只需添加这一行就有2级路由)
```
    <route-son-items :datas="routeDatas" />
```
## 模板区域容器 BoxContain 组件
```
    <box-contain logoVis="before" :isshowheader="headerObj">
     1.headerObj：{ text:"标题名称"}/不传为无标题
     2.logoVis:before/after (整改前、后) /不传不显示
```
### 模板二级区域标题容器 TitleContain 组件
```
        <title-contain value="店铺基本信息"></title-contain>
        value：二级标题名称
```
