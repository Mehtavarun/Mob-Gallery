import { API_URL } from './util';
export async function request(method = 'GET', url, body) {
  const res = await fetch(API_URL + url, getHttpConfig(method, body));
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
    'Content-Type': 'application/json',
    'Access-Control-Expose-Headers': 'X-Total-Count'
  };
  return headers;
}

async function getResponse(res) {
  if (res.ok) {
    const body = await res.json();
    return {
      status: res.status,
      body,
      count: res.headers.get('x-total-count')
    };
  } else {
    alert('Server error: ' + res.status);
  }
}
