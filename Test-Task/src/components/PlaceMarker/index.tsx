import emptyPhoto from "@/assets/png/empty.png";
import { useAction } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { Sight } from "@/types/sight";
import { SightTypes } from "@/types/sightTypes";
import getSightTypeFromAllTypes from "@/utils/getSightTypeFromAllTypes";

import StyledPlaceMarker from "./StyledPlaceMarker";

interface Props {
    place: google.maps.places.PlaceResult;
}

const PlaceMarker = ({ place }: Props) => {
    const filters = useTypedSelector((state) => state.filter.filters);
    const { showSightInfo } = useAction();

    const showPlaceInfo = () => {
        if (
            place.geometry !== undefined &&
            place.geometry.location !== undefined
        )
            showSightInfo(
                new Sight(
                    place.place_id,
                    place.name,
                    place.photos !== undefined
                        ? place.photos[0].getUrl()
                        : emptyPhoto,
                    place.types,
                    {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng(),
                    },
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
