// スライドショー関数
$(function(){
  // 画像の枚数
  var count = $("#slide li").length;

  // 現在表示されている画像
  var current = 1;

  // 次に表示する画像
  var next = 2;

  // フェードイン、アウトのインターバル
  var interval = 5000;

  // フェードイン、アウトのスピード
  var duration = 1000;

  // タイマー用の設定
  var timer;

  // 一番目の写真以外は非表示
  $("#slide li:not(:first-child)").hide();

  // 5000ミリ秒ごとにslidetimer()関数を実行
  timer = setInterval(slideTimer, interval);

  // slidetimer関数
  function slideTimer(){
    // 現在の画像をフェードアウト
    $("#slide li:nth-child(" + current + ")").fadeOut(duration);

    // 次の画像をフェードイン
    $("#slide li:nth-child(" + next + ")").fadeIn(duration);

    // 変数currentの新しい値
    current = next;

    // 変数nextの新しい値
    next = ++next;

    // 変数nextが３を超える場合、１に戻す
    if(next > count){
      next = 1;
    }

    // targetクラスを削除
    $("#button li a").removeClass("target");

    // 現在のボランにtargetクラスを追加
    $("#button li:nth-child(" + current + ") a").addClass("target");
  }

  // ボタンをクリック
  $("#button li a").click(function(){
    next = $(this).html();

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();

    return false;
  });
});

// ドロップダウン
$(function(){

  $("ul.menu li").hover(function(){
    $("ul.sub:not(:animated)", this).slideDown();
  }, function(){
    $("ul.sub", this).slideUp();
  });
});

// キャプション表示
$(document).ready(function () {

  $('.card-box').on('mouseover', function () {
    $(this).children('.card-text').stop().slideDown();
  });
  $('.card-box').on('mouseout', function () {
    $(this).children('.card-text').stop().slideUp();
  });

});

// タブメニュー
$(function(){
  var menulist = $("#tab_menu li");
  var contentlist = $("#tab_content li");
  var border = $("#border div");

  menulist.on("click", function(){
    var selected = menulist.index($(this));
    menulist.removeClass("show").eq(selected).addClass("show");
    contentlist.removeClass("show").eq(selected).addClass("show");
    // if(selected === 0){
    //   border.css("left", "0%");
    // }else if(selected === 1){
    //   border.css("left", "33.3%");
    // }else if(selected === 2){
    //   border.css("left", "66.6%");
    // }else{
    //   console.log(error);
    // }
  });
});

// アコーディオン
// $(function(){
//   $('.accordion p').click(function(){
//   $(this).toggleClass("ac");
//   $(this).next('ul').slideToggle();
  
// });
// });

$(function(){
  $('.accordion .inner').hide(); 
  $('.accordion p').click(function(){
      $(this).toggleClass("acc");
      $(this).next(".accordion .inner").slideToggle();
      });
});

// スムーススクロール
$(function(){
  $("a[href^=#]").click(function(){
  $("html,body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 5000 ,"swing");
  return false;
  })
});
