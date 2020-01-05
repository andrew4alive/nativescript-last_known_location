import { Common } from './last_known_location.common';
export declare class Last_known_location extends Common {
    message: string;
    activity:any;
    constructor();
    greet(): string;
    public getlocation(callback,nopermission_callback):void;
}

