import { CoatOfArms } from "./CoatOfArms.js";
import { Flags } from "./Flags.js";
import { Maps } from "./Maps.js";
import { Name } from "./Name.js";
import {Translations } from "./Translations.js";


export type Pais = {
    getDatos: any;
    translations: Translations;
    name:Name;
    capital: string;
    population: string;
    area: number;
    borders: Array <string>
    maps: Maps;
    flags: Flags;
    coatOfArms: CoatOfArms;
}
