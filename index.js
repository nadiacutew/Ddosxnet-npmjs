const axios = require('axios');
const colors = require('colors');

/**
 * Sends concurrent HTTP GET requests to a target URL.
 *
 * @param {string} url - The target URL.
 * @param {number} concurrency - Number of concurrent requests per batc
h.
 * @param {number} totalRequests - Total number of requests to send.
 */
const loadTest = async (url, concurrency, totalRequests) => {
  let completedRequests = 0;

  // Function to send a single request
  const sendRequest = async () => {
    try {
      await axios.get(url);
      console.log(`Request successful to ${url}`.bold.green);
    } catch (error) {
      console.error(`Error: ${error.message}`.bold.red);
    } finally {
      completedRequests++;
    }
  };

  const pool = [];
  for (let i = 0; i < totalRequests; i++) {
    pool.push(sendRequest());
    if (pool.length === concurrency) {
      await Promise.all(pool);
      pool.length = 0; // Reset pool after each batch
      console.log(`Batch completed. Total requests completed: ${complet
edRequests}`.bold.blue);
    }
  }

  // Await any remaining requests in the pool
  if (pool.length > 0) {
    await Promise.all(pool);
  }

  console.log(`All requests finished. Total completed: ${completedReque
sts}`.bold.yellow);
};

module.exports = { loadTest };
