let tahminHak = 5;
let tutulanSayi = Math.floor(Math.random() * 10) + 1; // Başlangıçta rastgele bir sayı oluştur
let seviye = 1;
let saniye = 30;

document.getElementById("tahminButton").onclick = function() {
    const tahmin = parseInt(document.getElementById("tahminInput").value);

    if (tahmin === tutulanSayi) {
        tahminHak = 5;
        seviye++;
        if (seviye === 2) {
            tutulanSayi = Math.floor(Math.random() * 20) + 1; // Yeni bir sayı oluştur
            document.getElementById("mesajArea").textContent = "1 ile 20 arasında bir sayı tahmin edin!";
        } else {
            tutulanSayi = Math.floor(Math.random() * 10) + 1; // Yeni bir sayı oluştur
        }
        alert("Tebrikler! Doğru tahmin! Devam edin.");
        document.getElementById("tahminInput").value = "";
        //gerisayım tekrar başlar
        saniye=30;
    } else if (tahmin < tutulanSayi) {
        document.getElementById("mesajArea").textContent = "Lütfen daha büyük bir değer girin.";
        tahminHak--;
        document.getElementById("tahminInput").value = "";
    } else {
        document.getElementById("mesajArea").textContent = "Lütfen daha küçük bir değer girin.";
        tahminHak--;
        document.getElementById("tahminInput").value = "";
    }

    if (tahminHak > 0) {
        document.getElementById("life").textContent = tahminHak;
        document.getElementById("level").textContent = seviye;
    } else {
        console.log("Tahmin hakkınız kalmadı!");
        // Input ve butonu pasif hale getir
        document.getElementById("tahminInput").disabled = true;
        document.getElementById("tahminButton").disabled = true;
        // Alert mesajı göster
        alert("Tahmin hakkınız kalmadı!");
    }
};

window.onload = function() {
    const countdownInterval = setInterval(function() {
        saniye--;
        document.getElementById("countdown").textContent = saniye;
        if (saniye === 0) {
            clearInterval(countdownInterval);
            // Input ve butonu pasif hale getir
            document.getElementById("tahminInput").disabled = true;
            document.getElementById("tahminButton").disabled = true;
        }
    }, 1000);
};