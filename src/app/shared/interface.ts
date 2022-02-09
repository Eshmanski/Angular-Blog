export interface User {
  email: string,
  password: string,
  returnSecureToken: boolean,
}

export interface FbAuthResponse {
  displayName: string,
  email: string,
  expiresIn: string,
  idToken: string,
  kind: string,
  localId: string,
  refreshToken: string,
  registered: boolean
}

export interface BodyPost {
  title: string,
  text: string,
  author: string,
  date: Date
}

export interface Post extends BodyPost {
  id: string,
}

export interface FbCreateResponse {
  name: string,
}
