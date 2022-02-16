/* eslint-disable indent */

async function fetchRequest({ url, params, method, body, token }) {
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
