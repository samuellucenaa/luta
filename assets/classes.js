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
    
    vida = 100;
    ataque = 10;
    defesa = 8;

    constructor(nome){
        super(nome);
    }
}

class Mago extends Caracteristicas{
    
    vida = 80;
    ataque = 15;
    defesa = 3;
    
    constructor(nome){
        super(nome);
    }
}

class MonstroPequeno extends Caracteristicas{
    constructor(){
        super('Monstro Pequeno');
        this.vida = 50;
        this.vidaMax = this.vida;
        this.ataque = 3;
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
    constructor(lutador1, lutador2, elLutador1, elLutador2){
        this.lutador1 = lutador1;
        this.lutador2 = lutador2;
        this.elLutador1 = elLutador1;
        this.elLutador2 = elLutador2;

        //  as propriedades sem o El no final são as classes que você criou antes, e as com El no final são os elementos no HTML.
    }

    inicio(){
        this.update();
    }

    update(){
        this.elLutador1.querySelector('.nome').innerHTML = this.lutador1.nome;
        let lutador1Pct = (this.lutador1._vida / this.lutador1.vidaMax) * 100;
        this.elLutador1.querySelector('.barra').style.width = `${lutador1Pct}%`;

        this.elLutador2.querySelector('.nome').innerHTML = this.lutador2.nome;
        let lutador2Pct = (this.lutador2._vida / this.lutador2.vidaMax) * 100;
        this.elLutador2.querySelector('.barra').style.width = `${lutador2Pct}%`;
    }
}