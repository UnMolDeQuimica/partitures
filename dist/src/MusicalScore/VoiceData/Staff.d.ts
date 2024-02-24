import { Voice } from "./Voice";
import { Instrument } from "../Instrument";
import { Tie } from "./Tie";
export declare class Staff {
    constructor(parentInstrument: Instrument, instrumentStaffId: number);
    idInMusicSheet: number;
    audible: boolean;
    following: boolean;
    isTab: boolean;
    private parentInstrument;
    private voices;
    private volume;
    private id;
    private stafflineCount;
    private solo;
    hasLyrics: boolean;
    openTieDict: {
        [_: number]: Tie;
    };
    get ParentInstrument(): Instrument;
    set ParentInstrument(value: Instrument);
    get Voices(): Voice[];
    get Solo(): boolean;
    set Solo(value: boolean);
    get Id(): number;
    get Volume(): number;
    set Volume(value: number);
    get StafflineCount(): number;
    set StafflineCount(value: number);
    toString(): string;
}
