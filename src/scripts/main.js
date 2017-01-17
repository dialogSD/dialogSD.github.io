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

    document.getElementById('calendar').addEventListener('click', () => {
        calendarPage.style.visibility = 'visible';
    });

    document.getElementById('training').addEventListener('click', () => {
        trainingPage.style.visibility = 'visible';
    });

    document.getElementById('solution').addEventListener('click', () => {
        solutionPage.style.visibility = 'visible';
    });
};
