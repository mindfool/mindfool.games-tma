import { describe, it, expect } from 'vitest'

describe('Vitest Setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true)
  })

  it('should support React 18', () => {
    const reactVersion = require('react').version
    expect(reactVersion).toMatch(/^18/)
  })

  it('should have happy-dom environment', () => {
    expect(typeof window).toBe('object')
    expect(typeof document).toBe('object')
  })
})
