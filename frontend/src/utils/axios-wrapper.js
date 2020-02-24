/* eslint-disable no-undef */
/**
 * Configure axios to work with django and add global ajax error handling
 */
import axios from "axios";

// configure CSRF token
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

axios.interceptors.response.use(
  response => response,
  error => {
    const resp = error.response;

    if (resp) {
      if ((resp.status >= 500 && resp.status < 600) || resp.status === 0) {
        console.log("SERVER ERROR");
      } else if (resp.status === 401) {
        console.log("AUTHENTICATION ERROR");
      } else if (resp.status === 403) {
        console.log("PERMISSIONS ERROR");
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
