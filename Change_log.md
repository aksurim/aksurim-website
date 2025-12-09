# Change Log - Aksurim LP

## [2024-07-27] - FASE 5 (Ajustes Finos de Layout e Tipografia)
### Modificado
- **Layout do Card:** O conteúdo de texto foi redistribuído entre a Coluna 1 e a Coluna 2 para melhor equilíbrio visual.
- **Tipografia:** Realizados ajustes finos nos tamanhos e pesos das fontes do título principal, título secundário e navegação para refinar a hierarquia visual. A quebra de linha e o negrito no título principal foram ajustados manualmente para maior impacto.

## [2024-07-27] - FASE 5 (Revisão da Arquitetura de Layout)
### Modificado
- **Arquitetura de Layout:** O design foi revisto para uma estrutura de 3 colunas, com a imagem da segunda coluna sendo um elemento de posição fixa para permitir a rolagem do conteúdo principal.

## [2024-07-27] - FASE 5 (Reestruturação do Layout)
### Modificado
- **Layout do Card:** O layout do card principal foi reestruturado para um design de 2 colunas, incluindo uma nova barra de navegação, novos textos com cores específicas e botões de ação (desabilitados).
- **Conteúdo:** O conteúdo de texto foi completamente alterado para refletir a nova proposta de valor.

## [2024-07-27] - FASE 5 (Início do Redesign)
### Adicionado
- **Planejamento:** Início da fase de redesign da "Nova Página".
- **Estrutura Git:** O branch `master` foi renomeado para `main`. Foram criados os branches `Nova_Page` (base) e `feat/card-secundario` (trabalho) para o desenvolvimento da nova estrutura de layout.

## [2024-07-27] - FASE 4 (Conclusão e Decisão de Arquitetura)
### Modificado
- **Arquitetura CSS:** Após tentativa de migração para uma instalação local do Tailwind CSS via `npm`, foram encontrados problemas de ambiente que impediram a execução dos scripts de compilação.
- **Decisão:** Para garantir a estabilidade e a manutenibilidade do projeto, a migração foi revertida. O projeto continuará utilizando o Tailwind CSS via CDN, com as cores personalizadas da marca configuradas diretamente no `index.html`. Esta abordagem se mostrou robusta e funcional no ambiente de desenvolvimento atual.

## [2024-07-27] - FASE 4 (Polimento e Otimização)
### Adicionado
- **Otimização Mobile:** O número de partículas da animação agora é reduzido em telas menores para garantir melhor performance.
### Modificado
- **Animação de Entrada:** O efeito de "fade-in" foi aprimorado para uma animação "staggered" (em cascata), proporcionando uma entrada mais elegante dos elementos na tela.

## [2024-07-27] - FASE 4 (Polimento)
### Adicionado
- **Animação de Entrada:** Implementado um efeito de "fade-in" suave para o conteúdo da página no carregamento, melhorando a experiência inicial do usuário.

## [2024-07-27] - FASE 3 Concluída (Responsividade)
### Adicionado
- **Responsividade:** Aplicadas classes responsivas do Tailwind CSS para ajustar fontes e espaçamentos em dispositivos móveis.
### Modificado
- **Ajuste de UI (Logo):** O tamanho da logo foi reduzido e o espaçamento superior aumentado para melhor alinhamento visual, conforme feedback.

## [2024-07-27] - FASE 3 Concluída
### Adicionado
- **Conteúdo Principal:** Inserção do Header com a logo (`logo.png`), da Hero Section com textos (`H1`, `H2`) e do Footer com os devidos créditos.
- **Efeito Visual:** Implementado o efeito "Glassmorphism" no container central.
### Modificado
- **Ajuste de UI:** A translucidez do container foi aumentada (opacidade de 20% para 10%) para melhor integração visual, conforme solicitado.

## [2024-07-27] - FASE 1 & 2 Concluídas
### Adicionado
- **Estrutura HTML:** Arquivo `index.html` criado com estrutura semântica, importação de fontes (Montserrat) e Tailwind CSS via CDN.
- **Canvas de Partículas:** Implementado o script `script.js` com a lógica da animação "Particle Network".
- **Estilo Visual:** As cores das partículas (`#DAF043`, `#06777F`) e do fundo (`#282828`) foram aplicadas conforme o `Blueprint.md`. As linhas de conexão têm opacidade de 10% para garantir a legibilidade.

## [Início do Projeto] - 2025-12-09
### Adicionado
- Criação dos arquivos de documentação iniciais.
- Definição da identidade visual baseada no Brand Book da Aksurim.
- Definição da arquitetura "Particle Network".