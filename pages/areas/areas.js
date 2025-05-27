document.addEventListener('DOMContentLoaded', async function() {
    const area = "Mistieri"
    const response = await fetch(`http://localhost:3000/brinquedos/areas${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        authorization: "Bearer" + token
    });

    const data = await response.json();
    console.log(data);
});