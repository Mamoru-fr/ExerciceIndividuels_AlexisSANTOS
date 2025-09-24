async function fetchCommandes() {
  try {
    const res = await fetch(`http://localhost:3000/orders`);
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
        const btn = document.createElement('button');
        btn.textContent = 'Commander';
        btn.addEventListener('click', () => commanderPlat(commande));
        li.appendChild(btn);
        ul.appendChild(li);
    });
  } catch (err) {
    console.error('Erreur :', err);
  }
}

fetchCommandes();