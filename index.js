// add solution here

<<<<<<< HEAD
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instrustments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push((musicians[i]) + " plays " + (instruments[i]));
  }
  return beatles;
}


=======
const musicians = ["John", "Paul", "George", "Ringo"];

const instruments = ["guitar", "guitar", "bass", "drums"];

function theBeatlesPlay(musicians, instrustments) {
  var array = [];
  
  for (let i = 0; i < 4; i++) {
      array.push(`${musicians[0]} plays ${instruments[0]}`);
    }
  return array;
  
}

>>>>>>> c6297083da95fab2c8f2a090b048b9104ecff033
theBeatlesPlay(musicians, instruments);


const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
<<<<<<< HEAD
  var johnFacts = [];
  var i = 0;
  while (i < facts.length) {
    johnFacts.push(facts[i] + "!!!");
    i++;
  }
  
  return johnFacts;
}

function iLoveTheBeatles(num) {
  var love = [];
  do { 
    love.push('I love the Beatles!');
    num++;
  } while (num < 15);
  
return love;

}
  
=======
  while () {
    facts[n] + "!!!";
  }
  return facts;  
}
>>>>>>> c6297083da95fab2c8f2a090b048b9104ecff033
