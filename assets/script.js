let log = new Log(document.querySelector('.log'));

let jogador = new Guerreiro('Samuel');
let npc = new MonstroGrande();

let cenario = new Cenario(
    jogador,
    npc,
    document.querySelector('.area-jogador'),
    document.querySelector('.area-npc'),
    log
);

cenario.start();