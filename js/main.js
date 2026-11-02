/**
 * Muthukumar Pattan - Retro 90s Desktop & Portfolio System
 * Lead SDET at Freshworks | Bug Hunter '95 Retro Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initTaskbarClock();
  initStartMenu();
  initTabNavigation();
  initVisitorCounter();
  initBugHunterGame();
  initCopyButtons();
  initContactForm();
});

/* ==========================================================================
   1. Real-time 90s Taskbar Digital Clock
   ========================================================================== */
function initTaskbarClock() {
  const clockEl = document.getElementById('taskbar-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    clockEl.textContent = `${hours}:${minutes} ${ampm}`;
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   2. Windows 95 Start Menu
   ========================================================================== */
function initStartMenu() {
  const startBtn = document.getElementById('start-btn');
  const startMenu = document.getElementById('start-menu');

  if (!startBtn || !startMenu) return;

  startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !startMenu.classList.contains('hidden');
    if (isOpen) {
      startMenu.classList.add('hidden');
      startBtn.classList.remove('open');
    } else {
      startMenu.classList.remove('hidden');
      startBtn.classList.add('open');
    }
  });

  // Close when clicking anywhere outside
  document.addEventListener('click', (e) => {
    if (!startMenu.contains(e.target) && e.target !== startBtn) {
      startMenu.classList.add('hidden');
      startBtn.classList.remove('open');
    }
  });

  // Menu items click
  document.querySelectorAll('.win-start-item').forEach(item => {
    item.addEventListener('click', () => {
      startMenu.classList.add('hidden');
      startBtn.classList.remove('open');
    });
  });
}

/* ==========================================================================
   3. Retro Tabs Navigation System
   ========================================================================== */
function initTabNavigation() {
  const tabs = document.querySelectorAll('.win-tab');
  const panels = document.querySelectorAll('.tab-panel');

  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.add('hidden'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
      }
    });
  });
}

/* ==========================================================================
   4. 90s Web Counter Simulation
   ========================================================================== */
function initVisitorCounter() {
  const counterEl = document.getElementById('visitor-count');
  if (!counterEl) return;

  let count = localStorage.getItem('sdet_visitor_count');
  if (!count) {
    count = 10482;
  } else {
    count = parseInt(count, 10) + 1;
  }
  localStorage.setItem('sdet_visitor_count', count);
  counterEl.textContent = String(count).padStart(6, '0');
}

/* ==========================================================================
   5. Web Audio Retro Synth Sound Effects
   ========================================================================== */
class RetroSound {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playBeep(freq = 440, type = 'square', duration = 0.08) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  scoreUp() {
    this.playBeep(587.33, 'square', 0.06);
    setTimeout(() => this.playBeep(880, 'square', 0.08), 60);
  }

  hitBug() {
    this.playBeep(330, 'square', 0.05);
    setTimeout(() => this.playBeep(659.25, 'triangle', 0.08), 50);
  }

  gameOver() {
    this.playBeep(220, 'sawtooth', 0.15);
    setTimeout(() => this.playBeep(146.83, 'sawtooth', 0.25), 140);
  }
}

const soundEngine = new RetroSound();

/* ==========================================================================
   6. Bug Hunter '95: Retro SDET Arcade Game
   ========================================================================== */
