import { useTypedSelector } from "@/hooks/useTypedSelector";
import StyledPlaceMarker from "./StyledPlaceMarker";
import getSightTypeFromAllTypes from "@/utils/getSightTypeFromAllTypes";
import { SightTypes } from "@/types/SightTypes";

interface Props {
    place: google.maps.places.PlaceResult;
}

const PlaceMarker = ({ place }: Props) => {
    const filters = useTypedSelector((state) => state.filter.filters);

    const showPlaceInfo = () => {
        console.log(place.types);
    };

    const icon: string =
        SightTypes[
            getSightTypeFromAllTypes(
                place.types !== undefined ? place.types : [],
                filters,
            )
        ].toLowerCase();

    return (
        <>
            {place.geometry?.location !== undefined && (
                <StyledPlaceMarker
                    coordinates={place.geometry.location}
                    icon={icon}
                    onClick={showPlaceInfo}
                />
            )}
        </>
    );
};

export default PlaceMarker;
