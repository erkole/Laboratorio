/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|


 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE InterventiRBase PLEASE EDIT ../interventi-r.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
import { Materiali } from '../materiali';

/**
 * This is the model of InterventiR object
 *
 */
export class InterventiRBase {

    constructor() { }

    public _id: string;
    public Costo?: number;
    public Descrizione?: string;
    public Prezzo?: number;
    public Qnt?: number;
    public Totale?: number;
    public Um?: string;
    // Relations ArtKey
    public ArtKey: Materiali | string;
}