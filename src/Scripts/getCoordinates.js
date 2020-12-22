const getCoordinates = (setLocation) => {
    navigator.geolocation.getCurrentPosition(setLocation, showError, {enableHighAccuracy: true});
};

const showError = (error) => {
    alert(error);
};

export default getCoordinates;