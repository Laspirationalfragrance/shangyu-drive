# 上虞市驾校官网 — 实现计划

> **For agentic workers:** 使用 superpowers:subagent-driven-development 或 superpowers:executing-plans 逐个任务实现。用 checkbox (`- [ ]`) 跟踪进度。

**目标：** 构建上虞市驾校的静态展示官网，深蓝金单页滚动设计，含8个区块+响应式布局。

**架构：** 单个 index.html 承载所有区块，css/style.css 负责样式和响应式断点，js/main.js 处理导航滚动、移动菜单、表单提交。零依赖，纯原生技术栈。

**技术栈：** HTML5 + CSS3 + 原生 JavaScript，无框架无构建工具。

## 全局约束

- 配色：主背景 `#0a1628`/`#0c1a30`，强调色 `#c9a96e`，正文 `#fff`/`#8899aa`
- 字体：系统默认中文字体（`-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif`）
- 响应式断点：移动端 ≤768px，桌面端 >768px
- 表单不自己处理提交，留空 action 供后续接入第三方服务
- 所有文字内容按设计文档中已确认的文案写入
- 教练照片使用占位图，后续替换

---

### Task 1: 项目骨架 — 创建文件和 HTML 结构

**文件:**
- 创建: `index.html`
- 创建: `css/style.css`（空文件）
- 创建: `js/main.js`（空文件）
- 创建: `assets/.gitkeep`

**产出:** 完整的 HTML 骨架，所有 8 个区块的语义化结构，不含样式。

- [ ] **Step 1: 创建目录结构和空文件**

```bash
mkdir -p /d/claude/driver/css /d/claude/driver/js /d/claude/driver/assets
touch /d/claude/driver/css/style.css /d/claude/driver/js/main.js /d/claude/driver/assets/.gitkeep
```

- [ ] **Step 2: 编写 index.html — 头部元数据和 CSS/JS 引用**

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="上虞市驾校 — 绍兴上虞专业驾考培训，98%通过率，透明收费，C1/C2 VIP班，资深教练一对一教学。">
  <title>上虞市驾校 | 绍兴上虞专业驾考培训</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- sections here -->
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: 编写导航栏 HTML**

```html
<nav id="navbar">
  <div class="nav-container">
    <a href="#hero" class="nav-logo">🚗 上虞市驾校</a>
    <ul class="nav-links">
      <li><a href="#hero" class="active">首页</a></li>
      <li><a href="#advantages">驾校优势</a></li>
      <li><a href="#course">课程价格</a></li>
      <li><a href="#coaches">教练团队</a></li>
      <li><a href="#reviews">学员评价</a></li>
      <li><a href="#contact">联系我们</a></li>
    </ul>
    <a href="#registration" class="nav-cta">在线报名</a>
    <button class="hamburger" aria-label="菜单">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
```

- [ ] **Step 4: 编写首屏 Hero HTML**

```html
<section id="hero">
  <div class="hero-content">
    <div class="hero-badge">绍兴 · 上虞</div>
    <h1>学车，从上虞市驾校开始</h1>
    <p class="hero-tagline">98% 通过率 · 透明收费 · 耐心教练 · 45 天快速拿证</p>
    <div class="hero-buttons">
      <a href="#registration" class="btn-primary">🚀 立即报名</a>
      <a href="#course" class="btn-outline">📋 了解课程</a>
    </div>
  </div>
  <div class="scroll-hint">↓ 向下了解更多</div>
</section>
```

- [ ] **Step 5: 编写驾校优势 HTML**

