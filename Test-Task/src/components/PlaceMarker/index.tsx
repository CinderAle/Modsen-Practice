import StyledPlaceMarker from "./StyledPlaceMarker";

interface Props {
    place: google.maps.places.PlaceResult;
}

const PlaceMarker = ({ place }: Props) => {
    const showPlaceInfo = () => {
        console.log(place.types);
    };
    return (
        <>
            {place.geometry?.location !== undefined && (
                <StyledPlaceMarker
                    coordinates={place.geometry.location}
                    icon="car"
                    onClick={showPlaceInfo}
                />
            )}
        </>
    );
};

export default PlaceMarker;
