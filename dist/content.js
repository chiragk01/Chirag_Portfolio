// Edit this file to add your actual video, resume, and contact links.
// video: { type: 'youtube', id: 'YOUR_VIDEO_ID' }
// video: { type: 'mp4', src: 'assets/condux-demo.mp4' }
window.portfolioContent = {
  email: 'chiragkumar.rmdssoe.comp@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/chirag-kumar-b5818b265/',
  resume: 'assets/Chirag_AI.pdf',
  projects: [
    {
      name: 'Service 360 — AI Security Automation', category: 'ai', categoryLabel: 'Enterprise AI & automation',
      status: 'Enterprise use case', stageName: 'Security automation', stageLabel: 'FOUR WORKFLOWS · ONE PROJECT',
      description: 'Agentic security automation across three security KPIs, unified through multi-agent orchestration.',
      contribution: 'OSS: ~90% automation, days to 15–20 min. CodeQL: ~90% automation, 2–3 days to ~20 min. Vulnerability investigation: ~60–70% automation, days to 15–20 min.',
      focus: 'Multi-agent orchestration coordinates all three KPI workflows, handling up to 10 action items in 1–2 hours versus days or weeks manually. Figures are approximate project estimates.',
      tags: ['Agentic AI', 'Multi-Agent Orchestration', 'MCP', 'Azure DevOps', 'Security Automation'],
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
    },
    {
      name: 'Customer Analytics Lakehouse', category: 'data', categoryLabel: 'Data engineering',
      status: 'Learning / POC', stageName: 'Lakehouse / ETL',
      stageLabel: 'DATABRICKS · DATA FACTORY · DELTA',
      description: 'A data engineering proof of concept transforming raw customer and order data into curated analytics using Azure Databricks, PySpark, and Delta Lake.',
      contribution: 'Developed Bronze-to-Silver-to-Gold data transformations with PySpark and Delta Lake, including cleansing, deduplication, audit fields, and partitioned writes. ADF orchestrates customer, product, order, and order-item processing.',
      focus: 'Gold-layer analytics cover customer recency, frequency, and spend, segmentation, and product-pair metrics. A separate LLM orchestration POC explores generating PySpark notebooks and coordinating Databricks jobs. AI-driven extensions are exploratory; the current lakehouse is not presented as a deployed AI solution.',
      tags: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Delta Lake', 'ADLS'],
      video: null,
      link: null, linkLabel: null
    },
    {
      name: 'Azure Data Factory CI/CD with Azure DevOps', category: 'data', categoryLabel: 'Data engineering',
      status: 'Learning / POC', stageLabel: 'SOURCE CONTROL · CI/CD · DEPLOYMENT',
      description: 'A hands-on learning walkthrough of source-controlled Azure Data Factory development and CI/CD using Azure DevOps.',
      contribution: 'Demonstrated Data Factory Git integration and repository configuration, then walked through Azure DevOps service connections, variable groups, and deployment pipeline setup.',
      focus: 'Shows how ADF changes move from a development workflow toward controlled deployment. This is a demonstration of configuration and delivery concepts, not a claim of production deployment.',
      tags: ['Azure Data Factory', 'Azure DevOps', 'Git integration', 'CI/CD', 'Deployment pipelines'],
      video: { type: 'mp4', src: 'assets/adf-devops-professional-review.mp4' },
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
    }
  ]
};
