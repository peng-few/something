import getNumberIntervals from './getNumberIntervals';


describe('getNumberIntervals', () => {
  it('get interval correctly v1', () => {
     const {overlap,notInclude}=getNumberIntervals([[6, 11], [5, 8], [17, 20], [7, 7], [14,17]])
    expect(overlap).toEqual([[6, 8], [17, 17]])
    expect(notInclude).toEqual([[0, 4], [12, 13]])
  })
  it('get interval correctly v2', () => {
    const {overlap,notInclude}=getNumberIntervals([[1, 5], [4, 8], [3, 7], [6, 9]])
    expect(overlap).toEqual([[3, 8]])
    expect(notInclude).toEqual([[0,0],[10,20]])
  })
  it('get interval correctly v3', () => {
    const {overlap,notInclude}=getNumberIntervals([[7, 8], [0, 5], [1,1], [15,20]])
    expect(overlap).toEqual([[1,1]])
    expect(notInclude).toEqual([[6,6],[9,14]])
  })
})