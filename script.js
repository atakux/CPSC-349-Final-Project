// Get references to the buttons and movies containers
const changeUserBtn = document.getElementById("change-user-btn");
const logOutBtn = document.getElementById("log-out-btn");
const homeBtn = document.getElementById("home");
const watchListBtn = document.getElementById("watch-list");
const newReleasesBtn = document.getElementById("new-releases");
const moviesBtn = document.getElementById("movies");
const popularBtn = document.getElementById("popular");
const topRatedMovies = document.querySelectorAll(".movies-container")[0];
const latestMovies = document.querySelectorAll(".movies-container")[1];

// Add event listeners to the buttons
changeUserBtn.addEventListener("click", changeUser);
logOutBtn.addEventListener("click", logOut);
homeBtn.addEventListener("click", showHome);
watchListBtn.addEventListener("click", showWatchList);
newReleasesBtn.addEventListener("click", showNewReleases);
moviesBtn.addEventListener("click", showMovies);
popularBtn.addEventListener("click", showPopular);

// Set the initial state of the page
showHome();

function changeUser() {
  // Replace the user's name with a new one
  const legend = document.querySelector("legend");
  legend.textContent = "Jane_Doe456";
}

function logOut() {
  // Reload the page to log out the user
  location.reload();
}

function showHome() {
  // Show the top rated movies section and hide the latest releases section
  topRatedMovies.style.display = "show";
  latestMovies.style.display = "show";
}

function showWatchList() {
  // Show the latest releases section and hide the top rated movies section
  topRatedMovies.style.display = "none";
  latestMovies.style.display = "none";
}

function showNewReleases() {
  // Show the latest releases section and hide the top rated movies section
  topRatedMovies.style.display = "none";
  latestMovies.style.display = "show";
}

function showMovies() {
  // Show the top rated movies section and hide the latest releases section
  topRatedMovies.style.display = "show";
  latestMovies.style.display = "none";
}

function showPopular() {
  // Show the top rated movies section and hide the latest releases section
  topRatedMovies.style.display = "show";
  latestMovies.style.display = "none";
}


