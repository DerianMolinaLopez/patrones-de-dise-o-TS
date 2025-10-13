import CodeEditorState from './CodeEditorState.ts';

export default  class CodeEditorHistory {
  private history:CodeEditorState[] = []
  private currentindex:number =-1;



  save(state:CodeEditorState) {
    if(this.currentindex <this.history.length-1) {
      this.history.splice(0,this.currentindex+1);
    }
    this.history.push(state)
    this.currentindex++
  }

  undo():CodeEditorState|null  { //revertir cambios
    if (this.currentindex >0) {
      this.currentindex--;
      return this.history[this.history.length-1];
    }
    return null;
  }

  redo ():CodeEditorState| null{
    if(this.currentindex < this.history.length-1) {
      this.currentindex++
      return this.history[this.history.length];
    }
    return null
  }
}