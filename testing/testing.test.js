describe('first set', () => {
  beforeAll(() => {
    console.log('before all run')
  })
  beforeEach(() => {
    console.log('before each run')
  })
  afterAll(() => {
    console.log('after run')
  })
  test('does nothing',()=>{
    console.log('test1 run')
  })
  it('it is an alias of test',()=>{
    console.log('test2 run')
  })
})
