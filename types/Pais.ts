import { Flags } from "./Flags.js"
import { Maps } from "./Maps.js"
import { Name } from "./Name.js"
import { Translations } from "./Translations.js"

export type Pais={
    name:Name
    translations:Translations
    capital:string
    population:number
    area:number
    borders:Array<string>
    maps:Maps
    flags:Flags 
}