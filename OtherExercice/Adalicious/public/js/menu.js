const params = new URLSearchParams(window.location.search);
const clientID = params.get('clientId');
const client_name = document.getElementById('client_name');

// Function to fetch and display client name
async function fetchClientName() {
    try {
        const response = await fetch(`http://localhost:3000/clients/${clientID}`);
        const clientData = await response.json();
        console.log('Client data:', clientData);
        
        if (clientData && clientData.length > 0) {
            client_name.textContent = `Bonjour ${clientData[0].name} ! `;
        } else {
            client_name.textContent = 'Bonjour ! ';
            console.error('No client data found');
        }
    } catch (error) {
        console.error('Error fetching client name:', error);
        client_name.textContent = 'Bonjour ! ';
    }
}

async function commanderPlat(plat) {
  try {
    console.log("Commande de ce plat:", plat);
    const resp = await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        plate_id: plat.id,
        client_id: parseInt(clientID) // Ensure client_id is a number
      })
    });

    const data = await resp.json();
    if (!data.ok) throw new Error(data.error);
    alert(`✅ ${data.message}`);
  } catch (e) {
    console.error('Erreur de commande:', e);
    alert(`❌ Impossible d'envoyer la commande: ${e.message}`);
  }
}

async function fetchMenus() {
  try {
    const res = await fetch(`http://localhost:3000/menu`);
    const menus = await res.json();
    console.log('menus', menus);
    const ul = document.getElementById('menu-list');
    ul.innerHTML = '';
    menus.forEach(plat => {
      const li = document.createElement('li');
      const emoji = document.createElement('span');
      emoji.textContent = plat.images;
      li.appendChild(emoji);
      const nameEl = document.createElement('strong');
      nameEl.textContent = plat.name;
      li.appendChild(nameEl);
      const desc = document.createElement('p');
      desc.textContent = plat.desc;
      li.appendChild(desc);
      const btn = document.createElement('button');
      btn.textContent = 'Commander';
      btn.addEventListener('click', () => commanderPlat(plat));
      li.appendChild(btn);
      ul.appendChild(li);
    });
  } catch (err) {
    console.error('Erreur :', err);
  }
}

// Check if we have a valid clientID
if (!clientID) {
    console.error('No client ID provided');
    window.location.href = 'http://localhost:3001/';
} else {
    fetchClientName();
    fetchMenus();
}
