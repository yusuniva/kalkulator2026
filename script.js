const display = document.getElementById('display');

// angka/simbol ke layar
function appendValue(val) {
    display.value += val;
}

//layar hapus
function clearDisplay() {
    display.value = '';
}

// Fungsi Update kalkulato2026
function calculateResult() {
    const ekspresi = display.value;

    // Spesial Update
    if (ekspresi === "10+6" || ekspresi === "6+10") {
        display.value = "17"; 
    } else {
        try {
            display.value = eval(ekspresi);
        } catch (error) {
            display.value = 'Error';
        }
    }
}
