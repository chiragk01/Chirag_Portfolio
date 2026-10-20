# Chirag Kumar — AI Engineer portfolio

A responsive, buildless portfolio with inline project video players. This repository is separate from the applications it showcases. It does not contain their source code.

## Run locally

```bash
python -m http.server 8001 --directory dist
```

Open http://localhost:8001. No package installation or API keys required.

## Add the actual demo videos

Edit `dist/content.js`. Each project's `video` defaults to `null`; the site honestly displays that the demo will be added. It does not display a fake play button.

For an unlisted YouTube video with embedding enabled:

```js
video: { type: 'youtube', id: 'YOUR_11_CHARACTER_VIDEO_ID' }
```

Replace the example string with the actual ID from your video URL. The video plays directly on the page. YouTube loads only after the visitor clicks Watch demo. An unlisted video can be shared by anyone with its link.

For a small compressed MP4:

```js
video: { type: 'mp4', src: 'assets/condux-demo.mp4' }
```

Place the file in `dist/assets/`. For larger videos, use dedicated video hosting rather than serving large files through a free website plan. Add captions to the hosted video.

## Contact and resume

Set `email`, `linkedIn`, and `resume` in `dist/content.js` to verified values. They are omitted from the interface while unset; the GitHub profile link works now. For a resume, put a sanitized PDF in `dist/assets/` and set `resume: 'assets/resume.pdf'`.

Application source repositories are not linked by default. The only default GitHub link is the owner's profile. Review every public claim and recording before sharing publicly.

## Deploy on Vercel

1. Create a personal GitHub repository named `portfolio` and push these files.
2. Import that repository in Vercel.
3. Select Other for the framework, leave build command empty, and set output directory to `dist`.
4. Deploy using the free personal Hobby plan, subject to its current terms and limits.

`vercel.json` records the static output directory. No database, credentials, or backend are needed. A separate private Sites preview may also be created; its hosting identity is not required for Vercel.

## Files

- `dist/index.html`: content sections and accessible page structure.
- `dist/styles.css`: responsive design and reduced-motion support.
- `dist/content.js`: project descriptions, video/contact configuration.
- `dist/app.js`: safe DOM rendering, video playback, filtering.

## Verification

Run `node --check dist/app.js` and `node --check dist/content.js`. Browser checks cover desktop/mobile layout, project filtering, keyboard navigation, and video behavior with a test configuration. Real video playback requires the owner's actual video URL, which is not yet supplied.
