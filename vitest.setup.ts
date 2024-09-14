export function when(description: string, fn: (this: any) => void): void {
  describe(`when ${description}`, fn)
}

export function and(description: string, fn: (this: any) => void): void {
  describe(`and ${description}`, fn)
}

;(global as any).when = when
;(global as any).and = and

expect.extend({
  toBeTrue(received: boolean) {
    return {
      pass: received === true,
      message: () => `Expected ${received} to be true`
    }
  },
  toBeFalse(received: boolean) {
    return {
      pass: received === false,
      message: () => `Expected ${received} to be false`
    }
  }
})
