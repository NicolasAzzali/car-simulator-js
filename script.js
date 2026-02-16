let carro = {
    fabricante: "Ford",
    modelo: "New Fiesta ST",
    cv: 182,
    cor: "Vermelho",
    ano: 2012,
    estaLigado: false,
    velocidade: 0,
    velocidadeMaxima: 220,
    freioDeMao: true,


    ligar: function() {
        if (this.estaLigado) {
            return "Veiculo já está ligado"
        }
        this.estaLigado = true
        return"Ligado"
    },

    desligar: function() {
        if (!this.estaLigado) {
            return "Veículo já está desligado"
        } else if (!this.freioDeMao){
            return "Freio de mão solto, puxe-o para desligar"
        }
        this.estaLigado = false
        return "Desligado"
    },

    acelerar: function() {
        if (!this.estaLigado) {
            return "Carro desligado, ligue-o para acelerar"
        } else if (this.freioDeMao) {
            return "Freio de mão puxado, solte-o para acelerar"
        } else if(this.velocidade < this.velocidadeMaxima) {
            this.velocidade += 20; 
            return `Velocidade aumentada. ${this.velocidade} km/h`
        }
            return `Velocidade maxima. ${this.velocidade} km/h`
    },

    frear: function() {
        if(this.velocidade > 0) {
            this.velocidade -= 20;
            return `Velocidade reduzida. ${this.velocidade} km/h`
        }
            return "O carro já esta parado"
    },

    toggleFreioDeMao: function() {
        if (!this.freioDeMao) {
            this.freioDeMao = true
            return "Freio de mão puxado"
        } 

        this.freioDeMao = false;
        return "Freio de mão solto"
    },

    status: function() {
        return `Modelo:${this.modelo}, | Ligado:${this.estaLigado ? "Sim" : "Não"} | Velocidade:${this.velocidade} | Velocidade Máxima:${this.velocidadeMaxima}`;
    }
};




// ToDo: Criar uma função carSpecs() para mostrar especificações do veículo 