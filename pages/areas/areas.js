document.addEventListener('DOMContentLoaded', async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const area = urlParams.get('area');
    const token = String(localStorage.getItem('token').replaceAll('"', ''));
    const response = await fetch(`http://localhost:3000/brinquedos/area/${area}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
     
    });

    const data = await response.json();
    console.log(data);
    for (var brinquedo of data.resultado) {
        console.log(brinquedo);

        const grid = document.querySelector('.rides-grid');
        grid.innerHTML = grid.innerHTML + `
                <div class="rides-grid">
            <div class="ride-card">
                <div class="ride-image" style="background-image: url('../../images/${brinquedo.image}')"></div>
                <div class="ride-info">
                    <h3 class="ride-name">${brinquedo.name}</h3>
                    <div class="ride-time">${brinquedo.waiting_time} min</div>
                    <span class="ride-status status-busy">${brinquedo.status}</span>
                </div>
            </div>`
    }

    
});