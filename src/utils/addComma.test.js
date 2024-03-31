import addComma from './addComma';


describe('addComma', () => {
  it('return same input when input is not number', () => {
    const target = addComma('234test');
    expect(target).toEqual('234test')
  })

  it('format 423423253 correctly', () => {
    const target = addComma('423423253');
    expect(target).toEqual('423,423,253')
  })
  it('format 123456789.01 correctly', () => {
    const target = addComma('123456789.01');
    expect(target).toEqual('123,456,789.01')
  })

  it('format 57024.00000000001 correctly', () => {
    const target = addComma('57024.00000000001');
    expect(target).toEqual('57,024.00000000001')
  })

  it('format 123456.000 correctly', () => {
     const target = addComma('123456.000');
    expect(target).toEqual('123,456.000')
  })
})