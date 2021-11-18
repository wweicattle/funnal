(function (win, doc) {

  let flowRecord = null
  let recordParnetDom = null

  // iframe dom
  let flowOpin = null
  // iframe 挂载点
  let opinParnetDom = null


  // 显示审批记录
  function showFlowRecord(src, style = { width: '100%', height: '100%' }, parnetDom = "body") {
    
    if (this.flowRecord) {
      alert('已存在')
      return
    }
    let iframe = document.createElement('iframe');
    iframe.src = src
    const abs = {
      position: 'absolute', top: 0, left: 0, border: 'none',zIndex:1010
    }
    let styles = Object.assign({}, { ...abs }, { ...style })
    for (let k in styles) {
      iframe.style[k] = styles[k]
    }
    this.flowRecord = iframe
    this.recordParnetDom = document.querySelector(parnetDom)
    this.recordParnetDom.appendChild(this.flowRecord);
    window.addEventListener('message', handerRecord)

  }

  // 关闭审批记录
  function hideFlowRecord() {
    this.recordParnetDom.removeChild(this.flowRecord)
    window.removeEventListener('message', handerRecord, false)
    this.flowRecord = null
  }

  // 审批记录指令
  function handerRecord(e) {
    switch (e.data.cmd) {
      case 'close':
        console.count()
        LLFlow.hideFlowRecord()
        break
    }
  }

  // 显示审批意见 beforeFunc:提交前执行, resultFunc:提交后执行(返回结果)
  function showFlowOpin(src, style = { width: '100%', height: '100%' }, parnetDom = "body") {
    if (this.flowOpin) {
      alert('已存在')
      return
    }
    let iframe = document.createElement('iframe');
    iframe.src = src
    const abs = {
      position: 'absolute', top: 0, left: 0, border: 'none',zIndex:1010
    }
    let styles = Object.assign({}, { ...abs }, { ...style })
    for (let k in styles) {
      iframe.style[k] = styles[k]
    }
    this.flowOpin = iframe
    this.opinParnetDom = document.querySelector(parnetDom)
    // LLFlow.resultFunc = resultFunc || null
    // LLFlow.beforeFunc = beforeFunc || null
    this.opinParnetDom.appendChild(this.flowOpin);
    window.addEventListener('message', handerMessage)
  }

  // 关闭审批意见 
  function hideFlowOpin() {
    // if (this.opinParnetDom.contains(this.flowOpin)) {
    this.opinParnetDom.removeChild(this.flowOpin)
    // }
    window.removeEventListener('message', handerMessage, false)
    this.flowOpin = null
    LLFlow.resultFunc = null
    LLFlow.beforeFunc = null
  }

  // 审批意见指令
  function handerMessage(e) {
    switch (e.data.cmd) {
      case 'submit':
        new Promise(function (resolve, reject) {
          if (LLFlow.beforeFunc) resolve(LLFlow.beforeFunc())
          else resolve(undefined)
          reject(false)
        }).then((res) => {
          if (res === undefined) {
            LLFlow.flowOpin.contentWindow.postMessage({
              cmd: 'start',
              params: res
            }, '*');
          }
        }).catch(err => {
          console.error(err)
        })
        break
      case 'result':
        LLFlow.resultFunc(e.data.result)
        break
      case 'close':
        console.count()
        LLFlow.hideFlowOpin()
        break
    }
  }

  win.LLFlow = {
    flowOpin, showFlowOpin, hideFlowOpin,
    showFlowRecord, hideFlowRecord,
    resultFunc: null, beforeFunc: null
  }

})(window, document)