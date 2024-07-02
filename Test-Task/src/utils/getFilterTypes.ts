import { SightTypes } from "@/types/SightTypes";
import places from "@/constants/placesConstants";

export default (filters: SightTypes[]): string[] => {
    return filters.reduce((types: string[], type) => {
        let placeTypes = places.get(type);
        return placeTypes !== undefined
            ? [...types, ...placeTypes]
            : [...types];
    }, []);
};
