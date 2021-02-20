// set inital value to zero
let count = 2;
// select value and buttons
const value = document.querySelector('#value');
// get an array of elements with class button
const btns = document.querySelectorAll('.btn');

// iterate the btns array
btns.forEach(function (btn) {
  // for each btn, add click event listener
  btn.addEventListener('click', function (e) {
    // get a list of classes applied to this btn
    const styles = e.currentTarget.classList;

    // check is it has a specific class
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count *= 2;
      // count = count * 2
    } else {
      count = 0;
    }

    // based on value, change color
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
