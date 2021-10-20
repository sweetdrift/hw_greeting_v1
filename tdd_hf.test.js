const { expect } = require('@jest/globals')
const greet=require('./tdd_hf')


it('Should greet Bob correctly', () => { 

  expect(greet("Bob")).toBe("Hello, Bob!") 
})
