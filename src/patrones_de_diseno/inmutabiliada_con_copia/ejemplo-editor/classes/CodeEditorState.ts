/*
* Este patron es una variante del prototype
* En este caso cada uno de los estados corresponde
* a un historial en un punto dado
* */

export default class CodeEditorState {
  readonly content:string;
  readonly cursorPosition:number
  readonly unsaveChanges:boolean

  constructor(content:string,cursorPosition:number,unsaveChanges:boolean) {
    this.content = content
    this.cursorPosition = cursorPosition
    this.unsaveChanges = unsaveChanges
  }

  copyWith({content,cursorPosition,unsaveChanges}:Partial<CodeEditorState>){
    return new CodeEditorState(content?? this.content,
                               cursorPosition?? this.cursorPosition,
                               unsaveChanges?? this.unsaveChanges)
  }

  displayState(){
    return 'content: '+this.content+' unsaveChanges: '+this.unsaveChanges+' cursorPosition: '+this.cursorPosition;
  }
}