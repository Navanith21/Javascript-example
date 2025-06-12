let home = 0;
let guest = 0;

function add(team, points) {
  if (team === 'home') {
    home += points;
    document.getElementById('homeScore').innerText = home;
  } else {
    guest += points;
    document.getElementById('guestScore').innerText = guest;
  }
}

function reset() {
  home = 0;
  guest = 0;
  document.getElementById('homeScore').innerText = home;
  document.getElementById('guestScore').innerText = guest;
}

