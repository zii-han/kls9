// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//Malfunction 
function start() {
  alert("Error:404")
}

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

function search() {
  var input = document.getElementById("search-box").value.toLowerCase();
  var muridCards = document.querySelectorAll(".murid-card");

  // Kondisi khusus jika nilai pencarian adalah "hidden"
  if (input === "farhan" || input === "fauzi" || input === "farhan fauzi") {
    alert("Akhirnya sadar juga kalau " + input + " ga ada 🗿");
    clear();
    return;
  }
  
  if (input === "demon" || input === "demon function") {
    clear();
    var o = 3;
    alert(input + " will be start in : " + o);
    var o = 2;
    alert(input + " will be start in : " + o);
    var o = 1;
    alert(input + " will be start in : " + o);
    var o = 0;
    alert(input + " will be start in : " + o);
    alert(input + " running");
    alert("demon ring function is running");
    
   while(true) {
     var cou = 0;
     cou.value = +1;
    alert("Demon Ring Function : " + cou);
     console.log("demon function telah mengulang sebanyak : " + cou);
   }
   
    return;
  }

  // Loop melalui semua kartu murid
  for (var i = 0; i < muridCards.length; i++) {
    var muridName = muridCards[i].querySelector("h3").textContent.toLowerCase();

    // Jika nama murid ditemukan, scroll ke kartu murid yang sesuai
    if (muridName.includes(input)) {
      muridCards[i].scrollIntoView({ behavior: "smooth", block: "start" });
      clear();
      return;
    }
  }

  // Jika tidak ditemukan murid dengan nama yang sesuai
  alert("Tidak dapat menemukan: " + input);
  clear();
  return;
}

// cleaner
function clear() {
  var input = document.getElementById("search-box");
  input.value = "";
}
