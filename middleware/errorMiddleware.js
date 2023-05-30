const errorHandler = (error, req, res, next) => {
    // console.log(res.statusCode);
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === "production" ? null : error.stack,
    });
    next(error);
};
module.exports = errorHandler;