import { SightTypes } from "@/types/sightTypes";

import getFilterTypes from "./getFilterTypes";

const makePromiseArrayForFilters = (
    position: { lng: number; lat: number },
    radius: number,
    filters: SightTypes[],
    service: google.maps.places.PlacesService,
): Promise<google.maps.places.PlaceResult[]>[] => {
    const filterTypes = getFilterTypes(filters);
    return filterTypes.reduce(
        (promises: Promise<google.maps.places.PlaceResult[]>[], type) => [
            ...promises,
            new Promise<google.maps.places.PlaceResult[]>((resolve) => {
                let places: google.maps.places.PlaceResult[] = [];
                service.nearbySearch(
                    {
                        location: position,
                        language: "ru",
                        radius: radius,
                        type: type,
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
                                    (place) =>
                                        place.business_status != undefined,
                                ),
                            );
                        }
                    },
                );
            }),
        ],
        [],
    );
};

export const getNearbyPlaces = async (
    position: { lng: number; lat: number },
    radius: number,
    filters: SightTypes[],
) => {
    await google.maps.importLibrary("places");
    const service = new google.maps.places.PlacesService(
        document.createElement("div"),
    );

    return Promise.all(
        makePromiseArrayForFilters(position, radius, filters, service),
    ).then(
        (placesArray) =>
            new Promise<google.maps.places.PlaceResult[]>((resolve) => {
                if (placesArray != null) {
                    const idSet = new Set<string>();
                    const allPlaces = placesArray.reduce(
                        (
                            array: google.maps.places.PlaceResult[],
                            places: google.maps.places.PlaceResult[],
                        ) => [
                            ...array,
                            ...places.filter((place) => {
                                if (
                                    place.place_id !== undefined &&
                                    !idSet.has(place.place_id)
                                ) {
                                    idSet.add(place.place_id);
                                    return true;
                                } else {
                                    return false;
                                }
                            }),
                        ],
                        [],
                    );
                    resolve(allPlaces);
                }
            }),
    );
};
