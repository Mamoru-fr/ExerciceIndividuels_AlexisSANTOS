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
        status.textContent = `Statut: ${commande.Status}`;
        li.appendChild(status);

        // Create a container for buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginTop = '10px';

        // Create Ready button
        const btnReady = document.createElement('button');
        btnReady.textContent = 'Prêt';
        btnReady.addEventListener('click', () => updateOrderStatus(commande.id, 'ready'));
        
        // Create Cancel button
        const btnCancel = document.createElement('button');
        btnCancel.textContent = 'Annuler';
        btnCancel.addEventListener('click', () => updateOrderStatus(commande.id, 'cancelled'));
        
        // Add buttons to container
        buttonContainer.appendChild(btnReady);
        buttonContainer.appendChild(btnCancel);
        
        // Add container to list item
        li.appendChild(buttonContainer);
        ul.appendChild(li);
    });
  } catch (err) {
    console.error('Erreur :', err);
  }
}

fetchCommandes();