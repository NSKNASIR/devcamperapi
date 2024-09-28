const errorHandler = (err, req, res, next) => {
    // Validate status code, ensuring it's a valid HTTP status code
    const statusCode = (typeof err.statusCode === 'number' && err.statusCode >= 100 && err.statusCode < 600) ? err.statusCode : 500;
    console.log(err.stack.red);
    console.log(err.name);
    res.status(statusCode).json({
        success: false,
        error: err.message || 'Server Error'
    });
};

module.exports = errorHandler;
