const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Madrid", "Londres", "Paris", "Berlim"],
        answer: 2
    },
    {
        question: "Quem escreveu a série de livros 'Harry Potter'?",
        options: ["J.K. Rowling", "Stephenie Meyer", "Suzanne Collins", "Veronica Roth"],
        answer: 0
    },
    {
        question: "Qual é a montanha mais alta do mundo?",
        options: ["Everest", "K2", "Kilimanjaro", "Denali"],
        answer: 0
    }, {
        question: "Qual é o nome da capital do Canadá?", options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
        answer: 1
    },
    {
        question: "Qual é o nome da primeira nave espacial a levar um humano ao espaço?",
        options: ["Sputnik 1", "Vostok 1", "Apollo 11", "Skylab"],
        answer: 1
    },
    {
        question: "Qual é o nome do elemento químico com o símbolo 'Fe'?",
        options: ["Oxigênio", "Ferro", "Carbono", "Cálcio"],
        answer: 1
    },
    {
        question: "Qual é o nome da pintura famosa de Leonardo da Vinci que retrata uma mulher sorrindo?",
        options: ["A Última Ceia", "Mona Lisa", "A Criação de Adão", "A Guernica"],
        answer: 1
    },
    {
        question: "Qual é a capital do Chile?",
        options: ["Santiago", "Buenos Aires", "Lima", "Bogotá"],
        answer: 0
    },
    {
        question: "Qual é o nome do famoso jogador de basquete que é conhecido como 'King James'?",
        options: ["Kobe Bryant", "Michael Jordan", "LeBron James", "Magic Johnson"],
        answer: 2
    },
    {
        question: "Qual é o nome do famoso pintor que criou a obra 'A Noite Estrelada'?",
        options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
        answer: 1
    },
    {
        question: "Qual é o nome da atriz que interpretou Hermione Granger na série de filmes 'Harry Potter'?",
        options: ["Emma Stone", "Emma Watson", "Emma Roberts", "Emma Thompson"],
        answer: 1
    },
    {
        question: "Qual é o nome do cantor britânico que é conhecido como 'Rocket Man'?",
        options: ["Elton John", "David Bowie", "Freddie Mercury", "George Michael"],
        answer: 0
    },
    {
        question: "Qual é o nome do personagem principal da série de livros 'O Hobbit'?",
        options: ["Gandalf", "Bilbo Bolseiro", "Legolas", "Aragorn"],
        answer: 1
    },
    {
        question: "Qual é o nome do famoso rapper americano que foi assassinado em 1996?",
        options: ["Tupac Shakur", "The Notorious B.I.G.", "Eazy-E", "Nas"],
        answer: 0
    }, {
        question: "Qual é o nome da famosa estátua que fica no Rio de Janeiro, no Brasil?",
        options: ["A Estátua da Liberdade", "O Cristo Redentor", "A Torre Eiffel", "A Grande Muralha"],
        answer: 1
    },
    {
        question: "Qual é o nome do famoso vilão do Batman?",
        options: ["Coringa", "Pinguim", "Duas-Caras", "Charada"],
        answer: 0
    },
    {
        question: "Qual é o nome do famoso cantor de ópera italiano conhecido como 'The King of High C'?",
        options: ["Luciano Pavarotti", "Andrea Bocelli", "Plácido Domingo", "José Carreras"],
        answer: 0
    },
    {
        question: "Qual é o nome da atriz que interpretou Katniss Everdeen na série de filmes 'Jogos Vorazes'?",
        options: ["Jennifer Aniston", "Jennifer Lawrence", "Jennifer Lopez", "Jennifer Garner"],
        answer: 1
    },
    {
        question: "Qual é o nome da banda britânica que é conhecida por músicas como 'Bohemian Rhapsody' e 'We Will Rock You'?",
        options: ["The Rolling Stones", "Led Zeppelin", "Pink Floyd", "Queen"],
        answer: 3
    },
    {
        question: "Qual é o nome do famoso personagem criado por Walt Disney que é um rato?",
        options: ["Mickey Mouse", "Bugs Bunny", "Tom e Jerry", "Pernalonga"],
        answer: 0
    },
    {
        question: "Qual é o nome do famoso explorador que é conhecido por ter liderado a primeira expedição a alcançar o Polo Sul?",
        options: ["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "Christopher Columbus"],
        answer: 1
    },
    {
        question: "Qual é o nome do famoso cientista que é conhecido por ter descoberto a lei da gravidade?",
        options: ["Isaac Newton", "Albert Einstein", "Galileu Galilei", "Stephen Hawking"],
        answer: 0
    },
    {
        question: "Qual é o nome do famoso jogador de futebol argentino que é conhecido como 'El Pibe'?",
        options: ["Lionel Messi", "Diego Maradona", "Cristiano Ronaldo", "Neymar Jr."],
        answer: 1
    },
    {
        question: "Qual é o nome da famosa escultura grega que representa um guerreiro troiano?",
        options: ["Vênus de Milo", "David de Michelangelo", "Discóbolo de Míron", "Cavalo de Tróia"],
        answer: 3
    },
    {
        question: "Qual é o nome do famoso filósofo grego que foi aluno de Platão e professor de Alexandre, o Grande?",
        options: ["Sócrates", "Aristóteles", "Platão", "Epicuro"],
        answer: 1
    },
    // adicione mais perguntas aqui...
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function showQuestion(question) {
    questionEl.innerText = question.question;

    optionsEl.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => {
            checkAnswer(index === question.answer);
        });
        optionsEl.appendChild(button);
    });
}

function checkAnswer(correct) {
    if (correct) {
        score++;
        event.target.classList.add("correct");
    } else {
        event.target.classList.add("incorrect");
    }

    Array.from(optionsEl.children).forEach(button => {
        if (button.textContent === questions[currentQuestion].options[questions[currentQuestion].answer]) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.disabled = false;
}

function showScore() {
    questionEl.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;

    optionsEl.innerHTML = "";
    nextBtn.innerText = "Jogar Novamente";
    button.disabled = true;

    nextBtn.addEventListener("click", () => {
        location.reload();
    });
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion(questions[currentQuestion]);
    } else {
        showScore();
    }

    nextBtn.disabled = true;
});

showQuestion(questions[currentQuestion]);
