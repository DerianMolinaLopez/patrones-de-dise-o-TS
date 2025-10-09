export default  class Pokemon{
  private name:string;
  private id:string;
  private attacks:string[]
  constructor(name:string, id:string,attacks:string[]){
    this.name = name;
    this.id = id;
    this.attacks = attacks;
  }
  clone():Pokemon{
    return new Pokemon(this.name,this.id,this.attacks)
  }
  displayInfo(){
    console.log(this.name)
    console.log(this.name)
    console.log(this.attacks)
  }

}