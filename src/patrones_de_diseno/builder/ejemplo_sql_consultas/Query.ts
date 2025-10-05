export default class Query{
    query:string = ''
  constructor() {
      this.query = ''
  }
    display():void{
      console.log(this.query)
    }
}