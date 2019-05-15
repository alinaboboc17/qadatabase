export class QAService {

    constructor() {
        this.localStorage = window.localStorage;
        this.qaValues = [];
        this.retrieveInitialValues();
    }

    retrieveInitialValues() {
        let qas = this.localStorage.getItem("qaValues");
        if (!qas) {
            this.qaValues = [
                {
                    question: "What is the tallest peak in Romania?",
                    answer: "Moldoveanu. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                },
                {
                    question: "What is the capital of France?",
                    answer: "Paris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                    question: "Who is the chancelor of Germany?",
                    answer: "Angela Merkel. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
                },
            ];
            this.localStorage.setItem('qaValues', JSON.stringify(this.qaValues));
        } else {
            this.qaValues = JSON.parse(qas);
        }
        console.log(JSON.stringify(this.qaValues));
    }

    addQAPair(qa) {
        // check if the pair question answer is already saved
        let checkForDuplicates = this.qaValues.filter((qaObj) => { return (qaObj.question === qa.question && qaObj.answer === qa.answer) });
        if(checkForDuplicates.length > 0 ) {
            return false;
        } else {
            this.qaValues.push(qa);
            this.localStorage.setItem('qaValues', JSON.stringify(this.qaValues));
                return true;
        }
    }

    removeQAPair(qa) {
        this.qaValues = this.qaValues.filter((qaObj) => { return (qaObj.question !== qa.question && qaObj.answer !== qa.answer) });
        this.localStorage.setItem('qaValues', JSON.stringify(this.qaValues));
    }
}