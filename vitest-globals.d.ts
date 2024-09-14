import 'vitest'

export {}

declare global {
  function when(description: string, fn: (this: any) => void): void
  function and(description: string, fn: (this: any) => void): void
}

declare module 'vitest' {
  interface Assertion {
    toBeTrue(): void
    toBeFalse(): void
  }

  interface AsymmetricMatchersContaining {
    toBeTrue(): void
    toBeFalse(): void
  }
}
