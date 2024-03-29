// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [{
            type: "radiogroup",
            name: "question1",
            title: "What should you do if you notice a piece of gym equipment is broken or malfunctioning?",
            choices: [
                "Continue using it until it is fixed",
                "Report it to gym staff immediately",
                "Ignore it and move to a different machine",
                "Attempt to fix it yourself"
            ],
            correctAnswer: "Report it to gym staff immediately",
            explanation: "Continuing to use broken equipment can lead to accidents or injuries. It's essential to inform gym staff promptly so they can address the issue and ensure the safety of all members."
        },
        {
            type: "radiogroup",
            name: "question2",
            title: "Which of the following attire is most suitable for gym workouts?",
            choices: [
                "Loose-fitting clothing",
                "Jeans and a t-shirt",
                "Tight-fitting, breathable clothing",
                "Sweatpants and a hoodie"
            ],
            correctAnswer: "Tight-fitting, breathable clothing",
            explanation: "Loose clothing can get caught in gym equipment, leading to accidents. Tight-fitting, breathable clothing allows for better movement and reduces the risk of accidents."
        },
        {
            type: "radiogroup",
            name: "question3",
            title: "What should you do before using gym equipment for the first time?",
            choices: [
                "Read the instruction manual",
                "Ask a fellow gym-goer for guidance",
                "Guess how to use it based on appearance",
                "Skip using it altogether"
            ],
            correctAnswer: "Read the instruction manual",
            explanation: "Reading the instruction manual provides essential information on how to properly and safely use the equipment, reducing the risk of injury."
        },
        {
            type: "radiogroup",
            name: "question4",
            title: "When using free weights, what is crucial to prevent injury?",
            choices: [
                "Lifting as much weight as possible",
                "Using momentum to lift the weight",
                "Maintaining proper form and technique",
                "Exercising without a spotter"
            ],
            correctAnswer: "Maintaining proper form and technique",
            explanation: "Proper form and technique are essential for preventing injuries while using free weights. Lifting too much weight or using momentum can strain muscles or lead to accidents."
        },
        {
            type: "radiogroup",
            name: "question5",
            title: "What should you do if you experience dizziness or lightheadedness during a workout?",
            choices: [
                "Push through and finish your workout",
                "Drink more water",
                "Stop exercising and rest",
                "Increase the intensity of your workout"
            ],
            correctAnswer: "Stop exercising and rest",
            explanation: "Experiencing dizziness or lightheadedness could indicate dehydration, exhaustion, or an underlying health issue. It's crucial to stop exercising, rest, and hydrate to prevent accidents or fainting."
        },
        {
            type: "radiogroup",
            name: "question6",
            title: "Which of the following is essential to remember when using cardio equipment?",
            choices: [
                "Exceed the recommended maximum heart rate",
                "Wear headphones to block out distractions",
                "Use the safety clip or strap",
                "Increase speed without paying attention to surroundings"
            ],
            correctAnswer: "Use the safety clip or strap",
            explanation: "Using the safety clip or strap on cardio equipment like treadmills or ellipticals prevents accidents by stopping the machine if you lose control or fall."
        },
        {
            type: "radiogroup",
            name: "question7",
            title: "What should you do if you notice spills or wet spots on the gym floor?",
            choices: [
                "Walk carefully around them",
                "Alert gym staff to clean it up",
                "Ignore them and continue exercising",
                "Jump over them to avoid slipping"
            ],
            correctAnswer: "Alert gym staff to clean it up",
            explanation: "Spills or wet spots on the gym floor pose slip and fall hazards. Alerting gym staff ensures prompt cleanup, reducing the risk of accidents for yourself and others."
        },
        {
            type: "radiogroup",
            name: "question8",
            title: "Before using gym showers or locker rooms, what should you check for?",
            choices: [
                "The availability of towels",
                "Proper ventilation",
                "Any signs of mold or mildew",
                "The temperature of the water"
            ],
            correctAnswer: "Any signs of mold or mildew",
            explanation: "Mold or mildew in showers or locker rooms can pose health risks. Checking for signs of mold or mildew ensures a safe and hygienic environment."
        },
        {
            type: "radiogroup",
            name: "question9",
            title: "Which of the following is important for preventing the spread of germs in the gym?",
            choices: [
                "Sharing towels with others",
                "Using hand sanitizer before and after workouts",
                "Not wiping down equipment after use",
                "Exercising barefoot"
            ],
            correctAnswer: "Using hand sanitizer before and after workouts",
            explanation: "Using hand sanitizer helps kill germs and prevent the spread of illnesses, especially in shared gym spaces where equipment is frequently touched."
        },
        {
            type: "radiogroup",
            name: "question10",
            title: "What should you do if you witness someone using gym equipment unsafely?",
            choices: [
                "Ignore it and continue your workout",
                "Politely correct their technique",
                "Mock them for their lack of knowledge",
                "Report it to gym staff"
            ],
            correctAnswer: "Report it to gym staff",
            explanation: "Reporting unsafe behavior ensures the safety of all gym members and allows staff to provide guidance or assistance to prevent accidents."
        }
    ];

    // Randomly select a question
    const nQuestion = Math.floor((Math.random() * questions.length));

    const surveyJson = {
        title: "Gym Safety Quiz",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Gym Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };

    const survey = new Model(surveyJson);

        survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var explanation = question.explanation;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
            console.log("Explanation: " + explanation);
        }
    });

    return <Survey model={survey} />;
}