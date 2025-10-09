import Pokemon from './Pokemon.ts';

function main(){
  const pokemon1 = new Pokemon('aaa','aaaa',['3','dededed','dcac'])
  console.log(pokemon1)
  pokemon1.displayInfo()


  const pokemon2 = pokemon1.clone()
  console.log(pokemon2)
  pokemon2.displayInfo()
}
main()