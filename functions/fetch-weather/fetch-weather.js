
/* eslint @typescript-eslint/no-var-requires: "off" */
const axios = require('axios');
// require('dotenv').config()
// console.log(process.env)





// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const { long, lat } = event.queryStringParameters;

  const API_SECRET_KEY = "8bf1e6357a7a55a3d9796e4e906bc623";
  const API_SECRET = process.env.API_SECRET;
  const test1 = JSONAPI_SECRET


  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_SECRET_KEY}&units=metric`;
  //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_SECRET}&units=metric`;


  try {
    const response = await axios.get(url);

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),

    }
  } catch (error) {
    return {
      statusCode: 422,
      body: `Error: ${error}`
    }
  }
}

module.exports = { handler }
