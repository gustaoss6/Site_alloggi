/**
 * ALLOGGI NEGÓCIOS IMOBILIÁRIOS - Catálogo Central de Imóveis
 * 
 * Este arquivo agrega os imóveis cadastrados individualmente nas subpastas
 * de `imoveis/` (iniciando por `imoveis/11.138/dados.js`) e integra ao portal.
 */

(function () {
  // Lista de imóveis registrados via script individual
  let imoveisRegistrados = [];
  
  if (typeof window !== 'undefined') {
    imoveisRegistrados = window.IMOVEIS_REGISTRADOS || [];
  } else if (typeof require !== 'undefined') {
    try {
      const imovel11138 = require('./11.138/dados.js');
      if (imovel11138) imoveisRegistrados.push(imovel11138);
    } catch (e) {}
  }

  // Portfólio curado complementar da Alloggi
  const portfolioCurado = [
    {
      id: 1,
      code: "ALG-101",
      title: "Cobertura Duplex Suspensa com Vista Panorâmica",
      neighborhood: "Jardins",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Cobertura",
      price: 8900000,
      condo: 6800,
      iptu: 2400,
      area: 450,
      bedrooms: 4,
      suites: 4,
      bathrooms: 5,
      parking: 4,
      tag: "Exclusivo Alloggi",
      tagType: "exclusive",
      address: {
        street: "Alameda Franca",
        neighborhood: "Jardins",
        city: "São Paulo",
        state: "SP",
        full: "Alameda Franca, Jardins - São Paulo, SP"
      },
      description: "Uma verdadeira obra de arte arquitetônica suspensa sobre o coração dos Jardins. Esta magnífica cobertura duplex conta com pé-direito duplo de 6 metros no living, acabamento nobre em mármore travertino romano bruto, adega climatizada envidraçada para 450 rótulos e um terraço privativo espetacular com piscina aquecida de borda infinita e vista indevassável de 360 graus para a copa das árvores e o skyline paulistano.",
      amenities: [
        "Piscina Privativa Aquecida",
        "Adega Climatizada para 450 Rótulos",
        "Varanda Gourmet com Parrilla",
        "Pé-direito Duplo no Living",
        "Elevador com Acesso Biométrico",
        "Ar Condicionado Central VRF",
        "Gerador Full para Todo o Imóvel",
        "4 Vagas Livres Demarcadas"
      ],
      cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 2,
      code: "ALG-102",
      title: "Apartamento Contemporâneo com Living Integrado",
      neighborhood: "Itaim Bibi",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Apartamento",
      price: 3850000,
      condo: 2950,
      iptu: 1100,
      area: 185,
      bedrooms: 3,
      suites: 3,
      bathrooms: 4,
      parking: 3,
      tag: "Venda",
      tagType: "sale",
      address: {
        street: "Rua Tabapuã",
        neighborhood: "Itaim Bibi",
        city: "São Paulo",
        state: "SP",
        full: "Rua Tabapuã, Itaim Bibi - São Paulo, SP"
      },
      description: "Localizado em uma das ruas mais arborizadas e cobiçadas do Itaim Bibi, a poucos passos da Av. Faria Lima e dos mais estrelados restaurantes da cidade. Planta impecável com total integração entre sala de estar, sala de jantar e varanda gourmet envidraçada. Projeto luminotécnico assinado, marcenaria de alto padrão e automação completa de persianas, áudio e iluminação.",
      amenities: [
        "Varanda Gourmet com Churrasqueira",
        "Automação Residencial Control4",
        "Academia com Equipamentos Matrix",
        "Piscina Coberta com Raia de 25m",
        "Spa com Sauna Seca e Úmida",
        "Carregador Dedicado para Carro Elétrico",
        "Portaria Blindada e Segurança 24h",
        "Depósito Privativo na Garagem"
      ],
      cover: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 3,
      code: "ALG-103",
      title: "Residência Minimalista com Paisagismo Tropical",
      neighborhood: "Alto de Pinheiros",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Casa",
      price: 9200000,
      condo: 0,
      iptu: 2800,
      area: 510,
      bedrooms: 4,
      suites: 4,
      bathrooms: 5,
      parking: 4,
      tag: "Destaque",
      tagType: "featured",
      address: {
        street: "Rua Arquiteto Jaime Fonseca",
        neighborhood: "Alto de Pinheiros",
        city: "São Paulo",
        state: "SP",
        full: "Alto de Pinheiros - São Paulo, SP"
      },
      description: "Concebida para conectar os ambientes internos à natureza exuberante de um projeto paisagístico tropical assinado. A casa conta com grandes panos de vidro do chão ao teto, piso em tábua corrida de cumaru de demolição e ampla área externa com piscina em pedra Hijau natural da Indonésia, solarium de madeira teca e espaço gourmet completo.",
      amenities: [
        "Piscina Aquecida em Pedra Hijau",
        "Paisagismo Tropical com Irrigação Automática",
        "Espaço Gourmet com Forno a Lenha e Parrilla",
        "Usina de Energia Solar Fotovoltaica",
        "Circuito Fechado de TV com IA",
        "Lareira Ecológica a Bioetanol",
        "Home Office Privativo com Vista Jardim",
        "Guarita de Segurança com Blindagem III-A"
      ],
      cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 4,
      code: "ALG-104",
      title: "Garden Residence Exclusivo Frente à Praça",
      neighborhood: "Vila Nova Conceição",
      city: "São Paulo",
      purpose: "Alugar",
      type: "Apartamento",
      price: 22000,
      condo: 3800,
      iptu: 1400,
      area: 240,
      bedrooms: 3,
      suites: 3,
      bathrooms: 4,
      parking: 3,
      tag: "Locação",
      tagType: "rent",
      address: {
        street: "Praça Pereira Coutinho",
        neighborhood: "Vila Nova Conceição",
        city: "São Paulo",
        state: "SP",
        full: "Praça Pereira Coutinho, Vila Nova Conceição - São Paulo, SP"
      },
      description: "A rara experiência de desfrutar do espaço e da privacidade de uma casa com a comodidade e segurança máxima de um condomínio boutique a poucos metros da Praça Pereira Coutinho. Jardim privativo gramado com jacuzzi aquecida, decorado com peças de designers premiados e cozinha gourmet equipada com eletrodomésticos italianos de última geração.",
      amenities: [
        "Jardim Privativo Gramado com Jacuzzi",
        "Mobiliado e Decorado por Arquiteto Renomado",
        "Eletrodomésticos Italianos Bertazzoni",
        "Serviço de Concierge 24 Horas",
        "Sauna Seca Privativa na Suíte Master",
        "Academia Technogym no Prédio",
        "Vagas com Ponto de Carga Rápida",
        "Sistema de Filtração Central de Água"
      ],
      cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 5,
      code: "ALG-105",
      title: "Cobertura Linear com Solarium e Spa Privativo",
      neighborhood: "Pinheiros",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Cobertura",
      price: 4600000,
      condo: 3400,
      iptu: 1250,
      area: 210,
      bedrooms: 3,
      suites: 2,
      bathrooms: 3,
      parking: 2,
      tag: "Venda",
      tagType: "sale",
      address: {
        street: "Rua Fradique Coutinho",
        neighborhood: "Pinheiros",
        city: "São Paulo",
        state: "SP",
        full: "Rua Fradique Coutinho, Pinheiros - São Paulo, SP"
      },
      description: "Cobertura de plano único que une fluidez, requinte e sofisticação no bairro mais cosmopolita e vibrante de São Paulo. Área externa ensolarada com pergolado em madeira maciça, espaço gourmet integrado e deck suspenso com spa de hidromassagem para até 6 pessoas. Living amplo e acolhedor conectado à cozinha de conceito aberto.",
      amenities: [
        "Solarium Privativo com Spa de Hidro",
        "Pergolado em Madeira com Área Lounge",
        "Cozinha em Ilha Gourmet com Cooktop de Indução",
        "Fechadura Digital com Biometria e Senha",
        "Espaço Coworking Privativo no Edifício",
        "Piscina Coberta Aquecida",
        "Pet Place e Área Verde para Passeio",
        "2 Vagas Grandes e Livres"
      ],
      cover: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1502005229762-ee1b2da92c0b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 6,
      code: "ALG-106",
      title: "Studio Design Boutique com Vista para as Árvores",
      neighborhood: "Moema",
      city: "São Paulo",
      purpose: "Alugar",
      type: "Apartamento",
      price: 5800,
      condo: 850,
      iptu: 320,
      area: 58,
      bedrooms: 1,
      suites: 1,
      bathrooms: 1,
      parking: 1,
      tag: "Locação",
      tagType: "rent",
      address: {
        street: "Alameda dos Arapanés",
        neighborhood: "Moema",
        city: "São Paulo",
        state: "SP",
        full: "Alameda dos Arapanés, Moema - São Paulo, SP"
      },
      description: "Perfeito para executivos e profissionais exigentes que valorizam conveniência, bom gosto e localização privilegiada no lado Pássaros de Moema. Planta milimetricamente planejada com marcenaria ripada sob medida, varanda espaçosa voltada para a copa das árvores e condomínio com estrutura completa de hotel boutique cinco estrelas.",
      amenities: [
        "Rooftop com Piscina Panorâmica e Lounge",
        "Serviço de Lavanderia OMO Compartilhada",
        "Academia Completa Life Fitness",
        "Espaço Gourmet com Vista da Cidade",
        "Tomada Dedicada para Veículo Elétrico",
        "Concierge e Recepção 24 Horas"
      ],
      cover: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 7,
      code: "ALG-107",
      title: "Mansão Neoclássica Contemporânea com Quadra de Beach Tennis",
      neighborhood: "Jardins",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Casa",
      price: 14500000,
      condo: 0,
      iptu: 4500,
      area: 780,
      bedrooms: 5,
      suites: 5,
      bathrooms: 7,
      parking: 6,
      tag: "Exclusivo Alloggi",
      tagType: "exclusive",
      address: {
        street: "Jardim Europa",
        neighborhood: "Jardins",
        city: "São Paulo",
        state: "SP",
        full: "Jardim Europa, Jardins - São Paulo, SP"
      },
      description: "Um refúgio de absoluta privacidade e requinte monumental no Jardim Europa. Projeto arquitetônico de referência com vãos livres majestosos, mármore pighes importado e marcenaria Ornare em todos os ambientes. Estrutura de lazer comparável a um resort particular, com raia de 18 metros aquecida, quadra oficial de beach tennis e espaço para recepções de até 60 convidados.",
      amenities: [
        "Quadra Oficial de Beach Tennis e Pickleball",
        "Piscina Aquecida de 18 Metros",
        "Sauna Úmida com Parede de Vidro para o Jardim",
        "Guarita Blindada Própria no Acesso",
        "Home Theater com Isolamento Acústico",
        "Adega Subterrânea Climatizada",
        "Suíte Master com 90m² e Closets Individuais",
        "Garagem Subterrânea para 6 Carros"
      ],
      cover: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 8,
      code: "ALG-108",
      title: "Apartamento Vista Parque Ibirapuera",
      neighborhood: "Vila Mariana",
      city: "São Paulo",
      purpose: "Alugar",
      type: "Apartamento",
      price: 14500,
      condo: 2600,
      iptu: 980,
      area: 165,
      bedrooms: 3,
      suites: 3,
      bathrooms: 3,
      parking: 2,
      tag: "Locação",
      tagType: "rent",
      address: {
        street: "Rua Curitiba",
        neighborhood: "Vila Mariana",
        city: "São Paulo",
        state: "SP",
        full: "Rua Curitiba, Vila Mariana - São Paulo, SP"
      },
      description: "Desperte todos os dias contemplando o mar de copas verdes do Parque do Ibirapuera. Apartamento completamente remodelado com acabamentos de altíssimo padrão, varanda envidraçada sem emendas integrada ao living, climatização central silenciosa e armários planejados de marcenaria nobre em todas as suítes.",
      amenities: [
        "Vista Eterna e Definitiva para o Parque Ibirapuera",
        "Varanda Integrada ao Living Social",
        "Condomínio Clube com Infraestrutura Completa",
        "Piscina Aquecida Coberta com Teto de Vidro",
        "Quadra de Tênis Oficial de Saibro",
        "Espaço Gourmet e Salão de Festas Climatizado"
      ],
      cover: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 9,
      code: "ALG-109",
      title: "Penthouse Clássica com Terraço Jardim em Higienópolis",
      neighborhood: "Higienópolis",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Cobertura",
      price: 6400000,
      condo: 4200,
      iptu: 1800,
      area: 310,
      bedrooms: 4,
      suites: 3,
      bathrooms: 5,
      parking: 3,
      tag: "Venda",
      tagType: "sale",
      address: {
        street: "Avenida Higienópolis",
        neighborhood: "Higienópolis",
        city: "São Paulo",
        state: "SP",
        full: "Avenida Higienópolis, Higienópolis - São Paulo, SP"
      },
      description: "A clássica sofisticação paulistana traduzida em um imóvel único no coração cultural de Higienópolis. Amplo living com múltiplos ambientes, lareira em mármore nero marquina, pé-direito clássico generoso e um deslumbrante terraço com jardim arborizado privativo, criando um verdadeiro oásis urbano a passos do Shopping Pátio Higienópolis.",
      amenities: [
        "Terraço Arborizado com Deck em Madeira",
        "Lareira Clássica em Mármore Nero Marquina",
        "Piso em Madeira Maciça de Ébano Restaurado",
        "Edifício de Arquitetura Clássica Preservada",
        "3 Vagas Livres no Subsolo",
        "Portaria com Segurança 24 Horas Armada"
      ],
      cover: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 10,
      code: "ALG-110",
      title: "Laje Corporativa Triple A na Faria Lima",
      neighborhood: "Itaim Bibi",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Comercial",
      price: 15000000,
      condo: 12000,
      iptu: 5400,
      area: 680,
      bedrooms: 0,
      suites: 0,
      bathrooms: 8,
      parking: 12,
      tag: "Comercial",
      tagType: "commercial",
      address: {
        street: "Avenida Brigadeiro Faria Lima",
        neighborhood: "Itaim Bibi",
        city: "São Paulo",
        state: "SP",
        full: "Av. Brigadeiro Faria Lima, Itaim Bibi - São Paulo, SP"
      },
      description: "Prestígio corporativo absoluto no epicentro financeiro da América Latina. Andar corrido com certificação LEED Platinum, piso elevado com cabeamento estruturado categoria 6A, forro modular acústico com iluminação LED inteligente, ar condicionado central VRF de altíssima eficiência e 12 vagas de garagem demarcadas.",
      amenities: [
        "Certificação Sustentável LEED Platinum",
        "Auditório Corporativo e Heliponto Homologado",
        "Ar Condicionado Central VRF Inteligente",
        "Gerador com Autonomia de 100% da Carga",
        "Controle de Acesso com Reconhecimento Facial 3D",
        "12 Vagas de Garagem com Manobrista"
      ],
      cover: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      ]
    },
    {
      id: 11,
      code: "ALG-111",
      title: "Terreno Plano com Projeto Arquitetônico Aprovado",
      neighborhood: "Cidade Jardim",
      city: "São Paulo",
      purpose: "Comprar",
      type: "Terreno",
      price: 6800000,
      condo: 2800,
      iptu: 1450,
      area: 950,
      bedrooms: 0,
      suites: 0,
      bathrooms: 0,
      parking: 6,
      tag: "Exclusivo",
      tagType: "exclusive",
      address: {
        street: "Rua Alberto Faria",
        neighborhood: "Cidade Jardim",
        city: "São Paulo",
        state: "SP",
        full: "Cidade Jardim - São Paulo, SP"
      },
      description: "Raríssima oportunidade em um dos bolsões mais protegidos e arborizados de Cidade Jardim. Terreno totalmente plano com 950m² de área privativa e testada frontal de 26 metros lineares. Inclui projeto arquitetônico contemporâneo completo já aprovado na Prefeitura e no condomínio, assinado por renomado escritório paulistano, prevendo residência de 850m² com 5 suítes, piscina com raia, solarium e subsolo para 6 carros.",
      amenities: [
        "Topografia 100% Plana e Limpa",
        "Projeto Arquitetônico Aprovado na Prefeitura",
        "Condomínio com Monitoramento e Guarita Armada 24h",
        "Testada Frontal Imponente de 26 Metros",
        "Fiação Elétrica e Cabeamento 100% Subterrâneos",
        "Estudo Geotécnico e Topográfico Concluídos",
        "Paisagismo Perimetral com Árvores Nativas Preservadas",
        "A Poucos Minutos dos Melhores Clubes e Escolas"
      ],
      cover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
      ]
    }
  ];

  // Combina: imóveis registrados em subpastas prioritariamente primeiro, seguidos do portfólio curado
  // Evita duplicatas se algum código já estiver registrado
  const codigosRegistrados = new Set(imoveisRegistrados.map(imovel => String(imovel.code)));
  const listaFinal = [
    ...imoveisRegistrados,
    ...portfolioCurado.filter(imovel => !codigosRegistrados.has(String(imovel.code)))
  ];

  // Expõe globalmente
  if (typeof window !== 'undefined') {
    window.CATALOGO_IMOVEIS = listaFinal;
    window.obterCatalogoImoveis = function () {
      return window.CATALOGO_IMOVEIS;
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      imoveisRegistrados,
      portfolioCurado,
      listaFinal
    };
  }
})();
