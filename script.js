"use strict";
let deineBMI = 0;

let hiddenBMI = document.querySelector(".showBMI");
let ratschlag = document.querySelector(".ratschlag");

const resetBMI = () => {
  document.getElementById("gewicht").value = "";
  document.getElementById("körperGröße").value = "";
  hiddenBMI.classList.add("hidden");
  ratschlag.classList.add("hidden");
};

const calcBMI = () => {
  const gewicht = document.getElementById("gewicht").value;
  const körperGross = document.getElementById("körperGröße").value;
  const deineBMI = gewicht / körperGross ** 2;
  if (gewicht > 0 && gewicht < 400 && körperGross > 0.2 && körperGross < 2.5) {
    document.getElementById("BMI").innerHTML = `Deine BMI : ${deineBMI}`;
    hiddenBMI.classList.remove("hidden");

    if (deineBMI <= 10)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Meist nicht mit Überleben vereinbar`;

    if (deineBMI > 10 && deineBMI <= 12)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Akute Lebensgefahr`;
    if (deineBMI > 12 && deineBMI <= 16)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Hochgradiges Untergwewicht Grad`;
    if (deineBMI > 16 && deineBMI <= 17.5)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Mäßiges Untergewicht`;
    if (deineBMI > 17.5 && deineBMI <= 18.5)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Leichtest Untergewicht`;
    if (deineBMI > 18.5 && deineBMI <= 25)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Normalgewicht`;
    if (deineBMI > 25 && deineBMI <= 30)
      document.querySelector(
        ".ratschlag"
      ).innerHTML = `Kategorie : Präadipositas`;
    if (deineBMI > 30) {
      document.querySelector(".ratschlag").innerHTML = `Kategorie : Adipositas`;
    }

    ratschlag.classList.remove("hidden");
  } else {
    document.getElementById(
      "BMI"
    ).innerHTML = `Deine Gewicht oder Körpergroße hat falschgeschrieben. Bitte nochmal kontrolieren.`;
    hiddenBMI.classList.remove("hidden");
  }
};
