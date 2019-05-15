import { QAService } from './qaservice'
import { QAComponent } from './qacomponent';

var qaService = new QAService();

const container = document.getElementById('container');
for (let qa of qaService.qaValues) {
    let qaComponent = new QAComponent(qa.question, qa.answer, qaService);
    container.appendChild(qaComponent.div);
}

const submitButton = document.forms["qaForm"]["submitId"];
submitButton.addEventListener('click', () => {
    const question = document.forms["qaForm"]["questionId"].value;
    const answer = document.forms["qaForm"]["answerId"].value;

    if (question.length < 1 || answer.length < 1) {
        alert("Please add a question and and answer.");
    } else {
        let added = qaService.addQAPair({ 'question': question, 'answer': answer });
        if (added) {
            let qaComponent = new QAComponent(question, answer, qaService);
            container.appendChild(qaComponent.div);
        } else {
            alert('Question and answer already exist in the database.');
        }
    }
});
