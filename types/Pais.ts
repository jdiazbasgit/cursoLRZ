import { Name } from "./Name.js"
import { Translations } from "./Translations.js"
import { Maps } from "./Maps.js"
import { Flags } from "./Flags.js"
import { CoatOfArms } from "./CoatOfArms.js"

export type Pais ={
    translations:Translations
    name:Name
    capital:string
    population:number
    area:number
    borders:Array<string>
    maps:Maps
    flags:Flags
    coatOfArms:CoatOfArms
}