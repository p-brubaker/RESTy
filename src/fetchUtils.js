/* eslint-disable indent */
async function fetchRequest({ url, params, method, body, auth }) {
    if (params) {
        url = new URL(url);
        url.search = new URLSearchParams(params).toString();
    }

    const res = await fetch(url, {
        method,
        headers: auth
            ? {
                  'Content-Type': 'application/json',
                  Authorization: auth.token,
              }
            : {
                  'Content-Type': 'application/json',
              },
        body,
    });

    const data = await res.json();
    return data;
}

export default fetchRequest;
