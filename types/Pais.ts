import { CoatOfArms } from "./CoatOfArms.js"
import { Flags } from "./Flags.js"
import { Maps } from "./Maps.js"
import { Name } from "./Name.js"
import { Translations } from "./Translations.js"

export type Pais={
    translations: Translations
    name:Name
    capital:string
    population:number
    area:number
    borders: Array <string>
    maps:Maps
    flags:Flags
    coatOfArms:CoatOfArms

}