function initBugHunterGame() {
  const canvas = document.getElementById('game-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const scoreDisplay = document.getElementById('game-score');
  const bugsDisplay = document.getElementById('game-bugs');
  const resetBtn = document.getElementById('game-reset-btn');
  const faceIcon = document.getElementById('game-face-icon');

  // Game Dimensions
  const W = canvas.width;
  const H = canvas.height;
  const GRID = 20;

  let player = { x: 8, y: 5 };
  let bugs = [];
  let tests = [];
  let score = 0;
  let squashed = 0;
  let stability = 100;
  let isGameOver = false;
  let loopTimer = null;

  function resetGame() {
    player = { x: Math.floor(W / GRID / 2), y: Math.floor(H / GRID / 2) };
    score = 0;
    squashed = 0;
    stability = 100;
    isGameOver = false;
    bugs = [];
    tests = [];
    
    // Spawn initial entities
    for (let i = 0; i < 3; i++) spawnBug();
    spawnTestPass();

    if (faceIcon) faceIcon.textContent = '🙂';
    updateDisplays();
    
    if (loopTimer) clearInterval(loopTimer);
    loopTimer = setInterval(gameStep, 180);
    draw();
  }

  function spawnBug() {
    const maxX = Math.floor(W / GRID);
    const maxY = Math.floor(H / GRID);
    bugs.push({
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
      type: Math.random() > 0.3 ? 'bug' : 'blocker'
    });
  }

  function spawnTestPass() {
    const maxX = Math.floor(W / GRID);
    const maxY = Math.floor(H / GRID);
    tests.push({
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    });
  }

  function updateDisplays() {
    if (scoreDisplay) scoreDisplay.textContent = String(score).padStart(3, '0');
    if (bugsDisplay) bugsDisplay.textContent = String(squashed).padStart(2, '0');
  }

  function move(dx, dy) {
    if (isGameOver) return;
    const maxX = Math.floor(W / GRID);
    const maxY = Math.floor(H / GRID);

    player.x = (player.x + dx + maxX) % maxX;
    player.y = (player.y + dy + maxY) % maxY;

    checkCollisions();
    draw();
  }

  function checkCollisions() {
    // Check Bug squash
    for (let i = bugs.length - 1; i >= 0; i--) {
      if (bugs[i].x === player.x && bugs[i].y === player.y) {
        if (bugs[i].type === 'blocker') {
          score += 25;
          soundEngine.hitBug();
        } else {
          score += 15;
          soundEngine.scoreUp();
        }
        squashed += 1;
        bugs.splice(i, 1);
        spawnBug();
        if (Math.random() > 0.5) spawnBug();
      }
    }

    // Check Test Pass pickup
    for (let i = tests.length - 1; i >= 0; i--) {
      if (tests[i].x === player.x && tests[i].y === player.y) {
        score += 10;
        soundEngine.scoreUp();
        tests.splice(i, 1);
        spawnTestPass();
      }
    }

    updateDisplays();
  }

  function gameStep() {
    if (isGameOver) return;

    // Slowly move bugs randomly
    bugs.forEach(b => {
      if (Math.random() > 0.6) {
        const dir = Math.floor(Math.random() * 4);
        const maxX = Math.floor(W / GRID);
        const maxY = Math.floor(H / GRID);
        if (dir === 0) b.x = (b.x + 1) % maxX;
        else if (dir === 1) b.x = (b.x - 1 + maxX) % maxX;
        else if (dir === 2) b.y = (b.y + 1) % maxY;
        else if (dir === 3) b.y = (b.y - 1 + maxY) % maxY;
      }
    });

    // Spawn more bugs if low
    if (bugs.length < 3) spawnBug();
    if (tests.length < 2) spawnTestPass();

    checkCollisions();
    draw();
  }

  function draw() {
    // Clear Canvas
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, W, H);

    // Grid lines (retro CRT matrix)
    ctx.strokeStyle = '#112211';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < W; x += GRID) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let y = 0; y < H; y += GRID) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    // Draw Test Passes (Green diamond)
    tests.forEach(t => {
      ctx.fillStyle = '#00ff66';
      ctx.beginPath();
      ctx.arc(t.x * GRID + GRID / 2, t.y * GRID + GRID / 2, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '9px monospace';
      ctx.fillText('✓', t.x * GRID + 5, t.y * GRID + 13);
    });

    // Draw Bugs (Red & Yellow)
    bugs.forEach(b => {
      ctx.font = '14px sans-serif';
      ctx.fillText(b.type === 'blocker' ? '🔥' : '🐛', b.x * GRID + 2, b.y * GRID + 15);
    });

    // Draw Player (SDET Tester cursor / icon)
    ctx.fillStyle = '#ffff00';
    ctx.fillRect(player.x * GRID + 2, player.y * GRID + 2, GRID - 4, GRID - 4);
    ctx.fillStyle = '#000080';
    ctx.font = 'bold 11px monospace';
    ctx.fillText('QA', player.x * GRID + 3, player.y * GRID + 13);
  }

  // Keyboard controls
  window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyS', 'KeyA', 'KeyD'].includes(e.code)) {
      e.preventDefault();
      soundEngine.init();
      if (e.code === 'ArrowUp' || e.code === 'KeyW') move(0, -1);
      else if (e.code === 'ArrowDown' || e.code === 'KeyS') move(0, 1);
      else if (e.code === 'ArrowLeft' || e.code === 'KeyA') move(-1, 0);
      else if (e.code === 'ArrowRight' || e.code === 'KeyD') move(1, 0);
    }
  });

  // Mobile / On-screen D-Pad buttons
  document.getElementById('btn-up')?.addEventListener('click', () => { soundEngine.init(); move(0, -1); });
  document.getElementById('btn-down')?.addEventListener('click', () => { soundEngine.init(); move(0, 1); });
  document.getElementById('btn-left')?.addEventListener('click', () => { soundEngine.init(); move(-1, 0); });
  document.getElementById('btn-right')?.addEventListener('click', () => { soundEngine.init(); move(1, 0); });

  if (resetBtn) resetBtn.addEventListener('click', resetGame);

  resetGame();
}

/* ==========================================================================
   7. Copy to Clipboard Utility
   ========================================================================== */
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const orig = btn.innerHTML;
        btn.innerHTML = '<span>✓ Copied!</span>';
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    });
  });
}

/* ==========================================================================
   8. Contact Form Mailto Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name')?.value || '';
    const email = document.getElementById('c-email')?.value || '';
    const subject = document.getElementById('c-subject')?.value || 'SDET / Quality Engineering Inquiry';
    const message = document.getElementById('c-message')?.value || '';

    const mailto = `mailto:muthukumar.pattan+fwinc@freshworks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
  });
}
