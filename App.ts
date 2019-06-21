/// <reference path="incrementum-ludus/IncrementumLudus/interfaces/IResource.ts" />
/// <reference path="incrementum-ludus/IncrementumLudus/interfaces/IQuantity.ts" />
/// <reference path="incrementum-ludus/IncrementumLudus/interfaces/IProducer.ts" />
/// <reference path="incrementum-ludus/IncrementumLudus/interfaces/ITrigger.ts" />
/// <reference path="incrementum-ludus/IncrementumLudus/interfaces/ICrafter.ts" />
/// <reference path="incrementum-ludus/IncrementumLudus/interfaces/IPlayer.ts" />
/// <reference path="incrementum-ludus/IncrementumLudus/IncrementumLudus.ts" />

/// <reference path="./CategorizedMaterial.ts" />
/// <reference path="./CategorizedItem.ts" />
/// <reference path="./Level.ts" />
/// <reference path="./Scenario.ts" />

const VERSION = "2.5";

function loadEngine() : IncrementumLudus | null {

    let json = window.localStorage.getItem('DesertIsland');
    if (json != null) {
        if ((window.localStorage.getItem('DesertIslandVersion') != null)
            || (window.localStorage.getItem('DesertIslandVersion') == VERSION)) {
            let obj : IncrementumLudus = JSON.parse(json);
            console.log('load engine');
            let curContext : any = window;
            return curContext[obj.$type].load(obj);
        }
        console.log('wrong version');
    }
    console.log('no engine');
    return null;
}
function saveEngine(engine : IncrementumLudus) {
    window.localStorage.setItem('DesertIsland', JSON.stringify(engine));
    window.localStorage.setItem('DesertIslandVersion', VERSION);
}

var engine : IncrementumLudus;
let e = loadEngine();
if (!e) {
    engine = Scenario.initEngine();
} else {
    engine = e;
}
