const getCoordinates = (setLocation) => {
    navigator.geolocation.getCurrentPosition(setLocation);
};

export default getCoordinates;