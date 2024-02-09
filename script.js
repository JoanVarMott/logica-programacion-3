function factorial() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);

    if (isNaN(inputNumber) || inputNumber < 0) {
        document.getElementById('resultado').textContent = 
        `Error: ingresa un número positivo.`;
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ingresa un numero positivo!",
          });
    } else {
        let factorial = 1;
        for (let i = 1; i <= inputNumber; i++) {
            factorial *= i;
        }
        document.getElementById('resultado').textContent = 
        `El factorial de ${inputNumber} es ${factorial}.`;
        Swal.fire({
            // position: "top-end",
            icon: "success",
            title: `El factorial de ${inputNumber} es ${factorial}.`,
            showConfirmButton: false,
          });
    }
}