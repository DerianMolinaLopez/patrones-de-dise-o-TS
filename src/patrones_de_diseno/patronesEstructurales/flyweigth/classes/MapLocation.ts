import LocationIcon from "./flyweigth";

export default class MarkLocation{
    private coordinates:{x:number,y:number}
    private icon:LocationIcon
    constructor(coordinates:{x:number,y:number}, icon:LocationIcon){
        this.coordinates = coordinates;
        this.icon = icon;
    }

    getCoordinates():{x:number,y:number}{
        return this.coordinates;
    }

    getIcon():LocationIcon{
        return this.icon;
    }
    display(){
        this.icon.display()
    }
}
