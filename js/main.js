// 各コンポーネントを読み込んで挿入する関数
async function loadComponent(id, path) {
  const res = await fetch(path);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

window.addEventListener('DOMContentLoaded', () => {
  loadComponent('header', '/components/header.html');
  loadComponent('hero', '/components/hero.html');
  loadComponent('skills', '/components/skills.html');
  loadComponent('profile', '/components/profile.html');
  loadComponent('portfolio', '/components/portfolio.html');
  loadComponent('contact', '/components/contact.html');
  loadComponent('footer', '/components/footer.html');
  // スムーズスクロールを有効化
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
      const targetId = e.target.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // 詳細ボタンの開閉
    if (e.target.classList.contains('project-detail-btn')) {
      const btn = e.target;
      const detail = btn.nextElementSibling;
      if (detail && detail.classList.contains('project-detail')) {
        if (detail.style.display === 'none' || detail.style.display === '') {
          detail.style.display = 'block';
          btn.textContent = '詳細を閉じる';
        } else {
          detail.style.display = 'none';
          btn.textContent = '詳細を見る';
        }
      }
    }
  });
});
