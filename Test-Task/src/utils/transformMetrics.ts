import { constants } from "@/constants/constants";

export const metersToKilometers = (meters: number) => {
    return (meters / constants.METERS_IN_KILOMETER).toFixed(
        constants.DIGITS_IN_DISTANCE,
    );
};

const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTE = 60;

export const secondsToTime = (seconds: number) => {
    let time = "";
    if (seconds > SECONDS_IN_HOUR) {
        let hours = Math.floor(seconds / SECONDS_IN_HOUR);
        seconds -= hours * SECONDS_IN_HOUR;
        time += `${hours} ч`;
    }
    let minutes = Math.ceil(seconds / SECONDS_IN_MINUTE);
    time += ` ${minutes} мин`;
    return time.trim();
};
