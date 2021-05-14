// 大戸屋のメニューを糖質量でフィルタリングして表示する(店内メニュー、ミールキット)
// 糖質の量を5段階に分ける1(10g以下),2(10-20g),3(20-30g),4(30-40g),5(40以上)
// 画像の配列設定をする
var foodimage = [
  // 糖質10g以下のメニュー ８個
  ['(ABCD)大炭火焼きチキンの葱ソース定食','7.8'],
  ['(ABCD)もろみチキンの炭火焼き定食','6.7'],
  ['(新)しまほっけの炭火焼き定食','4.1'],
  ['(新)さばの炭火焼き定食','6.6'],
  ['(C)連子鯛の昆布蒸し定食','1.2'],
  ['(ABCD)沖目鯛いの醤油麹漬け炭火焼き定食','5.9'],
  ['(ABCD)しまほっけの炭火焼き定食','4.0'],
  ['(ABCD)さばの炭火焼き定食','4.5'],
  // 糖質10-20gのメニュー 12個
  ['(新)炭火焼きチキンの葱ソース定食','16.8'],
  ['(新)さば味味醂け炭火焼き定食','13.8'],
  ['(新)さばの味噌煮定食','10.2'],
  ['(BCD)メヌケの塩麹みりん漬け炭火焼き定食','12.1'],
  ['(新)バジルチキンの彩りサラダボウル定食','16.5'],
  ['(新)辛旨 豚キムチ鍋定食','13.9'],
  ['(C)野菜と豚の蒸し鍋定食','16.5'],
  ['(新)豆腐と鶏肉のトロトロ煮定食','16.3'],
  ['(ABCD)手造り豆腐とチキンのトロトロ煮定食','12.8'],
  ['(新)豚と野菜の塩麹炒め定食','12.2'],
  ['(ABCD)豚の生姜焼き定食','18.1'],
  ['(C)牛ミスジと四元豚の醤油麹漬け炭火焼き定食','15.7'],
  // 糖質20-30gのメニュー 11個
  ['(新)香味唐揚げ定食','28.6'],
  ['(新)炭火焼きチキンの葱ソース定食(チキン1.5倍)','21.7'],
  ['(D)梅おろしチキンかつ定食','22.2'],
  ['(ABCD)香味唐揚げ定食','26.4'],
  ['(BCD)鰹の梅はさみ揚げ定食','25.4'],
  ['(ABCD)ポテタル鶏竜田のサラダ定食','29.6'],
  ['(C)8種の野菜とバジルチキンのスパイシースープカレー','26.4'],
  ['(新)豚の生姜焼き定食','20.7'],
  ['(ABCD)四元豚のロースかつ定食','21.1'],
  ['(新)黒酢ポン酢の和風おろしハンバーグ定食','27.1'],
  ['(新)プルコギ牛肉炒め定食','27.0'],
  // 糖質30-40gのメニュー 16個
  ['(新)大戸屋ランチ定食','39.4'],
  ['(新)香味唐揚げ定食(唐揚げ1.5倍)','39.3'],
  ['(新)大戸屋風チキン南蛮定食','31.5'],
  ['(D)鶏竜田と野菜の香味ねぎソース定食','35.4'],
  ['(ABCD)大戸屋ランチ定食','38.8'],
  ['(ABCD)広島産かきフライ定食(4個盛り)','30.3'],
  ['(新)牛プルコギの彩りサラダボウル定食','31.4'],
  ['(新)タルタル白身フライと彩りサラダボウル定食','38.6'],
  ['(新)チキン味噌かつ煮定食','38.1'],
  ['(新)チキンかあさん煮定食','39.3'],
  ['(新)かあさんの玉子とじ定食','39.3'],
  ['(ABCD)チキン味噌かつ煮定食','38.1'],
  ['(ABCD)チキンかあさん煮定食','37.7'],
  ['(新)豚の生姜焼き定食(2倍)','35.1'],
  ['(新)おおとや三元豚のロースかつ定食','31.5'],
  ['(新)豆味噌デミグラスソースのハンバーグ定食','30.7'],

  // 糖質40g以上のメニュー 20個
  ['(新)鶏と野菜の黒酢あん定食','60.1'],
  ['(新)鶏と野菜の黒酢あん定食(鶏肉増量)','78.0'],
  ['(新)大戸屋ランチ定食(竜田2倍)','49.6'],
  ['(新)大戸屋風チキン南蛮定食(チキン1.5倍)','47.0'],
  ['(ABCD)鶏と野菜の黒酢あん定食','42.9'],
  ['(新)すけそう鱈と野菜の黒酢あん定食','59.0'],
  ['(新)すけそう鱈と野菜の黒酢あん定食(鱈増量)','71.5'],
  ['(ABCD)広島産かきフライ定食(6個盛り)','69.9'],
  ['(新)おおとや三元豚と野菜の黒酢あん定食','78.9'],
  ['(新)おおとや三元豚と野菜の黒酢あん定食(豚肉増量)','61.0'],
  ['(新)豚と野菜の豆鼓味噌炒め定食','48.1'],
  ['(C)四元豚と野菜の黒酢あん定食(豚竜田6個)','42.2'],
  ['(C)四元豚と野菜の黒酢あん定食(豚竜田4個)','45.6'],
  ['(新)豆味噌デミグラスソースのハンバーグ定食(ダブル)','47.5'],
  ['(新)黒酢ポン酢の和風おろしハンバーグ定食(ダブル)','74.2'],
  ['(新)大戸屋ミックス定食','74.2'],
  ['(新)プルコギ牛肉炒め定食(牛肉2倍)','96.4'],
  ['(新)ばくだん丼','74.2'],
  ['(新)ばくだん丼(まぐろ増量)','74.2'],
  ['(AD)スパイシーチキンかつカレー','96.4'],
]; 
//JQueryの設定をする
$(function() {
    // 店内用のメニューを決める
    // 1を選んだ場合には、糖質10g以下のメニューからランダムで一つピックアップされ表示される
  $('#very-low').click(function(){
    var menu = Math.floor(Math.random() * 8) + 1;
    // メニュー番号が1の時の設定をする 
    if(menu===1){
      // メニューの名前を入れ替える
      document.getElementById("change-menu").innerText = foodimage[0][0];
      // 糖質のg数を入れ替える
      document.getElementById("change-weight").innerText = foodimage[0][1];
      // 画像を入れ替える
      document.getElementById('food1').src='img/1.jpeg';
      }else if(menu===2){
      document.getElementById("change-menu").innerText = foodimage[1][0];
      document.getElementById("change-weight").innerText = foodimage[1][1];
      document.getElementById('food1').src='img/2.jpeg';
      }else if(menu===3){
      document.getElementById("change-menu").innerText = foodimage[2][0];
      document.getElementById("change-weight").innerText = foodimage[2][1];
      document.getElementById('food1').src='img/3.jpeg';
      }else if(menu===4){
      document.getElementById("change-menu").innerText = foodimage[3][0];
      document.getElementById("change-weight").innerText = foodimage[3][1];
      document.getElementById('food1').src='img/4.jpeg';
      }else if(menu===5){
      document.getElementById("change-menu").innerText = foodimage[4][0];
      document.getElementById("change-weight").innerText = foodimage[4][1];
      document.getElementById('food1').src='img/5.jpeg';
      }else if(menu===6){
      document.getElementById("change-menu").innerText = foodimage[5][0];
      document.getElementById("change-weight").innerText = foodimage[5][1];
      document.getElementById('food1').src='img/6.jpeg';
      }else if(menu===7){
      document.getElementById("change-menu").innerText = foodimage[6][0];
      document.getElementById("change-weight").innerText = foodimage[6][1];
      document.getElementById('food1').src='img/7.jpeg';
      }else if(menu===8){
      document.getElementById("change-menu").innerText = foodimage[7][0];
      document.getElementById("change-weight").innerText = foodimage[7][1];
      document.getElementById('food1').src='img/8.jpeg';
      } 
    // ミールキット用メニューの設定(上で表示されているメニュー以外のメニュー表示する)
    var kit = Math.floor(Math.random() * 8) + 1;
    // 店内メニューとミールキット用メニューが被らないようにする
    while(menu === kit){
      var kit = Math.floor(Math.random() * 8) + 1;
    }
    if(kit===1){
      // メニューの名前を入れ替える
      document.getElementById("takechange-menu").innerText = foodimage[0][0];
      // 糖質のg数を入れ替える
      document.getElementById("takechange-weight").innerText = foodimage[0][1];
      // 画像を入れ替える
      document.getElementById('food2').src='img/1.jpeg';
      }else if(kit===2){
      document.getElementById("takechange-menu").innerText = foodimage[1][0];
      document.getElementById("takechange-weight").innerText = foodimage[1][1];
      document.getElementById('food2').src='img/2.jpeg';
      }else if(kit===3){
      document.getElementById("takechange-menu").innerText = foodimage[2][0];
      document.getElementById("takechange-weight").innerText = foodimage[2][1];
      document.getElementById('food2').src='img/3.jpeg';
      }else if(kit===4){
      document.getElementById("takechange-menu").innerText = foodimage[3][0];
      document.getElementById("takechange-weight").innerText = foodimage[3][1];
      document.getElementById('food2').src='img/4.jpeg';
      }else if(kit===5){
      document.getElementById("takechange-menu").innerText = foodimage[4][0];
      document.getElementById("takechange-weight").innerText = foodimage[4][1];
      document.getElementById('food2').src='img/5.jpeg';
      }else if(kit===6){
      document.getElementById("takechange-menu").innerText = foodimage[5][0];
      document.getElementById("takechange-weight").innerText = foodimage[5][1];
      document.getElementById('food2').src='img/6.jpeg';
      }else if(kit===7){
      document.getElementById("takechange-menu").innerText = foodimage[6][0];
      document.getElementById("takechange-weight").innerText = foodimage[6][1];
      document.getElementById('food2').src='img/7.jpeg';
      }else if(kit===8){
      document.getElementById("takechange-menu").innerText = foodimage[7][0];
      document.getElementById("takechange-weight").innerText = foodimage[7][1];
      document.getElementById('food2').src='img/8.jpeg';
      }     
  });
    // 2を選んだ場合には、糖質10g-20gのメニューからランダムで一つピックアップされ表示される
  $('#low').click(function(){
    var menu = Math.floor(Math.random() * 12) + 1 + 8; 
    if(menu===9){
      // メニューの名前を入れ替える
      document.getElementById("change-menu").innerText = foodimage[8][0];
      // 糖質のg数を入れ替える
      document.getElementById("change-weight").innerText = foodimage[8][1];
      // 画像を入れ替える
      document.getElementById('food1').src='img/9.jpeg';
      }else if(menu===10){
      document.getElementById("change-menu").innerText = foodimage[9][0];
      document.getElementById("change-weight").innerText = foodimage[9][1];
      document.getElementById('food1').src='img/10.jpeg';
      }else if(menu===11){
      document.getElementById("change-menu").innerText = foodimage[10][0];
      document.getElementById("change-weight").innerText = foodimage[10][1];
      document.getElementById('food1').src='img/11.jpeg';
      }else if(menu===12){
      document.getElementById("change-menu").innerText = foodimage[11][0];
      document.getElementById("change-weight").innerText = foodimage[11][1];
      document.getElementById('food1').src='img/12.jpeg';
      }else if(menu===13){
      document.getElementById("change-menu").innerText = foodimage[12][0];
      document.getElementById("change-weight").innerText = foodimage[12][1];
      document.getElementById('food1').src='img/13.jpeg';
      }else if(menu===14){
      document.getElementById("change-menu").innerText = foodimage[13][0];
      document.getElementById("change-weight").innerText = foodimage[13][1];
      document.getElementById('food1').src='img/14.jpeg';
      }else if(menu===15){
      document.getElementById("change-menu").innerText = foodimage[14][0];
      document.getElementById("change-weight").innerText = foodimage[14][1];
      document.getElementById('food1').src='img/15.jpeg';
      }else if(menu===16){
      document.getElementById("change-menu").innerText = foodimage[15][0];
      document.getElementById("change-weight").innerText = foodimage[15][1];
      document.getElementById('food1').src='img/16.jpeg';
      }else if(menu===17){
      document.getElementById("change-menu").innerText = foodimage[16][0];
      document.getElementById("change-weight").innerText = foodimage[16][1];
      document.getElementById('food1').src='img/17.jpeg';
      }else if(menu===18){
      document.getElementById("change-menu").innerText = foodimage[17][0];
      document.getElementById("change-weight").innerText = foodimage[17][1];
      document.getElementById('food1').src='img/18.jpeg';
      }else if(menu===19){
      document.getElementById("change-menu").innerText = foodimage[18][0];
      document.getElementById("change-weight").innerText = foodimage[18][1];
      document.getElementById('food1').src='img/19.jpeg';
      }else if(menu===20){
      document.getElementById("change-menu").innerText = foodimage[19][0];
      document.getElementById("change-weight").innerText = foodimage[19][1];
      document.getElementById('food1').src='img/20.jpeg';
    }
    // ミールキット用メニューの設定(上で表示されているメニュー以外のメニュー表示する)
    var kit = Math.floor(Math.random() * 12) + 1 + 8; 
    while(menu === kit){
      var kit = Math.floor(Math.random() * 12) + 1 + 8; 
    }
    if(kit===9){
    // メニューの名前を入れ替える
      document.getElementById("takechange-menu").innerText = foodimage[8][0];
      // 糖質のg数を入れ替える
      document.getElementById("takechange-weight").innerText = foodimage[8][1];
      // 画像を入れ替える
      document.getElementById('food2').src='img/9.jpeg';
      }else if(kit===10){
      document.getElementById("takechange-menu").innerText = foodimage[9][0];
      document.getElementById("takechange-weight").innerText = foodimage[9][1];
      document.getElementById('food2').src='img/10.jpeg';
      }else if(kit===11){
      document.getElementById("takechange-menu").innerText = foodimage[10][0];
      document.getElementById("takechange-weight").innerText = foodimage[10][1];
      document.getElementById('food2').src='img/11.jpeg';
      }else if(kit===12){
      document.getElementById("takechange-menu").innerText = foodimage[11][0];
      document.getElementById("takechange-weight").innerText = foodimage[11][1];
      document.getElementById('food2').src='img/12.jpeg';
      }else if(kit===13){
      document.getElementById("takechange-menu").innerText = foodimage[12][0];
      document.getElementById("takechange-weight").innerText = foodimage[12][1];
      document.getElementById('food2').src='img/13.jpeg';
      }else if(kit===14){
      document.getElementById("takechange-menu").innerText = foodimage[13][0];
      document.getElementById("takechange-weight").innerText = foodimage[13][1];
      document.getElementById('food2').src='img/14.jpeg';
      }else if(kit===15){
      document.getElementById("takechange-menu").innerText = foodimage[14][0];
      document.getElementById("takechange-weight").innerText = foodimage[14][1];
      document.getElementById('food2').src='img/15.jpeg';
      }else if(kit===16){
      document.getElementById("takechange-menu").innerText = foodimage[15][0];
      document.getElementById("takechange-weight").innerText = foodimage[15][1];
      document.getElementById('food2').src='img/16.jpeg';
      }else if(kit===17){
      document.getElementById("takechange-menu").innerText = foodimage[16][0];
      document.getElementById("takechange-weight").innerText = foodimage[16][1];
      document.getElementById('food2').src='img/17.jpeg';
      }else if(kit===18){
      document.getElementById("takechange-menu").innerText = foodimage[17][0];
      document.getElementById("takechange-weight").innerText = foodimage[17][1];
      document.getElementById('food2').src='img/18.jpeg';
      }else if(kit===19){
      document.getElementById("takechange-menu").innerText = foodimage[18][0];
      document.getElementById("takechange-weight").innerText = foodimage[18][1];
      document.getElementById('food2').src='img/19.jpeg';
      }else if(kit===20){
      document.getElementById("takechange-menu").innerText = foodimage[19][0];
      document.getElementById("takechange-weight").innerText = foodimage[19][1];
      document.getElementById('food2').src='img/20.jpeg';
      } 
  });
  // 3を選んだ場合には、糖質20g-30gのメニューからランダムで一つピックアップされ表示される
  $('#middle').click(function(){
    var menu = Math.floor(Math.random() * 11) + 1 + 20; 
    if(menu===21){
      // メニューの名前を入れ替える
      document.getElementById("change-menu").innerText = foodimage[20][0];
      // 糖質のg数を入れ替える
      document.getElementById("change-weight").innerText = foodimage[20][1];
      // 画像を入れ替える
      document.getElementById('food1').src='img/21.jpeg';
      }else if(menu===22){
      document.getElementById("change-menu").innerText = foodimage[21][0];
      document.getElementById("change-weight").innerText = foodimage[21][1];
      document.getElementById('food1').src='img/22.jpeg';
      }else if(menu===23){
      document.getElementById("change-menu").innerText = foodimage[22][0];
      document.getElementById("change-weight").innerText = foodimage[22][1];
      document.getElementById('food1').src='img/23.jpeg';
      }else if(menu===24){
      document.getElementById("change-menu").innerText = foodimage[23][0];
      document.getElementById("change-weight").innerText = foodimage[23][1];
      document.getElementById('food1').src='img/24.jpeg';
      }else if(menu===25){
      document.getElementById("change-menu").innerText = foodimage[24][0];
      document.getElementById("change-weight").innerText = foodimage[24][1];
      document.getElementById('food1').src='img/25.jpeg';
      }else if(menu===26){
      document.getElementById("change-menu").innerText = foodimage[25][0];
      document.getElementById("change-weight").innerText = foodimage[25][1];
      document.getElementById('food1').src='img/26.jpeg';
      }else if(menu===27){
      document.getElementById("change-menu").innerText = foodimage[26][0];
      document.getElementById("change-weight").innerText = foodimage[26][1];
      document.getElementById('food1').src='img/27.jpeg';
      }else if(menu===28){
      document.getElementById("change-menu").innerText = foodimage[27][0];
      document.getElementById("change-weight").innerText = foodimage[27][1];
      document.getElementById('food1').src='img/28.jpeg';
      }else if(menu===29){
      document.getElementById("change-menu").innerText = foodimage[28][0];
      document.getElementById("change-weight").innerText = foodimage[28][1];
      document.getElementById('food1').src='img/29.jpeg';
      }else if(menu===30){
      document.getElementById("change-menu").innerText = foodimage[29][0];
      document.getElementById("change-weight").innerText = foodimage[29][1];
      document.getElementById('food1').src='img/30.jpeg';
      }else if(menu===31){
      document.getElementById("change-menu").innerText = foodimage[30][0];
      document.getElementById("change-weight").innerText = foodimage[30][1];
      document.getElementById('food1').src='img/31.jpeg';
      }
    // ミールキット用メニューの設定(上で表示されているメニュー以外のメニュー表示する)
    var kit = Math.floor(Math.random() * 11) + 1 + 20; 
    while(menu === kit){
    var kit = Math.floor(Math.random() * 11) + 1 + 20; 
    }
    if(kit===21){
      // メニューの名前を入れ替える
      document.getElementById("takechange-menu").innerText = foodimage[20][0];
      // 糖質のg数を入れ替える
      document.getElementById("takechange-weight").innerText = foodimage[20][1];
      // 画像を入れ替える
      document.getElementById('food2').src='img/21.jpeg';
      }else if(kit===22){
      document.getElementById("takechange-menu").innerText = foodimage[21][0];
      document.getElementById("takechange-weight").innerText = foodimage[21][1];
      document.getElementById('food2').src='img/22.jpeg';
      }else if(kit===23){
      document.getElementById("takechange-menu").innerText = foodimage[22][0];
      document.getElementById("takechange-weight").innerText = foodimage[22][1];
      document.getElementById('food2').src='img/23.jpeg';
      }else if(kit===24){
      document.getElementById("takechange-menu").innerText = foodimage[23][0];
      document.getElementById("takechange-weight").innerText = foodimage[23][1];
      document.getElementById('food2').src='img/24.jpeg';
      }else if(kit===25){
      document.getElementById("takechange-menu").innerText = foodimage[24][0];
      document.getElementById("takechange-weight").innerText = foodimage[24][1];
      document.getElementById('food2').src='img/25.jpeg';
      }else if(kit===26){
      document.getElementById("takechange-menu").innerText = foodimage[25][0];
      document.getElementById("takechange-weight").innerText = foodimage[25][1];
      document.getElementById('food2').src='img/26.jpeg';
      }else if(kit===27){
      document.getElementById("takechange-menu").innerText = foodimage[26][0];
      document.getElementById("takechange-weight").innerText = foodimage[26][1];
      document.getElementById('food2').src='img/27.jpeg';
      }else if(kit===28){
      document.getElementById("takechange-menu").innerText = foodimage[27][0];
      document.getElementById("takechange-weight").innerText = foodimage[27][1];
      document.getElementById('food2').src='img/28.jpeg';
      }else if(kit===29){
      document.getElementById("takechange-menu").innerText = foodimage[28][0];
      document.getElementById("takechange-weight").innerText = foodimage[28][1];
      document.getElementById('food2').src='img/29.jpeg';
      }else if(kit===30){
      document.getElementById("takechange-menu").innerText = foodimage[29][0];
      document.getElementById("takechange-weight").innerText = foodimage[29][1];
      document.getElementById('food2').src='img/30.jpeg';
      }else if(kit===31){
      document.getElementById("takechange-menu").innerText = foodimage[30][0];
      document.getElementById("takechange-weight").innerText = foodimage[30][1];
      document.getElementById('food2').src='img/31.jpeg';
      }
 });
    // 4を選んだ場合には、糖質30g-40gのメニューからランダムで一つピックアップされ表示される
  $('#high').click(function(){
    var menu = Math.floor(Math.random() * 16) + 1 + 31; 
    if(menu===32){
      // メニューの名前を入れ替える
      document.getElementById("change-menu").innerText = foodimage[31][0];
      // 糖質のg数を入れ替える
      document.getElementById("change-weight").innerText = foodimage[31][1];
      // 画像を入れ替える
      document.getElementById('food1').src='img/32.jpeg';
      }else if(menu===33){
      document.getElementById("change-menu").innerText = foodimage[32][0];
      document.getElementById("change-weight").innerText = foodimage[32][1];
      document.getElementById('food1').src='img/33.jpeg';
      }else if(menu===34){
      document.getElementById("change-menu").innerText = foodimage[33][0];
      document.getElementById("change-weight").innerText = foodimage[33][1];
      document.getElementById('food1').src='img/34.jpeg';
      }else if(menu===35){
      document.getElementById("change-menu").innerText = foodimage[34][0];
      document.getElementById("change-weight").innerText = foodimage[34][1];
      document.getElementById('food1').src='img/35.jpeg';
      }else if(menu===36){
      document.getElementById("change-menu").innerText = foodimage[35][0];
      document.getElementById("change-weight").innerText = foodimage[35][1];
      document.getElementById('food1').src='img/36.jpeg';
      }else if(menu===37){
      document.getElementById("change-menu").innerText = foodimage[36][0];
      document.getElementById("change-weight").innerText = foodimage[36][1];
      document.getElementById('food1').src='img/37.jpeg';
      }else if(menu===38){
      document.getElementById("change-menu").innerText = foodimage[37][0];
      document.getElementById("change-weight").innerText = foodimage[37][1];
      document.getElementById('food1').src='img/38.jpeg';
      }else if(menu===39){
      document.getElementById("change-menu").innerText = foodimage[38][0];
      document.getElementById("change-weight").innerText = foodimage[38][1];
      document.getElementById('food1').src='img/39.jpeg';
      }else if(menu===40){
      document.getElementById("change-menu").innerText = foodimage[39][0];
      document.getElementById("change-weight").innerText = foodimage[39][1];
      document.getElementById('food1').src='img/40.jpeg';
      }else if(menu===41){
      document.getElementById("change-menu").innerText = foodimage[40][0];
      document.getElementById("change-weight").innerText = foodimage[40][1];
      document.getElementById('food1').src='img/41.jpeg';
      }else if(menu===42){
      document.getElementById("change-menu").innerText = foodimage[41][0];
      document.getElementById("change-weight").innerText = foodimage[41][1];
      document.getElementById('food1').src='img/42.jpeg';
      }else if(menu===43){
      document.getElementById("change-menu").innerText = foodimage[42][0];
      document.getElementById("change-weight").innerText = foodimage[42][1];
      document.getElementById('food1').src='img/43.jpeg';
      }else if(menu===44){
      document.getElementById("change-menu").innerText = foodimage[43][0];
      document.getElementById("change-weight").innerText = foodimage[43][1];
      document.getElementById('food1').src='img/44.jpeg';
      }else if(menu===45){
      document.getElementById("change-menu").innerText = foodimage[44][0];
      document.getElementById("change-weight").innerText = foodimage[44][1];
      document.getElementById('food1').src='img/45.jpeg';
      }else if(menu===46){
      document.getElementById("change-menu").innerText = foodimage[45][0];
      document.getElementById("change-weight").innerText = foodimage[45][1];
      document.getElementById('food1').src='img/46.jpeg';
      }else if(menu===47){
      document.getElementById("change-menu").innerText = foodimage[46][0];
      document.getElementById("change-weight").innerText = foodimage[46][1];
      document.getElementById('food1').src='img/47.jpeg';
      }
      // ミールキット用メニューの設定(上で表示されているメニュー以外のメニュー表示する)
  var kit = Math.floor(Math.random() * 16) + 1 + 31; 
  while(menu === kit){
  var kit = Math.floor(Math.random() * 16) + 1 + 31; 
  }
  if(kit===32){
    // メニューの名前を入れ替える
    document.getElementById("takechange-menu").innerText = foodimage[31][0];
    // 糖質のg数を入れ替える
    document.getElementById("takechange-weight").innerText = foodimage[31][1];
    // 画像を入れ替える
    }else if(kit===33){
    document.getElementById("takechange-menu").innerText = foodimage[32][0];
    document.getElementById("takechange-weight").innerText = foodimage[32][1];
    document.getElementById('food2').src='img/33.jpeg';
    }else if(kit===34){
    document.getElementById("takechange-menu").innerText = foodimage[33][0];
    document.getElementById("takechange-weight").innerText = foodimage[33][1];
    document.getElementById('food2').src='img/34.jpeg';
    }else if(kit===35){
    document.getElementById("takechange-menu").innerText = foodimage[34][0];
    document.getElementById("takechange-weight").innerText = foodimage[34][1];
    document.getElementById('food2').src='img/35.jpeg';
    }else if(kit===36){
    document.getElementById("takechange-menu").innerText = foodimage[35][0];
    document.getElementById("takechange-weight").innerText = foodimage[35][1];
    document.getElementById('food2').src='img/36.jpeg';
    }else if(kit===37){
    document.getElementById("takechange-menu").innerText = foodimage[36][0];
    document.getElementById("takechange-weight").innerText = foodimage[36][1];
    document.getElementById('food2').src='img/37.jpeg';
    }else if(kit===38){
    document.getElementById("takechange-menu").innerText = foodimage[37][0];
    document.getElementById("takechange-weight").innerText = foodimage[37][1];
    document.getElementById('food2').src='img/38.jpeg';
    }else if(kit===39){
    document.getElementById("takechange-menu").innerText = foodimage[38][0];
    document.getElementById("takechange-weight").innerText = foodimage[38][1];
    document.getElementById('food2').src='img/39.jpeg';
    }else if(kit===40){
    document.getElementById("takechange-menu").innerText = foodimage[39][0];
    document.getElementById("takechange-weight").innerText = foodimage[39][1];
    document.getElementById('food2').src='img/40.jpeg';
    }else if(kit===41){
    document.getElementById("takechange-menu").innerText = foodimage[40][0];
    document.getElementById("takechange-weight").innerText = foodimage[40][1];
    document.getElementById('food2').src='img/41.jpeg';
    }else if(kit===42){
    document.getElementById("takechange-menu").innerText = foodimage[41][0];
    document.getElementById("takechange-weight").innerText = foodimage[41][1];
    document.getElementById('food2').src='img/42.jpeg';
    }else if(kit===43){
    document.getElementById("takechange-menu").innerText = foodimage[42][0];
    document.getElementById("takechange-weight").innerText = foodimage[42][1];
    document.getElementById('food2').src='img/43.jpeg';
    }else if(kit===44){
    document.getElementById("takechange-menu").innerText = foodimage[43][0];
    document.getElementById("takechange-weight").innerText = foodimage[43][1];
    document.getElementById('food2').src='img/44.jpeg';
    }else if(kit===45){
    document.getElementById("takechange-menu").innerText = foodimage[44][0];
    document.getElementById("takechange-weight").innerText = foodimage[44][1];
    document.getElementById('food2').src='img/45.jpeg';
    }else if(kit===46){
    document.getElementById("takechange-menu").innerText = foodimage[45][0];
    document.getElementById("takechange-weight").innerText = foodimage[45][1];
    document.getElementById('food2').src='img/46.jpeg';
    }else if(kit===47){
    document.getElementById("takechange-menu").innerText = foodimage[46][0];
    document.getElementById("takechange-weight").innerText = foodimage[46][1];
    document.getElementById('food2').src='img/47.jpeg';
    }  
  });
  // 5を選んだ場合には、糖質40g以上のメニューからランダムで一つピックアップされ表示される
  $('#very-high').click(function(){
    var menu = Math.floor(Math.random() * 20) + 1 + 47; 
    if(menu===48){
      // メニューの名前を入れ替える
      document.getElementById("change-menu").innerText = foodimage[47][0];
      // 糖質のg数を入れ替える
      document.getElementById("change-weight").innerText = foodimage[47][1];
      // 画像を入れ替える
      document.getElementById('food1').src='img/48.jpeg';
      }else if(menu===49){
      document.getElementById("change-menu").innerText = foodimage[48][0];
      document.getElementById("change-weight").innerText = foodimage[48][1];
      document.getElementById('food1').src='img/49.jpeg';
      }else if(menu===50){
      document.getElementById("change-menu").innerText = foodimage[49][0];
      document.getElementById("change-weight").innerText = foodimage[49][1];
      document.getElementById('food1').src='img/50.jpeg';
      }else if(menu===51){
      document.getElementById("change-menu").innerText = foodimage[50][0];
      document.getElementById("change-weight").innerText = foodimage[50][1];
      document.getElementById('food1').src='img/51.jpeg';
      }else if(menu===52){
      document.getElementById("change-menu").innerText = foodimage[51][0];
      document.getElementById("change-weight").innerText = foodimage[51][1];
      document.getElementById('food1').src='img/52.jpeg';
      }else if(menu===53){
      document.getElementById("change-menu").innerText = foodimage[52][0];
      document.getElementById("change-weight").innerText = foodimage[52][1];
      document.getElementById('food1').src='img/53.jpeg';
      }else if(menu===54){
      document.getElementById("change-menu").innerText = foodimage[53][0];
      document.getElementById("change-weight").innerText = foodimage[53][1];
      document.getElementById('food1').src='img/54.jpeg';
      }else if(menu===55){
      document.getElementById("change-menu").innerText = foodimage[54][0];
      document.getElementById("change-weight").innerText = foodimage[54][1];
      document.getElementById('food1').src='img/55.jpeg';
      }else if(menu===56){
      document.getElementById("change-menu").innerText = foodimage[55][0];
      document.getElementById("change-weight").innerText = foodimage[55][1];
      document.getElementById('food1').src='img/56.jpeg';
      }else if(menu===57){
      document.getElementById("change-menu").innerText = foodimage[56][0];
      document.getElementById("change-weight").innerText = foodimage[56][1];
      document.getElementById('food1').src='img/57.jpeg';
      }else if(menu===58){
      document.getElementById("change-menu").innerText = foodimage[57][0];
      document.getElementById("change-weight").innerText = foodimage[57][1];
      document.getElementById('food1').src='img/58.jpeg';
      }else if(menu===59){
      document.getElementById("change-menu").innerText = foodimage[58][0];
      document.getElementById("change-weight").innerText = foodimage[58][1];
      document.getElementById('food1').src='img/59.jpeg';
      }else if(menu===60){
      document.getElementById("change-menu").innerText = foodimage[59][0];
      document.getElementById("change-weight").innerText = foodimage[59][1];
      document.getElementById('food1').src='img/60.jpeg';
      }else if(menu===61){
      document.getElementById("change-menu").innerText = foodimage[60][0];
      document.getElementById("change-weight").innerText = foodimage[60][1];
      document.getElementById('food1').src='img/61.jpeg';
      }else if(menu===62){
      document.getElementById("change-menu").innerText = foodimage[61][0];
      document.getElementById("change-weight").innerText = foodimage[61][1];
      document.getElementById('food1').src='img/62.jpeg';
      } else if(menu===63){
      document.getElementById("change-menu").innerText = foodimage[62][0];
      document.getElementById("change-weight").innerText = foodimage[62][1];
      document.getElementById('food1').src='img/63.jpeg';
      }else if(menu===64){
      document.getElementById("change-menu").innerText = foodimage[63][0];
      document.getElementById("change-weight").innerText = foodimage[63][1];
      document.getElementById('food1').src='img/64.jpeg';
      }else if(menu===65){
      document.getElementById("change-menu").innerText = foodimage[64][0];
      document.getElementById("change-weight").innerText = foodimage[64][1];
      document.getElementById('food1').src='img/65.jpeg';
      }else if(menu===66){
      document.getElementById("change-menu").innerText = foodimage[65][0];
      document.getElementById("change-weight").innerText = foodimage[65][1];
      document.getElementById('food1').src='img/66.jpeg';
      }else if(menu===67){
      document.getElementById("change-menu").innerText = foodimage[66][0];
      document.getElementById("change-weight").innerText = foodimage[66][1];
      document.getElementById('food1').src='img/67.jpeg';
      }
    // ミールキット用メニューの設定(上で表示されているメニュー以外のメニュー表示する)
    var kit = Math.floor(Math.random() * 20) + 1 + 47;
    while(menu === kit){
    var kit = Math.floor(Math.random() * 20) + 1 + 47;
    } 
    if(kit===48){
      // メニューの名前を入れ替える
      document.getElementById("takechange-menu").innerText = foodimage[47][0];
      // 糖質のg数を入れ替える
      document.getElementById("takechange-weight").innerText = foodimage[47][1];
      // 画像を入れ替える
      document.getElementById('food2').src='img/48.jpeg';
      // メニューの説明を入れ替える
      }else if(kit===49){
      document.getElementById("takechange-menu").innerText = foodimage[48][0];
      document.getElementById("takechange-weight").innerText = foodimage[48][1];
      document.getElementById('food2').src='img/49.jpeg';
      }else if(kit===50){
      document.getElementById("takechange-menu").innerText = foodimage[49][0];
      document.getElementById("takechange-weight").innerText = foodimage[49][1];
      document.getElementById('food2').src='img/50.jpeg';
      }else if(kit===51){
      document.getElementById("takechange-menu").innerText = foodimage[50][0];
      document.getElementById("takechange-weight").innerText = foodimage[50][1];
      document.getElementById('food2').src='img/51.jpeg';
      }else if(kit===52){
      document.getElementById("takechange-menu").innerText = foodimage[51][0];
      document.getElementById("takechange-weight").innerText = foodimage[51][1];
      document.getElementById('food2').src='img/52.jpeg';
      }else if(kit===53){
      document.getElementById("takechange-menu").innerText = foodimage[52][0];
      document.getElementById("takechange-weight").innerText = foodimage[52][1];
      document.getElementById('food2').src='img/53.jpeg';
      }else if(kit===54){
      document.getElementById("takechange-menu").innerText = foodimage[53][0];
      document.getElementById("takechange-weight").innerText = foodimage[53][1];
      document.getElementById('food2').src='img/54.jpeg';
      }else if(kit===55){
      document.getElementById("takechange-menu").innerText = foodimage[54][0];
      document.getElementById("takechange-weight").innerText = foodimage[54][1];
      document.getElementById('food2').src='img/55.jpeg';
      }else if(kit===56){
      document.getElementById("takechange-menu").innerText = foodimage[55][0];
      document.getElementById("takechange-weight").innerText = foodimage[55][1];
      document.getElementById('food2').src='img/56.jpeg';
      }else if(kit===57){
      document.getElementById("takechange-menu").innerText = foodimage[56][0];
      document.getElementById("takechange-weight").innerText = foodimage[56][1];
      document.getElementById('food2').src='img/57.jpeg';
      }else if(kit===58){
      document.getElementById("takechange-menu").innerText = foodimage[57][0];
      document.getElementById("takechange-weight").innerText = foodimage[57][1];
      document.getElementById('food2').src='img/58.jpeg';
      }else if(kit===59){
      document.getElementById("takechange-menu").innerText = foodimage[58][0];
      document.getElementById("takechange-weight").innerText = foodimage[58][1];
      document.getElementById('food2').src='img/59.jpeg';
      }else if(kit===60){
      document.getElementById("takechange-menu").innerText = foodimage[59][0];
      document.getElementById("takechange-weight").innerText = foodimage[59][1];
      document.getElementById('food2').src='img/60.jpeg';
      }else if(kit===61){
      document.getElementById("takechange-menu").innerText = foodimage[60][0];
      document.getElementById("takechange-weight").innerText = foodimage[60][1];
      document.getElementById('food2').src='img/61.jpeg';
      }else if(kit===62){
      document.getElementById("takechange-menu").innerText = foodimage[61][0];
      document.getElementById("takechange-weight").innerText = foodimage[61][1];
      document.getElementById('food2').src='img/62.jpeg';
      } else if(kit===63){
      document.getElementById("takechange-menu").innerText = foodimage[62][0];
      document.getElementById("takechange-weight").innerText = foodimage[62][1];
      document.getElementById('food2').src='img/63.jpeg';
      }else if(kit===64){
      document.getElementById("takechange-menu").innerText = foodimage[63][0];
      document.getElementById("takechange-weight").innerText = foodimage[63][1];
      document.getElementById('food2').src='img/64.jpeg';
      }else if(kit===65){
      document.getElementById("takechange-menu").innerText = foodimage[64][0];
      document.getElementById("takechange-weight").innerText = foodimage[64][1];
      document.getElementById('food2').src='img/65.jpeg';
      }else if(kit===66){
      document.getElementById("takechange-menu").innerText = foodimage[65][0];
      document.getElementById("takechange-weight").innerText = foodimage[65][1];
      document.getElementById('food2').src='img/66.jpeg';
      }else if(kit===67){
      document.getElementById("takechange-menu").innerText = foodimage[66][0];
      document.getElementById("takechange-weight").innerText = foodimage[66][1];
      document.getElementById('food2').src='img/67.jpeg';
      }
});
});

