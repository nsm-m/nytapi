
/* eslint @typescript-eslint/no-var-requires: "off" */
const axios = require('axios');

const handler = async (event) => {
  const { long, lat } = event.queryStringParameters;
  const weatherKey = process.env.WEATHER_SECRET;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}&units=metric`;


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
