import { Subject, Subscription } from 'rxjs'
import { CheckManyAndThrowConfig, ErrorHandler } from './types'
import {
  SubjectPool,
  SubscriptionNamespaces,
  EventObject,
  SubscriptionCallback
} from './types'

export class Eventus {
  private _subjectPool: SubjectPool = {}
  private _subscriptionNamespaces: SubscriptionNamespaces = {}
  private _errorHandler: ErrorHandler = (error: Error) => {
    throw error
  }

  /**
   * ```typescript
   * Listen to event with a given callback.
   * ```
   */
  on(eventString: string, cb: SubscriptionCallback): void {
    const { eventName, namespaces } = Eventus.formatEventString(eventString)

    this.checkAndThrow(!eventName, 'event must have a name')

    const subscription = this.subscribeToSubject(eventName, cb)
    this.subscribeToNamespaces(namespaces, subscription)
  }

  /**
   * ```typescript
   * Alias to "on" method
   * ```
   */
  subscribe(name: string, cb: SubscriptionCallback) {
    return this.on(name, cb)
  }

  /**
   * ```typescript
   * Unsubscribe listener from event
   * ```
   */
  off(eventString: string): void {
    const { eventName, namespaces } = Eventus.formatEventString(eventString)

    this.checkManyAndThrow({
      'To turn events off, reference a name or namespace, not both':
        namespaces.length && eventName,
      'eventString must reference an event name or namespace':
        !namespaces.length && !eventName,
      "Private events can't be disabled": eventName && eventName.startsWith('$')
    })

    if (namespaces.length) this.unsubscribeNamespaces(namespaces)
    else this.unsubscribeEvent(eventName)
  }

  /**
   * ```typescript
   * Alias to "off" method
   * ```
   */
  unsubscribe(name: string) {
    return this.off(name)
  }

  /**
   * ```typescript
   * Trigger an event with given data
   * ```
   */
  trigger(name: string, ...args: any[]): void {
    const subject = this._subjectPool[name]
    if (subject) subject.next(args)
  }

  /**
   * ```typescript
   * Alias to "trigger" method
   * ```
   */
  next(name: string, ...args: any[]): void {
    this.trigger(name, ...args)
  }

  /**
   * ```typescript
   * Set error handler.
   * Default: throw new Error('{error message}')
   * ```
   */
  setErrorhandler(handler: ErrorHandler): void {
    this._errorHandler = handler
  }

  private subscribeToSubject(
    name: string,
    cb: SubscriptionCallback
  ): Subscription {
    return this.getSubject(name).subscribe({
      next: (args: any[]) => cb(...args)
    })
  }

  private getSubject(name: string): Subject<any> {
    this._subjectPool[name] = this._subjectPool[name] || new Subject<any[]>()
    return this._subjectPool[name]
  }

  private getSubscriptionNamespace(namespace: string): Subscription {
    this._subscriptionNamespaces[namespace] =
      this._subscriptionNamespaces[namespace] || new Subscription()
    return this._subscriptionNamespaces[namespace]
  }

  private unsubscribeEvent(eventName: string): void {
    const subject = this._subjectPool[eventName]
    if (subject) subject.unsubscribe()
    delete this._subjectPool[eventName]
  }

  private subscribeToNamespaces(
    namespaces: string[],
    subscription: Subscription
  ): void {
    namespaces.forEach(namespace => {
      const namespaceSubscription = this.getSubscriptionNamespace(namespace)
      namespaceSubscription.add(subscription)
    })
  }

  private unsubscribeNamespaces(namespaces: string[]): void {
    namespaces.forEach(namespace => this.unsubscribeNamespace(namespace))
  }

  private unsubscribeNamespace(namespace: string): void {
    const namespaceSubscription = this._subscriptionNamespaces[namespace]
    if (namespaceSubscription) namespaceSubscription.unsubscribe()
  }

  static formatEventString(eventString: string): EventObject {
    const eventArray = eventString.split('.')
    const eventName = eventArray[0]
    eventArray.shift()
    return {
      eventName,
      namespaces: eventArray.filter(Boolean)
    }
  }

  private checkManyAndThrow(config: CheckManyAndThrowConfig): void {
    for (const key in config) this.checkAndThrow(config[key], key)
  }

  private checkAndThrow(test: any, errorMessage: string): void {
    if (!test) return
    const error = new Error(errorMessage)
    this.trigger('$error', error)
    this._errorHandler(error)
  }
}
