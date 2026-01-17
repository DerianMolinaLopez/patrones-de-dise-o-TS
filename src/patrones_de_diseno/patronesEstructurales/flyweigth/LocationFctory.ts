import LocationIcon from "./classes/flyweigth";

export default class LocationFactory{
    private icons:Record<string,LocationIcon>

    constructor(){
        this.icons = {};
    }

    getLocationIcon(type:string, iconImage:string):LocationIcon{
        if(!this.icons[type]){
            this.icons[type] = new LocationIcon(type, iconImage);
        }
        return this.icons[type];
    }

}
