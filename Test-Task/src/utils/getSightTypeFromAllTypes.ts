import placesConstants from "@/constants/placesConstants";
import { SightTypes } from "@/types/SightTypes";

export default (types: string[], filters: SightTypes[]): SightTypes => {
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < filters.length; j++) {
            const filterTypes = placesConstants.get(filters[j]);
            if (filterTypes !== undefined && filterTypes.has(types[i])) {
                return filters[j];
            }
        }
    }
    return SightTypes.Other;
};
