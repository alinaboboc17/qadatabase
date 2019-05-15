export class QAComponent {
    constructor(question, answer, qaService) {
        this.question = question;
        this.answer = answer;
        this.qaService = qaService;
        this.initialize();
        this.answerVisibility = false;
    }

    initialize() {
        this.div = document.createElement('div');

        var questionDiv = document.createElement('div');
        questionDiv.textContent = this.question;
        questionDiv.setAttribute('class', 'question');
        this.div.appendChild(questionDiv);
        questionDiv.addEventListener('click', () => {
            this.answerVisibility = !this.answerVisibility;
            answerDiv.setAttribute('class', this.answerVisibility ? 'answer' : 'hiddenAnswer');
        });


        var answerDiv = document.createElement('div');
        answerDiv.textContent = this.answer;
        answerDiv.setAttribute('class', 'hiddenAnswer');
        this.div.appendChild(answerDiv);

        this.button = document.createElement('input');
        this.button.setAttribute('type', 'submit');
        this.button.setAttribute('ID', 'removeButton');
        this.button.setAttribute('value', 'Remove');
        this.button.addEventListener('click', () => {
            this.div.parentNode.removeChild(this.div);
            this.qaService.removeQAPair({ 'question': this.question, 'answer': this.answer });
        });
        answerDiv.appendChild(this.button);
    }
}