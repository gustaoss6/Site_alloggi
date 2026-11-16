# 🌿 ALLOGGI NEGÓCIOS IMOBILIÁRIOS

> *"Nosso maior patrimônio é você"*

[![License: MIT](https://img.shields.io/badge/License-MIT-1B4332.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D16.0.0-2D6A4F.svg)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-D8F3DC.svg?color=1B4332)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.x-1B4332.svg)](https://react.dev/)
[![CRECI-SP](https://img.shields.io/badge/CRECI--SP-257633--F-1B4332.svg)](https://www.crecisp.gov.br/)
[![CREA-SP](https://img.shields.io/badge/CREA--SP-5069708558-2D6A4F.svg)](https://www.creasp.org.br/)

**ALLOGGI NEGÓCIOS IMOBILIÁRIOS** é uma aplicação web de alto padrão desenvolvida para consultoria e curadoria imobiliária nos bairros mais nobres de São Paulo (Jardins, Itaim Bibi, Pinheiros, Vila Nova Conceição, Moema, Higienópolis e Cidade Jardim).

---

## 🏛️ Dados Institucionais Oficiais

* **Razão / Nome:** ALLOGGI NEGÓCIOS IMOBILIÁRIOS
* **Frase de Efeito (Slogan):** *"Nosso maior patrimônio é você"*
* **Celular / WhatsApp:** (11) 97169-1023
* **Telefone Fixo:** (11) 2758-6393
* **E-mail de Contato:** allogginegocios@gmail.com
* **CRECI-SP:** 257633-F (Conselho Regional de Corretores de Imóveis)
* **CREA-SP:** 5069708558 (Conselho Regional de Engenharia e Agronomia)

---

## 🎨 Design System & Identidade Visual

O design foi concebido para transmitir **confiança, frescor, sofisticação e clareza visual**, utilizando rigorosamente uma paleta em **Verde e Branco**:

| Cor | Hex | Aplicação no Projeto |
| :--- | :--- | :--- |
| **Branco Puro** | `#FFFFFF` | Cards de imóveis, card elevado de busca/filtros, navbar e modais. |
| **Off-white** | `#F4F7F5` | Fundo geral da página, tags de especificações e inputs de formulário. |
| **Verde-floresta** | `#1B4332` | Cor primária: cabeçalho, títulos principais, botões de ação e rodapé. |
| **Verde-esmeralda** | `#2D6A4F` | Estados de hover, ícones minimalistas, badges e botão *"Limpar Filtros"*. |
| **Verde-sálvia** | `#D8F3DC` | Fundo de tags de categoria (*Exclusivo*, *Venda*, *Locação*) e badges sutis. |
| **Cinza-carvão** | `#1F2937` | Tipografia de leitura e textos corridos (garantindo excelente contraste e legibilidade). |

**Tipografia:**
* **Headings Editoriais:** *Playfair Display* (serifa nobre de inspiração editorial).
* **Interface & Textos:** *Plus Jakarta Sans* (geometria moderna, legibilidade impecável).

---

## ✨ Funcionalidades Principais

### 1. Barra de Busca e Filtros Avançados
* **Finalidade:** Seletor em abas (*Todos*, *Comprar*, *Alugar*) com destaque visual ativo.
* **Busca Textual:** Campo com pesquisa livre em tempo real por títulos, bairros, códigos e descrições.
* **Tipo de Imóvel:** Apartamento, Casa de Alto Padrão, Cobertura, Terreno em Condomínio e Comercial Triple A.
* **Localização Nobre:** Jardins, Itaim Bibi, Pinheiros, Vila Mariana, Moema, Vila Nova Conceição, Alto de Pinheiros, Higienópolis e Cidade Jardim.
* **Faixa de Preço:** Entradas numéricas para valor mínimo e valor máximo com preenchimento sugerido dinâmico (`datalist`).
* **Quartos:** Filtro em pílulas (*Qualquer*, *1+*, *2+*, *3+*, *4+*).
* **Vagas de Garagem:** Filtro em pílulas (*Qualquer*, *1+*, *2+*, *3+*).
* **Ações:** Botão principal *"Buscar Imóveis"* (verde-floresta) e *"Limpar Filtros"* (verde-esmeralda).

### 2. Catálogo Reativo e Dinâmico
* 11 unidades imobiliárias fictícias ultra-realistas com fotos em alta definição, metragens, valores de condomínio/IPTU e descrições técnicas.
* Contador em tempo real de resultados encontrados (ex: *"11 imóveis encontrados"*).
* Ordenação dinâmica por: *Mais relevantes*, *Menor preço*, *Maior preço* e *Maior metragem*.
* Estado vazio amigável (*Empty State*) quando nenhum imóvel satisfaz os critérios de busca, com botão de restauração rápida.

### 3. Cards de Imóveis
* Efeito hover com elevação suave (`hover:-translate-y-1.5` e sombra de luxo).
* Tag estilizada em verde-sálvia (`#D8F3DC`) com tipografia em verde-floresta (`#1B4332`).
* Sistema de favoritos com coração interativo e persistência local no `localStorage`.
* Especificações minimalistas com ícones dedicados em verde-esmeralda para: **Área (m²)**, **Quartos**, **Banheiros** e **Vagas**.
* Botão de compartilhamento direto com cópia de URL para o clipboard.

### 4. Modal de Detalhes Completo
* Galeria de fotos interativa com miniaturas clicáveis e navegação por setas.
* Lista completa de comodidades e acabamentos nobres com checkmarks verdes.
* Botão de contato direto via **WhatsApp** com mensagem pré-formatada contendo código e título do imóvel.
* Formulário funcional de **Agendamento de Visita** com seleção de período (*Manhã*, *Tarde*, *Fim de Semana*).
* Fechamento via backdrop, botão `X` ou tecla `Escape`.

### 5. Seções Institucionais e Rodapé
* **Por que escolher a Alloggi:** 4 pilares estratégicos (Curadoria Exclusiva, Atendimento Consultivo, Processo 100% Digital e Segurança Jurídica).
* **Indicadores:** Métricas de patrimônio gerido (+R$ 1.8 Bi) e índice de satisfação (98.4%).
* **Modal "Anunciar Imóvel":** Captação de proprietários com formulário de cadastro.
* **Rodapé Completo:** Contatos, endereço no Itaim Bibi, canais de atendimento, newsletter e links rápidos.

---

## 🛠️ Stack Tecnológica & Arquitetura

* **HTML5 & CSS3 Moderno**
* **Tailwind CSS (v3.x)** - Design System responsivo baseado em utilitários
* **React 18 & ReactDOM** - Gerenciamento de estado reativo dos filtros, favoritos e modais
* **Babel Standalone** - Transpilação JSX em tempo de execução
* **Node.js (Built-in HTTP & File System)** - Servidor estático leve sem dependências externas pesadas (zero `npm install` obrigatório para rodar)

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
* [Node.js](https://nodejs.org/) versão 16.0 ou superior (opcional, caso queira rodar via servidor local).

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/gustaoss6/Site_alloggi.git
   cd Site_alloggi
   ```

2. **Inicie o servidor local:**
   ```bash
   npm start
   ```
   *(Ou execute diretamente `node server.js`)*

3. **Abra no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000)

> **Dica:** O projeto também pode ser executado abrindo diretamente o arquivo `index.html` em qualquer navegador sem necessidade de servidor!

---

## 📂 Estrutura de Arquivos

```text
├── index.html           # Aplicação completa (HTML5, Tailwind, React 18, Componentes e Dados)
├── Logo.jpeg            # Logotipo oficial: ALLOGGI NEGÓCIOS IMOBILIÁRIOS
├── Logo cresci.jpeg     # Emblemas oficiais de credenciamento CRECI-SP e CREA-SP
├── server.js            # Servidor HTTP nativo em Node.js com MIME types e SPA fallback
├── package.json         # Metadados do projeto e scripts npm
├── .gitignore           # Regras de exclusão de arquivos de log, caches e temporários
├── .env.example         # Variáveis de ambiente de referência
├── deploy.ps1           # Script PowerShell de automação para conexão e push no GitHub
├── deploy.bat           # Script Batch para execução rápida no Windows
└── README.md            # Documentação completa do projeto
```

---

## 🔒 Segurança & DevOps

* **Zero Hardcoded Secrets:** Nenhuma chave de API, senha de banco de dados ou credencial privada exposta no código.
* **Directory Traversal Protection:** O servidor `server.js` valida o caminho raiz para impedir acessos a diretórios superiores do sistema.
* **Segurança de Dependências:** Projeto limpo, sem dependências vulneráveis de terceiros.

---

## 👤 Autor

Desenvolvido por **Gustavo**  
* GitHub: [@gustaoss6](https://github.com/gustaoss6)  
* Email: [gustavoss6@al.insper.edu.br](mailto:gustavoss6@al.insper.edu.br)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE).
