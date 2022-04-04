

export default class ResponseError {
  message: string;

  name: string;

  code: number;

  constructor(error) {
    this.message = error.message;
    this.code = error.code;
    this.name = error.name;
  }
}
