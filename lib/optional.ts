export default class Optional<T> {
  private constructor(private value: T | null) {}

  public static ofNullable<T>(value: T | null | undefined): Optional<T> {
    return this.isNullish(value) ? Optional.empty() : Optional.of(value as T)
  }

  public static of<T>(value: T): Optional<T> {
    if (this.isNotNullish(value)) return new Optional<T>(value)
    throw new Error('Cannot create Optional of null or undefined')
  }

  public static empty<T>(): Optional<T> {
    return new Optional<T>(null)
  }

  public isPresent(): boolean {
    return this.value !== null
  }

  public get(): T {
    if (this.value !== null) return this.value
    throw new Error('No value present')
  }

  public orElse(other: T): T {
    return this.value === null ? other : this.value
  }

  private static isNullish<T>(value: T | null | undefined): boolean {
    return value === null || value === undefined
  }

  private static isNotNullish<T>(value: T | null | undefined): boolean {
    return !this.isNullish(value)
  }
}
