const bug = document.getElementById('bug');
const feedBtn = document.getElementById('feedBtn');
const skipBtn = document.getElementById('skipBtn');
const debug = document.getElementById('debug');
debug.textContent = 'Test v3';
console.log('Running version: Test v3');

// 平滑寬度動畫
function animateWidth(element, from, to, duration) {
  const startTime = performance.now();
  function animate(time) {
    const elapsed = time - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const currentWidth = from + (to - from) * progress;
    element.style.width = currentWidth + 'px';
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// 點擊餵食：多餅乾飛出
feedBtn.addEventListener('click', () => {
  const numCookies = 5; // 飛出餅乾數量
  let count = 0;

  const cookieInterval = setInterval(() => {
    const cookie = document.createElement('div');
    cookie.textContent = '🍪';
    cookie.style.position = 'absolute';
    cookie.style.left = '50%';
    cookie.style.top = '-50px';
    cookie.style.transform = 'translateX(-50%)';
    cookie.style.fontSize = '30px';
    cookie.style.opacity = 1;
    cookie.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    document.querySelector('.container').appendChild(cookie);

    setTimeout(() => {
      cookie.style.transform = `translateX(-50%) translateY(-100px) rotate(${Math.random()*360}deg)`;
      cookie.style.opacity = 0;
    }, 50);

    setTimeout(() => cookie.remove(), 600);

    count++;
    if (count >= numCookies) clearInterval(cookieInterval);
  }, 150);

  // 蟲蟲伸長動畫
  bug.classList.add('stretched');
  animateWidth(bug, 60, 100, 200);
  setTimeout(() => {
    animateWidth(bug, 100, 60, 200);
    setTimeout(() => bug.classList.remove('stretched'), 200);
  }, 200);
});

// 點擊不餵食
skipBtn.addEventListener('click', () => {
  const xMark = document.createElement('div');
  xMark.textContent = '❌';
  xMark.style.position = 'absolute';
  xMark.style.left = '50%';
  xMark.style.top = '-50px';
  xMark.style.transform = 'translateX(-50%)';
  xMark.style.fontSize = '30px';
  xMark.style.opacity = 1;
  xMark.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
  document.querySelector('.container').appendChild(xMark);

  setTimeout(() => {
    xMark.style.transform = `translateX(-50%) translateY(-100px) rotate(${Math.random()*360}deg)`;
    xMark.style.opacity = 0;
  }, 50);

  setTimeout(() => xMark.remove(), 600);

  // 蟲蟲縮小動畫
  bug.classList.add('stretched');
  animateWidth(bug, 60, 40, 200);
  setTimeout(() => {
    animateWidth(bug, 40, 60, 200);
    setTimeout(() => bug.classList.remove('stretched'), 200);
  }, 200);
});