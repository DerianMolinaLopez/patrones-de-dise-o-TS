export default class Computer {
  public cpu :string = "cpu - not defined"
  public storage :string = "storage - not defined"
  public ram :string = "ram - not defined"
  public gpu? :string = "gpu - not defined"

  displayConfiguration(){
    console.log(`${this.cpu} cpu: ${this.storage}`);
    console.log(`${this.storage} storage: ${this.storage}`);
    console.log(`${this.cpu} cpu: ${this.cpu}`);
    console.log(`${this.storage} storage: ${this.storage}`);
  }

  getCpu(){
    return this.cpu;
  }
  setCpu(cpu:string){
    this.cpu = cpu
  }

}