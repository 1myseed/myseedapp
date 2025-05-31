const recomendaciones = {
  "Remolacha": {
    "Siembra / Ubicación": {
      es: "Siembra las semillas directamente en la tierra, cubriéndolas con 1 a 2 centímetros de tierra.",
      en: "Sow the seeds directly in the soil, covering them with 1 to 2 centimeters of soil."
    },
    "Suelo / Riego": {
      es: "Usa tierra suelta y limpia, sin piedras, que tenga mucha materia orgánica. Riega regularmente, pero sin dejar que se encharque.",
      en: "Use loose, clean soil without stones, rich in organic matter. Water regularly but avoid waterlogging."
    },
    "Cosecha": {
      es: "Recoge las remolachas cuando los bulbos estén del tamaño que quieres, generalmente en 2 o 3 meses.",
      en: "Harvest the beets when the bulbs reach the desired size, usually in 2 to 3 months."
    }
  },
  "Zanahorias": {
    "Siembra / Ubicación": {
      es: "Siembra las semillas directamente en la tierra, a 1 o 2 centímetros de profundidad.",
      en: "Sow seeds directly into the soil, 1 to 2 centimeters deep."
    },
    "Suelo / Riego": {
      es: "Necesita tierra suelta y profunda, sin piedras. Riega con regularidad, evitando que quede agua acumulada.",
      en: "Needs loose and deep soil, free of stones. Water regularly, avoiding water accumulation."
    },
    "Cosecha": {
      es: "Cosecha las zanahorias cuando las raíces tengan el tamaño deseado, aproximadamente en 2 o 3 meses.",
      en: "Harvest carrots when roots reach the desired size, approximately in 2 to 3 months."
    }
  },
  "Rabanitos": {
    "Siembra / Ubicación": {
      es: "Siembra las semillas directamente en la tierra, cubriéndolas con 0.5 a 1 centímetro de tierra.",
      en: "Sow the seeds directly in the soil, covering them with 0.5 to 1 centimeter of soil."
    },
    "Suelo / Riego": {
      es: "Usa tierra suelta y rica en materia orgánica. Riega regularmente, pero sin que se encharque.",
      en: "Use loose soil rich in organic matter. Water regularly but avoid waterlogging."
    },
    "Cosecha": {
      es: "Los rabanitos están listos para cosechar en 3 a 4 semanas, cuando tengan buen tamaño.",
      en: "Radishes are ready to harvest in 3 to 4 weeks when they reach a good size."
    }
  },
  "Orégano": {
    "Siembra / Ubicación": {
      es: "Coloca la planta en un lugar donde le dé mucho sol. Soporta bien suelos pobres.",
      en: "Place the plant in a spot with plenty of sun. Tolerates poor soils well."
    },
    "Suelo / Riego": {
      es: "Riega poco, prefiere que la tierra esté seca entre riegos.",
      en: "Water sparingly; prefers soil to dry out between watering."
    },
    "Cosecha": {
      es: "Corta los tallos antes de que la planta florezca y seca en un lugar oscuro y ventilado.",
      en: "Cut stems before the plant flowers and dry in a dark, ventilated place."
    }
  },
  "Menta": {
    "Siembra / Ubicación": {
      es: "La menta crece bien con luz indirecta. Puedes cultivarla en macetas para controlar su crecimiento.",
      en: "Mint grows well with indirect light. You can grow it in pots to control growth."
    },
    "Suelo / Riego": {
      es: "Riega regularmente para que la tierra esté húmeda pero no encharcada.",
      en: "Water regularly to keep soil moist but not waterlogged."
    },
    "Cosecha": {
      es: "Corta los tallos antes de que florezca y seca en un lugar oscuro y ventilado.",
      en: "Cut stems before flowering and dry in a dark, ventilated place."
    }
  },
  "Romero": {
    "Siembra / Ubicación": {
      es: "Ubica el romero en un lugar con mucho sol y tierra que drene bien el agua.",
      en: "Place rosemary in a sunny spot with well-draining soil."
    },
    "Suelo / Riego": {
      es: "Riega poco; el romero tolera bien la sequía.",
      en: "Water sparingly; rosemary tolerates drought well."
    },
    "Cosecha": {
      es: "Cuando las ramas sean grandes, corta los tallos y seca en un lugar oscuro y ventilado.",
      en: "When branches are large, cut stems and dry in a dark, ventilated place."
    }
  },
  "Lavanda": {
    "Siembra / Ubicación": {
      es: "Pon la lavanda en un lugar con mucho sol y tierra que drene bien y sea un poco alcalina.",
      en: "Put lavender in a sunny spot with well-draining, slightly alkaline soil."
    },
    "Suelo / Riego": {
      es: "Riega poco y evita que la tierra se encharque.",
      en: "Water sparingly and avoid waterlogging."
    },
    "Cosecha": {
      es: "Corta los tallos cuando las flores estén en su mejor momento y seca en un lugar oscuro y ventilado.",
      en: "Cut stems when flowers are at their best and dry in a dark, ventilated place."
    }
  }
};

