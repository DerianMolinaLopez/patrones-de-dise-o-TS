import { ComputerBuilder } from './ComputerBuilder.ts';

function main(){
  const basicComputter = new ComputerBuilder()
    .setRam("ram prueba")
    .setCpu("cpu prueba")
    .build()

  console.log(basicComputter)
}

main()