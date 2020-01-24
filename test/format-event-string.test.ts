import { Eventus } from '../src/eventus'

test('Empty Event String', () => {
  const eventObject1 = Eventus.formatEventString('')
  const eventObject2 = Eventus.formatEventString('.')
  expect(eventObject1.eventName).toBe('')
  expect(eventObject1.namespaces.length).toBe(0)
  expect(eventObject2.eventName).toBe('')
  expect(eventObject2.namespaces.length).toBe(0)
})

test('Only Event Name', () => {
  const eventObject = Eventus.formatEventString('event')
  expect(eventObject.eventName).toBe('event')
  expect(eventObject.namespaces.length).toBe(0)
})

test('Only Namespace', () => {
  const eventObject1 = Eventus.formatEventString('.namespace')
  const eventObject2 = Eventus.formatEventString('.name.space')
  expect(eventObject1.eventName).toBe('')
  expect(eventObject1.namespaces.length).toBe(1)
  expect(eventObject2.eventName).toBe('')
  expect(eventObject2.namespaces.length).toBe(2)
})

test('Event Name and Namespaces', () => {
  const eventObject1 = Eventus.formatEventString('event.namespace')
  const eventObject2 = Eventus.formatEventString('event.name.space')
  expect(eventObject1.eventName).toBe('event')
  expect(eventObject1.namespaces.length).toBe(1)
  expect(eventObject2.eventName).toBe('event')
  expect(eventObject2.namespaces.length).toBe(2)
})
