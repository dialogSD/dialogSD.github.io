/*------------------
//
//  main app js file
//
//---------------*/
window.onload = () => {
    const solutionPage = document.getElementById('solutionPage');
    const technologyPage = document.getElementById('technologyPage');
    const trainingPage = document.getElementById('trainingPage');
    const calendarPage = document.getElementById('calendarPage');

    document.getElementById('technology').addEventListener('click', () => {
        technologyPage.style.visibility = 'visible';
    });

    technologyPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        technologyPage.style.visibility = 'hidden';
    });

    document.getElementById('calendar').addEventListener('click', () => {
        calendarPage.style.visibility = 'visible';
    });

    calendarPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        calendarPage.style.visibility = 'hidden';
    });

    document.getElementById('training').addEventListener('click', () => {
        trainingPage.style.visibility = 'visible';
    });

    trainingPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        trainingPage.style.visibility = 'hidden';
    });

    document.getElementById('solution').addEventListener('click', () => {
        solutionPage.style.visibility = 'visible';
    });

    solutionPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        solutionPage.style.visibility = 'hidden';
    });

    new Siema({
        selector: '.dialogStep',
        duration: 200,
        easing: 'ease-out',
        perPage: 2,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: true
    });

    new Siema({
        selector: '.dialogSolution',
        duration: 200,
        easing: 'ease-out',
        perPage: 2,
        startIndex: 0,
        draggable: true,
        threshold: 20,
        loop: true
    });
};
