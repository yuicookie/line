// Audioオブジェクトを作成
let ad = new Audio("audio/xmas.m4a");


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


// 右クリック禁止
$("body").bind
  ("contextmenu", function(e)
  {return false;}
  );
$("body").mousedown
  (function(e)
  {return false;}
  );

// 同意ボタンクリック
const agree_btn = document.getElementById('agree');
agree_btn.addEventListener('mousedown', e => {
  document.getElementById("agree").style.display ="none";
  document.getElementById("agree_black").style.display ="block";
    console.log("押してる");
})
// 同意ボタン離す
const agree_black = document.getElementById('agree_black');
agree_black.addEventListener('mouseup', e => {
  document.getElementById("agree_black").style.display ="none";
  document.getElementById("agree_check").style.display ="block";
  document.getElementById("ok_btn_black").style.display ="none";
  document.getElementById("ok_btn").style.display ="block";
    console.log("押してない");
});

// 同意外すクリック離す
const agree_check = document.getElementById('agree_check');
agree_check.addEventListener('mouseup', e => {
  document.getElementById("agree_check").style.display ="none";
  document.getElementById("agree").style.display ="block";
  document.getElementById("ok_btn").style.display ="none";
  document.getElementById("ok_btn_black").style.display ="block";
});

// OKボタンクリック
const ok_btn = document.getElementById('ok_btn');
ok_btn.addEventListener('mousedown', e => {
  document.getElementById("ok_btn").style.display ="none";
  document.getElementById("ok_btn_black").style.display ="block";
    console.log("押してる");
})
// OKボタン離す
const ok_btn_black = document.getElementById('ok_btn_black');
ok_btn_black.addEventListener('mouseup', e => {
  if(document.getElementById("agree_check").style.display == "block"){
    document.getElementById("ok_btn_black").style.display ="none";
    document.getElementById("agree_check").style.display ="none";
    document.getElementById("kiyaku_title").style.display ="none";
    document.getElementById("kiyaku_setumei").style.display ="none";
    document.getElementById("kiyaku").style.display ="none";
    document.getElementById("title").style.display ="none";
    document.getElementById("lobby_epN01").style.display ="block";
    // 連続再生
let elem_loop = document.getElementById("bgm");
	ad.play();
	ad.loop = true;  // ループ再生
 false;
    console.log("押してない");
}});