import { createMock } from "ts-auto-mock";
import { Interface } from "../interface";

describe('reuse', () => {
	let mock: Interface;
	
	beforeEach(() => {
		mock = createMock<Interface>();
	});
	
	it('should assign the value', () => {
		expect(mock.b).toBe(0);
	});
});
