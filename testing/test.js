
// Year and location variables (changeable)
let currentYear = 2023;
let city = 'Edmonton';
let province = 'Alberta';
let country = 'Canada';

// Personal variables (unchangeable)
const firstName = 'Kyle';
const lastName = 'Syriste';
const birthYear = 1993;
const age = currentYear - birthYear;
const job = 'Full-Stack Engineer';
const yearsExperience = 0;
const language = 'English';
const dreamJob = 'SpaceX';

console.log(`My name is ${firstName} ${lastName} and I am a ${currentYear - birthYear} year old ${job} born in ${birthYear}!`);

if (job.includes('Engineer')) {
    console.log("You are a developer!");
} else {
    console.log("All good, get to work!");
};

if (yearsExperience) {
    console.log(`This is just the beginning of the journey for a ${job}! Keep on bettering yourself as a developer.`);
} else {
    console.log(`Keep learning! You'll land a ${job} gig soon enough!`);
};

/*
// Array for checking if the job variable includes operative words
const checkCareer = [
    { keyword: 'engineer' },
    { keyword: 'developer' },
    { keyword: 'programmer' },
    { keyword: 'coder' },
    { keyword: 'dev' },
    { keyword: 'eng' },
];

// Function to check checkCareer array to see if the career matches in the job variable
function correctField(job, checkCareer) {
    for (const { keyword } of checkCareer) {
        if (job.includes(keyword)) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
};

const result = correctField(job, checkCareer);

console.log(result);
console.log(correctField('You are a developer!'), checkCareer);*/