let carro = {
    fabricante: "Ford",
    modelo: "New Fiesta ST",
    cv: 182,
    cor: "Vermelho",
    ano: 2012-2013,
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
        if(this.velocidade < this.velocidadeMaxima) {
            this.velocidade += 20; 
            return "Velocidade aumentada"
        }
            return "Velocidade maxima"
    },

    frear: function() {
        if(this.velocidade > 0) {
            this.velocidade -= 20;
            return "Velocidade reduzida"
        }
            return "O carro já esta parado"
    }
};




