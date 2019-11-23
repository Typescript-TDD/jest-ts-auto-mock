/// <reference types="jest" />
declare type ReturnType = jest.Mock;
declare module 'ts-auto-mock/extension' {
    interface Method<TR> extends ReturnType {
    }
}
export {};
