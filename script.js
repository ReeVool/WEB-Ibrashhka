// фотки ибры
const ibra_left = document.getElementById('ibra_left')
const ibra = document.getElementById('ibra')
const ibra_right = document.getElementById('ibra_right')

// клик по ибре
document.getElementById('ibra').addEventListener('click', playRandomAudio)

function playRandomAudio() {
    const audioFiles = [
        'audio/анальные каналы.opus',
        'audio/закрытые глаза.opus',
        'audio/17 человек.opus',
        'audio/петушинные крики.opus',
        'audio/русик нахуй пошел.opus',
        'audio/уаааааа.opus',
        'audio/ух пидорас.opus'
    ];

    const randomIndex = Math.floor(Math.random() * audioFiles.length)
    const randomAudio = new Audio(audioFiles[randomIndex])
    randomAudio.play();
}


// клик по левой кнопке
document.getElementById('left_btn').addEventListener('click', left_click);
function left_click() {
    const audio_zoebis = 'audio/зоебись.opus'
    
    const zoebis = new Audio(audio_zoebis)
    zoebis.play();

    const image = document.getElementById('left_img')
    image.style.display = 'block'
    ibra.style.display = 'none'
    ibra_left.style.display = 'block'
    setTimeout(() => {
        image.style.display = 'none'
        ibra.style.display = 'block'
        ibra_left.style.display = 'none'
   }, 3000);
}

// клик по правой кнопке
document.getElementById('right_btn').addEventListener('click', right_click);
function right_click() {
    const audio_shuyali = 'audio/схуяли.opus'
    
    const shuyali = new Audio(audio_shuyali)
    shuyali.play();

    const image = document.getElementById('right_img')
    image.style.display = 'block'
    ibra.style.display = 'none'
    ibra_right.style.display = 'block'
    setTimeout(() => {
        image.style.display = 'none'
        ibra.style.display = 'block'
        ibra_right.style.display = 'none'
   }, 2000);
}
