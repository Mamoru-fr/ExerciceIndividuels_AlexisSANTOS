const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const client_name = document.getElementById('client_name');
console.log(name);
console.log(client_name);
client_name.textContent = `Bonjour ${name} ! `;

async function commanderPlat(plat) {
  try {
    const resp = await fetch('http://localhost:3000/order', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        plate_id: plat.id,
        client_id: clientID,
      }),
    });
    const data = await resp.json();
    if (!data.ok) throw new Error(data.error);
    alert(`✅ ${data.message}`);
  } catch (e) {
    alert("❌ Impossible d'envoyer la commande.", e.message);
    console.error(e);
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

fetchMenus();
