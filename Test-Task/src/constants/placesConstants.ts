import { SightTypes } from "@/types/SightTypes";

export default new Map<SightTypes, Set<string>>([
    [SightTypes.Architecture, new Set(["city_hall", "tourist_attraction"])],
    [SightTypes.Bank, new Set(["atm", "bank"])],
    [SightTypes.Bike, new Set(["bicycle_store"])],
    [
        SightTypes.Car,
        new Set(["car_dealer", "car_rental", "car_repair", "car_wash"]),
    ],
    [SightTypes.Coffee, new Set(["cafe"])],
    [
        SightTypes.Culture,
        new Set(["art_gallery", "museum", "painter", "tourist_attraction"]),
    ],
    [
        SightTypes.Entertainment,
        new Set([
            "aquarium",
            "bowling_alley",
            "casino",
            "movie_rental",
            "movie_theater",
            "night_club",
        ]),
    ],
    [
        SightTypes.Food,
        new Set([
            "bakery",
            "bar",
            "meal_delivery",
            "meal_takeaway",
            "restaurant",
        ]),
    ],
    [SightTypes.GasStation, new Set(["gas_station"])],
    [SightTypes.History, new Set(["cemetery", "funeral_home"])],
    [SightTypes.Industrial, new Set(["storage"])],
    [SightTypes.Intim, new Set([""])],
    [SightTypes.Nature, new Set(["park", "zoo"])],
    [
        SightTypes.Religion,
        new Set(["church", "hindu_temple", "mosque", "synagogue"]),
    ],
    [
        SightTypes.Shop,
        new Set([
            "book_store",
            "clothing_store",
            "convenience_store",
            "department_store",
            "drugstore",
            "electronics_store",
            "florist",
            "furniture_store",
            "hardware_store",
            "home_goods_store",
            "jewelry_store",
            "liquor_store",
            "pet_store",
            "shoe_store",
            "shopping_mall",
            "store",
            "supermarket",
        ]),
    ],
    [SightTypes.Sleep, new Set(["lodging"])],
    [SightTypes.Sport, new Set(["campground", "gym", "stadium"])],
]);
