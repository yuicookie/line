// Audioオブジェクトを作成
let ad = new Audio("audio/xmas.m4a");

// 連続再生ボタン
let elem_loop = document.getElementById("bgm");
elem_loop.addEventListener("click", function(){
	ad.play();
	ad.loop = true;  // ループ再生
}, false);

function active(obj) {
  //  クラスactiveがなかったら、activeを追加
  if (!obj.nextElementSibling.classList.contains("active")) {
    obj.nextElementSibling.classList.add("active");
  } else {  //  フワッと消す時の処理
    obj.nextElementSibling.style = "opacity:0"; //  まずopacityで見えなくする
    setTimeout((e) => { //  0.5秒後にクラスactiveを削除
      obj.nextElementSibling.classList.remove("active");
      obj.nextElementSibling.style = "opacity:1";
    }, 500);
  }
}