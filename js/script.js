function myFunction() {
  var x = document.getElementById("formDataDiri");
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
var titleAvailability = document.getElementById("titleAvailability")
var inputUsia = document.getElementById("messageusia")
var titleUsia = document.getElementById("titleUsia")
var inputLokasi = document.getElementById("messagelokasi")
var titleLokasi= document.getElementById("titleLokasi")
var inputYearsexperience = document.getElementById("messageyearsexperience")
var titleYearsexperience = document.getElementById("titleYearsexperience")
var inputEmail = document.getElementById("messageemail")
var titleEmail = document.getElementById("titleEmail")

function saveMessage() {
  titleNama.innerHTML = inputNama.value;
  titleRole.innerHTML = inputRole.value;
  titleAvailability.innerHTML = "Availability: " + inputAvailability.value;
  titleUsia.innerHTML = "Usia: " + inputUsia.value;
  titleLokasi.innerHTML = "Lokasi: "+ inputLokasi.value;
  titleYearsexperience.innerHTML = "Years Experience: " + inputYearsexperience.value;
  titleEmail.innerHTML = "Email: " + inputEmail.value;
}