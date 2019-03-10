import { createMock, mockedMethod, On  } from "ts-auto-mock";
import Mock = jest.Mock;

describe('names', () => {
	interface Interface {
		a(): string;
	}
	
	let mock: Interface;
	
	beforeEach(() => {
		mock = createMock<Interface>();
	});
	
	it('should give a name to the spy', () => {
		const mockMethod: Mock = On.Mock(mock).get(mockedMethod(mock => mock.a));
		mockMethod();
		expect(mockMethod).toHaveBeenCalled();
	});
});
