import EsferasDragon from './classes/EsferasDragon.ts';

function main(){
  const esferas = EsferasDragon.getInstance()
  console.log(esferas)

  const esferasDragon = EsferasDragon.getInstance()

  console.log(esferasDragon)
}

main()