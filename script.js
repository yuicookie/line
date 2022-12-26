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

function agree(){
  document.getElementById("agree").style.display ="none";
  document.getElementById("agree_check").style.display ="block";
}
function agree_check(){
  document.getElementById("agree_check").style.display ="none";
  document.getElementById("agree").style.display ="block";
}
function ok_btn(){
  if(document.getElementById("agree_check").style.display == "block"){
    document.getElementById("ok_btn").style.display ="none";
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
 false};
}
