class apierror extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    (this.statusCode = statusCode),
      (this.data = null),
      (this.message = message),
      (this.sucess = false);
    this.errors = errors;
  }
}
export { apierror };
