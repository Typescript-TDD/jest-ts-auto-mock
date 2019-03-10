# Jest Ts Auto Mock

This is a library that extend [ts-auto-mock](https://github.com/uittorio/ts-auto-mock) to be used with jasmine

The intention of the library is to automatically assign jest mock to functions giving you type safety

## Requirements

typescript@^3.2.2<br>
ts-jest@24.0.0

## Installation

- A Transformer needs to be provided at compile time.
We need to tell ts-jest to use ttypescript that allow us to use a transformer.
    - Add the transformer to your ts config 
    ```ts   
    {
      "compilerOptions": {
        ...
        "plugins": [
          { "transform": "ts-auto-mock/transformer" }
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
      "<rootDir>config.ts"
    ],   
   ...
  },
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
1) create a mock
```ts
const mock: Interface = createMock<Interface>();
```
2) get the method mock 
```ts
const mockMethod: Jest.Mock = On.Mock(mock).get(mockedMethod(mock => mock.methodToMock));
```
3) trigger the method
```ts
someMethodThatWillTriggerInterfaceA();
expect(mockMethod).toHaveBeenCalled();
```

## Authors

* **Vittorio Guerriero**
* **Giulio Caprino** 

## License

This project is licensed under the MIT License
