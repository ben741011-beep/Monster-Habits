const bug = document.getElementById('bug');
const feedBtn = document.getElementById('feedBtn');
const skipBtn = document.getElementById('skipBtn');
const debug = document.getElementById('debug');
const message = document.getElementById('message');

debug.textContent = 'Test v4';

let segments = 7;
const maxSegments = 10;

// 初始化蟲蟲
function renderBug() {
  bug.innerHTML = '';
  for (let i = 0; i < segments; i++) {
    const span = document.createElement('span');
    span.className = 'segment';
    span.textContent = '🍼';
    bug.appendChild(span);
  }
}

renderBug();

// 飛出餅乾效果
function flyCookie() {
  const cookie = document.createElement('div');
  cookie.textContent = '🍪';
  cookie.className = 'effect';
  document.querySelector('.container').appendChild(cookie);
  setTimeout(() => {
    cookie.style.opacity = 1;
    cookie.style.transform = 'translateX(-50%) translateY(-100px)';
  }, 50);
  setTimeout(() => cookie.remove(), 600);
}

// 餵食
feedBtn.addEventListener('click', () => {
  if (segments < maxSegments) {
    segments++;
    renderBug();
    flyCookie();
    message.textContent = '';
  } else {
    // 超過最大值顯示痛苦表情
    message.textContent = '😖 好撐，好痛苦！';
  }
});

// 不餵食
skipBtn.addEventListener('click', () => {
  if (segments > 1) {
    segments--;
    renderBug();
    const xMark = document.createElement('div');
    xMark.textContent = '❌';
    xMark.className = 'effect';
    document.querySelector('.container').appendChild(xMark);
    setTimeout(() => {
      xMark.style.opacity = 1;
      xMark.style.transform = 'translateX(-50%) translateY(-100px)';
    }, 50);
    setTimeout(() => xMark.remove(), 600);
    message.textContent = '';
  } else {
    // 剩最後一個，蟲蟲掰掰
    message.textContent = '掰掰，我要去找下個小朋友了 😛';
    bug.classList.add('exit');
    // 移除按鈕，避免再點
    feedBtn.disabled = true;
    skipBtn.disabled = true;
    // 顯示最終訊息
    setTimeout(() => {
      message.textContent = '寶貝你已經成功跟奶嘴說掰掰了 🎉';
    }, 2000);
  }
});