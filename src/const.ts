export const PORT = 4000;

export enum responseStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404
}

export enum Message {
  ID_IS_INVALID = 'userId is invalid'
}

export enum HTTPMethod {
  GET = 'GET',
}

export enum apiUrl {
  USERS = "/api/users/",
}
