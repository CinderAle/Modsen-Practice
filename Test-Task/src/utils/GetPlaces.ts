// const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
// const PLACES_API_URI = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"

export const getNearbyPlaces = async (position: {lng: number, lat: number}, radius: number) => {
    await google.maps.importLibrary("places");
    const service = new google.maps.places.PlacesService(document.createElement("div"));
    return new Promise<google.maps.places.PlaceResult[] | null>((resolve) => {service.nearbySearch({
        location: position,
        radius: radius
    }, (response) => {
        resolve(response);
    })});
}