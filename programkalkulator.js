function cariSukuKeN() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var n = parseInt(document.getElementById("n").value);
  var sukuN = a + (n - 1) * b;
  document.getElementById("output").innerHTML = "Suku ke-" + n + " dalam deret aritmatika adalah " + sukuN + ".";
}

function hitungJumlahNSukuPertama() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var n = parseInt(document.getElementById("n").value);
  var jumlah = ((2 * a + (n - 1) * b) / 2) * n;
  document.getElementById("output").innerHTML = "Jumlah " + n + " suku pertama dalam deret aritmatika adalah " + jumlah + ".";
}

function hitungNilaiMean() {
  const a = parseFloat(document.getElementById("a").value);
  const jumlahSukuMean = parseFloat(document.getElementById("nmean").value);
  const nilaiSukuTerakhir = parseFloat(document.getElementById("umax").value);
  const panjangDeret = jumlahSukuMean + 2;
  const d = (nilaiSukuTerakhir - a) / (panjangDeret - 1);
  let hasil = [];

  if (jumlahSukuMean === 1) {
    // Jika hanya terdapat satu jumlah suku mean saja
    hasil.push((nilaiSukuTerakhir + a) / 2);
  } else {
    // Jika suku mean lebih dari 1
    for (let i = 1; i <= jumlahSukuMean; i++) {
      hasil.push(a + i * d);
    }
  }

  document.getElementById("output").innerHTML = "Hasil mean yang didapatkan yaitu " + hasil.join(', ');
}

function clearResult() {
  document.getElementById("output").innerHTML = "";
}
