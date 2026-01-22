import colors from "colors";
export default class LocalLogger{
  
  constructor(private file:string) {

  }

  writeLogInfo(msg:string):void{
    console.log(`[${this.file}]  INFO${msg}]`)
  }
  writeError(msg:string):void{
    console.log(colors.red(`[${this.file}] ${msg}] - ERROR`))
  }
  writeSucces(msg:string):void{
    console.log(colors.green(`[${this.file} - Scucces] ${msg}]`))
  }
}