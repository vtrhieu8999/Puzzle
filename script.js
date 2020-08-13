let i = document.getElementById('headI');
let j = document.getElementById('armI');
let k = document.getElementById('bodyI');
let l = document.getElementById('legI');

function swap(a, b) {
    let btn = document.getElementById(a);
    let img = document.getElementById(b).id;
    let boDyPart = '';
    switch (Math.floor(Math.random() * 4)) {
        case 0: {
            boDyPart = 'head';
        }
            break;
        case 1: {
            boDyPart = 'arm';
        }
            break;
        case 2: {
            boDyPart = 'body';
        }
            break;
        case 3: {
            boDyPart = 'leg';
        }
            break;
        default:
            alert('swap loi');
    }
    btn.value = boDyPart;
    switchAnimal(boDyPart, img);
    call(btn.id, btn.value);
}

function switchAnimal(bodyPart, img) {
    let animal = '';
    switch (Math.floor(Math.random() * 3)) {
        case 0: {
            animal = 'cat';
        }
            break;
        case 1: {
            animal = 'monkey';
        }
            break;
        case 2: {
            animal = 'panda';
        }
            break;
        default:
            alert('animal loi');
    }
    document.getElementById(img).src = 'img/' + bodyPart + '/' + animal + '.jpg';
    document.getElementById(img).alt = animal;
}

function call(a, b) {
    if (a == b) {
        if (i.alt == j.alt && j.alt == k.alt && k.alt == l.alt) {
            setTimeout(function (){
                alert('You are winner');
            }, 500)


        }
    }
}