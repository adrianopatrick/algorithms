/**
 * Algoritmo que implementa Lista Simples - Lista Linear em Alocação Sequencial
 * Caracteristicas: - Rapida - Permite repetidos - Tamanho Fixo - Nao
 * Thread-Safe
 * SRF - Simples, Repetido e Fixo
 * 
 * author adrianopatrick@gmail.com
 * since 02/05/2018
 */
class ListaSimples {

  constructor (size) {
    this.size = size
    this.index = 0
    this.elementos = []
  }

  _validaEspacoLivre () {
    if (this.index >= this.size) {
      throw new Error('Sem espaço, lista totalmente preenchida.')
    }
  }

  _validaIndice () {
    if (this.index < 0 || this.index >= this.size) {
      throw new Error(`Índice: ${this.index}, Tamanho máximo: ${this.size}`)
    }
  }

  add (elemento) {
    this._validaEspacoLivre()
    this.elementos[this.index++] = elemento
  }

  getSize () {
    return this.index
  }

  getList() {
    return [].concat(this.elementos)
  }

}

module.exports = ListaSimples