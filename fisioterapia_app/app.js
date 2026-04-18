// DR Roberta - Fisioterapia App
// Aplicativo de consulta de patologias e tratamentos de fisioterapia

let allPatologias = [];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';
let searchTerm = '';

// Inicializar o aplicativo
function init() {
    console.log('🚀 Inicializando DR Roberta...');
    try {
        loadPatologias();
        console.log('✅ Patologias carregadas:', patologias.length);
        renderCategories();
        console.log('✅ Categorias renderizadas');
        renderPatologias();
        console.log('✅ Lista renderizada');
        setupEventListeners();
        console.log('✅ Event listeners configurados');
        registerServiceWorker();
        console.log('🚀 App iniciado com sucesso!');
    } catch(e) {
        console.error('❌ Erro:', e);
    }
}

// Carregar patologias
function loadPatologias() {
    allPatologias = patologias;
    updateTotalCount();
}

// Atualizar contador total
function updateTotalCount() {
    const count = getFilteredPatologias().length;
    document.getElementById('totalCount').textContent = `${count} patologias`;
}

// Renderizar categorias
function renderCategories() {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = '';

    const categoriesWithCount = {};
    patologias.forEach(p => {
        categoriesWithCount[p.categoria] = (categoriesWithCount[p.categoria] || 0) + 1;
    });

    const categoryIcons = {
        'Coluna Vertebral': '🧍',
        'Ombro': '💪',
        'Cotovelo': '🦾',
        'Punho e Mão': '🖐️',
        'Quadril e Pelve': '🦵',
        'Joelho': '🦿',
        'Tornozelo e Pé': '🦶',
        'Sistema Neurológico': '🧠',
        'Sistema Respiratório': '🫁',
        'Sistema Cardiovascular': '❤️',
        'Reumatológico': '🦴',
        'Pediátrico': '👶',
        'Geriátrico': '👴',
        'Ginecológico/Uroginecológico': '♀️',
        'Esportivo': '⚽',
        'Pós-Operatório': '🏥',
        'Dor': '🤕',
        'Outras Condições': '🏥'
    };

    // Ordenar categorias por quantidade
    const sortedCats = Object.keys(categoriesWithCount).sort((a, b) => categoriesWithCount[b] - categoriesWithCount[a]);

    sortedCats.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => filterByCategory(cat);
        card.innerHTML = `
            <div class="category-icon">${categoryIcons[cat] || '🏥'}</div>
            <div class="category-info">
                <h3>${cat}</h3>
                <span>${categoriesWithCount[cat]} patologias</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Renderizar lista de patologias
function renderPatologias() {
    const grid = document.getElementById('patologiasGrid');
    grid.innerHTML = '';

    let filteredPatologias = getFilteredPatologias();

    if (filteredPatologias.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1">
                <span>🔍</span>
                <h3>Nenhuma patologia encontrada</h3>
                <p>Tente buscar por outro termo ou categoria</p>
            </div>
        `;
        return;
    }

    filteredPatologias.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'patologia-card';
        card.style.animationDelay = `${Math.min(index * 0.05, 0.4)}s`;
        card.onclick = () => showDetail(p);
        
        const isFavorite = favorites.includes(p.id);
        
        card.innerHTML = `
            <div class="patologia-info">
                <h3>${p.nome}</h3>
                <p>${p.causas.substring(0, 100)}...</p>
            </div>
            <div class="patologia-actions">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(event, ${p.id})">
                    ${isFavorite ? '⭐' : '☆'}
                </button>
                <span class="arrow-icon">→</span>
            </div>
        `;
        grid.appendChild(card);
    });

    updateTotalCount();
}

// Obter patologias filtradas
function getFilteredPatologias() {
    let filtered = [...patologias];

    // Filtrar por termo de busca
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(p => 
            p.nome.toLowerCase().includes(term) ||
            p.causas.toLowerCase().includes(term) ||
            p.categoria.toLowerCase().includes(term) ||
            p.tratamentos.some(t => t.toLowerCase().includes(term))
        );
    }

    // Filtrar por categoria
    if (currentFilter !== 'all') {
        if (currentFilter === 'favorites') {
            filtered = filtered.filter(p => favorites.includes(p.id));
        } else {
            filtered = filtered.filter(p => p.categoria === currentFilter);
        }
    }

    return filtered;
}

