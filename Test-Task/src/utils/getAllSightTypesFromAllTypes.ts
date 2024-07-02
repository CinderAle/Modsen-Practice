import placesConstants from "@/constants/placesConstants";
import { SightTypes } from "@/types/sightTypes";

export default (types: string[]): SightTypes[] => {
    const sightTypes = new Set<SightTypes>();
    types.forEach((type) => {
        for (const keyValue of placesConstants) {
            if (keyValue[1].has(type) && !sightTypes.has(keyValue[0])) {
                sightTypes.add(keyValue[0]);
                break;
            }
        }
    });
    return [...sightTypes];
};
