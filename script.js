// Exemplo simples para monitorar cliques (pode ser integrado ao Firebase futuramente)
document.querySelectorAll('.link-card').forEach(link => {
    link.addEventListener('click', (e) => {
        const linkName = e.currentTarget.querySelector('span').innerText;
        console.log(`Clicou em: ${linkName}`);
        // Aqui você poderia enviar um evento de analytics
    });
});
