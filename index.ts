import { Provider } from "ts-auto-mock/extension";

Provider.instance.provideMethod((_name: string, value: any) => {
	return jest.fn().mockReturnValue(value);
});

type ReturnType = jest.Mock;

declare module 'ts-auto-mock/extension' {
	interface Method<TR> extends ReturnType {}
}
