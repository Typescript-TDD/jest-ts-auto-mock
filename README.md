# Jest Ts Auto Mock

[![Actions Status](https://github.com/Typescript-TDD/jest-ts-auto-mock/workflows/Master/badge.svg)](https://github.com/Typescript-TDD/jest-ts-auto-mock/actions) [![Greenkeeper badge](https://badges.greenkeeper.io/Typescript-TDD/jest-ts-auto-mock.svg)](https://greenkeeper.io/)


This is a library that extend [ts-auto-mock](https://github.com/uittorio/ts-auto-mock) to be used with jest

The intention of the library is to automatically assign jest mock to functions giving you type safety

## Requirements

typescript@^3.2.2<br>
ts-jest@24.0.0

## Installation

- A Transformer needs to be provided at compile time.
We need to tell ts-jest to use ttypescript that allow us to use a transformer.
### IMPORTANT:
- set "cacheBetweenTests" as false
- Add the transformer to your ts config 
    ```ts   
    {
      "compilerOptions": {
        ...
        "plugins": [
          { "transform": "ts-auto-mock/transformer", "cacheBetweenTests": false }
        ]
      }
    }
    ```
    
    - Enable ttypescript into the ts-jest configuration
    ```ts              
       ...
       "globals": {
          "ts-jest": {
            "compiler": "ttypescript"
          }
        }
    ```

- provide jest-ts-auto-mock config before your test
```ts
"jest": {
    ...
    "setupFiles": [
      "<rootDir>/config.ts"
    ]
   ...
  },
```

- config file
```ts
import 'jest-ts-auto-mock'

```

## Examples
[ts-jest-ttypesctipt](examples/ts-jest-ttypescript)

## Usage
1) create an interface
```ts
interface Interface {
    methodToMock: () => string
}
```
2) create a mock
```ts
const mock: Interface = createMock<Interface>();
```
3) get the method mock 

You can get the method spy in 2 different ways

Through method
```ts
import { On, method } from "ts-auto-mock/extension";
const mockMethod: Jest.Mock = On(mock).get(method(mock => mock.methodToMock));
```

Through string
```ts
import { On, method } from "ts-auto-mock/extension";
const mockMethod: Jest.Mock = On(mock).get(method('methodToMock'));
```
4) trigger the method
```ts
someMethodThatWillTriggerInterfaceA();
expect(mockMethod).toHaveBeenCalled();
```

## Authors

* [**Vittorio Guerriero**](https://github.com/uittorio)
* [**Giulio Caprino**](https://github.com/pmyl)

## License

This project is licensed under the MIT License
