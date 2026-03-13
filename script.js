const button = document.getElementById('feedBug');
const bug = document.getElementById('bug');

// 模擬搬家狀態
const moved = false; // 如果搬家後設 true

// const today = new Date().toISOString().slice(0,10);
// const lastClick = localStorage.getItem('lastBugClick');

// 註解掉每天只能點一次的限制
// if (moved || lastClick === today) {
//   button.style.display = 'none'; // 今天已點過 或 搬家後按鈕消失
// }

button.addEventListener('click', () => {
  bug.style.transform = 'scale(1.2)'; // 簡單互動動畫
  setTimeout(() => bug.style.transform = 'scale(1)', 500);

  alert('蟲蟲開心了！');

  // 註解掉每天限制儲存
  // localStorage.setItem('lastBugClick', today);
  // button.style.display = 'none';
});
