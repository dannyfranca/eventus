<h1 align="center">dannyfranca/eventus</h1>
<p align="center">[DEPRECATED] Event Manager made with RxJS's Subjects, inspired by jQuery's event API. Repository moved to @dannyfranca/radarjs</p>
<p align="center">

<a href="https://npmjs.com/package/@dannyfranca/eventus" target="_blank">
    <img src="https://img.shields.io/npm/dt/@dannyfranca/eventus.svg?style=flat-square&logo=npm" />
</a>

<a href="https://npmjs.com/package/@dannyfranca/eventus" target="_blank">
    <img src="https://img.shields.io/npm/v/@dannyfranca/eventus/latest.svg?style=flat-square&logo=npm" />
</a>

<a href="https://travis-ci.com/dannyfranca/eventus" target="_blank">
    <img src="https://img.shields.io/travis/dannyfranca/eventus?style=flat-square&logo=travis" />
</a>

<a href="https://codecov.io/gh/dannyfranca/eventus" target="_blank">
    <img src="https://img.shields.io/codecov/c/github/dannyfranca/eventus?style=flat-square&logo=codecov" />
</a>

<a href="https://david-dm.org/dannyfranca/eventus" target="_blank">
    <img src="https://david-dm.org/dannyfranca/eventus/status.svg?style=flat-square" />
</a>

<a href="https://www.codacy.com/manual/dannyfranca/eventus" target="_blank">
    <img src="https://img.shields.io/codacy/grade/addca1007fb044c3a994c7e0ec504092?style=flat-square&logo=codacy" />
</a>

</p>

## Getting Started

-   Install

```bash
yarn add @dannyfranca/eventus
```

-   Import and create a new Instance

```js
import { Eventus } from '@dannyfranca/eventus'

const eventus = new Eventus()
```

## Usage

### Listen to Events

```js
const state = {
  count: 0,
  lastNotificationType: ''
}

eventus.on('notify', () => state.count++)

// receive any number off values as arguments
eventus.on('notify', ({ type }, ...data) => {
  state.lastNotificationType = type)
  console.log(data)
}

// subscribe is an alias
eventus.subscribe('logout', () => {/*...*/})

// can use namespaces
eventus.on('notify.namespace1.namespace2', () => {/*...*/})
```

### Unsubscribe from Events

```js
// by event name
eventus.off('notify')

// unsubscribe is an alias
eventus.unsubscribe('logout')

// by namespace
eventus.off('.namespace1')
```

### Trigger Events

```js
// pass any data to an event trigger
eventus.trigger('notify', {
  type: 'info',
  message: 'Just an ordinary notification'
})

// pass any number of data
eventus.trigger('notify', notification, ...data)

// next is an alias
eventus.next('logout')
```

### Native Events
Native events has reserved names starting with $. Until now, the only native event available is $error.

#### $error event

```typescript
// listening to $error
eventus.on('$error', (error: Error) => {/*...*/})
```

Eventus check for an error handler. If you don't set your own, an ordinary Error will be throwed with a message.
```typescript
// set your error handler
eventus.setErrorHandler((error: Error) => {/*...*/})
```

## License

[MIT License](./LICENSE)

Copyright (c) Danny França <mailto:contato@dannyfranca.com>
