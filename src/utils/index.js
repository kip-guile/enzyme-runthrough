export const findTestByAttrr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}
