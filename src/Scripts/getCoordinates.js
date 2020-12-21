const getCoordinates = (setLocation) => {
    navigator.geolocation.getCurrentPosition(setLocation, {enableHighAccuracy: true});
};

export default getCoordinates;