import { JsonObject } from "./tcx";
import { GeoJsonLocation } from "./geo";
export declare class Trackpoint {
    static get DEFAULT_EPOCH_TIMESTAMP_STRING(): string;
    static get MILES_PER_KILOMETER(): number;
    static get YARDS_PER_MILE(): number;
    static get FEET_PER_METER(): number;
    doctype: string;
    time: string | null;
    seq: number | null;
    latitude: number | null;
    longitude: number | null;
    altitude_meters: number | null;
    altitude_feet: number | null;
    distance_meters: number | null;
    distance_miles: number | null;
    distance_km: number | null;
    distance_yds: number | null;
    heart_rate_bpm: number | null;
    speed: number | null;
    cadence: number | null;
    watts: number | null;
    location: GeoJsonLocation | null;
    elapsed_sec: number | null;
    elapsed_hhmmss: string | null;
    epoch_ms: number;
    constructor(raw_obj: JsonObject, sequence: number);
    addAltitudeFeet(): void;
    addDistances(): void;
    calculateElapsed(startingEpoch: number): void;
    addGeoJson(): void;
    cleanup(): void;
}