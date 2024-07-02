import places from "@/constants/placesConstants";
import { SightTypes } from "@/types/sightTypes";

export default (filters: SightTypes[]): string[] => {
    return filters.reduce((types: string[], type) => {
        const placeTypes = places.get(type);
        return placeTypes !== undefined
            ? [...types, ...placeTypes]
            : [...types];
    }, []);
};
