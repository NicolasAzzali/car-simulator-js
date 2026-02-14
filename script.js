let carro = {
    fabricante: "Ford",
    modelo: "New Fiesta ST",
    cv: 182,
    cor: "Vermelho",
    ano: 2012,
    estaLigado: false,
    velocidade: 0,
    velocidadeMaxima: 220,


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
        }
        this.estaLigado = false
        return "Desligado"
    },

    acelerar: function() {
        if (!this.estaLigado) {
            return "Carro desligado, ligue-o para acelerar"
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
    }
};




// ToDo: Criar uma função status() para mostrar informações do veículo