// Menampilkan deskripsi portofolio
let flag1 = 0;
$(".card1").click(()=>{
    if(flag1 == 0){
        $(".deskripsi1").css("display", "none");
        $(".deskripsi1").text("Projek ini adalah projek membuat tampilan website Techwear untuk mengaplikasikan penggunaan bootstrap");
        $(".deskripsi1").fadeIn(1000);
        flag1 = 1;
    }
    else{
        $(".deskripsi1").text("Klik gambar untuk melihat deskripsi");
        flag1 = 0;
    }
});

let flag2 = 0;
$(".card2").click(()=>{
    if(flag2 == 0){
        $(".deskripsi2").css("display", "none");
        $(".deskripsi2").text("Projek ini adalah projek membuat tampilan website fashion untuk mengaplikasikan penggunaan media query");
        $(".deskripsi2").fadeIn(1000);
        flag2 = 1;
    }
    else{
        $(".deskripsi2").text("Klik gambar untuk melihat deskripsi");
        flag2 = 0;
    }
});
// Menampilkan deskripsi Portofolio

//Validasi data
// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBskErMGhI3B2WAyDsAETL0bccSWmYJ-eI",
    authDomain: "web-portofolio-shan.firebaseapp.com",
    projectId: "web-portofolio-shan",
    storageBucket: "web-portofolio-shan.appspot.com",
    messagingSenderId: "791106698441",
    appId: "1:791106698441:web:f075b70bf30fe25c22e118",
    measurementId: "G-ZYCSMQ3382"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let dataa = db.collection("data");

var point = 0;
$("#validasi").submit((e)=>{
    if($("#name").val()==""){
        e.preventDefault();
        alert("Nama belum diisi");
    }
    
    if($("#email").val()==""){
        e.preventDefault();
        alert("email belum diisi");
    }
    
    if($("#telpon").val()==""){
        e.preventDefault();
        alert("Nomor telepon belum diisi");
    }
    if($("#telpon").val().startsWith("08")==false){
        e.preventDefault();
        alert("Nomor telepon harus diawali 08");
    }
    if($("#telpon").val().length > 14){
        e.preventDefault();
        alert("Nomor telepon tidak boleh lebih dari 14 digit");
    }
    
    if($("#comment").val().split(" ").length < 5){
        e.preventDefault();
        alert("Comment tidak boleh kurang dari 5 kata");
    }
    if($("#comment").val().split(" ").length > 100){
        e.preventDefault();
        alert("Comment tidak boleh lebih dari 100 kata");
    }
    if($("#name").val()!=""){
        e.preventDefault();
        point++;
    }

    if($("#email").val()!=""){
        e.preventDefault();
        point++;
    }

    if($("#telpon").val().startsWith("08")==true && $("#telpon").val()!="" && $("#telpon").val().length <= 14){
        e.preventDefault();
        point++;
    }

    if($("#comment").val().split(" ").length >= 5 && $("#comment").val().split(" ").length <= 100){
        e.preventDefault();
        point++;
    }
    //console.log(point);
    // console.log($("#name").val());
    // console.log($("#email").val());
    // console.log($("#telpon").val());
    // console.log($("#comment").val());
    if(point == 4 ){
        //console.log("berhasil");
        let isi = {
            comment: $("#comment").val(),
            email: $("#email").val(),
            nama: $("#name").val(),
            nomor: $("#telpon").val(),
        }
        dataa.add(isi);
        alert("Data berhasil dikirim!");
        $("#name").val("");
        $("#email").val("");
        $("#telpon").val("");
        $("#comment").val("");
    }
    point = 0;
    //e.preventDefault();
});
// Validasi data