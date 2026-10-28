(() => {
  'use strict';
  const p = window.PROFILE;
  const text = (value) => value[language] || value.en;
  const escape = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safeURL = (url) => /^https:\/\//.test(url) ? escape(url) : '';
  let language = 'en';
  let filter = 'all';
  try { language = localStorage.getItem('weifeng-homepage-language') === 'zh' ? 'zh' : 'en'; } catch { /* File mode or private browsing. */ }

  function renderResearch() {
    const items = p.research.filter(item => filter === 'all' || item.type === filter);
    document.getElementById('research-list').innerHTML = items.map(item => {
      const paperLink = item.paperUrl && safeURL(item.paperUrl);
      const codeLink = item.codeUrl && safeURL(item.codeUrl);
      const title = paperLink ? `<a href="${paperLink}" target="_blank" rel="noopener">${escape(item.title)}</a>` : escape(item.title);
      const links = [paperLink ? `<a href="${paperLink}" target="_blank" rel="noopener">Paper ↗</a>` : '', codeLink ? `<a href="${codeLink}" target="_blank" rel="noopener">Code ↗</a>` : '', `<a href="${escape(item.figurePdf)}" target="_blank" rel="noopener">${language === 'en' ? 'Figure (PDF)' : '原图 (PDF)'} ↗</a>`].filter(Boolean).join('');
      return `<article class="paper paper-${escape(item.id)}" id="${escape(item.id)}">
        <a class="paper-figure" href="${escape(item.figurePdf)}" target="_blank" rel="noopener" aria-label="${language === 'en' ? 'Open full paper figure (PDF)' : '查看完整论文图片（PDF）'}"><img class="paper-image" src="${escape(item.image)}" alt="${escape(text(item.imageAlt))}" loading="lazy"></a>
        <div class="paper-body"><h3>${title}</h3>
          <p class="paper-authors">${escape(text(item.authors)).replace(escape(p.name), `<strong>${escape(p.name)}</strong>`)}</p>
          <p class="paper-venue"><span class="${item.type === 'review' ? 'review-label' : ''}">${escape(text(item.venue))}</span></p>
          <p class="paper-summary">${escape(text(item.summary))}</p>
          ${links ? `<div class="paper-links">${links}</div>` : ''}
          <details><summary>${language === 'en' ? 'Research details' : '研究详情'}</summary><div class="detail-content"><ul>${text(item.details).map(line => `<li>${escape(line)}</li>`).join('')}</ul><p class="paper-period">${escape(text(item.period))}</p></div></details>
        </div></article>`;
    }).join('');
    document.querySelectorAll('.filter').forEach(button => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function render() {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach(el => el.textContent = el.dataset[language]);
    document.getElementById('profile-name').innerHTML = `${escape(p.name)} <span lang="zh-CN">${escape(p.chineseName)}</span>`;
    document.getElementById('introduction').innerHTML = text(p.introduction);
    document.getElementById('research-intro').innerHTML = text(p.interests);
    const languageButton = document.getElementById('language-toggle');
    languageButton.textContent = language === 'en' ? '中文' : 'EN';
    languageButton.setAttribute('aria-label', language === 'en' ? '切换为中文' : 'Switch to English');
    document.getElementById('email-button').textContent = language === 'en' ? 'Email' : '邮箱';
    document.querySelectorAll('a[href^="mailto:"]').forEach(el => el.href = `mailto:${p.email}`);
    document.querySelector('.email-address').textContent = p.email;
    document.querySelector('.contact-links a[href^="https://github.com/"]').href = p.github;
    document.getElementById('scholar-link').href = p.scholar;
    document.getElementById('news-list').innerHTML = p.news.map(item => `<div class="news-item"><time class="news-date">${escape(item.date)}</time><p>${text(item)}</p></div>`).join('');
    renderResearch();
    document.getElementById('education-list').innerHTML = p.education.map(item => `<article class="education-item"><div class="education-topline"><h3><a href="${safeURL(item.url)}" target="_blank" rel="noopener">${escape(text(item.university))}</a></h3><span class="dates">${escape(text(item.dates))}</span></div><p class="degree">${escape(text(item.degree))}</p></article>`).join('');
    const e = p.experience;
    document.getElementById('experience-list').innerHTML = `<article><div class="experience-topline"><h3>${escape(text(e.company))}</h3><span class="dates">${escape(text(e.dates))}</span></div><p class="experience-role">${escape(text(e.role))}</p><p class="experience-description">${escape(text(e.description))}</p></article>`;
    document.getElementById('copy-status').textContent = '';
  }

  document.getElementById('language-toggle').addEventListener('click', () => {
    language = language === 'en' ? 'zh' : 'en';
    try { localStorage.setItem('weifeng-homepage-language', language); } catch { /* Preferences remain usable in memory. */ }
    render();
  });
  document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; renderResearch(); }));

  const dialog = document.getElementById('email-dialog');
  document.getElementById('email-button').addEventListener('click', () => {
    document.getElementById('copy-status').textContent = '';
    dialog.showModal();
  });
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
  document.getElementById('copy-email').addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(p.email);
      status.textContent = language === 'en' ? 'Email address copied.' : '邮箱地址已复制。';
    } catch {
      status.textContent = language === 'en' ? `Please copy manually: ${p.email}` : `请手动复制：${p.email}`;
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
        }
      });
    }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('#about, #research, #experience').forEach(section => observer.observe(section));
  }
  render();
})();
