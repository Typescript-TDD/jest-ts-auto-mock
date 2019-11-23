import { createMock } from "ts-auto-mock";

describe('reuse', () => {
    interface Interface {
        a: string;
        b: number;
    }

	let mock: Interface;

	beforeEach(() => {
		mock = createMock<Interface>();
	});

	it('should assign the value', () => {
		expect(mock.b).toBe(0);
	});
});
