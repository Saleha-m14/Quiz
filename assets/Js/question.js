let question = {
    title: 'What is the meanng of eager?',
    alternatives: ['desert', 'keen', 'bird','fish'],
    correctAnswer: 1
};
function showQuestion(q) {
    // 1. select dom element
    let titleDiv = document.getElementById('title');
    // 2. modify
    titleDiv.textContent = q.title;
    let alts = document.querySelectorAll('.alternative');
    alts.forEach(function(element, index){
        element.textContent = q.alternatives[index];

    });
       

}
showQuestion(question);





