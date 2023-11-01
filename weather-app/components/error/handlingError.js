const handlingError = () => {
    console.log('entered');
    const container = document.getElementById('container');
    const error = document.createElement('img');
    error.src = "../assets/error.png";
    container.appendChild(error);
    return container;
}

export default handlingError;