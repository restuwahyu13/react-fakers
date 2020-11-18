import { errorHandlers } from '../src/utils/errorHandlers'

it('property test not exists', () => {
  const { status } = errorHandlers({ type: 'propertyHandler', props: {} })
  expect(status).toStrictEqual(400)
})

describe('group all test errorHandlers utils', () => {
  it('errorHandlers test matching HTTP STATUS CODE 429', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 429 }
    })
    expect(status).toStrictEqual(429)
    expect(message).toStrictEqual('TO MANY REQUEST')
  })

  it('errorHandlers test matching HTTP STATUS CODE 500', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 500 }
    })
    expect(status).toStrictEqual(500)
    expect(message).toStrictEqual('INTERNAL SERVER ERROR')
  })

  it('errorHandlers test matching HTTP STATUS CODE 404', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 404 }
    })
    expect(status).toStrictEqual(404)
    expect(message).toStrictEqual('NOT FOUND')
  })

  it('errorHandlers test matching HTTP STATUS CODE 400', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 400 }
    })
    expect(status).toStrictEqual(400)
    expect(message).toStrictEqual('BAD REQUEST')
  })

  it('errorHandlers test matching HTTP STATUS CODE 504', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 504 }
    })
    expect(status).toStrictEqual(504)
    expect(message).toStrictEqual('GATEWAY TIMEOUT')
  })

  it('errorHandlers test matching HTTP STATUS CODE 503', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 503 }
    })
    expect(status).toStrictEqual(503)
    expect(message).toStrictEqual('SERVICE UNAVABLE')
  })

  it('errorHandlers test matching HTTP STATUS CODE 403', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 403 }
    })
    expect(status).toStrictEqual(403)
    expect(message).toStrictEqual('FORBIDDEN')
  })

  it('errorHandlers test matching HTTP STATUS CODE 408', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 408 }
    })
    expect(status).toStrictEqual(408)
    expect(message).toStrictEqual('REQUEST TIMEOUT')
  })

  it('errorHandlers test matching HTTP STATUS CODE 401', () => {
    const { status, message } = errorHandlers({
      type: 'httpErrorHandlers',
      error: { status: 401 }
    })
    expect(status).toStrictEqual(401)
    expect(message).toStrictEqual(' UNAUTHORIZED')
  })
})
