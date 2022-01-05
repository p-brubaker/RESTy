/* eslint-disable indent */

async function fetchRequest({ url, params, method, body, token }) {
    // if (params) {
    //     url = new URL(url);
    //     url.search = new URLSearchParams(params).toString();
    // }

    // const res = await fetch(url, {
    //     method,
    //     headers: token
    //         ? {
    //               'Content-Type': 'application/json',
    //               Authorization: token,
    //           }
    //         : {
    //               'Content-Type': 'application/json',
    //           },
    //     body,
    // });

    // const data = await res.json();
    // return data;
    const res = await fetch('https://glacial-journey-79252.herokuapp.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, params, method, body, token }),
    });

    return res.json();
}

export default fetchRequest;
