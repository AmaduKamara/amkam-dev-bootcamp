const tutors = [
  {
    id: '1',
    name: 'Colt Steele',
    position: 'Developer and Bootcamp Instructor',
    description:
      "Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where I've helped hundreds of people become web developers and change their lives.",
    image: './images/tutors/selected/Colt.jpg',
  },
  {
    id: '2',
    name: 'Maximilian Schwarzmüller',
    position: 'Professional Web Developer and Instructor',
    description:
      'Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages.',
    image: './images/tutors/selected/Maximilian.jpeg',
  },
  {
    id: '3',
    name: 'Brad Traversy',
    position: 'Full Stack Web Developer & Instructor at Traversy Media',
    description:
      'Brad Traversy has been programming for around 12 years and teaching for almost 5 years. He is the owner of Traversy Media which is a successful web development YouTube channel and specializes in Fullstack web development.',
    image: './images/tutors/selected/Brad.jpeg',
  },
  {
    id: '4',
    name: 'Jonas Schmedtmann',
    position: 'Web Developer, Designer, and Teacher.',
    description:
      "Hi, I'm Jonas! I have been identified as one of Udemy's Top Instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfaction.",
    image: './images/tutors/selected/Jonas.jpg',
  },
  {
    id: '5',
    name: 'Andrew Mead',
    position: 'A Full-stack Developer & Teacher',
    description:
      "I launched my first Udemy course in 2014 and had a blast teaching and helping others. Since then, I've launched 3 courses with over 110,000 students and over 18,000 5-star reviews.",
    image: './images/tutors/selected/Andrew.jpg',
  },
  {
    id: '6',
    name: 'Bucky Roberts',
    position: 'Director of Engineering',
    description:
      'I’ve acquired a wide depth of knowledge and expertise in using my technical skills in programming, computer science, software development, and mobile app development to developing solutions to help organizations increase productivity, and accelerate business performance.',
    image: './images/tutors/selected/Bucky.jpg',
  },
];

const colt = tutors.find((tutor) => tutor.id === '1');
const maxi = tutors.find((tutor) => tutor.id === '2');
const brad = tutors.find((tutor) => tutor.id === '3');
const jonas = tutors.find((tutor) => tutor.id === '4');
const andrew = tutors.find((tutor) => tutor.id === '5');
const bucky = tutors.find((tutor) => tutor.id === '6');

// Colt Steel
document.getElementById('speaker-colt').textContent = colt.name;
document.getElementById('colt-position').textContent = colt.position;
document.getElementById('colt-description').textContent = colt.description;
document.getElementById('colt-image').src = colt.image;

// Maximillian
document.getElementById('speaker-max').textContent = maxi.name;
document.getElementById('max-position').textContent = maxi.position;
document.getElementById('max-description').textContent = maxi.description;
document.getElementById('max-image').src = maxi.image;

// Brad
document.getElementById('speaker-brad').textContent = brad.name;
document.getElementById('brad-position').textContent = brad.position;
document.getElementById('brad-description').textContent = brad.description;
document.getElementById('brad-image').src = brad.image;

// Jonas
document.getElementById('speaker-jonas').textContent = jonas.name;
document.getElementById('jonas-position').textContent = jonas.position;
document.getElementById('jonas-description').textContent = jonas.description;
document.getElementById('jonas-image').src = jonas.image;

// Andrew
document.getElementById('speaker-andrew').textContent = andrew.name;
document.getElementById('andrew-position').textContent = andrew.position;
document.getElementById('andrew-description').textContent = andrew.description;
document.getElementById('andrew-image').src = andrew.image;

// Bucky
document.getElementById('speaker-bucky').textContent = bucky.name;
document.getElementById('bucky-position').textContent = bucky.position;
document.getElementById('bucky-description').textContent = bucky.description;
document.getElementById('bucky-image').src = bucky.image;
