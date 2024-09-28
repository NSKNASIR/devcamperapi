 class ErrorResponse extends Error{
    constructor(message,statusCode){
        super(message);
        this.statusCode=message;
    }
 }
 module.exports = ErrorResponse;