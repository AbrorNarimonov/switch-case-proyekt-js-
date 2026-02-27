function hisobla() {
  let som = document.getElementById("som").value;
  let valyuta = document.getElementById("valyuta").value;
  let natija = document.getElementById("natija");

  if (som === "" || valyuta === "") {
    natija.innerHTML = "Natija: 0";
    return;
  }

  let kurs;

  switch (valyuta) {
    case "USD":
      kurs = 12500;
      break;
    case "EUR":
      kurs = 13500;
      break;
    case "RUB":
      kurs = 135;
      break;
  }

  let javob = (som / kurs).toFixed(2);
  natija.innerHTML = `Natija: ${javob} ${valyuta}`;
}

  
  
  
  
  
  
  
  
  
  


