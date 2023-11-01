const loading = (state) => {
    if(state === true)
        document.getElementById('loader').style.display = 'block';
    else
        document.getElementById('loader').style.display = 'none';
}

export default loading;