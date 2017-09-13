const image = document.querySelector('img');

fetch('callback.png')
    .then(response => {
        console.log(response);
        return response.blob();
    })
    .then(blob => {
        console.log(blob);
        let imageURL = URL.createObjectURL(blob);
        image.src = imageURL;
    });
