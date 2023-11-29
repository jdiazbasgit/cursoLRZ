import { CoatOfArms } from "./CoatOfArms"
import { Flags } from "./Flags"
import { Maps } from "./Maps"
import { Name } from "./Name"
import { Translations } from "./Translations"

export type Pais={
    
    cca3: string
    name:Name
    translations:any
    capital:string
    population:number
    area:number
    borders:Array<string>
    maps:Maps
    coatOfArms:CoatOfArms
    flags:Flags 
}