const params = new URLSearchParams(window.location.search);
const clientID = params.get('clientId');

// Function to fetch and display client name
async function fetchClientName() {
    try {
        const response = await fetch(`http://localhost:3000/clients/${clientID}`);
        const clientData = await response.json();
        console.log('Client data:', clientData);
        
        if (clientData && clientData.length > 0) {
            const title = document.querySelector('h1');
            title.textContent = `🍽️ Commandes de ${clientData[0].name}`;
        }
    } catch (error) {
        console.error('Error fetching client name:', error);
    }
}

async function fetchClientOrders() {
    try {
        const response = await fetch(`http://localhost:3000/orders/${clientID}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Erreur lors de la récupération des commandes');
        }
        
        console.log('Orders data:', data);
        const ul = document.getElementById('commandes-list');
        ul.innerHTML = '';
        
        if (!data.orders || data.orders.length === 0) {
            const message = document.createElement('p');
            message.textContent = "Vous n'avez pas encore de commandes.";
            message.style.textAlign = 'center';
            message.style.color = 'white';
            ul.appendChild(message);
            return;
        }
        
        data.orders.forEach(order => {
            const li = document.createElement('li');
            li.setAttribute('data-status', order.Status.toLowerCase());
            
            // Emoji and plate name
            const emoji = document.createElement('span');
            emoji.textContent = order.images;
            li.appendChild(emoji);
            
            const nameEl = document.createElement('strong');
            nameEl.textContent = order.Plates;
            li.appendChild(nameEl);
            
            // Add description if available
            if (order.Description) {
                const descEl = document.createElement('p');
                descEl.textContent = order.Description;
                li.appendChild(descEl);
            }
            
            // Status with icon
            const statusEl = document.createElement('em');
            const statusIcon = getStatusIcon(order.Status);
            statusEl.textContent = `${statusIcon} Statut: ${order.Status}`;
            li.appendChild(statusEl);
            
            ul.appendChild(li);
        });
        
    } catch (error) {
        console.error('Error fetching orders:', error);
        const ul = document.getElementById('commandes-list');
        ul.innerHTML = `<p class="error">Erreur: ${error.message}</p>`;
    }
}

function getStatusIcon(status) {
    switch(status.toLowerCase()) {
        case 'pending':
            return '⏳';
        case 'ready':
            return '✅';
        case 'cancelled':
            return '❌';
        default:
            return '❓';
    }
}

// Auto-refresh orders every 30 seconds
function startAutoRefresh() {
    setInterval(fetchClientOrders, 30000);
}

// Check if we have a valid clientID
if (!clientID) {
    console.error('No client ID provided');
    window.location.href = 'http://localhost:3001/';
} else {
    fetchClientName();
    fetchClientOrders();
    startAutoRefresh();
}