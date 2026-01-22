type Languaje = 'en'| 'es'|'fr'

function createGreeeter(lan:Languaje){
  return function(){
    const messajes = {
      es: 'Hola mundo',
      en:'Hello',
      fr:'Bonjour'
    }
    return console.log(messajes[lan])
  }
}


 const espanish = createGreeeter('es')
espanish()