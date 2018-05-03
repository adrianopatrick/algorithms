/**
 * Algoritmo que implementa Lista Simples - Lista Linear em Alocação Sequencial
 * Caracteristicas: - Rapida - Permite repetidos - Tamanho Fixo - Nao
 * Thread-Safe
 * SRF - Simples, Repetido e Fixo
 * 
 * author adrianopatrick@gmail.com
 * since 02/05/2018
 */

class ArrayList {

  constructor () {
    this.index = 0
    this.elementos = []
  }

  _validIndex (index) {
    if (index < 0 || index >= this.size()) {
      throw new Error(`Índice: ${index}, Tamanho máximo: ${this.size()}`)
    }
  }

  add (elemento, index) {
    console.log('addMethod')
    if (index) {
      console.log('if')
      this._validIndex(index)
      if (this.elementos[index]) {
        console.log('entrou no if')
        for (let i = this.size(); i > index; i--) {
          this.elementos[i] = this.elementos[i - 1];
        }
      }
      this.elementos[index] = elemento;
		  this.index++;
    } else {
      console.log('else')
      this.elementos[this.index++] = elemento
    }
  }

  get (index) {
    this._validIndex(index)
    return this.elementos[index]
  }

  size () {
    return this.index
  }

  getList() {
    return [].concat(this.elementos)
  }

}

const teste = () => {
  let lista = new ArrayList()
  lista.add('teste1', 0)
  lista.add('teste2', 0)
  console.log(lista.getList())
}

teste()

module.exports = ArrayList