const quoteText = document.querySelector(".quote"),
quoteBtn = document.getElementById("set"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;

// Array of custom quotes
const customQuotes = [
    { content: "Keep calm and avoid the battle", author: "Random" },
    { content: "Keep calm and face the devil", author: "Random" },
    { content: "Be your Own competitor", author: "Thalapathy Vijay" },
    { content: "Wakeup to Reality... NNothing ever goes as planned in this accursed world", author: "Madara Uchiha" },
    { content: "Two things can judge you \n Determination when you have nothing \n Attitude when you everything", author: "Thalapathy Vijay" },
    { content: "Problems are part of life \n Facing them with smile is art of life", author: "Random" },
    { content: "Pain is inevitable \n Suffering is optional", author: "Random" },
    { content: "Everyone have someone but for me iam the only one", author: "Pranav V" },
    { content: "Don't search for a good person \n Be a good person", author: "Asal Kolar" },
    { content: "An Apology without change in behaviour is a betrayal of trust", author: "Pranav V" },
    { content: "Acting like nothing affects me But actually it destroyed me", author: "Pranav V" },
    { content: "ou can take away my suits, you can take away my home, but there's one thing you can never take away from me... my mind", author: "Tony Stark" },
    { content: "Heroes are made by the paths they choose, not by the powers they are graced with", author: "Tony Stark" },
    { content: "I believe what doesn't kill you simply makes you, stranger", author: "Batman" },
    { content: "You either die a hero or live long enough to see yourself become the villain", author: "Harvey Dent" },
    { content: "If you're good at something, never do it for free", author: "Joker" },
    { content: "It's not who Iam underneath, But I do is defines me", author: "Batman" },
    { content: "Why so Serious", author: "Joker" },
    { content: "The world only makes sense if you force it to", author: "Batman" },
    { content: "Some men just want to watch the world burn", author: "Alfred Pennyworth" },
    { content: "Let the games begin!", author: "Bane" },
    { content: "Under the game before entering into it", author: "Pranav V" },
    { content: "If you want to crack a system, First under the System", author: "PCDOC" },
    { content: "Don't be her man, Be a Batman", author: "Pranav V" },
    { content: "Love someone they will use you \n Use someone they will love you", author: "Random" },
    { content: "If there is no struggle, there is no progress", author: "Frederick Douglass" },
    { content: "Be not afraid of growing slowly; be afraid only of standing still", author: "Chinese Proverb" },
    { content: "Changes brings opportunity", author: "Nido Qubein" },
    { content: "Makeups makes women beauty \n Breakups make men beauty", author: "Random" },
    { content: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
    { content: "Failure is a stepping stone of success", author: "Random" },
    { content: "Do not let circumstances control you ", author: "Jackie Chan" },
    { content: "I'm crazy, but I'm not stupid", author: "Jackie Chan" },
    { content: "Mistakes are always forgivable, If one has the courage to admit them ", author: "Bruce Lee" },
    { content: "Your not failed, You just learned", author: "Pranav V" },
    { content: "Do not pray for an easy life, pray for the strength to endore a difficult one", author: "Bruce Lee" },
    { content: "If you spend too much time thinking about a thing, you'll never get it done", author: "Bruce Lee" },
    { content: "The more we value things, the less we value ourselves", author: "Bruce Lee" },
    { content: "The key to immortality is first living a life worth remembering", author: "Bruce Lee" },
    { content: "It's just a bad day not a bad life", author: "Pranav V" },
    { content: "The only way to do great work is to love what you do", author: "Steve Jobs" },
    { content: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it", author: "Jordan Belfort" },
    { content: "The only limit to our realization of tomorrow will be our doubts of today", author: "Franklin D. Roosevelt" },
    { content: "The only thing worse than being blind is having sight but no vision", author: "Helen Keller" },
    { content: "The only thing that will stop you from fulfilling your dreams is you", author: "Tom Bradley" },
    { content: "The only way to achieve the impossible is to believe it is possible", author: "Charles Kingsleigh" },
    { content: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it", author: "Jordan Belfort" },
    { content: "The only limit to our realization of tomorrow will be our doubts of today", author: "Franklin D. Roosevelt" },
    { content: "The only thing worse than being blind is having sight but no vision", author: "Helen Keller" },
    { content: "The only thing that will stop you from fulfilling your dreams is you", author: "Tom Bradley" },
    { content: "The only way to achieve the impossible is to believe it is possible", author: "Charles Kingsleigh" },
    { content: "The only way to do great work is to love what you do", author: "Steve Jobs" },
    { content: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it", author: "Jordan Belfort" },
    { content: "The only limit to our realization of tomorrow will be our doubts of today", author: "Franklin D. Roosevelt" },
    { content: "The only thing worse than being blind is having sight but no vision", author: "Helen Keller" },
    { content: "The only thing that will stop you from fulfilling your dreams is you", author: "Tom Bradley" },
    { content: "The only way to achieve the impossible is to believe it is possible", author: "Charles Kingsleigh" },
    { content: "My efforts may be quiet, But my results will roar", author: "Pranav V" },
    
];

function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    setTimeout(() => {
        let randomIndex = Math.floor(Math.random() * customQuotes.length);
        let randomQuote = customQuotes[randomIndex];
        quoteText.innerText = randomQuote.content;
        authorName.innerText = randomQuote.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    }, 1000);
}

speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);
