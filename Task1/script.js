const suggestions = [
  "Explore Kashmir for snow adventures!",
  "Party vibes and sunset views in Goa!",
  "Discover forts and camel rides in Rajasthan!"
];

function suggestPlace() {
  const random = Math.floor(Math.random() * suggestions.length);
  alert(suggestions[random]);
}

window.onscroll = function () {
  const topBtn = document.getElementById("top-btn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
