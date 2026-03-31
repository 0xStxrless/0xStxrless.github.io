/* shared star field animation */

const canvas = document.getElementById('stars');
if (!canvas) throw new Error('Canvas element with id="stars" not found');

const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const STAR_COUNT = 320;
const stars = Array.from({ length: STAR_COUNT }, () => {
  const side = Math.random() < 0.5 ? 'left' : 'right';
  const margin = 0.06 + Math.pow(Math.random(), 1.5) * 0.24;
  return {
    side,
    nx: margin,
    ny: 0.02 + Math.random() * 0.96,
    r: Math.random() < 0.12 ? 1.0 + Math.random() * 0.9 : 0.22 + Math.random() * 0.55,
    base: 0.07 + Math.random() * 0.5,
    speed: 0.2 + Math.random() * 1.1,
    phase: Math.random() * Math.PI * 2,
    spike: Math.random() < 0.055,
  };
});

function drawStars() {
  const W = canvas.width, H = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const colW = Math.min(680, W);
  const colL = (W - colW) / 2;
  const colR = colL + colW;
  const sideW = Math.max(colL, 2);
  const t = performance.now() / 1000;

  for (const s of stars) {
    const x = s.side === 'left' ? s.nx * sideW : colR + s.nx * sideW;
    const y = s.ny * H;

    if (s.side === 'left' && x >= colL) continue;
    if (s.side === 'right' && x <= colR) continue;

    const distFromArticle = s.side === 'left' ? colL - x : x - colR;
    const edgeFade = Math.min(1, distFromArticle / 50);
    const outerFade = s.side === 'left' ? Math.min(1, x / 40) : Math.min(1, (W - x) / 40);

    const twinkle = s.base + (1 - s.base) * 0.5 * (1 + Math.sin(t * s.speed + s.phase));
    const alpha = twinkle * Math.max(0, edgeFade) * outerFade;
    if (alpha < 0.01) continue;

    ctx.save();
    ctx.globalAlpha = alpha;

    if (s.spike) {
      const rs = s.r;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const len = i % 2 === 0 ? rs * 2.8 : rs * 0.9;
        i === 0
          ? ctx.moveTo(x + Math.cos(a) * len, y + Math.sin(a) * len)
          : ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len);
      }
      ctx.closePath();
      ctx.fill();
      const g = ctx.createRadialGradient(x, y, 0, x, y, rs * 6);
      g.addColorStop(0, 'rgba(180,200,255,0.2)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, rs * 6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      const g = ctx.createRadialGradient(x, y, 0, x, y, s.r * 3.5);
      g.addColorStop(0, 'rgba(210,220,255,0.88)');
      g.addColorStop(0.4, 'rgba(160,180,255,0.28)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, s.r * 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#dde4ff';
      ctx.beginPath();
      ctx.arc(x, y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

function loop() {
  drawStars();
  requestAnimationFrame(loop);
}
loop();

/* letter glow */
document.querySelectorAll('.brand-stxr .l').forEach((l, i) => {
  let phase = i * 1.3;
  setInterval(() => {
    phase += 0.04;
    const bright = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(phase));
    l.style.textShadow = `0 0 ${Math.round(bright * 18)}px rgba(180,200,255,${(bright * 0.28).toFixed(2)})`;
  }, 50);
});
