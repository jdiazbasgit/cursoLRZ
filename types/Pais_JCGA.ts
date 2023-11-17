import { Flags } from "./Flags_JCGA.js"
import { Maps } from "./Maps_JCGA.js"
import { Name } from "./Name_JCGA.js"
import { Translations } from "./Translations_JCGA.js"

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