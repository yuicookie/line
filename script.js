// 右クリック禁止
document.oncontextmenu = function () {return false;}

// Audioオブジェクトを作成
let xmas = new Audio("audio/ep1.mp3");
let ui_1 = new Audio("audio/ui_1.mp3");

// 同意ボタン押す
const agree_btn = document.getElementById('agree');
agree_btn.addEventListener('mousedown', e => {
  document.getElementById("agree").style.display ="none";
  document.getElementById("agree_black").style.display ="block";
})
// 同意ボタン離す
const agree_black = document.getElementById('agree_black');
agree_black.addEventListener('mouseup', e => {
  document.getElementById("agree_black").style.display ="none";
  document.getElementById("agree_check").style.display ="block";
  document.getElementById("ok_btn_black").style.display ="none";
  document.getElementById("ok_btn").style.display ="block";
});

// 同意外すクリック離す
const agree_check = document.getElementById('agree_check');
agree_check.addEventListener('mouseup', e => {
  document.getElementById("agree_check").style.display ="none";
  document.getElementById("agree").style.display ="block";
  document.getElementById("ok_btn").style.display ="none";
  document.getElementById("ok_btn_black").style.display ="block";
});

// OKボタン押す
const ok_btn = document.getElementById('ok_btn');
ok_btn.addEventListener('mousedown', e => {
  document.getElementById("ok_btn").style.display ="none";
  document.getElementById("ok_btn_black").style.display ="block";
})
// OKボタン離す
const ok_btn_black = document.getElementById('ok_btn_black');
ok_btn_black.addEventListener('mouseup', e => {
  if(document.getElementById("agree_check").style.display == "block"){
    document.getElementById("kiyaku_area").style.display ="none";
    document.getElementById("log_box").style.display ="block";
  // くるくる
  if(document.getElementById("log_box").style.display == "block"){
    const timerId = setInterval(() => {

    setTimeout(function(){
      document.getElementById("timer_12").style.display ="none";
      document.getElementById("timer_1").style.display ="block";
      setTimeout(function(){
        document.getElementById("timer_1").style.display ="none";
        document.getElementById("timer_2").style.display ="block";  
        setTimeout(function(){
          document.getElementById("timer_2").style.display ="none";
          document.getElementById("timer_3").style.display ="block";
          setTimeout(function(){
            document.getElementById("timer_3").style.display ="none";
            document.getElementById("timer_4").style.display ="block";
            setTimeout(function(){
              document.getElementById("timer_4").style.display ="none";
              document.getElementById("timer_5").style.display ="block";
              setTimeout(function(){
                document.getElementById("timer_5").style.display ="none";
                document.getElementById("timer_6").style.display ="block";
                setTimeout(function(){
                  document.getElementById("timer_6").style.display ="none";
                  document.getElementById("timer_7").style.display ="block";
                  setTimeout(function(){
                    document.getElementById("timer_7").style.display ="none";
                    document.getElementById("timer_8").style.display ="block";
                    setTimeout(function(){
                      document.getElementById("timer_8").style.display ="none";
                      document.getElementById("timer_9").style.display ="block";
                      setTimeout(function(){
                        document.getElementById("timer_9").style.display ="none";
                        document.getElementById("timer_10").style.display ="block";
                        setTimeout(function(){
                          document.getElementById("timer_10").style.display ="none";
                          document.getElementById("timer_11").style.display ="block";
                          setTimeout(function(){
                            document.getElementById("timer_11").style.display ="none";
                            document.getElementById("timer_12").style.display ="block";
                          },50);
                        },50);
                      },50);
                    },50);
                  },50);
                },50);
              },50);
            },50);
          },50);
        },50);
      },50);
    },50);

  },750);

  setTimeout(() => {
    setTimeout(() => {
      document.getElementById("loading_text_1").style.display ="block";
      setTimeout(() => {
        document.getElementById("loading_text_1").style.display ="none";
        document.getElementById("loading_text_2").style.display ="block";
        setTimeout(() => {
          document.getElementById("loading_text_2").style.display ="none";
          document.getElementById("loading_text_3").style.display ="block";
          setTimeout(() => {
            document.getElementById("loading_text_3").style.display ="none";
            document.getElementById("loading_text_4").style.display ="block";
            setTimeout(() => {
              document.getElementById("loading_text_4").style.display ="none";
              document.getElementById("loading_text_5").style.display ="block";
              setTimeout(() => {
                document.getElementById("loading_text_5").style.display ="none";
                document.getElementById("loading_text_6").style.display ="block";
                setTimeout(() => {
                  clearInterval(timerId)
                  setTimeout(() => {
                    document.querySelector(`#title_area`).animate(
                      [
                        { opacity: 1 },
                        { opacity: 0 }
                      ],
                      {
                        duration: 300,
                        fill: 'forwards'
                      }
                    );

                    document.getElementById("title_area").style.display ="none";
                    document.getElementById("lobby_area").style.display ="block";
                    // 連続再生
                    let elem_loop = document.getElementById("bgm");
                    xmas.play();
                    xmas.loop = true;  // ループ再生
                    false;

                    document.querySelector(`#black2`).animate(
                      [
                        { opacity: 1 },
                        { opacity: 0 }
                      ],
                      {
                        duration: 1500,
                        fill: 'forwards'
                      }
                    );
                    setTimeout(() => {
                      document.getElementById("black2").style.display ="none";
                    },1500);
                  },1500); // フリーズ  
                },1500); // 友達情報を取得中です。
              },500); // サーバーからデータを取得中です。
            },1500); // LINEの情報を取得中です。
          },500); // ゲームデータを受信中です。
        },500); // 通知を受信中です。
      },300); // WELCOME :)
    },0);
  },750);
  }
  }
});

