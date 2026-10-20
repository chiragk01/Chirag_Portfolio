// Edit this file to add your actual video, resume, and contact links.
// video: { type: 'youtube', id: 'YOUR_VIDEO_ID' }
// video: { type: 'mp4', src: 'assets/condux-demo.mp4' }
window.portfolioContent = {
  email: 'chiragkumar.rmdssoe.comp@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/chirag-kumar-b5818b265/',
  resume: 'assets/Chirag_AI.pdf',
  projects: [
    {
      name: 'Customer Analytics Lakehouse', category: 'data', categoryLabel: 'Data engineering',
      status: 'Learning / POC', stageName: 'Lakehouse / ETL',
      stageLabel: 'DATABRICKS · DATA FACTORY · DELTA',
      description: 'An Azure data engineering proof of concept combining ADF pipeline orchestration, Databricks/PySpark transformations, and an Azure DevOps CI/CD workflow for managing Data Factory changes.',
      contribution: 'Developed Bronze-to-Silver-to-Gold data transformations with PySpark and Delta Lake, including cleansing, deduplication, audit fields, and partitioned writes. ADF orchestrates customer, product, order, and order-item processing; the project demo walks through the ADF and Azure DevOps CI/CD workflow.',
      focus: 'Gold-layer analytics cover customer recency, frequency, and spend, segmentation, and product-pair metrics. A separate LLM orchestration POC explores generating PySpark notebooks and coordinating Databricks jobs. The CI/CD walkthrough illustrates the pipeline delivery process; this portfolio does not independently certify production deployment.',
      tags: ['Azure Data Factory', 'Azure DevOps CI/CD', 'Azure Databricks', 'PySpark', 'Delta Lake', 'ADLS'],
      video: null,
      link: null, linkLabel: null
    },

    {
      name: 'Condux', category: 'product', categoryLabel: 'Product engineering',
      status: 'In production', stageLabel: 'BUS TICKETING · WHITE LABEL',
      description: 'A bus-ticketing application with conductor and admin workflows, designed to support independently branded client applications.',
      contribution: 'Built the product workflows and developed the white-label approach for client-specific branding.',
      focus: 'Conductor and admin flows, independent branding, and ongoing product maintenance.',
      tags: ['Mobile application', 'Firebase', 'White-label architecture'],
      video: { type: 'mp4', src: 'assets/condux-demo.mp4' },
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
