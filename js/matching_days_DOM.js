var date1 = document.querySelector("#date1");
var date2 = document.querySelector("#date2");
var dayElems = document.querySelectorAll(".day");
var theseDays = matchingDays();

date1.addEventListener("change", function () {
  dayClassesClear();
  theseDays.setDate1(date1.value);
  dayClasses();
});

date2.addEventListener("change", function () {
  dayClassesClear();
  theseDays.setDate2(date2.value);
  dayClasses();
});

function dayClasses() {
  if (theseDays.sameDayCheck()) {
    document.getElementById(theseDays.getDay1()).classList.add("sameday");
  } else {
    if (date1.value) {
      document.getElementById(theseDays.getDay1()).classList.add("date1day");
    }
    if (date2.value) {
      document.getElementById(theseDays.getDay2()).classList.add("date2day");
    }
  }
}

function dayClassesClear() {
  dayElems.forEach(function (day) {
    if (day.classList.contains("date1day")) {
      day.classList.remove("date1day");
    }
    if (day.classList.contains("date2day")) {
      day.classList.remove("date2day");
    }
    if (day.classList.contains("sameday")) {
      day.classList.remove("sameday");
    }
  });
}
