# Blueprint do Projeto: Landing Page Aksurim (Coming Soon)

## 1. Visão Geral
Desenvolvimento de uma Landing Page de alta performance e impacto visual ("High-End"). O objetivo é apresentar a **Aksurim Software** como uma empresa de tecnologia sólida e inovadora. O site não terá captura de leads no momento, focando exclusivamente em branding e antecipação.

## 2. Stack Tecnológica
- **Estrutura:** HTML5 Semântico.
- **Estilização:** Tailwind CSS (via CDN para agilidade nesta fase).
- **Animações/Visual:** HTML5 Canvas (Script customizado leve ou biblioteca 'tsParticles').
- **Fontes:** Google Fonts ('Montserrat').
- **Ícones:** FontAwesome ou Heroicons (SVG).

## 3. Identidade Visual (Brand Book)
Baseado estritamente no PDF de apresentação:
- **Tipografia:** 'Montserrat' (Regular 400, SemiBold 600, Bold 700).
- **Paleta de Cores:**
    - `bg-primary`: #282828 (Fundo Dark/Principal)
    - `accent-lime`: #DAF043 (Destaque Principal/Ação)
    - `brand-teal`: #06777F (Elementos gráficos/Partículas)
    - `accent-orange`: #FB4629 (Detalhes secundários)
    - `text-light`: #F5F5F5 (Texto principal para contraste)

## 4. Estrutura da Página (Single Page)

### A. Background (Particle Network)
- **Efeito:** Rede de partículas conectadas (nós e arestas).
- **Comportamento:** Movimento suave e contínuo. Reação sutil ao mouse (hover).
- **Estética:** Partículas nas cores da marca (#DAF043 e #06777F). Linhas de conexão com opacidade ultra-baixa (10%) para não poluir a leitura.

### B. Header
- Logo "Aksurim" alinhada à esquerda (Texto estilizado ou SVG placeholder).
- Z-index superior para flutuar sobre as partículas.

### C. Hero Section (Centro da Tela)
- **Container:** Deve usar técnica de "Glassmorphism" (Fundo translúcido com `backdrop-filter: blur`) para destacar o texto sobre as partículas.
- **H1 (Manchete):** "O próximo nível do seu negócio em um clique."
- **Subtítulo:** "Descomplicando seu jeito de fazer negócios. A plataforma inteligente que simplifica o controle da sua empresa."
- **Status:** Badge animado (Pulse) com texto: "Em Breve" ou "Sistema em Construção".

### D. Footer
- Copyright: "© 2025 Aksurim Software".
- Créditos: "Joannderson Lucena - CEO/Developer".
- Links Sociais: Ícones minimalistas (LinkedIn, GitHub).

## 5. Diretrizes de UX/UI
- **Responsividade:** O Canvas de partículas deve se ajustar a telas de celular (reduzir quantidade de nós para performance).
- **Legibilidade:** Contraste é prioridade. Texto branco sobre fundo escuro.