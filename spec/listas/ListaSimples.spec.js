var ListaSimples = require('../../src/listas/ListaSimples')

describe('ListaSimplesTest', () => {
  it('getSizeTest', () => {
    let lista = new ListaSimples(10)
    expect(lista.getSize()).toEqual(0)
  })
  it('addTest', () => {
    let lista = new ListaSimples(10)
    lista.add('Primeiro elemento')
    expect(lista.getSize()).toEqual(1)
  })
  
})
