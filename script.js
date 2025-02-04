let answers = {}; // Object to store user answers

function nextPage(pageNumber) {
    // Hide all pages
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    // Show the requested page
    let nextPage = document.getElementById('page' + pageNumber);
    if (nextPage) {
        nextPage.style.display = 'block';
    }

    // Save answers before moving to the next page
    switch (pageNumber) {
        case 3:
            saveAnswer('q1', document.querySelector('input[name="q1"]:checked'));
            break;
        case 4:
            saveAnswer('q2', document.querySelector('input[name="q2"]:checked'));
            break;
        case 5:
            saveAnswer('q3', document.querySelector('input[name="q3"]:checked'));
            break;
        case 6:
            saveFinalScore();
            displaySummary();
            break;
    }
}

function saveAnswer(question, answerElement) {
    if (answerElement) {
        answers[question] = answerElement.value;
    }
}

function saveFinalScore() {
    let chiefsScore = document.getElementById('chiefsScore').value;
    let eaglesScore = document.getElementById('eaglesScore').value;

    if (chiefsScore === "" || eaglesScore === "") {
        alert("Please enter scores for both teams.");
        // Optionally, prevent advancing to the next page here by returning false;
        return false;
    }

    if (isNaN(chiefsScore) || isNaN(eaglesScore)) {
        alert("Scores must be numeric values.");
        return false;
    }
    answers['chiefsScore'] = chiefsScore;
    answers['eaglesScore'] = eaglesScore;
}


function displaySummary() {
    let summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `
        <p><b>Who will win:</b> ${answers.q1 || 'No answer'}</p>
        <p><b>Chiefs score:</b> ${answers.q2 || 'No answer'}</p>
        <p><b>First TD:</b> ${answers.q3 || 'No answer'}</p>
        <p><b>Chiefs Final Score:</b> ${answers.chiefsScore || 'No answer'}</p>
        <p><b>Eagles Final Score:</b> ${answers.eaglesScore || 'No answer'}</p>
    `;
}