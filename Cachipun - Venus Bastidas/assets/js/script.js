let name = prompt("Hola soy Clip! Cuál es tu nombre?");
const marcador = {
  usuario: 0,
  maquina: 0,
};
//& Ciclo jugadas
let totalJugadas = prompt("Cuántas veces quieres jugar?");
let numberTotalJugadas = Number(totalJugadas);

for (let i = 0; i < numberTotalJugadas; i++) {
  let jugadaUsuario = prompt(`*****MARCADOR*****\n ${marcador.usuario} a ${marcador.maquina}\n\ Elije Piedra (0), Papel (1) o Tijera (2)`);
  let numberJugadaUsuario = Number(jugadaUsuario);
  let jugadaMaquina = Math.floor(Math.random() * 3);

  //? CASO EMPATE
  if (numberJugadaUsuario === jugadaMaquina) {
    continue;
  }
  //? CASO MÁQUINA GANA
  if (numberJugadaUsuario === 0 && jugadaMaquina === 1) {
    marcador.maquina++;
  } //todo usuario piedra vs maquina papel gana maquina papel
  if (numberJugadaUsuario === 1 && jugadaMaquina === 2) {
    marcador.maquina++;
  } //todo usuario papel vs máquina tijeras gana máquina tijeras
  if (numberJugadaUsuario === 2 && jugadaMaquina === 0) {
    marcador.maquina++;
  } //todo usuario tijeras vs máquina papel gana máquina piedra

  //? CASO USUARIO GANA

  if (numberJugadaUsuario === 0 && jugadaMaquina === 2) {
    marcador.usuario++;
  } //~ usuario piedra vs maquina tijeras gana usuario piedra
  if (numberJugadaUsuario === 1 && jugadaMaquina === 0) {
    marcador.usuario++;
  } //~ usuario papel vs máquina piedra gana usuario papel
  if (numberJugadaUsuario === 2 && jugadaMaquina === 1) {
    marcador.usuario++;
  } //~usuario tijeras vs máquina papel gana usuario papel
}

//?  RESULTADO
if (marcador.usuario === marcador.maquina) {
  alert(`Has empatado ${marcador.usuario} a ${marcador.maquina}`);
} else if (marcador.usuario > marcador.maquina) {
  alert(`Has ganado ${marcador.usuario} a ${marcador.maquina}`);
} else {
  alert(`Has perdido ${marcador.usuario} a ${marcador.maquina}`);
}

const marcadorUsuario = document.getElementsByClassName("usuario");

const resultadosDiv = document.querySelector(".resultados");
resultadosDiv.innerHTML = `Marcador <br> ${name}: ${marcador.usuario} <br> Clip: ${marcador.maquina}`;
