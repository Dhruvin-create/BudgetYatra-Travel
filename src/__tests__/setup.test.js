/**
 * Basic test to verify Jest and fast-check are properly configured
 */
import fc from 'fast-check'

describe('Testing Infrastructure', () => {
  test('Jest is working correctly', () => {
    expect(true).toBe(true)
  })

  test('fast-check is installed and working', () => {
    fc.assert(
      fc.property(fc.integer(), (n) => {
        return typeof n === 'number'
      }),
      { numRuns: 10 }
    )
  })
})
