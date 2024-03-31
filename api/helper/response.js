const successResponse = (
  res,
  httpStatusCode,
  message,
  data,
  totalCount,
  sortObject,
  page,
  limit,
  totalPage
) => {
  var response = {
    success: true,
    message: message || "Success",
    currentPage: page || 1,
    data_perPage: limit,
    totalCount: totalCount || "",
    totalPage: totalPage || 1,
    sort: sortObject || "",
    data: data || [],
  };
  var statusCode = httpStatusCode || 200;
  res.status(statusCode).send(response);
};
const errorResponse = (res, httpStatusCode, message) => {
  var response = {
    success: false,
    message: message || "Internal Server Error",
  };
  var statusCode = httpStatusCode || 500;
  res.status(statusCode).send(response);
};
const responseHandler = (
  res,
  httpStatusCode,
  message,
  data,
  currentPage,
  limit,
  totalCount,
  totalPage,
  sort
) => {
  if (
    httpStatusCode === 200 ||
    httpStatusCode === 201 ||
    httpStatusCode === 202
  ) {
    successResponse(
      res,
      httpStatusCode,
      message,
      data,
      currentPage,
      limit,
      totalCount,
      totalPage,
      sort
    );
  } else {
    errorResponse(res, httpStatusCode, message);
  }
};

// export default {successResponse, errorResponse, responseHandler };
module.exports = { successResponse, errorResponse, responseHandler };