export const defaultCenter : {lat: number, lng: number} = {
    lat: 53.909152033111155,
    lng: 27.548468084246515
};

export const getLocation = () : Promise<{lat: number, lng: number}> => {
    return new Promise((resolve, reject) => {
        if("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude: lat, longitude: lng } = position.coords;
                resolve({lat, lng});
            }, () => {
            reject(defaultCenter);
            })
        }
        else {
            reject(defaultCenter);
        }
    });
}