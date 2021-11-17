/* eslint-disable indent */
// Hi
async function fetchRequest({ url, params, method, body, token }) {
    if (params) {
        url = new URL(url);
        url.search = new URLSearchParams(params).toString();
    }

    const res = await fetch(url, {
        method,
        headers: token
            ? {
                  'Content-Type': 'application/json',
                  Authorization: token,
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
