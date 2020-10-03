module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  
  const reverse = matrix.map((value, index) => {
    return index % 2 !== 0 ? value.reverse() : value;
  })

  return reverse.flat(Infinity);
}
