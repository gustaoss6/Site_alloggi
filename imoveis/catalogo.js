/**
 * ALLOGGI NEGÓCIOS IMOBILIÁRIOS - Catálogo Central de Imóveis
 *
 * Este arquivo agrega os imóveis cadastrados individualmente nas subpastas
 * de `imoveis/` e integra ao portal.
 *
 * Para adicionar um novo imóvel, crie imoveis/{codigo}/dados.js
 * seguindo o padrão de imoveis/11.138/dados.js.
 */

(function () {
  // Imóveis registrados via scripts individuais de subpastas
  let imoveisRegistrados = [];

  if (typeof window !== 'undefined') {
    imoveisRegistrados = window.IMOVEIS_REGISTRADOS || [];
  } else if (typeof require !== 'undefined') {
    try {
      const imovel11138 = require('./11.138/dados.js');
      if (imovel11138) imoveisRegistrados.push(imovel11138);
    } catch (e) {}
  }

  // Sem portfólio fictício — apenas imóveis reais cadastrados em subpastas
  const listaFinal = [...imoveisRegistrados];

  // Expõe globalmente
  if (typeof window !== 'undefined') {
    window.CATALOGO_IMOVEIS = listaFinal;
    window.obterCatalogoImoveis = function () {
      return window.CATALOGO_IMOVEIS;
    };
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { imoveisRegistrados, listaFinal };
  }
})();
