export const errorHandlers = (handler) => {
  switch (handler.type) {
    case 'propertyHandler':
      return propertyHandlers(handler)
    case 'httpErrorHandlers':
      return httpErrorHandlers(handler)
    default:
      return handler
  }
}

const propertyHandlers = ({ props }) => {
  if (!props.success) {
    return { message: 'success property is required' }
  }
  if (!props.error) {
    return { message: 'error property is required' }
  }
}

const httpErrorHandlers = ({ error }) => {
  switch (error.status) {
    case 429:
      return { status: error.status, message: 'TO MANY REQUEST' }
    case 500:
      return { status: error.status, message: 'INTERNAL SERVER ERROR' }
    case 404:
      return { status: error.status, message: 'NOT FOUND' }
    case 400:
      return { status: error.status, message: 'BAD REQUEST' }
    case 504:
      return { status: error.status, message: 'GATEWAY TIMEOUT' }
    case 503:
      return { status: error.status, message: 'SERVICE UNAVABLE' }
    case 403:
      return { status: error.status, message: 'FORBIDDEN' }
    case 408:
      return { status: error.status, message: 'REQUEST TIMEOUT' }
    case 401:
      return { status: error.status, message: ' UNAUTHORIZED' }
    default:
      return error
  }
}