```html
<section id="advantages">
  <div class="section-header">
    <span class="section-label">为什么选择我们</span>
    <h2>选择上虞市驾校的四大理由</h2>
  </div>
  <div class="advantages-grid">
    <div class="advantage-card">
      <div class="advantage-icon">🎯</div>
      <div class="advantage-number">98%</div>
      <h3>高通过率</h3>
      <p>科目二、三一次过，远超本地平均水平</p>
    </div>
    <div class="advantage-card">
      <div class="advantage-icon">💰</div>
      <div class="advantage-number">透明</div>
      <h3>价格透明</h3>
      <p>一口价全包，合同写清，绝无隐形收费</p>
    </div>
    <div class="advantage-card">
      <div class="advantage-icon">👨‍🏫</div>
      <div class="advantage-number">耐心</div>
      <h3>教练耐心</h3>
      <p>不骂人、不敷衍、手把手教</p>
    </div>
    <div class="advantage-card">
      <div class="advantage-icon">⏱️</div>
      <div class="advantage-number">45天</div>
      <h3>快速拿证</h3>
      <p>合理安排练车时间，最快 45 天拿到驾照</p>
    </div>
  </div>
</section>
```

- [ ] **Step 6: 编写课程价格 HTML（仅 VIP 班）**

```html
<section id="course">
  <div class="section-header">
    <span class="section-label">课程与价格</span>
    <h2>C1 / C2 VIP 班</h2>
    <p class="section-subtitle">一门课程，做最好的服务</p>
  </div>
  <div class="course-card">
    <div class="course-badge">🔥 唯一课程 · 品质之选</div>
    <div class="course-price">¥5,800</div>
    <div class="course-note">一费制 · 无隐形收费</div>
    <ul class="course-features">
      <li>不限时练车</li>
      <li>周末可练</li>
      <li>优先预约考试</li>
      <li>接送服务</li>
      <li>一对一教学</li>
      <li>免费补考一次</li>
    </ul>
    <a href="#registration" class="btn-primary">立即报名</a>
  </div>
</section>
```

- [ ] **Step 7: 编写教练团队 HTML**

```html
<section id="coaches">
  <div class="section-header">
    <span class="section-label">教练团队</span>
    <h2>经验丰富的教练团队</h2>
  </div>
  <div class="coaches-grid">
    <div class="coach-card">
      <div class="coach-photo">
        <img src="assets/coach-luo.jpg" alt="罗教练" onerror="this.style.display='none';this.parentElement.querySelector('.coach-placeholder').style.display='flex'">
        <div class="coach-placeholder" style="display:none">👨‍🏫</div>
      </div>
      <h3>罗教练</h3>
      <div class="coach-meta">从业 30 年 · C1/C2 全能</div>
      <p class="coach-bio">罗教练干这行三十年了，带过多少学员他自己也说不清。C1、C2 都是他的老本行，倒库、侧方这些学员最头疼的地方，他有自己一套讲法——不跟你扯术语，用大白话让你一听就明白。该严格的时候不含糊，但从不对学员发火。</p>
    </div>
    <div class="coach-card">
      <div class="coach-photo">
        <img src="assets/coach-shen.jpg" alt="沈教练" onerror="this.style.display='none';this.parentElement.querySelector('.coach-placeholder').style.display='flex'">
        <div class="coach-placeholder" style="display:none">👩‍🏫</div>
      </div>
      <h3>沈教练</h3>
      <div class="coach-meta">从业 15 年 · C1/C2 全能</div>
      <p class="coach-bio">沈教练做了十五年驾培，很多学员是朋友介绍过来直接点名找她的。C1、C2 她都教，脾气好、有耐心，女学员和上了年纪的学员在她车上特别放松。她有个习惯——你练到她觉得真会了，才往下教，不催也不赶。</p>
    </div>
  </div>
</section>
```

- [ ] **Step 8: 编写学员评价 HTML**

```html
<section id="reviews">
  <div class="section-header">
    <span class="section-label">学员评价</span>
    <h2>听听学员们怎么说</h2>
  </div>
  <div class="reviews-grid">
    <div class="review-card">
      <div class="review-stars">⭐⭐⭐⭐⭐</div>
      <p class="review-text">"罗教练特别有耐心，我从零基础到拿证只用了 50 天。每个动作都反复教直到我完全掌握，推荐！"</p>
      <div class="review-author">— 陈同学 · 2025 年学员</div>
    </div>
    <div class="review-card">
      <div class="review-stars">⭐⭐⭐⭐⭐</div>
      <p class="review-text">"收费透明，合同上写的清清楚楚。朋友在其他驾校各种加钱，我这从头到尾就交了一次费。"</p>
      <div class="review-author">— 王同学 · 2025 年学员</div>
    </div>
    <div class="review-card">
      <div class="review-stars">⭐⭐⭐⭐⭐</div>
      <p class="review-text">"作为女生选驾校最怕教练凶，沈教练真的很温柔很耐心，学车体验特别好！"</p>
      <div class="review-author">— 赵同学 · 2024 年学员</div>
    </div>
  </div>
</section>
```

