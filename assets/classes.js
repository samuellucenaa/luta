class Caracteristicas{
    
    _vida = 1;
    vidaMax = 1;
    ataque = 0;
    defesa = 0;
    
    constructor(nome){
        this.nome = nome;
    }

    get vida(){
        return this._vida;
    }

    set vida(novaVida){
        this._vida = novaVida < 0 ? 0 : novaVida;
    }
}

class Guerreiro extends Caracteristicas{
    constructor(nome){
        super(nome);
        this.vida = 100;
        this.vidaMax = this.vida;
        this.ataque = 10;
        this.defesa = 8;
    }
}

class Mago extends Caracteristicas{
    constructor(nome){
        super(nome);
        this.vida = 80;
        this.vidaMax = this.vida;
        this.ataque = 15;
        this.defesa = 3;
    }
}

class MonstroPequeno extends Caracteristicas{
    constructor(){
        super('Monstro Pequeno');
        this.vida = 50;
        this.vidaMax = this.vida;
        this.ataque = 5;
        this.defesa = 1;
    }
}

class MonstroGrande extends Caracteristicas{
    constructor(){
        super('Monstro Grande');
        this.vida = 70;
        this.vidaMax = this.vida;
        this.ataque = 8;
        this.defesa = 8;
    }
}

class Cenario{
    constructor(lutador1, lutador2, elLutador1, elLutador2, objetoLog){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.elLutador1 = elLutador1;
        this.elLutador2 = elLutador2;
        this.log = objetoLog;

        //  as propriedades sem o El no final são as classes que você criou antes, e as com El no final são os elementos no HTML.
    }

    start(){
        this.update();

        this.elLutador1.querySelector('.botao-atacar').addEventListener('click', () => this.ataque(this.lutador1, this.lutador2));
        this.elLutador2.querySelector('.botao-atacar').addEventListener('click', () => this.ataque(this.lutador2, this.lutador1));
    }

    update(){
        const lutador1Pct = (this.lutador1.vida / this.lutador1.vidaMax) * 100;
        this.elLutador1.querySelector('.barra').style.width = `${lutador1Pct}%`;
        this.elLutador1.querySelector('.nome').innerHTML = `${this.lutador1.nome} - ${this.lutador1.vida.toFixed(0)} HP`;
        
        const lutador2Pct = (this.lutador2.vida / this.lutador2.vidaMax) * 100;
        this.elLutador2.querySelector('.barra').style.width = `${lutador2Pct}%`;
        this.elLutador2.querySelector('.nome').innerHTML = `${this.lutador2.nome} - ${this.lutador2.vida.toFixed(0)} HP`;
    }

    ataque(atacando, atacado){
        if(atacando.vida <= 0 || atacado.vida <= 0){
            this.log.addMensagem('Um dos jogadores está morto');
            return;
        }

        let fatorAtaque = parseFloat(Math.random() * 2).toFixed(2);
        let fatorDefesa = parseFloat(Math.random() * 2).toFixed(2);

        let ataqueAtual = atacando.ataque * fatorAtaque;
        let defesaAtual = atacado.defesa * fatorDefesa;

        if(ataqueAtual > defesaAtual){
            atacado.vida -= ataqueAtual;
            this.log.addMensagem(`${atacando.nome} causou ${ataqueAtual.toFixed(2)} de dano!`)
        } else{
            this.log.addMensagem(`${atacado.nome} conseguiu defender!`)
        }

        this.update();
    }
}

class Log{
    lista = [];
    constructor(elLista){
        this.elLista = elLista;
    }

    addMensagem(msg){
        this.lista.push(msg);
        this.render();
    }

    render(){
        this.elLista.innerHTML = '';

        for(let i in this.lista){
            this.elLista.innerHTML += `<li>${this.lista[i]}</li>`;
        }
    }
}