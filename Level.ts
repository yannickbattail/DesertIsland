/// <reference path="incrementum-ludus/Engine/interfaces/IResource.ts" />
/// <reference path="incrementum-ludus/Engine/interfaces/IQuantity.ts" />
/// <reference path="incrementum-ludus/Engine/interfaces/IProducer.ts" />
/// <reference path="incrementum-ludus/Engine/interfaces/ITrigger.ts" />
/// <reference path="incrementum-ludus/Engine/interfaces/ICrafter.ts" />
/// <reference path="incrementum-ludus/Engine/interfaces/IPlayer.ts" />
/// <reference path="incrementum-ludus/Engine/Engine.ts" />

class Level extends Resource {
    public $type : string = 'Level';
    constructor(public name : string, public image : string){
        super(name);
    }
    public static load(data : any) : Level {
        let r : Level = new Level(data.name, data.image);
        return r;
    }
    public show(quantity : number) : string {
        return "" + quantity;
    }
}
