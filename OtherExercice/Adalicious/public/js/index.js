document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('nameForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        
        try {
            const response = await fetch(`http://localhost:3000/alreadyclient?name=${encodeURIComponent(name)}`);
            console.log(response);
            const data = await response.json();
            console.log('Response from server:', data);
            
            // Redirect to menu page with the client ID
            window.location.href = `http://localhost:3001/menu?clientId=${data.id}`;
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        }
    });
});