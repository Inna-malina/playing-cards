let btn = document.querySelector('.btn');
let boxes = document.querySelectorAll('.box');
let centerBox = document.querySelector('.center-box');
let form = document.querySelector('form');

btn.addEventListener('click', function f1() {

    boxes.forEach((box) => {
        box.classList.add('box_shirt');
        setTimeout(center, 1000);
        setTimeout(one, 2000);
        setTimeout(two, 2100);
        setTimeout(three, 2200);
        setTimeout(four, 2300);
        setTimeout(five, 2400);
        setTimeout(six, 2500);
        setTimeout(seven, 2600);
        setTimeout(eight, 2700);

        box.addEventListener('click', function (e) {
            e.preventDefault();
            box.classList.remove('box_shirt');
            box.classList.add('percent-50');
            noAct();
        });



    });
    btn.classList.remove('btn');
    btn.classList.add('hidden');
});

function noAct() {
    for (let i = 0; i <= boxes.length; i++) {
        let boxClick = boxes[i];
        boxClick.classList.add('noAct');
        setTimeout(openForm, 1500);
    }
}

function center() {
    boxes[0].classList.add('box-1');
    boxes[1].classList.add('box-2');
    boxes[2].classList.add('box-3');
    boxes[3].classList.add('box-4');
    boxes[4].classList.add('box-5');
    boxes[5].classList.add('box-6');
    boxes[6].classList.add('box-7');
    boxes[7].classList.add('box-8');
}

function one() {
    boxes[0].classList.remove('box-1');
}

function two() {
    boxes[1].classList.remove('box-2');
}

function three() {
    boxes[2].classList.remove('box-3');
}

function four() {
    boxes[3].classList.remove('box-4');
}

function five() {
    boxes[4].classList.remove('box-5');
}

function six() {
    boxes[5].classList.remove('box-6');
}

function seven() {
    boxes[6].classList.remove('box-7');
}

function eight() {
    boxes[7].classList.remove('box-8');
}

function openForm() {
    centerBox.classList.add('hidden');
    form.classList.remove('hidden');
    form.scrollIntoView({
        behavior: 'smooth'
    });
}