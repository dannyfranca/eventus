import { Eventus } from '../src/eventus'

const eventus = new Eventus()

test('Setting new error handler', () => {
  expect(() =>
    eventus.setErrorhandler(error => {
      console.log(error.message)
    })
  ).not.toThrow()
  expect(() => eventus.on('', () => 'will not throw')).not.toThrow()
})
