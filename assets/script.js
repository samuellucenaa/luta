let jogador = new Mago('Samuel');
let npc = new MonstroGrande();

let cenario = new Cenario(
    jogador,
    npc,
    document.querySelector('.area-jogador'),
    document.querySelector('.area-npc')
);

cenario.inicio();