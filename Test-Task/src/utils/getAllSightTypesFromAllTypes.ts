import placesConstants from "@/constants/placesConstants";
import { SightTypes } from "@/types/SightTypes";

export default (types: string[]): SightTypes[] => {
    let sightTypes = new Set<SightTypes>();
    types.forEach((type) => {
        for (let keyValue of placesConstants) {
            if (keyValue[1].has(type) && !sightTypes.has(keyValue[0])) {
                sightTypes.add(keyValue[0]);
                break;
            }
        }
    });
    return [...sightTypes];
};
