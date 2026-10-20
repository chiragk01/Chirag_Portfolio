# Chirag Kumar — AI & Automation Engineer Portfolio

A responsive engineering portfolio showcasing applied AI, enterprise workflow automation, Azure data engineering, and product development. Featured work includes Microsoft-engagement remediation workflows, an Azure Data Factory / Azure DevOps CI/CD walkthrough, a Databricks lakehouse proof of concept, the Condux white-label bus-ticketing product, and a developing enterprise knowledge assistant.

This repository hosts the public portfolio, not the source code of the client or application projects it describes. Demos are published only after reviewing them for sensitive details.

## Run locally

```bash
python -m http.server 8001 --directory dist
```

Open http://localhost:8001. No package installation or API keys required.

## Featured Azure data engineering walkthrough

**Customer Analytics Lakehouse** covers Azure Data Factory orchestration, Azure DevOps CI/CD concepts for Data Factory changes, and Databricks/PySpark Bronze–Silver–Gold transformations. The project's portfolio card is configured in `dist/content.js`. A separate **Azure Data Factory CI/CD with Azure DevOps** project card documents Git integration, repository configuration, service connections, variable groups and deployment pipeline setup. The approved professional-reviewed 5m18s recording is available locally but **has not yet been hosted or linked**, so the card correctly does not advertise a playable demo. The walkthrough is an engineering demonstration, not a claim that cloud deployment was independently verified.

## Add the actual demo videos

Edit `dist/content.js`. Projects without a published recording use `video: null`, and the site honestly displays that the demo will be added. Condux already has an MP4 configured. It does not display a fake play button.

For an unlisted YouTube video with embedding enabled:

```js
video: { type: 'youtube', id: 'YOUR_11_CHARACTER_VIDEO_ID' }
```

Replace the example string with the actual ID from your video URL. The video plays directly on the page. YouTube loads only after the visitor clicks Watch demo. An unlisted video can be shared by anyone with its link.

For a small, reviewed, compressed MP4:

```js
video: { type: 'mp4', src: 'assets/condux-demo.mp4' }
```

Place the file in `dist/assets/`. For larger videos, use dedicated video hosting rather than serving large files through a free website plan. Add captions to the hosted video.

## Contact and resume

Set `email`, `linkedIn`, and `resume` in `dist/content.js` to verified values. They are omitted from the interface while unset; the GitHub profile link works now. For a resume, put a sanitized PDF in `dist/assets/` and set `resume: 'assets/resume.pdf'`.

Application source repositories are not linked by default. The only default GitHub link is the owner's profile. Review every public claim and recording before sharing publicly.

## Deploy on Vercel

1. Import this GitHub repository into Vercel (or use its existing Vercel project).
2. Select Other for the framework, leave the build command empty, and set the output directory to `dist`.
3. Deploy from the `main` branch, using the appropriate Vercel plan.

`vercel.json` records the static output directory. No database, credentials, or backend are needed. A separate private Sites preview may also be created; its hosting identity is not required for Vercel.

## Files

- `dist/index.html`: content sections and accessible page structure.
- `dist/styles.css`: responsive design and reduced-motion support.
- `dist/content.js`: project descriptions, video/contact configuration.
- `dist/app.js`: safe DOM rendering, video playback, filtering.

## Verification

Run `node --check dist/app.js` and `node --check dist/content.js`. Browser checks cover desktop/mobile layout, project filtering, keyboard navigation, and video behavior with a test configuration. Condux's committed MP4 is configured for playback. The ADF/CI/CD demo requires uploading the approved reviewed MP4 to `dist/assets/adf-devops-professional-review.mp4` (or using a compatible hosted video URL) and then updating only the dedicated CI/CD project card’s `video` field. Do not publish the unredacted original.
