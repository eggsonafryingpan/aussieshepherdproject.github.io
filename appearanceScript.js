function myFunction(id) {
    console.log(id);
    var image = document.getElementById("image")
    image.removeAttribute("class");
    if (id == "solidRed") {
        var image = document.getElementById("image")
        image.classList.add('solidRedPhoto');
    }
    if (id == "redMerle") {
        var image = document.getElementById("image")
        image.classList.add('redMerlePhoto');
    }
    if (id == "blueMerle") {
        var image = document.getElementById("image")
        image.classList.add('blueMerlePhoto');
    }
    if (id == "solidBlack") {
        var image = document.getElementById("image")
        image.classList.add('solidBlackPhoto');
    }
}

function myFunction2(id) {
    console.log(id);
    var image = document.getElementById("image2")
    image.removeAttribute("class");
    if (id == "blue") {
        var image = document.getElementById("image2")
        image.classList.add('bluePhoto');
    }
    if (id == "brown") {
        var image = document.getElementById("image2")
        image.classList.add('brownPhoto');
    }
    if (id == "amber") {
        var image = document.getElementById("image2")
        image.classList.add('amberPhoto');
    }
    if (id == "heterochromia") {
        var image = document.getElementById("image2")
        image.classList.add('heterochromiaPhoto');
    }
}