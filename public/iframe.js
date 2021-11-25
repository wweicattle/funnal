(function (win, doc) {

  let flowRecord = null
  let recordParnetDom = null

  let flowOpin = null
  let opinParnetDom = null

  let saveStyles = false

  // 显示审批记录
  function showFlowRecord(src, style = { width: '100%', height: '100%' }, parnetDom = "body") {
    if (this.flowRecord) {
      alert('已存在')
      return
    }
    showLoading()
    let iframe = document.createElement('iframe');
    iframe.src = src
    const abs = {
      position: 'absolute', top: 0, left: 0, border: 'none', zIndex: 999
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
    hideLoading()

  }

  // 审批记录指令
  function handerRecord(e) {
    switch (e.data.cmd) {
      case 'close':
        LLFlow.hideFlowRecord()
        break
      case 'closeLoading':
        hideLoading()
        break
    }
  }



  // 显示审批意见 beforeFunc:提交前执行, resultFunc:提交后执行(返回结果)
  function showFlowOpin(src, style = { width: '100%', height: '100%' }, parnetDom = "body") {
    if (this.flowOpin) {
      alert('已存在')
      return
    }
    showLoading()
    let iframe = document.createElement('iframe');
    iframe.src = src
    // iframe.onload = onload()
    const abs = {
      position: 'absolute', top: 0, left: 0, border: 'none', zIndex: 999
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

  function showLoading() {
    if (!saveStyles) {
      let style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = '.loading{position:absolute;top: calc(50% - 16px);left: calc(50% - 16px);transform: translate(-50%, -50%);border: 3px solid transparent;border-radius: 50%;border-top: 3px solid #65b2ff;width: 32px;height: 32px;-webkit-animation: spin 2s linear infinite;animation: spin 2s linear infinite;} @keyframes spin {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}';
      document.getElementsByTagName('head')[0].appendChild(style);
    }
    let loading = document.createElement('div');
    loading.className = 'loading'
    document.body.appendChild(loading)
  }

  function hideLoading() {
    const loading = document.querySelector('.loading')
    loading && document.body.removeChild(loading)
  }

  // 关闭审批意见 
  function hideFlowOpin() {
    this.opinParnetDom.removeChild(this.flowOpin)
    window.removeEventListener('message', handerMessage, false)
    hideLoading()
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
        LLFlow.hideFlowOpin()
        break
      case 'closeLoading':
        hideLoading()
        break

    }
  }

  win.LLFlow = {
    flowOpin, showFlowOpin, hideFlowOpin,
    showFlowRecord, hideFlowRecord,
    resultFunc: null, beforeFunc: null
  }

})(window, document)