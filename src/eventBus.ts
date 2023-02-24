import type { iEventMap, iHandler } from './type'
export class EventBus {
  private eventMap: iEventMap
  constructor() {
    // eventMap 用来存储事件和监听函数之间的关系
    this.eventMap = {}
  }

  /**
   * 事件订阅
   * @param eventName 事件名
   * @param handler 事件处理函数
   * @param thisArg this值绑定
   */
  on(eventName: string, handler: iHandler, thisArg: any): void {
    // 若不存在，初始化
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = []
    }

    // 存在则直接push
    this.eventMap[eventName].push({
      event: handler,
      thisArg,
    })

    // !error: 此处不能利用存储时就绑定this，会导致最后无法销毁
    // this.eventMap[eventName].push(handler.bind(thisArg))
  }

  // 发布
  emit(eventName: string, ...args: any): void {
    // 若事件已订阅
    if (this.eventMap[eventName]) {
      const funcList = this.eventMap[eventName]
      // 遍历执行
      funcList.forEach((func) => {
        // !bind方式绑定，需要重新调用并执行
        func.event.bind(func.thisArg, ...args)()

        // !apply方式
        // func.event.apply(func.thisArg, args)

        // !call方式
        // func.event.call(func.thisArg, ...args)
      })
    }
  }

  // 销毁
  off(eventName: string, handler: iHandler): void {
    if (this.eventMap[eventName]) {
      // 从事件的订阅[]列表中，查找event === handler的事件index
      const index = this.eventMap[eventName].findIndex(item => item.event === handler)

      // 无符号右移：当-1无符号右移时，会变成32位为1的二进制数，巨大的索引找不到就不删除
      this.eventMap[eventName].splice(index >>> 0, 1)

      // !error: 此处handler和存储的方法已经无法匹配，this已更改，不是同一个函数
      // this.eventMap[eventName].splice(this.eventMap[eventName].indexOf(handler) >>> 0, 1)
    }
  }
}
