window.addEventListener('load', () => {
    console.log('loaded!');
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    $('#jsonConvert').click(function () {
        const uploadedFile = document.querySelector('#fileUpload').files[0];
        toBase64(uploadedFile)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    });
})