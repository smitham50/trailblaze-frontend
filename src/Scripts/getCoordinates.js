const getCoordinates = (setLocation) => {
    navigator.geolocation.getCurrentPosition(setLocation, showError, {enableHighAccuracy: true, timeout: 5000});
};

const showError = (error) => {
    alert(error);
};

export default getCoordinates;