// select value and buttons
const value = document.querySelector('#value');
// get an array of elements with class button
const btns = document.querySelectorAll('.btn');

// Madlibs data
const companies = ['Uber', 'Lyft', 'Google', 'Apple', 'SpaceX', 'Tinder'];
const animals = [
  'Aardvark',
  'Blue Footed Booby',
  'Flying Dragon',
  'Giraffe Weevil',
  'Hammerhead Slug',
  'Komodo Dragon',
  'Naked Mole Rat',
  'Okapi',
  'Red Panda',
];
const vowels = ['A', 'E', 'I', 'O', 'U'];

function madLib() {
  value.innerHTML = '';

  for (let i = 0; i < 5; i++) {
    const companyName = companies[Math.floor(Math.random() * companies.length)];

    const firstLetter = companyName.charAt(0);
    const companyString =
      'My company is a' +
      (vowels.indexOf(firstLetter) > -1 ? 'n ' : ' ') +
      companyName +
      ' for ' +
      animals[Math.floor(Math.random() * animals.length)] +
      's!<br />';

    value.innerHTML += companyString;
  }
}

// iterate the btns array
btns.forEach(function (btn) {
  // for each btn, add click event listener
  btn.addEventListener('click', function (e) {
    // get a list of classes applied to this btn
    const styles = e.currentTarget.classList;

    // check is it has a specific class
    if (styles.contains('decrease')) {
      madLib();
    } else if (styles.contains('increase')) {
      madLib();
      // count = count * 2
    } else {
      value.innerHTML = '';
    }
  });
});
