/* eslint @typescript-eslint/no-var-requires: "off" */
const axios = require('axios')

const handler = async (event) => {


    const newsKey = process.env.NEWS_SECRET;
    var { select } = event.queryStringParameters;
    const url = `https://api.nytimes.com/svc/topstories/v2/${select}.json?api-key=${newsKey}`


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
