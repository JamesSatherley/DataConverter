class conversion {
    constructor(input, input_type, output_type) {
        this.input = input;
        this.input_type = input_type;
        this.output_type = output_type
        this.output = "";
    }

    convert(){
        console.log(input.value, input_type.value, output_type.value)
        switch (input_type) {
            case "Binary":
                switch (output_type) {
                    case "Binary":
                        output = input.value
                    case "Hex":
                        output = (parseInt(input.value, 16).toString(2)).padStart(8, '0');
                    case "Decimal":
                        output = parseInt(input.value, 2)
                }
            case "Hex":
                switch (output_type) {
                    case "Binary":
                        output = parseInt(input.value, 2).toString(16).toUpperCase();
                    case "Hex":
                        output = input.value
                    case "Decimal":
                        output = parseInt(input.value, 16)
                }
            case "Decimal":
                switch (output_type) {
                    case "Binary":
                        output = input.value.toString(2);
                    case "Hex":
                        output = input.value.toString(16);
                    case "Decimal":
                        output = input.value
                }
        }
    }
}


function main() {
    var input = document.getElementById('input').value;
    var input_type_select = document.getElementById('input_type');
    var output_type_select = document.getElementById('output_type');
    var input_type = input_type_select.options[input_type_select.selectedIndex].value;
    var output_type = output_type_select.options[output_type_select.selectedIndex].value;

    variable = new conversion(input, input_type, output_type);
    variable.convert();

    document.getElementById('output').value = variable.output;
}