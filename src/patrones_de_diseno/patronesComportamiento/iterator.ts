/*
Es un patron de comportamiento que nos permite
recorrer elementos de una coleccion sin tener que
exponer la estructura interna de la coleccion

En resumen, el iterador es una especie de apuntador o
copia de la coleccion, el cual permite acceder a los elementos de la coleccion de forma secuencial
sin exponer su implementación interna, en el ejemplo basicamente es una estructura de lista
enlazada, pero en casos mas concretos o especificos, este iterador
puede ser de un arbol binario o demas.
*/
interface Iterator<T> {
  next(): T | null
  hasNext(): boolean
  current(): T | null

}



class Pokemon {
  private name: string
  private type: string

  constructor(name: string, type: string) {
    this.name = name
    this.type = type
  }

  getName(): string {
    return this.name

  }
  getType(): string {
    return this.type
  }
}


//La clase se hace en un supuesto caso de que tengasmos una estructura de datos especial para nuestra situacion
class PokemonCollection {
  private pokemons: Pokemon[] = []

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon)
  }

  getPokemoinAt(index_number: number): Pokemon | null {
    if (index_number < 0 || index_number >= this.pokemons.length) {
      return null
    }
    return this.pokemons[index_number]
  }

  getLength(): number {
    return this.pokemons.length
  }

  createIterartor() {

    const iterator = new PokemonIterator(this)
    return iterator


  }
}

class PokemonIterator implements Iterator<Pokemon> {
  private index: number = 0
  private collection: PokemonCollection

  constructor(collection: PokemonCollection) {
    this.collection = collection
  }

  next(): Pokemon | null {
    const pokemon = this.collection.getPokemoinAt(this.index)
    this.index++
    return pokemon
  }

  hasNext(): boolean {
    return this.index < this.collection.getLength()
  }

  current(): Pokemon | null {
    return this.collection.getPokemoinAt(this.index)
  }
}
