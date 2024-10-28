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
        this.vida = novaVida < 0 ? 0 : novaVida;
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
        this.vidaMax = this.life;
        this.ataque = 3;
        this.defesa = 1;
    }
}

class MonstroGrande extends Caracteristicas{
    constructor(){
        super('Monstro Grande');
        this.vida = 70;
        this.vidaMax = this.life;
        this.ataque = 8;
        this.defesa = 8;
    }
}