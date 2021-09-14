// 该方法是把所有的路由抽取出来，这样方便组件进行拿取
export  function dealRoute(data) {
    let arrs = {};
    data.forEach(val => {
        if (val.children && val.children.length >= 0) {
            let arr = [];
            val.children.forEach(element => {
                if (element.children && element.children.length >= 0) {
                    let g = {}
                    let gs = [];
                    element.children.forEach(vals => {
                        gs.push({path:vals.path,name:vals.name});
                    })
                    let objs = {
                        name:element.name,
                        path:element.path,
                        children:gs
                    };

                    // objs[element.path] = gs;
                    arr.push(objs);
                } else {
                    arr.push({path:element.path,name:element.name});
                }
            });
            arrs[val.path] = arr;
        }
    }) // data
    return arrs;
}
