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
        document.body.style.overflowY = 'hidden';
    });

    technologyPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        technologyPage.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    });

    document.getElementById('calendar').addEventListener('click', () => {
        calendarPage.style.visibility = 'visible';
        document.body.style.overflowY = 'hidden';
    });

    calendarPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        calendarPage.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    });

    document.getElementById('training').addEventListener('click', () => {
        trainingPage.style.visibility = 'visible';
        document.body.style.overflowY = 'hidden';
    });

    trainingPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        trainingPage.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    });

    document.getElementById('solution').addEventListener('click', () => {
        solutionPage.style.visibility = 'visible';
        document.body.style.overflowY = 'hidden';
    });

    solutionPage.getElementsByClassName('close')[0].addEventListener('click', () => {
        solutionPage.style.visibility = 'hidden';
        document.body.style.overflowY = 'scroll';
    });
};
