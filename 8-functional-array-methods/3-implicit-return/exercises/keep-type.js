// #todo

/**
 *
 *
 * This function returnes exectly the type show in the second parametr
 *
 * @params {object} [things = []] - some array
 * @params {string} [type = ''] - type of new array
 * returns  {object} - returns new array
 */
export const keepType = (things = [], type = '') => {
  return things.filter((thing) => {
    return typeof thing === type;
  });
};
