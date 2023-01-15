import * as dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT || 4000;

export enum responseStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404
}

export enum Message {
  ID_IS_INVALID = 'userId is invalid',
  NO_REQUIRED_FIELDS = 'request body does not contain required fields',
  ROUTE_NOT_FOUND = 'Route not found',
}

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export enum apiUrl {
  USERS = "/api/users/",
}
