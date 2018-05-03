var ArrayList = require('../../src/listas/ArrayList')

describe('ArrayListTest', () => {
  it('getSizeTest', () => {
    let lista = new ArrayList()
    expect(lista.size()).toEqual(0)
  })
  it('addOnlyElementTest', () => {
    let lista = new ArrayList()
    lista.add('Primeiro elemento')
    expect(lista.size()).toEqual(1)
  })
  it('addElementWithIndexTest', () => {
    let lista = new ArrayList()
    let elemento = 'Other elemento'
    lista.add(elemento, 0)
    expect(lista.get(0)).toEqual(elemento)
  })
  it('addElementWithSameIndexTest', () => {
    let lista = new ArrayList()
    let first = 'One element'
    let second = 'Two element'
    lista.add(second, 0)
    lista.add(first, 0)
    
    expect(second).toEqual(lista.get(0))
    expect(first).toEqual(lista.get(1))
  })
  it('getTest', () => {
    let lista = new ArrayList()
    lista.add('Primeiro elemento')
    expect(lista.get(0)).toEqual('Primeiro elemento')
  })
  it('getListTest', () => {
    let lista = new ArrayList()
    lista.add('Primeiro elemento')
    expect(lista.getList()).toEqual(['Primeiro elemento'])
  })
  
})
