/*
En terminos simples, la cadena de responsabilidad es por ejemplo
como cuando tenemos un problema con nuestro equipo, y mandamos
a llamar a soporte, entonces, si soporte tiene la solucion
el hasta ahi llegaria la cadena de responsabilidad, en caso contrario
si no tiene la solucion, pasa a un nivel mas arriba con una persona
mas especializada en en el area, el cual le puede dar la solucion,
la cadena de responsabilidad por su mimso nombre como lo menciona,
tiene un inicio y un fin, en caso de no haber un fin, significa
que hay un nuevo nivel que podemos implementar para problemas
de una naturaleza que no fue contemplada
*/


interface Handler {
  setNext(handler: Handler): Handler;
  handle(request: string): void; //!  el request puede ser cualquier cosa
}

abstract class BaseHandler implements Handler {

  private nextHandler: Handler | null = null;

  public setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  public handle(request: string): void {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}


//soporte basico
class BasicSupport extends BaseHandler {

  override handle(request: string): void {
    if (request === 'basic') {
      console.log("Resolviendo el problema basico")
      return
    }
    console.log("Soporte basico: Pasando el problema a soporte avcanzado")
    super.handle(request)
  }
}

class AdvancedSupport extends BaseHandler {

  override handle(request: string): void {
    if (request === 'advanced') {
      console.log("Resolviendo el problema avanzado")
      return
    }
    console.log("Soporte avanzado: Pasando el problema a soporte especializado")
    super.handle(request)
  }
}


class ExpertSupport extends BaseHandler {

  override handle(request: string): void {
    if (request === 'expert') {
      console.log("Resolviendo el problema especializado")
      return
    }
    console.log("Soporte especializado: No se puede resolver el problema")
    super.handle(request)
  }
}


function main(){
   const basicSupport = new BasicSupport();
   const advancedSupport = new AdvancedSupport();
   const expertSupport = new ExpertSupport();

   basicSupport.setNext(advancedSupport).setNext(expertSupport);

   console.log("Probando cadena de responsabilidad:");
   basicSupport.handle("basic");
   basicSupport.handle("advanced");
   basicSupport.handle("expert");
}

main()
