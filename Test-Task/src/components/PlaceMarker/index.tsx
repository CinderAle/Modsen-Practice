import { useTypedSelector } from "@/hooks/useTypedSelector";
import StyledPlaceMarker from "./StyledPlaceMarker";
import getSightTypeFromAllTypes from "@/utils/getSightTypeFromAllTypes";
import { SightTypes } from "@/types/SightTypes";
import { useAction } from "@/hooks/useAction";
import { Sight } from "@/types/Sight";

interface Props {
    place: google.maps.places.PlaceResult;
}

const PlaceMarker = ({ place }: Props) => {
    const filters = useTypedSelector((state) => state.filter.filters);
    const { showSightInfo } = useAction();

    const showPlaceInfo = () => {
        showSightInfo(
            new Sight(
                place.place_id,
                place.name,
                place.photos !== undefined ? place.photos[0].getUrl() : "",
                place.types,
                place.geometry?.location,
            ),
        );
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
