let mapComponents = [];
function getCom() {
  let ge = require.context("./", true, /\.vue/);
  let arrpaths = ge.keys();
  arrpaths.forEach(val => {
    let arr = val.split("/")[1].split(".")[0];
    let ss = () => import(`${val}`);
    ss().then(da => {
      mapComponents.push({
        name:arr,
        com:da.default
      })
    })
    // 进行提取组件名 于组件
  });
}
getCom();

export default mapComponents;