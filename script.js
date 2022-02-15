"use strict";
let deineBMI = 0;

const calcBMI = () => {
  const gewicht = document.getElementById("gewicht").value;
  const körperGross = document.getElementById("körperGröße").value;
  const hiddenBMI = document.querySelector(".showBMI");
  const deineBMI = gewicht / körperGross ** 2;
  if (gewicht > 0 && gewicht < 400 && körperGross > 0.2 && körperGross < 2.5) {
    document.getElementById("BMI").innerHTML = `Deine BMI : ${deineBMI}`;
    hiddenBMI.classList.remove("hidden");
  } else {
    document.getElementById(
      "BMI"
    ).innerHTML = `Deine Gewicht oder Körpergroße hat falschgeschrieben. Bitte nochmal kontrolieren.`;
    hiddenBMI.classList.remove("hidden");
  }
};
