const form = document.getElementById('rsvp-form');

form.addEventListener('submit', (event) => {
  const name = document.getElementById('name').value.trim();
  const attending = document.querySelector('input[name="attending"]:checked');

  if (name === '') {
    alert('Please enter your name(s).');
    event.preventDefault();
  } else if (!attending) {
    alert('Please select whether you will be attending or not
