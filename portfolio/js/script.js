$(function (){
// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  arrows: false,
  fade: true
});
//onebook3d
const imgArray = [
  'images/autoput.jpg',
  'images/nanjihosinogotoku.jpg','images/senhabokuwoegaku.jpg',
  'images/uruunoasagao.jpg','images/soragohann.jpg',
  'images/yumewokanaeruzou1.jpg','images/yumewokanaeruzou4.jpg'
];
$('#mybook').onebook(imgArray, {
  startPage: 1,
  flip: 'soft',
  skin: 'light',
  pageColor: '#fff',
  slope: 0,
  border: 25,
  language: 'en',
  cesh: true
});

$('#mybook').onebook(imgArray);

// ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
$('a[href^="#"]').click(function() {
  const speed = 500;
  const href = $(this).attr('href');
  console.log(href);
  let $target;
  if (href == '#') {
    $target = $('html');
  }
  else {
    $target = $(href);
  }
  const position = $target.offset().top;
  $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
  return false;
});

//ハンバーガーメニュー
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});
$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
});