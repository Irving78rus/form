export function telTest(value) {
  let reg =
    /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return reg.test(value);
}
export function IsValue(value) {
  return value ? 1 : 0;
}
export function EmailTest(value) {
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  return reg.test(value);
}

export function minLengthTest(value) {
  if (value.length < 100) {
    return 1;
  }
  return 0;
}
 