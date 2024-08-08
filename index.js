let digits = document.querySelectorAll(".digit");
digits.forEach((element) => {
  for(let i = 0; i < 15; i++) {
    element.innerHTML += `<span>${i}</span> \n`;
  }
});