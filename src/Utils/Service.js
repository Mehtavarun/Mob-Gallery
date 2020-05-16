export async function request(method = 'GET', url, body = {}) {
  const res = await fetch(url, getHttpConfig(method, body));
  return await getResponse(res);
}

function getHttpConfig(method, body) {
  return {
    method,
    headers: getRequestHeaders(),
    body: JSON.stringify(body)
  };
}

function getRequestHeaders() {
  let headers = {
    'Content-Type': 'application/json'
  };
  return headers;
}

async function getResponse(res) {
  const body = await res.json();
  return {
    status: res.status,
    body: {
      ...body
    }
  };
}