- [ ] **Step 9: 编写报名表单 HTML**

```html
<section id="registration">
  <div class="section-header">
    <span class="section-label">在线报名</span>
    <h2>现在报名，开启学车之旅</h2>
    <p class="section-subtitle">填写信息，我们将在 24 小时内联系你</p>
  </div>
  <form id="reg-form" class="reg-form">
    <div class="form-group">
      <label for="name">姓名</label>
      <input type="text" id="name" name="name" placeholder="请输入你的姓名" required>
    </div>
    <div class="form-group">
      <label for="phone">手机号</label>
      <input type="tel" id="phone" name="phone" placeholder="请输入你的手机号" required>
    </div>
    <div class="form-group">
      <label for="course-select">意向课程</label>
      <select id="course-select" name="course">
        <option>C1/C2 VIP 班 ¥5,800</option>
      </select>
    </div>
    <div class="form-group">
      <label for="message">留言（选填）</label>
      <textarea id="message" name="message" placeholder="有什么想了解的吗？" rows="3"></textarea>
    </div>
    <button type="submit" class="btn-primary btn-block">提交报名</button>
  </form>
  <div id="form-success" class="form-success" style="display:none">
    <div class="success-icon">✅</div>
    <h3>提交成功！</h3>
    <p>我们将在 24 小时内联系你，请保持手机畅通。</p>
  </div>
</section>
```

- [ ] **Step 10: 编写页脚 HTML**

```html
<footer id="contact">
  <div class="footer-grid">
    <div class="footer-col">
      <h3>🚗 上虞市驾校</h3>
      <p>绍兴市上虞区 xxx 路 xxx 号</p>
      <p>服务热线：待填写</p>
      <p>手机/微信：待填写</p>
      <p>营业时间：周一至周日 7:00-19:00</p>
    </div>
    <div class="footer-col">
      <h4>快速导航</h4>
      <a href="#advantages">驾校优势</a>
      <a href="#course">课程价格</a>
      <a href="#coaches">教练团队</a>
      <a href="#reviews">学员评价</a>
      <a href="#registration">在线报名</a>
    </div>
    <div class="footer-col">
      <h4>关注我们</h4>
      <p>微信公众号：待填写</p>
      <p>抖音号：待填写</p>
    </div>
  </div>
  <div class="footer-bottom">
    © 2025 上虞市驾校 版权所有 | 浙ICP备xxxxxxxx号
  </div>
</footer>
```

- [ ] **Step 11: 验证 — 在浏览器打开 index.html 确认所有区块可见**

用浏览器打开 `index.html`，确认 8 个区块的 HTML 结构完整，内容正确。

---

### Task 2: CSS 样式 — 全局变量、导航栏、Hero

**文件:**
- 修改: `css/style.css`

**产出:** CSS 变量定义、全局样式、导航栏样式、Hero 区块样式。

- [ ] **Step 1: 编写 CSS 重置和全局变量**

```css
/* === Reset & Variables === */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-primary: #0a1628;
  --bg-secondary: #0c1a30;
  --bg-footer: #060e18;
  --accent: #c9a96e;
  --text-primary: #ffffff;
  --text-secondary: #8899aa;
  --text-muted: #667788;
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-accent: rgba(201, 169, 110, 0.15);
  --font-family: -apple-system, "PingFang SC", "Microsoft YaHei", "Helvetica Neue", sans-serif;
  --max-width: 1100px;
  --transition: 0.3s ease;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 70px;
}

body {
  font-family: var(--font-family);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}
```

- [ ] **Step 2: 编写通用工具类和区块标题样式**

