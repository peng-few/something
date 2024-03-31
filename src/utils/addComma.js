export function addComma(x) {
  if (isNaN(Number(x))) return x;
  const value = typeof x === 'number' ? `${x}` : x;
  return value.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export default addComma