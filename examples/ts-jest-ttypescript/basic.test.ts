import { createMock } from "ts-auto-mock";
import { method, On } from 'ts-auto-mock/extension';

describe('names', () => {
	interface Interface {
		a(): string;
	}

	let mock: Interface;

	beforeEach(() => {
		mock = createMock<Interface>();
	});

	it('should get the spy', () => {
		const mockMethod: jest.Mock = On(mock).get(method(mock => mock.a));
		mockMethod();
		expect(mockMethod).toHaveBeenCalled();
	});

	it('should get the spy with the string', () => {
		const mockMethod: jest.Mock = On(mock).get(method('a'));
		mockMethod();
		expect(mockMethod).toHaveBeenCalledWith();
	});
});
