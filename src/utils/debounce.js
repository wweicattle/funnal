export  default  function debounceMethods(fn, delay = 600) {
  clearTimeout(fn.id);
  fn.id = setTimeout(() => {
    // 设置防抖
    fn();
  }, 600);
}
