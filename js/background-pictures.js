const pictures = [
    './pictures/234575566019212.png',
    './pictures/33776-9-mountains-file.png',
    './pictures/390-3902606_house-in-the-mountains-moraine-lake.png',
    './pictures/matterhorn-snow-mountain-free-photo-on-pixabay-blue-ridge-mountain-png-960_617.png',
    './pictures/mountain.png',
    './pictures/mountainous-landforms-natural-landscape-nature-mountain-hill-highland-grassland-wilderness-rock-hill-station-png-clip-art.png',
    './pictures/wallpaper-mountain.jpg'
];

//function setPicture() {
//    weatherBody.background = '';
//}

function controlbackgroundPictures() {
    curentPictureIndex++;
    if (curentPictureIndex >= pictures.length) {
        curentPictureIndex = 0;
    }
    getFoto(weatherBody.background);
}

