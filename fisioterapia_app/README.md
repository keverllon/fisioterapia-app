# DR Roberta - Fisioterapia

Aplicativo de consulta de patologias e tratamentos de fisioterapia.

## Funcionalidades

- 📋 Banco de dados com 144 patologias
- 🔍 Busca por nome, causa ou tratamento
- ⭐ Favoritos
- 📱 funcionando como PWA (pode instalar)

## Como Usar

### Opção 1: Abrir diretamente
```bash
Abra o arquivo index.html no navegador
```

### Opção 2: Servidor local
```bash
# Instalar http-server (se não tiver)
npm install -g http-server

# Rodar servidor
npx http-server -p 8080
```

### Opção 3: Usar extensão VS Code
1. Instale a extensão "Live Server" no VS Code
2. Abra a pasta no VS Code
3. Clique com botão direito no index.html → "Open with Live Server"

### Opção 4: Installar como App PWA
1. Abra no Chrome/Edge
2. Vá no menu → "Install DR Roberta" ou ícone de install na barra de endereço

## Estrutura

```
fisioterapia_app/
├── index.html      # Interface principal
├── styles.css     # Estilos visuais
├── app.js         # Lógica do aplicativo
├── patologias.js # Banco de dados
├── manifest.json # Manifesto PWA
├── sw.js          # Service Worker
└── icons/        # Ícones do app
```

## Tecnologias

- HTML5, CSS3, JavaScript ES6+
- PWA (Progressive Web App)
- Design responsivo
- Service Worker para offline

## Autor

Desenvolvido para a Clínica DR Roberta

---

© 2025 DR Roberta - Fisioterapia