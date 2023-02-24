declare function getType(element: any): string;
declare function isObject(val: any): boolean;
declare function isNull(val: any): boolean;
declare function isUndefined(val: any): boolean;

declare const to: (promise: Promise<any>) => Promise<(null | any)[]>;

type iHandler = (...args: any) => unknown;

declare class EventBus {
    private eventMap;
    constructor();
    /**
     * 事件订阅
     * @param eventName 事件名
     * @param handler 事件处理函数
     * @param thisArg this值绑定
     */
    on(eventName: string, handler: iHandler, thisArg: any): void;
    emit(eventName: string, ...args: any): void;
    off(eventName: string, handler: iHandler): void;
}

export { EventBus, getType, isNull, isObject, isUndefined, to };