```css
/* === Utilities === */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-label {
  display: inline-block;
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.section-header h2 {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 15px;
  margin-top: 8px;
}

section {
  padding: 80px 24px;
}

/* === Buttons === */
.btn-primary {
  display: inline-block;
  background: var(--accent);
  color: var(--bg-primary);
  padding: 14px 36px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
}

.btn-primary:hover {
  background: #d4b57e;
  transform: translateY(-1px);
}

.btn-outline {
  display: inline-block;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  padding: 14px 36px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background var(--transition);
}

.btn-outline:hover {
  background: rgba(201, 169, 110, 0.1);
}

.btn-block {
  display: block;
  width: 100%;
}
```

- [ ] **Step 3: 编写导航栏样式**

```css
/* === Navbar === */
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 22, 40, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-accent);
  transition: background var(--transition);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-logo {
  color: var(--accent);
  font-weight: 700;
  font-size: 17px;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 28px;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 14px;
  text-decoration: none;
  transition: color var(--transition);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--accent);
}

.nav-cta {
  background: var(--accent);
  color: var(--bg-primary);
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: background var(--transition);
}

.nav-cta:hover {
  background: #d4b57e;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--accent);
  transition: transform var(--transition), opacity var(--transition);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

- [ ] **Step 4: 编写 Hero 区块样式**

```css
/* === Hero === */
#hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(160deg, #0a1628 0%, #0d1f3c 40%, #152040 100%);
  position: relative;
  overflow: hidden;
  padding-top: 64px;
}

#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background: radial-gradient(ellipse at 50% 0%, var(--accent) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 0 24px;
}

.hero-badge {
  display: inline-block;
  border: 1px solid rgba(201, 169, 110, 0.5);
  color: var(--accent);
  padding: 6px 20px;
  font-size: 12px;
  letter-spacing: 5px;
  margin-bottom: 24px;
}

#hero h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero-tagline {
  font-size: 18px;
  color: var(--text-secondary);
  max-width: 550px;
  margin: 0 auto 40px;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(201, 169, 110, 0.5);
  font-size: 13px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}
```

- [ ] **Step 5: 浏览器验证导航和 Hero 效果**

打开 `index.html`，确认导航栏固定顶部、半透明毛玻璃、Hero 渐变背景和滚动提示动画。

---

### Task 3: CSS 样式 — 优势、课程、教练、评价、表单、页脚 + 响应式

**文件:**
- 修改: `css/style.css`

**产出:** 剩余 6 个区块的完整样式 + 移动端响应式断点。

- [ ] **Step 1: 编写驾校优势区块样式**

```css
/* === Advantages === */
#advantages {
  background: var(--bg-secondary);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.advantage-card {
  text-align: center;
  padding: 36px 20px;
  background: rgba(201, 169, 110, 0.05);
  border: 1px solid rgba(201, 169, 110, 0.1);
  border-radius: 8px;
  transition: transform var(--transition), border-color var(--transition);
}

.advantage-card:hover {
  transform: translateY(-4px);
  border-color: rgba(201, 169, 110, 0.3);
}

.advantage-icon {
  font-size: 40px;
  margin-bottom: 12px;
}

.advantage-number {
  color: var(--accent);
  font-size: 30px;
  font-weight: 700;
}

.advantage-card h3 {
  font-size: 16px;
  margin: 8px 0;
}

.advantage-card p {
  color: var(--text-muted);
  font-size: 13px;
}
```

- [ ] **Step 2: 编写课程价格区块样式**

```css
/* === Course === */
#course {
  background: var(--bg-primary);
}

.course-card {
  max-width: 500px;
  margin: 0 auto;
  padding: 48px 32px;
  background: rgba(201, 169, 110, 0.05);
  border: 1.5px solid rgba(201, 169, 110, 0.25);
  border-radius: 10px;
  text-align: center;
}

.course-badge {
  display: inline-block;
  background: var(--accent);
  color: var(--bg-primary);
  padding: 5px 18px;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
}

.course-price {
  color: var(--accent);
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
}

.course-note {
  color: #556677;
  font-size: 14px;
  margin: 8px 0 32px;
}

