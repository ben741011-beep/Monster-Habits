const bug = document.getElementById('bug');
const effect = document.getElementById('effect');
const feedBtn = document.getElementById('feedBtn');
const skipBtn = document.getElementById('skipBtn');

// 點擊餵食
feedBtn.addEventListener('click', () => {
  effect.textContent = '🍪'; // 顯示餅乾
  effect.style.opacity = 1;
  effect.style.transform = 'translateX(-50%) translateY(-50px)';

  // 蟲蟲動畫
  bug.style.transform = 'scale(1.3)';
  setTimeout(() => bug.style.transform = 'scale(1)', 500);

  // 效果消失
  setTimeout(() => {
    effect.style.opacity = 0;
    effect.style.transform = 'translateX(-50%) translateY(0)';
  }, 800);
});

// 點擊不餵食
skipBtn.addEventListener('click', () => {
  effect.textContent = '❌'; // 顯示 X
  effect.style.opacity = 1;
  effect.style.transform = 'translateX(-50%) translateY(-50px)';

  // 蟲蟲動畫
  bug.style.transform = 'scale(0.8)';
  setTimeout(() => bug.style.transform = 'scale(1)', 500);

  // 效果消失
  setTimeout(() => {
    effect.style.opacity = 0;
    effect.style.transform = 'translateX(-50%) translateY(0)';
  }, 800);
});