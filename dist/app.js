'use strict';
const content = window.portfolioContent;
const container = document.getElementById('projects');
const text = (tag, value, className) => {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  return element;
};
function safeLink(raw) {
  if (!raw) return null;
  try { const url = new URL(raw, location.href); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; }
  catch { return null; }
}
function attachVideo(stage, project) {
  const video = project.video;
  const isYouTube = video?.type === 'youtube' && /^[a-zA-Z0-9_-]{11}$/.test(video.id || '');
  const mp4 = video?.type === 'mp4' ? safeLink(video.src) : null;
  if (!isYouTube && !mp4) {
    stage.append(text('span', 'Demo video will be added here', 'video-note'));
    return;
  }
  const play = text('button', '▶ Watch demo', 'play');
  play.setAttribute('aria-label', 'Watch ' + project.name + ' demo on this page');
  stage.append(play);
  play.addEventListener('click', () => {
    let player;
    if (isYouTube) {
      player = document.createElement('iframe');
      player.src = 'https://www.youtube-nocookie.com/embed/' + video.id + '?autoplay=1';
      player.title = project.name + ' project demonstration';
      player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      player.allowFullscreen = true;
      player.referrerPolicy = 'strict-origin-when-cross-origin';
    } else {
      player = document.createElement('video'); player.src = mp4;
      player.controls = true; player.playsInline = true; player.autoplay = true;
      player.setAttribute('aria-label', project.name + ' project demonstration');
      player.addEventListener('error', () => {
        stage.replaceChildren(text('p', 'The demo could not load. Please try again later.'));
      });
    }
    stage.replaceChildren(player);
    player.focus();
  });
}
for (const project of content.projects) {
  const article = document.createElement('article');
  article.className = 'project'; article.dataset.category = project.category;
  const stage = document.createElement('div');
  stage.className = 'video-stage ' + (project.category === 'product' ? 'condux' : 'rag');
  stage.append(text('span', project.category === 'product' ? 'Condux' : 'Knowledge / AI', 'stage-name'));
  stage.append(text('span', project.stageLabel, 'stage-sub')); attachVideo(stage, project);
  const info = document.createElement('div');
  const meta = text('div', project.categoryLabel, 'project-meta');
  meta.append(text('span', project.status, 'status'));
  info.append(meta, text('h3', project.name), text('p', project.description, 'description'));
  for (const [heading, value] of [['My contribution', project.contribution], ['Engineering focus', project.focus]]) {
    const detail = document.createElement('p'); detail.className = 'detail';
    detail.append(text('strong', heading), document.createTextNode(value)); info.append(detail);
  }
  const tags = document.createElement('div'); tags.className = 'tags';
  for (const tag of project.tags) tags.append(text('span', tag)); info.append(tags);
  const href = safeLink(project.link);
  if (href) { const link = text('a', project.linkLabel || 'Project details ↗', 'project-link'); link.href = href; link.target = '_blank'; link.rel = 'noopener noreferrer'; info.append(link); }
  article.append(stage, info); container.append(article);
}
for (const button of document.querySelectorAll('[data-filter]')) {
  button.addEventListener('click', () => {
    for (const other of document.querySelectorAll('[data-filter]')) {
      const selected = other === button; other.classList.toggle('active', selected);
      other.setAttribute('aria-pressed', String(selected));
    }
    let visible = 0;
    for (const card of document.querySelectorAll('.project')) {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) visible++;
      // Pause media hidden by filtering.
      if (card.hidden) {
        const stage = card.querySelector('.video-stage');
        const project = content.projects.find(p => p.name === card.querySelector('h3').textContent);
        if (stage.querySelector('iframe, video')) {
          stage.replaceChildren(text('span', project.name, 'stage-name'));
          attachVideo(stage, project);
        }
      }
    }
    document.getElementById('filter-status').textContent = visible + ' projects shown';
  });
}
const actions = document.getElementById('contact-actions');
for (const [label, raw] of [['LinkedIn ↗', content.linkedIn], ['Download resume ↓', content.resume]]) {
  const href = safeLink(raw); if (!href) continue;
  const anchor = text('a', label, 'text-link'); anchor.href = href;
  anchor.target = '_blank'; anchor.rel = 'noopener noreferrer'; actions.append(anchor);
}
if (content.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.email)) {
  const anchor = text('a', 'Email me ↗', 'text-link'); anchor.href = 'mailto:' + content.email; actions.append(anchor);
}
document.getElementById('year').textContent = new Date().getFullYear();
