function invocarHechizo() {
  const frases = [
    "¡Has invocado al Oráculo de los Bits!",
    "Un dragón digital acaba de aparecer 🐉",
    "¡JavaScript se postra ante tu grandeza!",
    "Has desbloqueado el modo oscuro de la Matrix 🕶️",
    "¡Cuidado! Acabas de iniciar la Secuencia 42."
  ];
  const mensaje = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("mensaje").innerText = mensaje;
}
