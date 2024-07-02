import { LatLng, LatLngLiteral } from "google-maps-react-markers";

export class Sight {
    id: string;
    title: string;
    photo: string;
    types: string[];
    coordinates: LatLng | LatLngLiteral;
    constructor(
        id: string = "",
        title: string = "",
        photo: string = "",
        types: string[] = [],
        coordinates: LatLng | LatLngLiteral = { lat: 0, lng: 0 },
    ) {
        this.id = id;
        this.title = title;
        this.photo = photo;
        this.types = types;
        this.coordinates = coordinates;
    }
}
