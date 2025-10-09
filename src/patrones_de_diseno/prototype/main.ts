import Document from './ejemploDocumentos/clases/Document.ts';

function main(){
    const documento1 = new Document('El codigo limpio','´programacion','Uncle Bob')
  console.log(documento1)
  documento1.displayInfo()
  const documento2 = {...documento1}
    console.log(documento2)
 //  documento2.displayInfo() //advertencia sopbre que no existe ese tipo en el objeto {}


  //clonacion por medio de prototype

  const documento3:Document = documento1.clone() //se edxtrae el objeto y su respectivo tipo como deberia
  console.log(documento3)
  documento3.displayInfo()

}

main()