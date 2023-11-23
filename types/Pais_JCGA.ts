import { Flags } from "./Flags_JCGA.js"
import { CoatOfArms } from "./CoatOfArms_JCGA.js"
import { Maps } from "./Maps_JCGA.js"
import { Name } from "./Name_JCGA.js"
import { Translations } from "./Translations_JCGA.js"

export type Pais={
    open: string
    google: string
    cca3: any
    name:Name
    translations:Translations
    capital:string
    population:number
    area:number
    borders:Array<string>
    maps:Maps
    coatOfArms:CoatOfArms
    flags:Flags 
}