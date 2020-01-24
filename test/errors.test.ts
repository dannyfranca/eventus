import { Eventus } from '../src/eventus'

const eventus = new Eventus()

test('Subscription errors', () => {
  expect(() => eventus.on('', () => 'will throw')).toThrow()
  expect(() => eventus.on('.', () => 'will throw')).toThrow()
  expect(() => eventus.on('.namespace', () => 'will throw')).toThrow()
})

test('Unsubscription errors', () => {
  expect(() => eventus.off('')).toThrow()
  expect(() => eventus.off('.')).toThrow()
  expect(() => eventus.off('event.namespace')).toThrow()
})
