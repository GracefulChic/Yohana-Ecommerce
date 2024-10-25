document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('qa-form');

    const qaList = document.getElementById('qa-list');

 

    form.addEventListener('submit', (event) => {

        event.preventDefault();

       

        const question = document.getElementById('question').value.trim();

       

        if (question) {

            const qaItem = document.createElement('div');

            qaItem.className = 'qa-item';

           

            const questionParagraph = document.createElement('p');

            questionParagraph.innerHTML = `<strong>Question:</strong> ${question}`;

            qaItem.appendChild(questionParagraph);

           

            const answerParagraph = document.createElement('p');

            answerParagraph.innerHTML = `<strong>Answer:</strong> <em>Pending...</em>`;

            qaItem.appendChild(answerParagraph);

 

            const answerInputDiv = document.createElement('div');

            answerInputDiv.className = 'answer-input';

 

            const answerInput = document.createElement('input');

            answerInput.type = 'text';

            answerInput.placeholder = 'Type your answer here...';

            answerInputDiv.appendChild(answerInput);

 

            const submitAnswerButton = document.createElement('button');

            submitAnswerButton.textContent = 'Submit Answer';

            answerInputDiv.appendChild(submitAnswerButton);

 

            qaItem.appendChild(answerInputDiv);

            qaList.appendChild(qaItem);

 

            // Clear the form

            document.getElementById('question').value = '';

 

            // Handle answer submission

            submitAnswerButton.addEventListener('click', () => {

                const answer = answerInput.value.trim();

                if (answer) {

                    answerParagraph.innerHTML = `<strong>Answer:</strong> ${answer}`;

                    answerInputDiv.remove();

                }

            });

        }

    });

});