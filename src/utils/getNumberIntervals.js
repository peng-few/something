export function getNumberIntervals(ranges,max=20) {
  const flatRanges = ranges.reduce((accu, [start, end], index) => {
    accu.push({ value: start, index: index }, { value: end, index: index })
    return accu
  },[] ).sort((a,b)=> a.value-b.value)

  const overlap = [];
  const notInclude = [];
  const ongoing = new Set();
  let lastEnd = -1;
  let currentOverlap = null;
  flatRanges.forEach(({ value, index }) => {
    if (ongoing.size === 0 && value > lastEnd + 1) {
      notInclude.push([lastEnd + 1, value - 1]);
    } 
    if (ongoing.has(index)) {
      ongoing.delete(index);
      if (ongoing.size === 0) {
        lastEnd = value;
      } else if (ongoing.size === 1 && currentOverlap) {
        overlap.push([currentOverlap[0], value])
        currentOverlap = null;
      }
    } else {
      ongoing.add(index);
      if (ongoing.size > 1 && !currentOverlap) {
        currentOverlap = [value];
      }
    }
  });

  if (lastEnd !== max) {
    notInclude.push([lastEnd + 1, max]);
  }
  return {overlap,notInclude}
}

export default getNumberIntervals