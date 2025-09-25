async function updateOrderStatus(orderId, newStatus) {
    try {
        const resp = await fetch(`http://localhost:3000/orderstatus/${orderId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ status: newStatus })
        });
        const data = await resp.json();
        console.log('Order status updated:', data);
        if (!data.ok) {
            alert(`Erreur lors de la mise à jour du statut: ${data.message}`);
        } else {
            // Refresh the orders list after successful update
            await fetchCommandes();
        }
    } catch (error) {
        console.error('Erreur dans updateOrderStatus:', error);
        alert('Une erreur est survenue lors de la mise à jour du statut.');
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

async function fetchCommandes() {
  try {
    const res = await fetch(`http://localhost:3000/olderOrders`);
    const commandes = await res.json();
    console.log('commandes', commandes);
    const ul = document.getElementById('commandes-list');
    ul.innerHTML = '';
    commandes.forEach(commande => {
        const li = document.createElement('li');
        const emoji = document.createElement('span');
        emoji.textContent = commande.images;
        li.appendChild(emoji);
        const plates = document.createElement('strong');
        plates.textContent = commande.Plates;
        li.appendChild(plates);
        const UserNameEl = document.createElement('p');
        UserNameEl.textContent = "Commande de " + commande.UserName;
        li.appendChild(UserNameEl);
        const status = document.createElement('em');
        status.setAttribute('data-status', commande.Status.toLowerCase());
        // Add status icon based on the status
        const statusIcon = getStatusIcon(commande.Status);
        status.textContent = `${statusIcon} Statut: ${commande.Status}`;
        li.appendChild(status);

        ul.appendChild(li);
    });
  } catch (err) {
    console.error('Erreur :', err);
  }
}

fetchCommandes();