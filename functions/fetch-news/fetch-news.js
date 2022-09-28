/* eslint @typescript-eslint/no-var-requires: "off" */
const axios = require('axios')

// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {


    const API_SECRET_KEY = 'ux3TjXnpDA7sUjyF08dNK0o0JBHfcbGb';
    var { select } = event.queryStringParameters;
    const url = `https://api.nytimes.com/svc/topstories/v2/${select}.json?api-key=${API_SECRET_KEY}`


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
