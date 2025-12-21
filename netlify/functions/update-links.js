let storedData = {
  prices: []
};

exports.handler = async (event) => {

  // POST = Daten von n8n empfangen
  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    storedData.prices = body.prices;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }

  // GET = Daten an die Webseite liefern
  if (event.httpMethod === "GET") {
    return {
      statusCode: 200,
      body: JSON.stringify(storedData)
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};

