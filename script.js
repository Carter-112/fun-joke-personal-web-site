// script.js

// Function to load HTML snippets (header and footer)
function loadHTML(elementId, url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not fetch ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error(`Error loading ${url}:`, error);
        });
}

// Function to populate jokes
function populateJokes() {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the math book look sad? Because it had too many problems.",
        "What do you call fake spaghetti? An impasta!",
        "Why was the computer cold? It left its Windows open!",
        "Why don't programmers like nature? It has too many bugs.",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call cheese that isn't yours? Nacho cheese!",
        "Why couldn't the bicycle stand up by itself? It was two tired!",
        "What did the ocean say to the shore? Nothing, it just waved.",
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "Why did the coffee file a police report? It got mugged!",
        "What's orange and sounds like a parrot? A carrot!",
        "Why did the cookie go to the hospital? Because he felt crummy.",
        "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
        "Why was the math lecture so long? The professor kept going off on a tangent.",
        "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
        "What do you call a belt made out of watches? A waist of time.",
        "Why was the stadium so cool? It was filled with fans.",
        "Why did the gym close down? It just didn't work out!",
        "What did the buffalo say when his son left? Bison!",
        "Why did the mushroom get invited to the party? Because he was a fungi!",
        "Why don't oysters share their pearls? Because they're shellfish.",
        "Why was the broom late? It over swept!",
        "What do you call an alligator in a vest? An investigator.",
        "Why did the chicken cross the playground? To get to the other slide!",
        "Why can't you trust stairs? They're always up to something.",
        "What do you call a factory that makes okay products? A satisfactory.",
        "Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
        "Why do bees have sticky hair? Because they use honeycombs.",
        "Why was the picture sent to jail? It was framed.",
        "Why did the man run around his bed? To catch up on his sleep.",
        "What did one wall say to the other? I'll meet you at the corner.",
        "Why do cows have hooves instead of feet? Because they lactose.",
        "Why can't a nose be 12 inches long? Because then it would be a foot.",
        "What did the zero say to the eight? Nice belt!",
        "Why don't elephants chew gum? They do, just not in public.",
        "Why was six afraid of seven? Because seven ate nine!",
        "Why did the belt go to jail? Because it held up a pair of pants!",
        "What lights up a soccer stadium? A soccer match.",
        "Why don't some couples go to the gym? Because some relationships don't work out.",
        "What do you call a snowman with a six-pack? An abdominal snowman.",
        "Why did the barber win the race? Because he took a short cut.",
        "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
        "Why did the coffee taste like mud? Because it was ground a few minutes ago.",
        "Why did the cookie cry? Because his mother was a wafer so long.",
        "Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
        "Why did the pony get sent to his room? He wouldn't stop horsing around.",
        "Why did the banana go to the doctor? Because it wasn't peeling well.",
        "Why did the dolphin cross the ocean? To get to the other tide.",
        "Why did the tree go to the dentist? To get a root canal.",
        "What do you call a boomerang that doesn't come back? A stick.",
        "Why did the man put his money in the freezer? He wanted cold hard cash.",
        "What do you call a fish wearing a bowtie? Sofishticated.",
        "Why don't dinosaurs talk? Because they're extinct.",
        "Why did the bicycle fall over? Because it was two-tired.",
        "What do you call a pig that knows karate? A pork chop.",
        "Why was the math teacher late to work? He took the rhombus.",
        "Why can't your hand be 12 inches long? Because then it would be a foot.",
        "What do you call a can opener that doesn't work? A can't opener.",
        "Why did the football coach go to the bank? To get his quarter back.",
        "Why was the calendar afraid? Its days were numbered.",
        "Why did the scarecrow get promoted? He was outstanding in his field.",
        "Why did the man put his car in the oven? He wanted a hot rod.",
        "What did one hat say to the other? You wait here, I'll go on ahead.",
        "Why did the man with one hand cross the road? To get to the second-hand shop.",
        "Why did the chicken join a band? Because it had the drumsticks.",
        "Why did the banker quit his job? He lost interest.",
        "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
        "Why did the dog sit in the shade? Because he didn't want to be a hot dog.",
        "Why did the picture go to jail? It was framed.",
        "Why did the student throw his watch out of the window? He wanted to see time fly.",
        "Why did the tomato blush? Because it saw the salad dressing.",
        "Why did the physics teacher break up with the biology teacher? There was no chemistry.",
        "What do you get when you cross a snowman with a vampire? Frostbite.",
        "Why did the musician go to jail? He got caught trying to steal a beat.",
        "Why did the man run around his bed? Because he was trying to catch up on his sleep.",
        "What did the grape do when he got stepped on? He let out a little wine.",
        "Why did the fish get bad grades? Because it was below sea level.",
        "What do you call a dog that can tell time? A watch dog.",
        "Why did the math book look so sad? Because it had too many problems.",
        "Why was the belt arrested? For holding up the pants.",
        "Why did the man install a knocker on his door? Because he wanted to win the No-bell prize.",
        "Why don't seagulls fly over the bay? Because then they'd be bagels.",
        "Why did the cookie visit the doctor? He felt crummy.",
        "Why did the man name his dogs Rolex and Timex? Because they were watch dogs.",
        "Why did the computer go to the doctor? Because it had a virus.",
        "Why was the computer cold? It left its Windows open.",
        "Why was the cell phone wearing glasses? It lost its contacts.",
        "Why did the tree go to the dentist? It needed a root canal.",
        "Why did the music teacher need a ladder? To reach the high notes.",
        "Why did the cow go to New York? To see the moosicals.",
        "Why did the ghost go into the bar? For the boos.",
        "Why did the teddy bear say no to dessert? Because she was stuffed.",
        "Why did the coffee file a police report? It got mugged.",
        "Why did the stadium get hot after the game? All the fans left.",
        "Why did the farmer ride his horse into town? It was too heavy to carry.",
        "Why was the belt sent to jail? For holding up the pants.",
        "Why did the orange stop rolling down the hill? It ran out of juice.",
        "Why did the man get fired from the orange juice factory? Lack of concentration.",
        "Why did the bicycle collapse? It was two-tired.",
        "Why did the mushroom get invited to the party? Because he was a fungi.",
        "Why did the music teacher need a ladder? To reach the high notes.",
        "Why did the farmer ride his horse into town? It was too heavy to carry.",
        "Why was the belt arrested? For holding up the pants.",
        "Why don't seagulls fly over the bay? Because then they'd be bagels.",
        "Why did the cookie visit the doctor? He felt crummy.",
        "Why did the man name his dogs Rolex and Timex? Because they were watch dogs.",
        "Why did the computer go to the doctor? Because it had a virus.",
        "Why was the computer cold? It left its Windows open.",
        "Why was the cell phone wearing glasses? It lost its contacts.",
        "Why did the tree go to the dentist? It needed a root canal.",
        "Why did the music teacher need a ladder? To reach the high notes.",
        "Why did the cow go to New York? To see the moosicals.",
        "Why did the ghost go into the bar? For the boos.",
        "Why did the teddy bear say no to dessert? Because she was stuffed.",
        "Why did the coffee file a police report? It got mugged.",
        "Why did the stadium get hot after the game? All the fans left.",
        "Why did the farmer ride his horse into town? It was too heavy to carry.",
        "Why was the belt sent to jail? For holding up the pants.",
        "Why did the orange stop rolling down the hill? It ran out of juice.",
        "Why did the man get fired from the orange juice factory? Lack of concentration.",
        "Why did the bicycle collapse? It was two-tired.",
        "Why did the mushroom get invited to the party? Because he was a fungi.",
        "Why did the music teacher need a ladder? To reach the high notes.",
        "Why did the thief take a shower? He wanted to make a clean getaway."
    ];

    const jokeList = document.getElementById('joke-list');
    if (jokeList) {
        jokes.forEach(joke => {
            const li = document.createElement('li');
            li.textContent = joke;
            jokeList.appendChild(li);
        });
    }
}

// Load header and footer, then populate jokes on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer
    loadHTML('header-placeholder', '../header.html');
    loadHTML('footer-placeholder', '../footer.html');

    // Populate Jokes if on Jokes Page
    if (window.location.pathname.endsWith('/jokes/') || window.location.pathname.endsWith('/jokes/index.html')) {
        populateJokes();
    }
});
