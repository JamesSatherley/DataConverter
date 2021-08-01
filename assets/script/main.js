class conversion {
    constructor(input, input_type, output_type) {
        this.binary;
        this.hex;
        this.decimal;
        this.input = input;
        this.input_type = input_type;
        this.output_type = output_type
    }

    convert(){
        console.log(type, input_type, output_type)
    }
}



function main() {
    var input = document.getElementById('input');
    var input_type = document.getElementById('input_type');
    var output_type = document.getElementById('output_type');

    variable = new conversion();
    variable.convert();
}