// Filtrar por categoria
function filterByCategory(category) {
    currentFilter = category;
    searchTerm = '';
    document.getElementById('searchInput').value = '';
    renderPatologias();
    document.getElementById('patologiasList').scrollIntoView({ behavior: 'smooth' });
    
    // Atualizar título
    document.querySelector('.list-header h2').textContent = category;
}

// Limpar filtros
function clearFilters() {
    currentFilter = 'all';
    searchTerm = '';
    document.getElementById('searchInput').value = '';
    document.querySelector('.list-header h2').textContent = 'Todas as Patologias';
    renderPatologias();
}

// Mostrar detalhes
function showDetail(patologia) {
    document.getElementById('patologiasList').style.display = 'none';
    document.getElementById('categoriesGrid').parentElement.style.display = 'none';
    document.querySelector('.search-container').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';

    document.getElementById('detailTitle').textContent = patologia.nome;
    document.getElementById('detailCausas').textContent = patologia.causas;

    const tratamentosList = document.getElementById('detailTratamentos');
    tratamentosList.innerHTML = patologia.tratamentos
        .map(t => `<li>${t}</li>`)
        .join('');
}

// Fechar detalhes
function closeDetail() {
    document.getElementById('detailView').style.display = 'none';
    document.getElementById('patologiasList').style.display = 'block';
    document.getElementById('categoriesGrid').parentElement.style.display = 'block';
    document.querySelector('.search-container').style.display = 'block';
}

// Alternar favorito
function toggleFavorite(event, id) {
    event.stopPropagation();
    
    const index = favorites.indexOf(id);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(id);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderPatologias();
}

// Mostrar favoritos
function showFavorites() {
    currentFilter = 'favorites';
    renderPatologias();
    document.getElementById('patologiasList').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.list-header h2').textContent = 'Meus Favoritos';
}

// Mostrar início
function showHome() {
    clearFilters();
}

// Mostrar sobre
function showAbout() {
    document.getElementById('patologiasList').style.display = 'none';
    document.getElementById('categoriesGrid').parentElement.style.display = 'none';
    document.querySelector('.search-container').style.display = 'none';
    document.getElementById('detailView').style.display = 'block';

    document.getElementById('detailTitle').textContent = 'Sobre o App';
    document.getElementById('detailCausas').innerHTML = `
        <div class="about-content">
            <h2 style="font-size:28px;color:var(--primary-dark);margin-bottom:10px">🩺 DR Roberta</h2>
            <p class="version" style="font-size:14px;color:var(--text-light);margin-bottom:20px;font-weight:600">Fisioterapia v1.0.0</p>
            <p style="font-size:15px;line-height:1.7;color:var(--text-secondary);margin-bottom:14px">Este aplicativo contém um banco de dados completo de patologias tratadas por fisioterapia, com causas e tratamentos recomendados.</p>
            <p style="font-size:15px;line-height:1.7;color:var(--text-secondary);margin-bottom:14px">Desenvolvido para auxiliar profissionais e pacientes na compreensão das condições musculoesqueléticas e neurológicas.</p>
            <p style="font-size:15px;font-weight:600;color:var(--primary)">📊 ${patologias.length} patologias cadastradas</p>
        </div>
    `;
    document.getElementById('detailTratamentos').innerHTML = '';
}

// Configurar event listeners
function setupEventListeners() {
    // Busca
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value;
        currentFilter = 'all';
        document.querySelector('.list-header h2').textContent = searchTerm ? 'Resultados da Busca' : 'Todas as Patologias';
        renderPatologias();
    });

    // Tecla Enter na busca
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    });
}

// Registrar Service Worker para PWA
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW registrado:', reg))
            .catch(err => console.log('SW erro:', err));
    }
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);