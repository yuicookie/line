// Audioオブジェクトを作成
let ad = new Audio("audio/xmas.m4a");

// 連続再生ボタン
let elem_loop = document.getElementById("bgm");
elem_loop.addEventListener("click", function(){
	ad.play();
	ad.loop = true;  // ループ再生
}, false);