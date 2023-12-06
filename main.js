document.getElementById("wrap").innerHTML = iqbal;


let iqbal = "Mohamad Iqbal Zaelani";
let angka = 100;
let angka2 = 1000;
let teks = "Mohamad Iqbal";
let teks2 = "Mohamad Iqbal Zaelani";
let gabung = iqbal + angka + angka2 + teks + teks2;

let bal = "Balbal";
    let hasil = bal.indexOf("b");
    let hasil2 = bal.length("b");
    let hasil3 = bal.lastIndexOf("b");
    let hasil4 = bal.search("b");
    let hasil5 = bal.split("b");
    let hasil6 = bal.toLocaleLowerCase();
    let hasil7 = bal.toLocaleUpperCase();

let nama = "Mohamadbalbal";
    let hasil8 = nama.substring(0, 6);
    let hasil9 = nama.substr(2, 4); 
    let hasil10 = parseInt(nama); 
    let hasil11 = parseFloat(nama); 

    function printText(){
        alert("Selamat Datang");
        let x = "Mohamad Iqbal Zaelani";
        let y = 1000;
        let yx = x + y;
        document.getElementById("wrap").innerHTML = yx;
    }
    function balText(nama,nama2,nama3){
        let balpar = nama + nama2 + nama3;
        document.getElementById("wrap").innerHTML = balpar;
    }
    function boltext(){
        return "10";
        let text = boltext();
        document.getElementById("wra[").innerHTML = "Mohamad";
    } 


    printText("Mohamad Iqbal Zaelani"," 123"," 321");

    printText();
