export default class EsferasDragon {
  private static intance: EsferasDragon;
  private esferasRecolectadas:number = 0;
  private referencia:number = Math.random()

  private constructor() {
  }
  public static getInstance():EsferasDragon{
    if(!EsferasDragon.intance){
      console.log('creacion de las esferas del dragon')
      return EsferasDragon.intance = new EsferasDragon();
    }else{
      console.log('regresando isntancia')
      return this.intance
    }
  }

  public recolectarEsferas(){
    if(this.esferasRecolectadas<7){
      this.esferasRecolectadas++
      console.log('Aun faltan esferas')
      return;
    }else{
      console.log('se han recolectado todas las esferas')
    }
  }
}