# ts-optional

A TypeScript library for optional values, providing a simple and type-safe way to handle optional values in your code.

## Installation

Install in the usual way:

```sh
npm install ts-optional
```

## Usage

```typescript
import Optional from 'ts-optional'

// read some data, maybe it's null?
const hello: string | null = readHello()

// make it an optional!
const maybeHello: Optional<string> = Optional.of<string>(hello)

// returns true if there is a value or false if it's null
console.log(maybeHello.isPresent()) // true

// gets the value if its there or throws and exception if null
console.log(maybeHello.get()) // 'Hello, World!'

// returns the value or the provided string
console.log(maybeHello.orElse('Goodbye'))
```
