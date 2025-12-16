# Instituto Tabuleiro Website

Site moderno e responsivo para o Instituto Tabuleiro, construído com Next.js e TypeScript. O site apresenta o trabalho do instituto na conservação ambiental, pesquisa e educação na região da Serra do Tabuleiro em Santa Catarina, Brasil.

## Funcionalidades

- **Design Responsivo**: Otimizado para desktop, tablet e dispositivos móveis com layouts específicos
- **Projetos Dinâmicos**: Páginas detalhadas para projetos de pesquisa, planos de conservação e programas educacionais
- **Elementos Interativos**: Animações suaves e efeitos hover usando Tailwind CSS
- **Integração de Modelo 3D**: Modelo 3D interativo de tucano usando Three.js com React Three Fiber
- **Mapa Interativo**: Integração com Google Maps mostrando a área do Parque Estadual
- **Tela de Carregamento**: Loading screen animada com progresso
- **Backgrounds Dinâmicos**: Rotação automática de imagens de fundo

## Páginas

- **Home**: Landing page com hero section, modelo 3D do tucano e visão geral do instituto
- **Sobre**: Informações sobre história, missão, visão, valores e equipe do instituto
- **Projetos**: Lista e visualização detalhada de projetos de pesquisa e publicações com carrossel de imagens
- **Localização**: Mapa interativo do Google Maps com polígono da área do parque
- **Contato**: Informações de contato do instituto

## Tecnologias Utilizadas

- **Next.js 15**: Framework React com Turbopack para desenvolvimento
- **TypeScript**: JavaScript com tipagem estática
- **Tailwind CSS 4**: Framework CSS utility-first
- **React 19**: Biblioteca de UI baseada em componentes
- **Three.js / React Three Fiber**: Biblioteca de gráficos 3D para o modelo do tucano
- **@react-google-maps/api**: Integração com Google Maps
- **react-icons**: Biblioteca de ícones
- **scroll-into-view-if-needed**: Scroll suave para navegação
- **ESLint**: Linting de código

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/BernardoBrugg/P01front.git
   cd P01front
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:

   ```bash
   cp .env.example .env.local
   ```

   Adicione sua chave da API do Google Maps:

   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=sua_chave_aqui
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Layout raiz
│   ├── globals.css           # Estilos globais
│   ├── components/
│   │   ├── DesktopHome.tsx   # Layout home desktop
│   │   ├── MobileHome.tsx    # Layout home mobile
│   │   └── Carousel.tsx      # Componente carrossel
│   ├── sobre/
│   │   └── page.tsx          # Página sobre
│   ├── projetos/
│   │   ├── page.tsx          # Lista de projetos
│   │   ├── [id]/
│   │   │   ├── page.tsx      # Detalhe do projeto
│   │   │   └── publications.ts
│   │   └── components/
│   │       └── Carousel.tsx
│   ├── local/
│   │   └── page.tsx          # Página de localização
│   └── contato/
│       └── page.tsx          # Página de contato
├── components/
│   ├── header.tsx            # Cabeçalho de navegação
│   ├── footer.tsx            # Rodapé do site
│   ├── tucan.tsx             # Componente 3D do tucano
│   ├── LoadingScreen.tsx     # Tela de carregamento
│   ├── cardPublications.tsx  # Card de publicação
│   ├── cardContacts.tsx      # Card de contato
│   └── localizationModal.tsx # Mapa de localização
└── public/
    ├── logo.svg
    ├── logo.jpg
    ├── toucan-optimized.glb  # Modelo 3D do tucano
    ├── Fotos extras/         # Imagens de background
    └── [pastas de projetos]/ # Imagens dos projetos
```

## Scripts

- `npm run dev`: Inicia servidor de desenvolvimento com Turbopack
- `npm run build`: Build para produção
- `npm run start`: Inicia servidor de produção
- `npm run lint`: Executa ESLint

## Deploy

O site está configurado para deploy na Vercel ou qualquer plataforma que suporte Next.js.

## Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature
3. Faça suas alterações
4. Execute testes e linting
5. Envie um pull request

## Desenvolvido por

Bernardo Brüggemann - Estudante de Engenharia

[GitHub](https://github.com/BernardoBrugg/P01front.git)
