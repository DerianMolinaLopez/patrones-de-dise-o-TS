import { Location } from "../interfaces/location";

export default class LocationIcon implements Location{
    private type:string
    private  iconImage:string

    constructor(type:string, iconImage:string) {
        this.type = type;
        this.iconImage = iconImage;
    }

    display(coordinates:{x:number,y:number}):void{
        console.log(`Coordeneadas ${coordinates.x}, ${coordinates.y} ${this.type} ${this.iconImage}`);
    }
}
