const recomendaciones = {
  "Remolacha": {
    "Siembra / Ubicación": "Siembra las semillas directamente en la tierra, cubriéndolas con 1 a 2 centímetros de tierra.",
    "Suelo / Riego": "Usa tierra suelta y limpia, sin piedras, que tenga mucha materia orgánica. Riega regularmente, pero sin dejar que se encharque.",
    "Cosecha": "Recoge las remolachas cuando los bulbos estén del tamaño que quieres, generalmente en 2 o 3 meses."
  },
  "Zanahorias": {
    "Siembra / Ubicación": "Siembra las semillas directamente en la tierra, a 1 o 2 centímetros de profundidad.",
    "Suelo / Riego": "Necesita tierra suelta y profunda, sin piedras. Riega con regularidad, evitando que quede agua acumulada.",
    "Cosecha": "Cosecha las zanahorias cuando las raíces tengan el tamaño deseado, aproximadamente en 2 o 3 meses."
  },
  "Rabanitos": {
    "Siembra / Ubicación": "Siembra las semillas directamente en la tierra, cubriéndolas con 0.5 a 1 centímetro de tierra.",
    "Suelo / Riego": "Usa tierra suelta y rica en materia orgánica. Riega regularmente, pero sin que se encharque.",
    "Cosecha": "Los rabanitos están listos para cosechar en 3 a 4 semanas, cuando tengan buen tamaño."
  },
  "Orégano": {
    "Siembra / Ubicación": "Coloca la planta en un lugar donde le dé mucho sol. Soporta bien suelos pobres.",
    "Suelo / Riego": "Riega poco, prefiere que la tierra esté seca entre riegos.",
    "Cosecha": "Corta los tallos antes de que la planta florezca y seca en un lugar oscuro y ventilado."
  },
  "Menta": {
    "Siembra / Ubicación": "La menta crece bien con luz indirecta. Puedes cultivarla en macetas para controlar su crecimiento.",
    "Suelo / Riego": "Riega regularmente para que la tierra esté húmeda pero no encharcada.",
    "Cosecha": "Corta los tallos antes de que florezca y seca en un lugar oscuro y ventilado."
  },
  "Romero": {
    "Siembra / Ubicación": "Ubica el romero en un lugar con mucho sol y tierra que drene bien el agua.",
    "Suelo / Riego": "Riega poco; el romero tolera bien la sequía.",
    "Cosecha": "Cuando las ramas sean grandes, corta los tallos y seca en un lugar oscuro y ventilado."
  },
  "Lavanda": {
    "Siembra / Ubicación": "Pon la lavanda en un lugar con mucho sol y tierra que drene bien y sea un poco alcalina.",
    "Suelo / Riego": "Riega poco y evita que la tierra se encharque.",
    "Cosecha": "Corta los tallos cuando las flores estén en su mejor momento y seca en un lugar oscuro y ventilado."
  }
};

function mostrar() {
  const cultivo = document.getElementById("cultivo").value;
  const fase = document.getElementById("fase").value;
  const resultado = document.getElementById("resultado");

  if (recomendaciones[cultivo] && recomendaciones[cultivo][fase]) {
    resultado.textContent = recomendaciones[cultivo][fase];
  } else {
    resultado.textContent = "Por favor selecciona un cultivo y una fase válida.";
  }
}
