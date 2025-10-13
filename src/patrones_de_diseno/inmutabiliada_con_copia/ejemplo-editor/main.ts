import CodeEditorState from './classes/CodeEditorState.ts';
import CodeEditorHistory from './classes/CodeEditorHistory.ts';
/*
* El patron consiste en la creacion de copias de un ojeto o de un estado del mismo
* identico a como lo hace el patron prtotype pero con la diferencia de que hay campos
* que son opcionales.
*
* El unico detalle que puede haber con este patron, es que si un objeto que contiene
* un arreglo es muy grande, la copia sera igual de grade y pesada lo que puede
* significar en problemas a la larga por las instancias copiadas seguidad.
* */
function main(){
  const history = new CodeEditorHistory()
  let editorState = new CodeEditorState('console.log(Hola mundo)',30,false)
  history.save(editorState)

  console.log('estado inicial')
  console.log(editorState)
}
main()