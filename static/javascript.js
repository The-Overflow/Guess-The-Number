var rastgeleSayi = parseInt(( Math.random() * 100 ) + 1);

function kontrolEt() {

    var girilenSayı = document.getElementById("girilenSayı").value;

    if (!girilenSayı) return;
    if (girilenSayı > rastgeleSayi) {
        document.getElementById("girilenSayı").value = null;
        document.getElementById("alert").innerText = "Daha küçük bir sayı gir.";

    } else if (girilenSayı < rastgeleSayi) {
        document.getElementById("girilenSayı").value = null;
        document.getElementById("alert").innerText = "Daha büyük bir sayı gir.";

    } else if (girilenSayı == rastgeleSayi) {
        document.getElementById("girilenSayı").value = null;
        document.getElementById("alert").innerText = `Tebrikler sayıyı buldun. Cevap : ${rastgeleSayi}`;

        rastgeleSayi = parseInt(( Math.random() * 100 ) + 1); 
    };
};