// リーグランキングボタン押す
const friend_rank_btn2 = document.getElementById('friend_rank_btn2');
friend_rank_btn2.addEventListener('mousedown', e => {
  document.getElementById("friend_rank_btn2").style.display ="none";
  document.getElementById("league_rank_btn2").style.display ="block";
})
// リーグランキングボタン離す
const league_rank_btn2 = document.getElementById('league_rank_btn2');
league_rank_btn2.addEventListener('mouseup', e => {
  document.getElementById("combi_bonus").style.display ="none";
  document.getElementById("friend_rank_btn1").style.display ="none";
  document.getElementById("friend_rank").style.display ="none";
  document.getElementById("league_rank_btn1").style.display ="block";
  document.getElementById("league_rank").style.display ="block";
  document.getElementById("medal").style.display ="block";
if(ui_1_cnt == 0) {
  ui_1.currentTime = 0;
  ui_1.play();
  ui_1_cnt = 1;
}
});
ui_1_cnt = 0;

// 友達ランキングボタン押す
const league_rank_btn1 = document.getElementById('league_rank_btn1');
league_rank_btn1.addEventListener('mousedown', e => {
  document.getElementById("league_rank_btn1").style.display ="none";
  document.getElementById("friend_rank_btn1").style.display ="block";
});

// 友達ランキングボタン離す
const friend_rank_btn1 = document.getElementById('friend_rank_btn1');
friend_rank_btn1.addEventListener('mouseup', e => {
  document.getElementById("league_rank_btn2").style.display ="none";
  document.getElementById("medal").style.display ="none";
  document.getElementById("league_rank").style.display ="none";
  document.getElementById("friend_rank").style.display ="block";
  document.getElementById("friend_rank_btn2").style.display ="block";
  document.getElementById("combi_bonus").style.display ="block";
if(ui_1_cnt == 1) {
  ui_1.currentTime = 0;
  ui_1.play();
  ui_1_cnt = 0;
}
});

// 勇敢なクッキーの顔を変える
setInterval(function(){
  document.getElementById("ginger_cookie_face").style.display ="none";
},200);
setInterval(function(){
  document.getElementById("ginger_cookie_face").style.display ="block";
},2500);
setInterval(function(){
  document.getElementById("ginger_cookie_face").style.display ="block";
},3000);

// タイトルロゴ
window.onload = function() {
document.querySelector(`#black`).animate(
	[
		{ opacity: 1 },
		{ opacity: 0 }
	],
	{
		duration: 300,
		fill: 'forwards'
	}
);
setTimeout(function(){
  document.getElementById("line_title").style.display ="none";
  if(document.getElementById("line_title").style.display =="none"){
    document.getElementById('devsisters_white').classList.add('is-show');
    setTimeout(function(){
      document.querySelector(`#black2`).animate(
        [
          { opacity: 0 },
          { opacity: 1 }
        ],
        {
          duration: 300,
          fill: 'forwards'
        }
      );
      document.getElementById("title_logo_area").style.display ="none";
      setTimeout(function(){
        document.querySelector(`#title_area`).animate(
          [
            { opacity: 0 },
            { opacity: 1 }
          ],
          {
            duration: 300,
            fill: 'forwards'
          }
        );
      },200);
    },1000);
  }  
},3000);
}
