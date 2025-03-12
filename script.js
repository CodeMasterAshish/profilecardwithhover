let navigation = document.querySelector('.navigation');
let toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    navigation.classList.toggle('active');
};

const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#F33FF5", "#F5A623", "#23A6F5", "#2ECC71", "#9B59B6", "#E74C3C", "#1ABC9C",
    "#D35400", "#7D3C98", "#2980B9", "#8E44AD", "#C0392B", "#16A085", "#F39C12", "#E67E22", "#27AE60", "#2C3E50",
    "#B03A2E", "#76448A", "#2874A6", "#239B56", "#A93226", "#7B241C", "#D68910", "#2471A3", "#A569BD", "#E59866",
    "#5D6D7E", "#A04000", "#196F3D", "#7D6608", "#633974", "#17202A", "#99A3A4", "#D4AC0D", "#DFFF00", "#40E0D0",
    "#FA8072", "#8A2BE2", "#A52A2A", "#00FF7F", "#DC143C", "#20B2AA", "#778899", "#008B8B", "#DAA520", "#FF4500"
];

// Get elements
const changeBackgroundBtn = document.getElementById("change-background");
const profileCard = document.querySelector(".profile-card");
const navigationBar = document.querySelector(".navigation");

// Change background on hover for button
changeBackgroundBtn.addEventListener("mouseover", function() {
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

changeBackgroundBtn.addEventListener("mouseout", function() {
    document.body.style.backgroundColor = ""; 
});

// Change profile card color on hover
profileCard.addEventListener("mouseover", function() {
    profileCard.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

profileCard.addEventListener("mouseout", function() {
    profileCard.style.backgroundColor = ""; 
});

// Change navigation bar color on hover
navigationBar.addEventListener("mouseover", function() {
    navigationBar.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

navigationBar.addEventListener("mouseout", function() {
    navigationBar.style.backgroundColor = "";
});
