import { Provider } from "ts-auto-mock/extension";

Provider.instance.provideMethodWithDeferredValue((_name: string, value: () => any) => {
	return jest.fn().mockImplementation(value);
});

type ReturnType = jest.Mock;

declare module 'ts-auto-mock/extension' {
	interface Method<TR> extends ReturnType {}
}