.course-features {
  list-style: none;
  color: #cccccc;
  font-size: 15px;
  line-height: 2.4;
  margin-bottom: 32px;
}

.course-features li::before {
  content: '✅ ';
}
```

- [ ] **Step 3: 编写教练团队区块样式**

```css
/* === Coaches === */
#coaches {
  background: var(--bg-secondary);
}

.coaches-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 800px;
  margin: 0 auto;
}

.coach-card {
  text-align: center;
  padding: 36px 24px;
  background: rgba(10, 22, 40, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(201, 169, 110, 0.1);
}

.coach-photo {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(201, 169, 110, 0.12);
  margin: 0 auto 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  border: 2px solid rgba(201, 169, 110, 0.25);
  overflow: hidden;
}

.coach-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.coach-card h3 {
  font-size: 20px;
  margin-bottom: 4px;
}

.coach-meta {
  color: var(--accent);
  font-size: 14px;
  margin-bottom: 14px;
}

.coach-bio {
  color: var(--text-secondary);
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
}
```

- [ ] **Step 4: 编写学员评价区块样式**

```css
/* === Reviews === */
#reviews {
  background: var(--bg-primary);
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: var(--max-width);
  margin: 0 auto;
}

.review-card {
  padding: 28px;
  background: var(--bg-secondary);
  border-left: 3px solid var(--accent);
  border-radius: 0 8px 8px 0;
}

.review-stars {
  color: var(--accent);
  font-size: 18px;
  margin-bottom: 12px;
}

.review-text {
  color: #cccccc;
  font-size: 14px;
  line-height: 1.8;
}

.review-author {
  color: #556677;
  font-size: 13px;
  margin-top: 14px;
}
```

- [ ] **Step 5: 编写报名表单区块样式**

```css
/* === Registration === */
#registration {
  background: linear-gradient(160deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
}

.reg-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 36px;
  background: rgba(10, 22, 40, 0.7);
  border: 1px solid var(--border-accent);
  border-radius: 8px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  color: var(--text-secondary);
  font-size: 13px;
  margin-bottom: 6px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background: var(--bg-primary);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  padding: 12px 14px;
  border-radius: 4px;
  font-size: 14px;
  font-family: var(--font-family);
  transition: border-color var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #445566;
}

.form-group select {
  color: var(--text-secondary);
  cursor: pointer;
}

