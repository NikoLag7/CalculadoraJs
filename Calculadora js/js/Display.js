class Display{
    constructor(displayvalor1,displayvalor2){
        this.displayvalor1 =displayvalor1;
        this.displayvalor2 =displayvalor2;
        this.calculador=new Calculadora();
        this.valorActual='';
        this.valorAnterior='';
    }

    addNum(numero){
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual= this.valorActual.toString()+numero.toString();
        this.printValues();
        
        
    }

    printValues(){
        this.displayvalor1.textContent = this.valorActual;
        this.displayvalor2.textContent = this.valorAnterior;

    }

}

