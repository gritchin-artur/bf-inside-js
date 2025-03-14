/**
 *
 *  This returns item witch include second parametr
 *
 * @params {string} [text = ''] - some text
 * @params {string} [includ = ''] - includ text
 * returns {string} - returns arrey wich includes items
 */
export const search = (text = '', includ = '') => {
  let newArr = [];

  text.forEach((item) => {
    if (item.includes(includ)) {
      newArr.push(item);
    }
  });

  return newArr;
};