.form-group select option {
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.form-success {
  max-width: 500px;
  margin: 0 auto;
  padding: 48px 36px;
  background: rgba(10, 22, 40, 0.7);
  border: 1px solid var(--border-accent);
  border-radius: 8px;
  text-align: center;
}

.success-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.form-success h3 {
  font-size: 22px;
  margin-bottom: 8px;
}

.form-success p {
  color: var(--text-secondary);
  font-size: 14px;
}
```

- [ ] **Step 6: 编写页脚样式**

```css
/* === Footer === */
footer {
  background: var(--bg-footer);
  border-top: 1px solid rgba(201, 169, 110, 0.1);
  padding: 48px 24px 24px;
}

.footer-grid {
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
}

.footer-col h3 {
  color: var(--accent);
  font-size: 17px;
  margin-bottom: 14px;
}

.footer-col h4 {
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 14px;
}

.footer-col p,
.footer-col a {
  display: block;
  color: #556677;
  font-size: 13px;
  line-height: 2.2;
  text-decoration: none;
}

.footer-col a:hover {
  color: var(--accent);
}

.footer-bottom {
  max-width: var(--max-width);
  margin: 0 auto;
  text-align: center;
  color: #445566;
  font-size: 12px;
  padding-top: 24px;
  margin-top: 36px;
  border-top: 1px solid rgba(255, 255, 255, 0.04);
}
```

- [ ] **Step 7: 编写响应式样式（移动端 ≤768px）**

```css
/* === Responsive === */
@media (max-width: 768px) {
  section {
    padding: 60px 16px;
  }

  .section-header h2 {
    font-size: 26px;
  }

  /* Nav */
  .nav-links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: rgba(10, 22, 40, 0.97);
    backdrop-filter: blur(12px);
    flex-direction: column;
    padding: 20px 24px;
    gap: 16px;
    border-bottom: 1px solid var(--border-accent);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  /* Hero */
  #hero h1 {
    font-size: 32px;
  }

  .hero-tagline {
    font-size: 15px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  /* Advantages */
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .advantage-card {
    padding: 24px 14px;
  }

  .advantage-number {
    font-size: 24px;
  }

  /* Coaches */
  .coaches-grid {
    grid-template-columns: 1fr;
  }

  /* Reviews */
  .reviews-grid {
    grid-template-columns: 1fr;
  }

  /* Footer */
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}
```

- [ ] **Step 8: 浏览器验证完整页面在桌面和移动端的显示效果**

用浏览器打开 `index.html`，使用开发者工具切换到移动端视口（375px/414px），验证所有区块正常显示，汉堡菜单出现。桌面端确认 4 列优势、2 列教练、3 列评价。确认所有区块之间有适当的间距。

---

### Task 4: JavaScript — 导航交互、平滑滚动、表单处理

**文件:**
- 修改: `js/main.js`

**产出:** 导航高亮、移动菜单开关、平滑滚动偏移、表单提交拦截和成功提示。

- [ ] **Step 1: 编写导航滚动高亮**

```javascript
// === Navbar scroll highlight ===
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function updateActiveLink() {
    let current = '';
    const offset = 100;
    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - offset) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
})();
```

- [ ] **Step 2: 编写汉堡菜单交互**

```javascript
// === Mobile hamburger menu ===
(function () {
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    }
  });
})();
```

- [ ] **Step 3: 编写表单提交处理（模拟提交 + 成功提示）**

```javascript
// === Form submission ===
(function () {
  var form = document.getElementById('reg-form');
  var success = document.getElementById('form-success');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    var data = {
      name: document.getElementById('name').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      course: document.getElementById('course-select').value,
      message: document.getElementById('message').value.trim()
    };

    // Basic validation
    if (!data.name || !data.phone) {
      alert('请填写姓名和手机号');
      return;
    }

    if (!/^1\d{10}$/.test(data.phone)) {
      alert('请输入正确的手机号');
      return;
    }

    // TODO: Replace with real form submission endpoint
    // For now, show success message
    form.style.display = 'none';
    success.style.display = 'block';

    // Log data for debugging
    console.log('报名数据：', data);
  });
})();
```

- [ ] **Step 4: 浏览器验证所有交互**

打开 `index.html`，测试：① 滚动页面时导航高亮跟随切换；② 移动端汉堡菜单开/关；③ 点击导航链接平滑滚动；④ 提交空表单触发校验提示；⑤ 正确填写后提交显示成功页面。

---

### Task 5: 最终检查与调整

**文件:**
- 修改: `index.html`
- 修改: `css/style.css`
- 修改: `js/main.js`

**产出:** 样式微调、边缘情况修复、完整测试。

- [ ] **Step 1: 跨区块视觉一致性检查**

在浏览器中从头到尾、桌面+移动端滚动检查：
- 所有区块左右 padding 一致
- 金色 `#c9a96e` 使用一致
- 字体大小层级正确
- 按钮 hover 状态统一
- 各区块视觉分隔清晰

- [ ] **Step 2: 修复导航栏在 Hero 区块上方可能被遮挡的问题**

确认 `#hero` 的 `padding-top` 足以避开固定导航栏。

- [ ] **Step 3: 添加页面加载时的平滑体验**

在 `index.html` 的 `<body>` 标签后、`<nav>` 前添加一个简单的过渡遮罩（可选，让首屏渲染不闪烁）。

- [ ] **Step 4: 代码清理**

- 确认 HTML 缩进一致
- 确认 CSS 无重复规则
- 确认 JS 无 console.log（表单提交的那条保留用于调试）
- 确认所有注释清晰

- [ ] **Step 5: 提交**

```bash
git add index.html css/style.css js/main.js assets/.gitkeep
git commit -m "feat: 上虞市驾校官网首次实现 — 8区块单页滚动"
```
