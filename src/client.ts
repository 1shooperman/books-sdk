const axios = require('axios');
const logger = require('logger');

// const client = axios.create({
//   baseURL: `${JIRA_API_HOSTNAME}/${JIRA_API_BASEPATH}`,
//   auth: {
//     username: JIRA_API_USER,
//     password: JIRA_API_KEY,
//   },
// });

// client.interceptors.response.push((response) => {
//   if (response.status >= 400) {
//     logger.info(logger.format(err));
//     logger.info('\nAttemping to Recover.\n');
//   }
//   return response;
// });

module.exports = axios;
