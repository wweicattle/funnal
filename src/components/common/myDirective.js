// import Vue from 'vue';
export function mydirective(Vue) {
  let AROUND_REGEX = /^\s*|\s*$/g,  //前后空格正则
    ALL_REGEX = /\s*/g; //所有空格

  Vue.directive('checkParam', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el, binding, vNode) {
      el.className += ' v-check'
      el.addEventListener('keyup', function (event) {
        if (!event.keyCode) {// // 加上这个判断就是在提交时，才会校验
          // 判断是否必填
          let elVal = el.children[0].value;
          let elPP = el.parentNode.parentNode;
          let isRequired = binding.value.required;
          if (isRequired) {
            // 单选框
            if (el.classList.contains('el-radio-group')) {
              let rd = Array.from(el.children);
              let cArr = [];
              rd.forEach(el => {
                cArr.push(el.ariaChecked);
              });
              if (cArr.indexOf('true') == -1) {
                elPP.classList.add('input-radio-error');
              } else {
                elPP.classList.remove('input-radio-error');
              }
            }
            // 输入框
            if (el.classList.contains('el-input') && !(el.classList.contains('my-line-input'))) {
              if (!elVal || elVal === '') {
                elPP.classList.add('input-error');
              } else {
                elPP.classList.remove('input-error');
              }
            }
            // 下划线
            if (el.classList.contains('my-line-input')) {
              if (!elVal || elVal === '') {
                el.classList.add('input-line-error');
              } else {
                el.classList.remove('input-line-error');
              }
            }
            // 下拉框
            if (el.classList.contains('el-select')) {
              let isSelect = false;
              let x = el.querySelectorAll(".el-select-dropdown__item");
              if (x.length == 0) {
                elPP.classList.remove('input-radio-error');
              } else {
                x.forEach(els => {
                  if (els.classList.contains('selected')) {
                    isSelect = true;
                  }
                });
                if (!isSelect) {
                  elPP.classList.add('input-radio-error');
                } else {
                  elPP.classList.remove('input-radio-error');
                }
              }
            }
            // checkbox
            // 地址选择——————————层级太多了，下次再说吧
            // if (el.classList.contains('address-contain')) {}

            // console.log(el);
            // console.log(elVal);
            // if (!elVal || elVal === '') {
            //   elPP.classList.add('input-error');
            // } else {
            //   elPP.classList.remove('input-error');
            // }
          }
          // 判断正则——————————电话
          let regex = binding.value.regex;
          let P_REGEX = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/;
          if (regex === 'phone') {
            // 下划线
            if (el.classList.contains('my-line-input')) {
              if (!P_REGEX.test(elVal)) {
                el.classList.add('input-line-error');
              } else {
                el.classList.remove('input-line-error');
              }
            }
            // 输入框
            if (el.classList.contains('el-input') && !(el.classList.contains('my-line-input'))) {
              if (!P_REGEX.test(elVal)) {
                elPP.classList.add('input-error');
              } else {
                elPP.classList.remove('input-error');
              }
            }
          }

        }
      })
    }
  })
}

export function v_sumbit(Vue) {
  Vue.directive('checkSubmit', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el, binding, vNode) {
      el.addEventListener('click', function (event) {
        let elements = document.getElementsByClassName('v-check');
        var evObj = document.createEvent('Event');
        evObj.initEvent('keyup', true, true);
        for (let element of elements) {
          element.dispatchEvent(evObj);
        }
        let errorInput = document.getElementsByClassName('input-error')
        let errorRadioInput = document.getElementsByClassName('input-radio-error');
        let errorLineInput = document.getElementsByClassName('input-line-error');
        if (errorInput.length != 0 || errorRadioInput.length != 0 || errorLineInput.length != 0) {
          vNode.context.directiveMsg();
        } else {
          vNode.context.mysendNode();
        }
      })
    }
  })
}