// Variables para las banderas
const flagEs = document.getElementById("flag-es");
const flagEn = document.getElementById("flag-en");

let idiomaActual = "es";
let desplegado = false; // controla si la otra bandera está visible

function mostrarSoloBanderaActual() {
  if (idiomaActual === "es") {
    flagEs.style.opacity = "1";
    flagEs.style.pointerEvents = "auto";
    flagEn.style.opacity = "0";
    flagEn.style.pointerEvents = "none";
  } else {
    flagEn.style.opacity = "1";
    flagEn.style.pointerEvents = "auto";
    flagEs.style.opacity = "0";
    flagEs.style.pointerEvents = "none";
  }
  desplegado = false;
}

function toggleBanderas() {
  if (desplegado) {
    mostrarSoloBanderaActual();
  } else {
    flagEs.style.opacity = "1";
    flagEs.style.pointerEvents = "auto";
    flagEn.style.opacity = "1";
    flagEn.style.pointerEvents = "auto";
    desplegado = true;
  }
}

function cambiarIdioma(nuevoIdioma) {
  if (nuevoIdioma === idiomaActual) {
    toggleBanderas();
    return;
  }
  idiomaActual = nuevoIdioma;
  actualizarTextosIdioma(nuevoIdioma);
  mostrarSoloBanderaActual();
}

function actualizarTextosIdioma(idioma) {
  const titulo = document.getElementById("titulo");
  const cultivo = document.getElementById("cultivo");
  const fase = document.getElementById("fase");
  const btnVer = document.getElementById("btn-ver");
  const optCultivo = document.getElementById("opt-cultivo");
  const optFase = document.getElementById("opt-fase");

  if (idioma === "es") {
    titulo.textContent = "My Seed 🌿";
    optCultivo.textContent = "Seleccionar cultivo";
    optFase.textContent = "Seleccionar fase";
    btnVer.textContent = "Ver recomendación";

    cultivo.options[1].text = "Remolacha";
    cultivo.options[2].text = "Zanahorias";
    cultivo.options[3].text = "Rabanitos";
    cultivo.options[4].text = "Orégano";
    cultivo.options[5].text = "Menta";
    cultivo.options[6].text = "Romero";
    cultivo.options[7].text = "Lavanda";

    fase.options[1].text = "Siembra / Ubicación";
    fase.options[2].text = "Suelo / Riego";
    fase.options[3].text = "Cosecha";
  } else {
    titulo.textContent = "My Seed 🌿";
    optCultivo.textContent = "Select Crop";
    optFase.textContent = "Select Stage";
    btnVer.textContent = "See recommendation";

    cultivo.options[1].text = "Beetroot";
    cultivo.options[2].text = "Carrots";
    cultivo.options[3].text = "Radishes";
    cultivo.options[4].text = "Oregano";
    cultivo.options[5].text = "Mint";
    cultivo.options[6].text = "Rosemary";
    cultivo.options[7].text = "Lavender";

    fase.options[1].text = "Sowing / Location";
    fase.options[2].text = "Soil / Watering";
    fase.options[3].text = "Harvest";
  }
}

flagEs.addEventListener("click", () => {
  if (idiomaActual === "es") {
    toggleBanderas();
  } else {
    cambiarIdioma("es");
  }
});
flagEn.addEventListener("click", () => {
  if (idiomaActual === "en") {
    toggleBanderas();
  } else {
    cambiarIdioma("en");
  }
});

function mostrar() {
  const cultivo = document.getElementById("cultivo").value;
  const fase = document.getElementById("fase").value;
  const resultado = document.getElementById("resultado");

  if (!cultivo || !fase) {
    resultado.textContent = idiomaActual === "es" ? 
      "Por favor selecciona un cultivo y una fase." : 
      "Please select a crop and a stage.";
    return;
  }

  // Para ajustar clave en objeto recomendaciones, que en inglés se llama diferente
  let cultivoKey = cultivo;
  if (idiomaActual === "en") {
    // Map de traducción simple para las claves
    const mapaCultivos = {
      "Beetroot": "Remolacha",
      "Carrots": "Zanahorias",
      "Radishes": "Rabanitos",
      "Oregano": "Orégano",
      "Mint": "Menta",
      "Rosemary": "Romero",
      "Lavender": "Lavanda"
    };
    cultivoKey = mapaCultivos[cultivo] || cultivo;
  }

  const texto = recomendaciones[cultivoKey]?.[fase]?.[idiomaActual];

  if (texto) {
    resultado.textContent = texto;
  } else {
    resultado.textContent = idiomaActual === "es" ? 
      "No hay recomendación disponible para esta opción." : 
      "No recommendation available for this option.";
  }
}

// Al cargar la página
window.onload = () => {
  mostrarSoloBanderaActual();
  actualizarTextosIdioma(idiomaActual);
};
