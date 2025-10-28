export default interface LocalLogger{
  file:string

  wrtiteInfo(msg:string):void
  writeError(msg:string):void
  writeSucces(msg:string):void
}