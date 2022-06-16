// This class is used to handle the express errors generated by the user or by the server.
class AppError extends Error {
    constructor(message, statusCode) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;
