export const getNearbyPlaces = async (
    position: { lng: number; lat: number },
    radius: number,
) => {
    let places: google.maps.places.PlaceResult[] = [];
    await google.maps.importLibrary("places");
    const service = new google.maps.places.PlacesService(
        document.createElement("div"),
    );
    return new Promise<google.maps.places.PlaceResult[] | null>((resolve) => {
        service.nearbySearch(
            {
                location: position,
                radius: radius,
            },
            (response, _status, pagination) => {
                if (response != null) {
                    places = places.concat(response);
                }
                if (pagination?.hasNextPage) {
                    pagination.nextPage();
                } else {
                    resolve(
                        places.filter(
                            (place) => place.business_status != undefined,
                        ),
                    );
                }
            },
        );
    });
};
