// Edit this file to add your actual video, resume, and contact links.
// video: { type: 'youtube', id: 'YOUR_VIDEO_ID' }
// video: { type: 'mp4', src: 'assets/condux-demo.mp4' }
window.portfolioContent = {
  email: 'chiragkumar.rmdssoe.comp@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/chirag-kumar-b5818b265/',
  resume: null,
  projects: [
    {
      name: 'Condux', category: 'product', categoryLabel: 'Product engineering',
      status: 'In production', stageLabel: 'BUS TICKETING · WHITE LABEL',
      description: 'A bus-ticketing application with conductor and admin workflows, designed to support independently branded client applications.',
      contribution: 'Built the product workflows and developed the white-label approach for client-specific branding.',
      focus: 'Conductor and admin flows, independent branding, and ongoing product maintenance.',
      tags: ['Mobile application', 'Firebase', 'White-label architecture'],
      video: null,
      link: null, linkLabel: null
    },
    {
      name: 'Enterprise Knowledge Assistant', category: 'ai', categoryLabel: 'AI & knowledge systems',
      status: 'In development', stageLabel: 'RETRIEVAL · EVIDENCE · CITATIONS',
      description: 'A local-first foundation for an enterprise knowledge assistant, using synthetic technical documents to make retrieved evidence traceable.',
      contribution: 'Developing ingestion, persistent indexing, permission-filtered retrieval, API endpoints, and an evidence-viewing interface.',
      focus: 'Current: BM25 and source citations. Planned: LLM generation, embeddings, LangGraph workflows, and Azure integration.',
      tags: ['Python', 'FastAPI', 'SQLite', 'BM25'],
      video: null,
      link: null, linkLabel: null
    }
  ]
};
