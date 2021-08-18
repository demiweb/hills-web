let scrollDownBtn = document.querySelector('.scroll-down');

$(".scroll-down").click(function() {
    if (window.innerWidth > 992) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".prizes").offset().top - 95
        }, 400);
    } else {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".prizes").offset().top - (window.innerWidth * 79/ 100)
        }, 400);
    }

});

let footerLink = document.querySelector('.footer-link label');
let linkForm = document.querySelector('.footer-link > a');
let timerNotify = setTimeout(() => {
    if (document.querySelector('.rules-notify')) {
        document.querySelector('.rules-notify').classList.remove('visible');

    }

}, 4000)
function changeActiveLink() {
    if (!footerLink) {

    } else {
        footerLink.addEventListener('click', () => {
            let input = footerLink.querySelector('input');
            if (input.checked) {
                document.querySelector('.footer-link > a').classList.remove('non-active');

            } else {
                document.querySelector('.footer-link > a').classList.add('non-active');

            }
        })
        linkForm.addEventListener('click', (e) => {
            if (linkForm.classList.contains('non-active')) {
                e.preventDefault();
                console.log('non-active');
                document.querySelector('.rules-notify').classList.remove('visible');
                clearTimeout(timerNotify);
                setTimeout(() => {
                    document.querySelector('.rules-notify').classList.add('visible');

                }, 1)
                timerNotify = setTimeout(() => {
                    document.querySelector('.rules-notify').classList.remove('visible');

                }, 4000)
            } else {

            }
        })
    }
}

changeActiveLink();


let questionContainer = [...document.querySelectorAll('.quiz-questions')];
let correctCounter = 0;
let counterAnswers = 1;
let barBtnsQuiz = [...document.querySelectorAll('.bar-btn')];
let activeFull = 1;
let fullQuestion = [...document.querySelectorAll('.full-screen')];
let fullLength = fullQuestion.length;
function checkCorrectAnswer() {
    if (!questionContainer.length) {

    } else {
        document.querySelector('.bar-number strong').innerHTML = counterAnswers;
        questionContainer.forEach((cont, k) => {
            let allQuestions = [...cont.querySelectorAll('.single-question')];
            allQuestions.forEach((btn, i) =>{
                btn.addEventListener('click', () => {
                    allQuestions.forEach((btn2) => {
                        btn2.classList.add('disabled');
                        if (btn2.classList.contains('is-correct')) {
                            btn2.classList.add('good');
                        } else {

                        }
                    });
                    if (btn.classList.contains('good')) {
                        correctCounter += 1;
                        btn.closest('.quiz-content').querySelector('.quiz-result .good').classList.add('visible');
                        [...document.querySelectorAll('.bar-item')][k].classList.add('good');
                        document.querySelector('.full-form .title strong').innerHTML = correctCounter;
                    } else {
                        btn.classList.add('wrong');
                        btn.closest('.quiz-content').querySelector('.quiz-result .bad').classList.add('visible');
                        [...document.querySelectorAll('.bar-item')][k].classList.add('wrong');

                    }
                    btn.closest('.full-screen').classList.add('answered');
                    console.log(correctCounter);
                    counterAnswers += 1;

                    document.querySelector('.bar-btn--next').classList.remove('disabled');


                })
            } )
        })

    }
}
checkCorrectAnswer();




function barBtnPress() {
    if (!barBtnsQuiz.length) {

    } else {
        barBtnsQuiz.forEach((btn) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('bar-btn--prev')) {
                    if (activeFull === 1) {

                    } else {
                        activeFull = activeFull - 1;
                        document.querySelector('.full-screen.visible').classList.remove('visible');
                        fullQuestion[activeFull - 1].classList.add('visible');
                        if (activeFull === 1) {
                            btn.classList.add('disabled');
                            console.log(activeFull + ' brb22 ' + counterAnswers);

                        }
                        if (counterAnswers >= activeFull) {

                            document.querySelector('.bar-btn--next').classList.remove('disabled');

                        }
                    }
                } else {
                    if (activeFull === fullLength) {
                        document.querySelector('.full-screen.visible').classList.remove('visible');
                        document.querySelector('.full-form').classList.add('visible');
                        barBtnsQuiz.forEach((btn3) => {
                            btn3.classList.add('hidden');
                        })
                        document.querySelector('.bar-number').classList.add('hidden');
                    } else {
                        btn.classList.add('disabled');
                        activeFull = activeFull + 1;
                        document.querySelector('.full-screen.visible').classList.remove('visible');
                        fullQuestion[activeFull - 1].classList.add('visible');
                        fullQuestion[activeFull - 1].classList.add('current');
                        [...document.querySelectorAll('.bar-item')][activeFull - 1].classList.add('current');
                        document.querySelector('.bar-btn--prev').classList.remove('disabled');
                        console.log(activeFull + ' brb ' + fullLength);
                        // if (activeFull === fullLength) {
                        //     btn.classList.add('disabled');
                        // }
                        if (counterAnswers > activeFull) {

                            document.querySelector('.bar-btn--next').classList.remove('disabled');

                        }
                    }
                }
                document.querySelector('.bar-number strong').innerHTML = activeFull;
            })
        })
    }
}

barBtnPress();

