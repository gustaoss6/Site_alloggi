# 🏡 Estrutura Modular de Imóveis | Alloggi

Esta pasta contém a estrutura desacoplada de dados dos imóveis da Alloggi Negócios Imobiliários. Cada imóvel possui sua própria subpasta dedicada, permitindo fácil manutenção, versionamento e integração com armazenamento de mídia externo (como Supabase Storage).

---

## 📁 Estrutura de Diretórios

```text
imoveis/
├── 11.138/                        # Pasta dedicada para o imóvel 11.138
│   ├── dados.js                  # Objeto JS com auto-registro no portal
│   └── imovel.json               # Dados estruturados em formato puro JSON
├── catalogo.js                   # Agregador central do catálogo Alloggi
└── README.md                     # Guia de uso e boas práticas
```

---

## 🚀 Como Cadastrar uma Nova Casa (Ex: 11.139)

Para cadastrar um novo imóvel no site, siga o passo a passo:

### 1. Criar a subpasta do imóvel
Crie uma pasta com o código da casa dentro de `imoveis/`:
```text
imoveis/11.139/
```

### 2. Criar os arquivos de dados
Copie o modelo da pasta `11.138/` e preencha com as informações do novo imóvel:

- `imoveis/11.139/dados.js`:
```javascript
const IMOVEL_11_139 = {
  id: "11.139",
  code: "11.139",
  title: "Nome de Destaque do Imóvel",
  purpose: "Comprar", // ou "Alugar"
  type: "Casa",        // ou "Apartamento", "Cobertura", etc.
  price: 750000,
  condo: 0,
  iptu: 200,
  area: 180,
  bedrooms: 3,
  suites: 1,
  bathrooms: 3,
  parking: 2,
  tag: "Exclusivo",
  tagType: "exclusive",
  address: {
    street: "Nome da Rua, Número",
    neighborhood: "Nome do Bairro",
    city: "São Paulo",
    state: "SP",
    cep: "00.000-000",
    full: "Nome da Rua, Número - Bairro, Cidade - SP, CEP 00.000-000"
  },
  neighborhood: "Nome do Bairro",
  city: "São Paulo",
  description: "Descrição completa do imóvel...",
  amenities: [
    "Item 1",
    "Item 2"
  ],
  // (Opcional) Vídeo Tour no YouTube
  video: "https://www.youtube.com/watch?v=...",
  videoId: "...",
  videoEmbed: "https://www.youtube-nocookie.com/embed/...",
  cover: "https://...supabase.co/.../externa.webp",
  images: [
    "https://...supabase.co/.../externa.webp",
    "https://...supabase.co/.../sala.webp"
  ]
};

if (typeof window !== 'undefined') {
  window.IMOVEIS_REGISTRADOS = window.IMOVEIS_REGISTRADOS || [];
  window.IMOVEIS_REGISTRADOS.push(IMOVEL_11_139);
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = IMOVEL_11_139;
}
```

- `imoveis/11.139/imovel.json`:
Idêntico em JSON puro para integrações de API ou exportações.

### 3. Vincular no `index.html`
No cabeçalho `<head>` do `index.html`, adicione a inclusão do script antes do `catalogo.js`:
```html
<script src="imoveis/11.138/dados.js"></script>
<script src="imoveis/11.139/dados.js"></script> <!-- Nova casa -->
<script src="imoveis/catalogo.js"></script>
```

O imóvel entrará automaticamente no card do catálogo, nos filtros dinâmicos de busca (tipo, bairro, valor, quartos, vagas) e no modal de detalhes com galeria de alta resolução do Supabase.
