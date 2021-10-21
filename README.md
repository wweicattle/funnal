## Project setup

```
npm install
npm run serve
```

## 开放人员说明

```
UI设计图：陈斌

前端开发：吴伟，黄华蓥，李云茹，王宣彬，卢梦

后端开发：王晓生

```

# 全局配置说明

## 基本技术栈

```
elment-ui：^2.15.6
Vue：2.6.11
```

## commit 提交规范

```
git ./
npm run commit(相当于提交git commit)
```

<!--  -->

## 布局设置

分辨率最大值最小值采用 1024px 内容居中样式

## 本地存储插件 web-storage-cache

```
挂载在Vue原型上,直接用当前组件实例使用
组件中具体用法
1.add
this.$wsCache.set("username", "详细数据");
2.get
let username=this.$wsCache.get("username");
3.delete
this.$wsCache.delete("username");
[具体详情点击](https://github.com/wuchangming/web-storage-cache)
```

## 二级路由封装的组件 RouteSonItems 组件(routes 配置好，只需添加这一行就有 2 级路由)

```
    <route-son-items :datas="routeDatas" />
```

## 模板区域容器 BoxContain 组件

```
    <box-contain logoVis="before" :isshowheader="headerObj">
     1.headerObj：{ text:"标题名称"}/不传为无标题
     2.logoVis:before/after (整改前、后) /不传不显示
```

## 表格区域容器 BoxContain 组件

```
     <table-contain :tableData="tableData" :tableLabel="tableLabel"></table-contain>
     1.tableData（表数据）
     2.tableLabel:（表属性）
```

## 模板二级区域标题容器 TitleContain 组件

```
        <title-contain value="店铺基本信息"></title-contain>
        value：二级标题名称
```

## 省市县通用组件

```
        <title-contain value="店铺基本信息"></title-contain>
        value：二级标题名称
```

## 签名样式统一

```
 <div class="sign-contain">
   <span class="sign-tit">贸易公司业务经理签署：
   </span>
   <div class="sign-name">{{ kaihuData.zdr }}
   </div>
 </div>
```
