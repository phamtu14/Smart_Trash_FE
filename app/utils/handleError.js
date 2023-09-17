export const handleError = errorBody => {
  const { message } = errorBody;
  const code = errorBody.status;

  switch (code) {
    case 400:
      // Xu ly loi 400
      break;
    case 401:
      // Xu ly loi 401
      break;
    case 404:
      // Xu ly loi 404
      break;
    default:
      console.log(message);
      break;
  }
};
