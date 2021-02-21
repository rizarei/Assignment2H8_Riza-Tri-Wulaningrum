function myFunction() {
    var x = document.getElementById("datadiri");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
var inputNama = document.getElementById("messagenama")
var nama = document.getElementById("nama")
var inputRole = document.getElementById("messagerole")
var role = document.getElementById("role")
var inputAvailability = document.getElementById("messageavailability")
var availability = document.getElementById("availability")
var inputUsia = document.getElementById("messageusia")
var usia = document.getElementById("usia")
var inputLokasi = document.getElementById("messagelokasi")
var lokasi= document.getElementById("lokasi")
var inputYearsexperience = document.getElementById("messageyeasrsexperience")
var yearsexperience = document.getElementById("yearsexperience")
var inputEmail = document.getElementById("messageemail")
var email = document.getElementById("email")

function saveMessage() {
    nama.innerHTML = inputNama.value;
    role.innerHTML = inputRole.value;
    availability.innerHTML = inputAvailability.value;
    usia.innerHTML = inputUsia.value;
    lokasi.innerHTML = inputLokasi.value;
    yearsexperience.innerHTML = inputYearsexperience.value;
    email.innerHTML = inputEmail.value;
}