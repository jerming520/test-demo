//記得 html>body 底部宣告 <script src="plugins/custom.js"></script>,
//只有當瀏覽器當前網頁的資源都載入完畢，才會開始執行{}內的工作
//加了.row[data-masonry='{"percentPosition": true }']圖片很慢,故換寫onload加了onload後就有圖面牆的效果
onload = () => {
  const grid = document.querySelector('#gamenewsPark article.row');
  const msnry = new Masonry(grid, {
    percentPosition: 'true'
  });
}
// 