// Ao carregar a página de perfil, preenche os campos com os dados do usuário salvos no localStorage

document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        // Exemplo: ajuste os campos conforme o seu objeto "user"
        document.getElementById('user-name').textContent = user.nome || 'Meu Perfil';
        document.getElementById('user-email').textContent = user.email || '';
        document.getElementById('login').value = user.email || '';
        document.getElementById('nome').value = user.nome || '';
        document.getElementById('sobrenome').value = user.sobrenome || '';
        document.getElementById('data_nascimento').value = user.data_nascimento || '';
        document.getElementById('telefone').value = user.telefone || '';
        // Se tiver foto de perfil:
        if (user.foto) {
            document.querySelector('.profile-image-container img').src = user.foto;
        }
    }
});

// Para salvar as alterações feitas pelo usuário:
document.querySelector('.primary-button').addEventListener('click', function (e) {
    e.preventDefault();
    const user = {
        email: document.getElementById('login').value,
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        data_nascimento: document.getElementById('data_nascimento').value,
        telefone: document.getElementById('telefone').value,
        // Adicione outros campos se necessário
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Dados salvos com sucesso!');
});