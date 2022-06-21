const progressBar = document.getElementById('progress-bar');
const fileSelect = document.getElementById('file');
const uploadButton = document.getElementById('upload-button');
const label = document.getElementById('lab');

fileSelect.addEventListener('change', () => {
    fileSelect.style.backgroundColor = 'green';
})

uploadButton.addEventListener('click', () => {
    const userFile = fileSelect.files[0];

    if(!userFile){
        picked = false;
        alert("Please pick an image file to send.")
        return
    }

    const payload = new FormData();

    payload.append('user-file', userFile, 'image.jpg');

    const request = new XMLHttpRequest();

    request.open('POST', 'Your endpoint url <==');

    request.upload.addEventListener('progress', (e)=>{
        let procentage = e.loaded/e.total * 100;
        progressBar.value = procentage;
        label.innerText = Math.round(procentage) + '%';
    })

    request.addEventListener('load', () =>{
        console.log(request.status);
        console.log(request.response);
    })

    request.send(payload);
})