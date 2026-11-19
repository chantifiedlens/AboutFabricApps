export const DOCS = {
  fabricOverview: 'https://learn.microsoft.com/en-us/fabric/apps/overview',
  fabricCreate: 'https://learn.microsoft.com/en-us/fabric/apps/create-app',
  fabricLicensing: 'https://learn.microsoft.com/en-us/fabric/apps/licensing',
  fabricPricing: 'https://learn.microsoft.com/en-us/fabric/apps/pricing',
  fabricCapacityMetrics: 'https://learn.microsoft.com/en-us/fabric/enterprise/metrics-app',
  fabricPauseResume: 'https://learn.microsoft.com/en-us/fabric/enterprise/pause-resume',
  fabricCapacityPricing: 'https://azure.microsoft.com/en-us/pricing/details/microsoft-fabric/',
  fabricLicenses: 'https://learn.microsoft.com/en-us/fabric/enterprise/licenses',
  powerBiPricing: 'https://www.microsoft.com/en-us/power-platform/products/power-bi/pricing',
  powerBiDesktopDownload: 'https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-get-the-desktop',
  copilotPlans: 'https://github.com/features/copilot/plans',
  vscodePricing: 'https://code.visualstudio.com/License',
  rayfinLicense: 'https://github.com/microsoft/rayfin/blob/main/LICENSE',
  rayfinPricing: 'https://rayfin.ai/docs/deploy/pricing',
  fabricVsCode: 'https://learn.microsoft.com/en-us/fabric/apps/create-app-with-vs-code',
  fabricCli: 'https://learn.microsoft.com/en-us/fabric/apps/create-app-with-cli',
  fabricGit: 'https://learn.microsoft.com/en-us/fabric/apps/source-control',
  fabricGitActions: 'https://learn.microsoft.com/en-us/fabric/apps/deploy-github-actions',
  fabricEnvironments: 'https://learn.microsoft.com/en-us/fabric/apps/dev-prod-workflow',
  fabricDeploy: 'https://learn.microsoft.com/en-us/fabric/apps/deploy-app',
  powerBiDesktopApps: 'https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-for-apps/overview',
  powerBiSetup: 'https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-for-apps/setup',
  powerBiCreate: 'https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-for-apps/create-app',
  powerBiPublish: 'https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-for-apps/publish-app',
  rayfinHome: 'https://rayfin.ai/docs',
  quickstart: 'https://rayfin.ai/docs/start/quickstart',
  installation: 'https://rayfin.ai/docs/start/installation',
  localDevelopment: 'https://rayfin.ai/docs/start/develop-locally',
  projectStructure: 'https://rayfin.ai/docs/start/project-structure',
  deploy: 'https://rayfin.ai/docs/start/deploy-to-fabric',
  data: 'https://rayfin.ai/docs/data',
  auth: 'https://rayfin.ai/docs/auth',
  functions: 'https://rayfin.ai/docs/functions',
  connectors: 'https://rayfin.ai/docs/connectors',
  storage: 'https://rayfin.ai/docs/storage',
  hosting: 'https://rayfin.ai/docs/hosting',
  limitations: 'https://rayfin.ai/docs/reference/known-limitations',
  cli: 'https://rayfin.ai/docs/reference/cli',
  cliInit: 'https://rayfin.ai/docs/reference/cli/init',
  cliDev: 'https://rayfin.ai/docs/reference/cli/dev',
  cliUp: 'https://rayfin.ai/docs/reference/cli/up',
  cliLogin: 'https://rayfin.ai/docs/reference/cli/login',
  cliSecret: 'https://rayfin.ai/docs/reference/cli/secret',
  cliFunctions: 'https://rayfin.ai/docs/reference/cli/functions',
  cliConnector: 'https://rayfin.ai/docs/reference/cli/connector',
  cliEnv: 'https://rayfin.ai/docs/reference/cli/env',
  cliStorage: 'https://rayfin.ai/docs/reference/cli/storage',
  cliTelemetry: 'https://rayfin.ai/docs/reference/cli/telemetry',
  fabricatorDocs: 'https://spatney.github.io/rayfin-fabricator/docs',
  fabricatorFaq: 'https://github.com/spatney/rayfin-fabricator/blob/master/website/content/docs/reference/faq.mdx',
  fabricatorInstall: 'https://spatney.github.io/rayfin-fabricator/docs/start/install',
  fabricatorRequirements: 'https://spatney.github.io/rayfin-fabricator/docs/reference/requirements',
  fabricatorFirstApp: 'https://spatney.github.io/rayfin-fabricator/docs/start/first-app',
  fabricatorTour: 'https://spatney.github.io/rayfin-fabricator/docs/start/tour',
  fabricatorChat: 'https://spatney.github.io/rayfin-fabricator/docs/build/chat',
  fabricatorPreview: 'https://spatney.github.io/rayfin-fabricator/docs/build/preview',
  fabricatorCode: 'https://spatney.github.io/rayfin-fabricator/docs/build/code-and-history',
  fabricatorDeploy: 'https://spatney.github.io/rayfin-fabricator/docs/ship/deploy',
  fabricatorShare: 'https://spatney.github.io/rayfin-fabricator/docs/ship/share',
  fabricatorAdvisor: 'https://spatney.github.io/rayfin-fabricator/docs/ship/advisor',
  fabricatorHowItWorks: 'https://spatney.github.io/rayfin-fabricator/docs/reference/how-it-works',
  fabricatorPrivacy: 'https://spatney.github.io/rayfin-fabricator/docs/reference/privacy',
  fabricatorTeam: 'https://spatney.github.io/rayfin-fabricator/docs/team',
  fabricatorTroubleshooting: 'https://spatney.github.io/rayfin-fabricator/docs/troubleshooting',
} satisfies Record<string, string>;

export const FABRIC_ECOSYSTEM = [
  {
    id: 'fabric',
    category: 'PLATFORM',
    label: 'Microsoft Fabric',
    icon: 'FABRIC',
    description:
      'The Microsoft SaaS analytics platform. It supplies workspaces, identity and governance boundaries, capacity, and the managed services that host a deployed Fabric App.',
    relationship:
      'The platform and service operator; app services consume the applicable workspace capacity.',
    doc: DOCS.fabricOverview,
    docLabel: 'Fabric Apps architecture',
  },
  {
    id: 'apps',
    category: 'APPLICATION CAPABILITY',
    label: 'Fabric Apps',
    icon: 'APP',
    description:
      'A Fabric capability for building interactive, data-driven applications with a frontend and configured backend services such as data APIs, Functions, storage, and static hosting.',
    relationship:
      'Microsoft documents Fabric Apps as built on the Rayfin SDK; the app is a managed Fabric item, not a report or notebook.',
    doc: DOCS.fabricOverview,
    docLabel: 'What is Fabric Apps?',
  },
  {
    id: 'rayfin',
    category: 'SDK / FRAMEWORK',
    label: 'Rayfin SDK',
    icon: 'SDK',
    description:
      'TypeScript packages for declaring data models and permissions, composing a typed client, and using configured app services.',
    relationship:
      'The CLI reads code-owned metadata to generate/configure supported backend resources; the client calls those services from the app.',
    doc: 'https://learn.microsoft.com/en-us/javascript/api/fabric-apps-sdk-javascript/rayfin-overview',
    docLabel: 'Rayfin SDK overview',
  },
  {
    id: 'cli',
    category: 'PROJECT / DEPLOYMENT TOOL',
    label: 'Rayfin CLI',
    icon: 'CLI',
    description:
      'Project tooling to scaffold, run development workflows, apply configuration/schema, and deploy or inspect Rayfin apps.',
    relationship:
      'The CLI runs on the developer or automation runner; Microsoft Fabric hosts the resulting managed app and services.',
    doc: DOCS.cli,
    docLabel: 'Rayfin CLI reference',
  },
  {
    id: 'authoring',
    category: 'AUTHORING TOOLS',
    label: 'VS Code · Power BI Desktop for Apps',
    icon: 'IDE',
    description:
      'VS Code supports direct project-source editing in the Rayfin workflow. Power BI Desktop for Apps is a separate Microsoft preview authoring experience centered on chat, service semantic models, local preview, and publishing.',
    relationship:
      'Authoring experiences; neither is the Fabric hosting platform. Power BI Desktop for Apps publishing requires its documented eligible workspace path.',
    doc: DOCS.powerBiDesktopApps,
    docLabel: 'Power BI Desktop for Apps',
  },
  {
    id: 'community',
    category: 'COMMUNITY WORKBENCH',
    label: 'Fabricator',
    icon: 'WORKBENCH',
    description:
      'A personal community desktop project that combines Copilot-assisted Rayfin development, local preview, Git history, and publish controls.',
    relationship:
      'Optional and independent of Microsoft; it invokes the project’s Rayfin tooling and does not replace Rayfin or Fabric.',
    doc: DOCS.fabricatorDocs,
    docLabel: 'Fabricator documentation',
  },
] as const;

export type LicenseScenarioId =
  | 'learn'
  | 'code'
  | 'desktop'
  | 'publish'
  | 'share'
  | 'production';

export const LICENSE_SCENARIOS: {
  id: LicenseScenarioId;
  label: string;
  headline: string;
  details: string[];
  doc: string;
  docLabel: string;
}[] = [
  {
    id: 'learn',
    label: 'Learn the concepts',
    headline: 'No Fabric subscription is needed just to study.',
    details: [
      'Read the Microsoft, Rayfin, and tool documentation without creating a workspace.',
      'Fabricator can install and run local projects on this computer; its AI chat still requires GitHub Copilot access.',
      'Power BI Desktop is a free download, but Power BI Desktop for Apps also has preview, account, tenant, and Copilot requirements.',
    ],
    doc: DOCS.fabricatorRequirements,
    docLabel: 'Fabricator system requirements',
  },
  {
    id: 'code',
    label: 'Develop locally',
    headline: 'Local editing is not the same as free hosted Fabric usage.',
    details: [
      'VS Code and Git can be used without a separate license charge; Rayfin has no separate Rayfin-specific charge under its documented terms.',
      '`rayfin dev` uses a Fabric backend by default and can consume capacity; its preview Docker provider offers a different local-backend option.',
      'Fabricator can run the app and backend locally before publish, but Copilot chat uses your GitHub Copilot entitlement.',
    ],
    doc: DOCS.localDevelopment,
    docLabel: 'Rayfin local development',
  },
  {
    id: 'desktop',
    label: 'Use Power BI Desktop for Apps',
    headline: 'The desktop authoring preview has its own account and model requirements.',
    details: [
      'Use Windows 11 and Power BI Desktop November 2026 or later; sign in to Power BI and GitHub with Copilot access.',
      'Connect service-hosted semantic models with Build permission. Model access and the licensing of its workspace remain separate from the app item.',
      'Publishing from this desktop authoring path currently targets a workspace on eligible Fabric or Power BI Premium capacity.',
    ],
    doc: DOCS.powerBiSetup,
    docLabel: 'Desktop for Apps setup',
  },
  {
    id: 'publish',
    label: 'Create or publish an app',
    headline: 'Choose between the Pro portal experience and capacity-backed publishing.',
    details: [
      'Power BI Pro can create and publish apps from the Power BI portal on Microsoft-managed capacity, without assigning Fabric capacity, subject to Pro-path limits.',
      'The Fabric portal capacity path uses a Fabric (Free or paid) user license plus workspace capacity: Fabric F SKU, active trial, or existing Power BI Premium P SKU with Fabric enabled.',
      'Rayfin CLI and Fabricator publishing, and Power BI Desktop for Apps publishing, have capacity prerequisites. A Power BI Pro or PPU license alone is not Fabric capacity.',
    ],
    doc: DOCS.fabricLicensing,
    docLabel: 'Compare Fabric Apps licensing options',
  },
  {
    id: 'share',
    label: 'Share an app',
    headline: 'App access and data-source access are separate checks.',
    details: [
      'For a supported capacity-backed Fabric App item, same-tenant users with a Fabric license (including Fabric Free) can use the item when given the required item permission.',
      'Recipients do not buy a separate capacity or Pro license solely for that capacity-backed app item; the workspace capacity funds its app services.',
      'Delegated semantic-model access still requires the source permissions and applicable Power BI entitlement for each user. Sharing the app does not grant model access.',
    ],
    doc: DOCS.fabricLicensing,
    docLabel: 'Sharing and dependency licensing',
  },
  {
    id: 'production',
    label: 'Plan production',
    headline: 'Size and monitor the workload from real usage—not from the app label.',
    details: [
      'Budget for the workspace capacity and any connected data-source capacity, storage, and other services your design uses.',
      'App SQL queries/storage, GraphQL requests, Functions, and OneLake static-hosting operations can contribute to Fabric capacity usage.',
      'Track actual consumption with Fabric Capacity Metrics. Pause/resume can reduce compute billing while idle, but makes assigned content unavailable until resumed and does not mean every storage/overage charge disappears.',
    ],
    doc: DOCS.fabricPricing,
    docLabel: 'Fabric Apps capacity pricing',
  },
];

export const COST_CATEGORIES = [
  {
    owner: 'MICROSOFT FABRIC / CAPACITY OWNER',
    label: 'Capacity and services',
    description:
      'F-SKU pay-as-you-go or reservation, eligible existing P capacity, or trial. Capacity-backed apps draw CUs from the assigned workspace capacity; connected services can have separate consumption.',
    icon: 'CAPACITY',
  },
  {
    owner: 'DEVELOPER / ORGANIZATION',
    label: 'Authoring and AI accounts',
    description:
      'GitHub Copilot plan or included access for AI-assisted authoring; Power BI and model permissions for their respective scenarios. Plan allowances and terms can change.',
    icon: 'AI',
  },
  {
    owner: 'TOOL PROVIDER / ORGANIZATION TERMS',
    label: 'Development software',
    description:
      'VS Code, Git, and Power BI Desktop are available at no software charge under their current terms. Check organizational policies and any associated cloud service or subscription separately.',
    icon: 'TOOLS',
  },
  {
    owner: 'NO SEPARATE RAYFIN METER',
    label: 'Rayfin and Fabricator',
    description:
      'Rayfin has no separate Rayfin-specific charge; the underlying Fabric services consume capacity. Fabricator is free and MIT-licensed; its Copilot access and Fabric hosting are separate.',
    icon: 'FRAMEWORK',
  },
] as const;

export type BuildApproachId =
  | 'fabric'
  | 'powerbi'
  | 'local'
  | 'git'
  | 'automation'
  | 'fabricator';

type BuildJourneyStep = {
  label: string;
  title: string;
  location: string;
  actor: string;
  explanation: string;
  behindScenes: string;
  pitfall: string;
  command?: string;
  resources?: string;
  image?: { src: string; alt: string; caption: string };
  doc: string;
  docLabel: string;
};

type BuildApproach = {
  id: BuildApproachId;
  label: string;
  title: string;
  symbol: string;
  summary: string;
  suitableFor: string;
  advantages: string[];
  considerations: string[];
  prerequisites: string[];
  steps: BuildJourneyStep[];
  docs: { label: string; url: string }[];
  relatedApproaches?: BuildApproachId[];
};

export const BUILD_APPROACHES: readonly BuildApproach[] = [
  {
    id: 'fabric',
    label: 'Fabric workspace',
    title: 'Create and manage the app in Fabric',
    symbol: 'FABRIC',
    summary:
      'Use Fabric to create the App item, manage access, connect supported Git integration, and promote its deployable definition with Fabric deployment pipelines.',
    suitableFor:
      'Workspace owners, app operators, and teams standardizing review and release across Fabric workspaces.',
    advantages: [
      'Native workspace permissions and app management',
      'Fabric Git integration and deployment pipeline support',
      'Stage-based review before production',
    ],
    considerations: [
      'The Fabric portal creates and manages the item; it is not the project source-code editor.',
      'Use VS Code or another local tool to edit source, then build/deploy it into the workspace.',
      'Deployment pipelines promote the app definition; they do not compile your source project.',
    ],
    prerequisites: [
      'Fabric Apps enabled by a tenant administrator and the author’s chosen creation/billing path: Power BI Pro in a Pro workspace, or Fabric license plus a trial/paid Fabric capacity workspace.',
      'Workspace permissions to create and manage the item; Git connection requires workspace Admin.',
      'For a capacity-backed app, assign supported Fabric (F), trial, or existing Power BI Premium (P) capacity with Fabric enabled. Power BI Pro or PPU by itself is not Fabric capacity.',
    ],
    steps: [
      {
        label: 'Prepare',
        title: 'Choose the workspace and licensing path',
        location: 'Fabric portal',
        actor: 'You + Fabric admin',
        explanation:
          'Confirm that the Fabric Apps workload is enabled, the tenant/region is supported, and the workspace matches the licensing option you plan to use.',
        behindScenes:
          'The Fabric app is a managed Fabric item. Fabric owns the workspace and item permissions; Rayfin or another supported deployment route supplies the app definition.',
        pitfall:
          'Do not assume Pro and capacity-backed paths have identical limits. Rayfin CLI deployment documentation currently lists usable Fabric capacity as a prerequisite.',
        doc: DOCS.fabricOverview,
        docLabel: 'Fabric Apps prerequisites',
      },
      {
        label: 'Create item',
        title: 'Create the Fabric App item',
        location: 'Fabric workspace',
        actor: 'Fabric portal',
        explanation:
          'In the workspace, choose New item, search for App (preview), name it, and create it. The VS Code Fabric extension can also create the item and open its Get Started instructions.',
        behindScenes:
          'Creating the item establishes the workspace destination. It does not create a local source-code project or publish a frontend by itself.',
        pitfall:
          'For a VS Code setup, use the app-specific command from Get Started so the local project targets the intended app and workspace.',
        doc: DOCS.fabricCreate,
        docLabel: 'Create an app from the portal',
      },
      {
        label: 'Manage & test',
        title: 'Manage access and prepare a release',
        location: 'Fabric portal + your source tools',
        actor: 'App owner + developers',
        explanation:
          'Use the portal for item properties, workspace access, and app permissions. You can apply an incoming committed app definition through Fabric Source control and test it in that workspace. Edit the project source in a local tool; Microsoft documents VS Code/Rayfin for that coding loop.',
        behindScenes:
          'Users need Run and interact permission to use a deployed app. Editors who deploy need Edit permission on the item. These app permissions are separate from source-repository permissions.',
        pitfall:
          'There is no documented in-portal editor for the app project source. Editing child database schema directly in the portal is not the code-owned schema workflow.',
        doc: DOCS.fabricVsCode,
        docLabel: 'VS Code development workflow',
      },
      {
        label: 'Promote',
        title: 'Promote the app definition between stages',
        location: 'Fabric deployment pipeline',
        actor: 'Fabric deployment pipelines',
        explanation:
          'Fabric lists Fabric Apps as supported pipeline items. Pair the app with its target-stage item and deploy the reviewed definition from development to test or production.',
        behindScenes:
          'The pipeline copies the deployable app definition; it does not build your original source tree. App-specific Git documentation calls out environment settings to review after deployment.',
        pitfall:
          'The Fabric Apps deployment-pipeline UI is documented as a preview. Secret values, database rows, uploaded files, and user accounts do not travel with the definition; re-enter secrets and verify environment-specific connectors and redirect URIs in each target.',
        doc: DOCS.fabricGit,
        docLabel: 'Fabric Apps Git and pipeline lifecycle',
      },
    ],
    docs: [
      { label: 'Overview and prerequisites', url: DOCS.fabricOverview },
      { label: 'Create an app', url: DOCS.fabricCreate },
      { label: 'VS Code extension', url: DOCS.fabricVsCode },
      { label: 'Deployment pipelines', url: 'https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines' },
    ],
    relatedApproaches: ['powerbi', 'git'],
  },
  {
    id: 'powerbi',
    label: 'Power BI Desktop for Apps',
    title: 'Create apps with Power BI Desktop for Apps',
    symbol: 'MICROSOFT PREVIEW',
    summary:
      'Use Microsoft’s separate Power BI Desktop for Apps experience to describe a Fabric app in chat, connect service-hosted semantic models, refine a local preview, and publish to a Fabric workspace—without setting up the SDK/CLI workflow.',
    suitableFor:
      'Power BI authors and data analysts who want to shape a custom app around existing semantic models without managing a code-first toolchain.',
    advantages: [
      'Prompt-driven app creation and refinement in a familiar Power BI workflow',
      'Connects one or more existing Power BI service semantic models',
      'Local project and preview with a direct publish/update path',
    ],
    considerations: [
      'This is a Microsoft preview and currently requires Windows 11 and Power BI Desktop November 2026 or later.',
      'It does not create or modify semantic models; local preview is limited to service semantic models and does not support write-back.',
      'Publishing currently requires a Fabric-capacity workspace; Pro workspace publishing is not yet available.',
    ],
    prerequisites: [
      'Windows 11 and Power BI Desktop, November 2026 version or later.',
      'Power BI sign-in, a GitHub account with GitHub Copilot license, and both Power BI Desktop for Apps and Fabric Apps tenant access enabled.',
      'Build permission on each service-hosted semantic model you connect; recipients need Read access to those models as well as app permission.',
    ],
    steps: [
      {
        label: 'Understand',
        title: 'Choose a conversational, model-connected workflow',
        location: 'Power BI Desktop for Apps (preview)',
        actor: 'You + GitHub Copilot',
        explanation:
          'Describe the people using the app, the tasks they need to do, and how information should be presented. The separate desktop app generates a Fabric App from the data app template, lets you preview and refine it locally, and publishes it to a Fabric workspace.',
        behindScenes:
          'This route removes the need to set up the SDK and CLI developer workflow. It uses existing Power BI service semantic models as data sources; it is not the conventional Power BI report authoring canvas and does not turn report pages or visuals into an app.',
        pitfall:
          'Treat this as a preview experience whose features can change. OneDrive locations are not currently supported for local projects. If you need code-first flexibility or unsupported data connections, compare the VS Code + Rayfin journey.',
        doc: DOCS.powerBiDesktopApps,
        docLabel: 'What is Power BI Desktop for Apps?',
        image: {
          src: 'https://learn.microsoft.com/en-us/power-bi/create-reports/media/desktop-for-apps/apps-adventure-works-workspace-layout-v4.png',
          alt: 'Microsoft documentation screenshot showing chat beside a Fabric app preview in Power BI Desktop for Apps.',
          caption:
            'Microsoft Learn screenshot: chat and the local app pane in Power BI Desktop for Apps.',
        },
      },
      {
        label: 'Prepare',
        title: 'Meet the preview, account, and model requirements',
        location: 'Windows 11 + Power BI service',
        actor: 'You + Fabric administrator',
        explanation:
          'Install Power BI Desktop November 2026 or later. Confirm tenant access to both Power BI Desktop for Apps and Fabric Apps, sign in to Power BI and GitHub, and request Build permission on any semantic model you plan to use.',
        behindScenes:
          'The entry points in Power BI Desktop are hidden until its Power BI Desktop for Apps preview feature is enabled. Both tenant settings must allow your account; a model connected to the app must be hosted in the Power BI service.',
        pitfall:
          'Local semantic models are not supported. The documented host OS is Windows 11; do not assume macOS or older Power BI Desktop versions are supported.',
        doc: DOCS.powerBiSetup,
        docLabel: 'Setup and prerequisites',
      },
      {
        label: 'Start & connect',
        title: 'Open the app builder and choose its data context',
        location: 'Power BI Desktop → Report app',
        actor: 'You',
        explanation:
          'Enable the preview under Settings → Preview features, then choose New → Report app or New report app on an open report’s Home ribbon. You can also launch the installed app directly. Add an existing service semantic model with Add content → Get data.',
        behindScenes:
          'The start-page route opens without a semantic model. From an open report, a live connection to a service model can carry its context directly; for Import or DirectQuery, you can publish the report/model first or open without publishing. Launching an already-running app does not automatically attach the report model.',
        pitfall:
          'Using a report’s semantic model does not convert its report pages or visuals into app pages. Check that the intended model is attached before prompting.',
        doc: DOCS.powerBiCreate,
        docLabel: 'Open the app builder and connect data',
      },
      {
        label: 'Generate',
        title: 'Describe the app and review the generated project',
        location: 'Chat + local app project',
        actor: 'You + app-building agent',
        explanation:
          'Set the project name and local folder, then prompt for the app’s audience, tasks, data, and interactions. Review the app in the adjacent local preview and send focused follow-up requests to refine it.',
        behindScenes:
          'Power BI Desktop for Apps updates the local project files as you work; there is no separate save step. You can reopen that local project later. AI model and agent-mode controls are part of the chat experience.',
        pitfall:
          'Keep the local project folder so you can continue editing. If the builder was already open when you launched it from a report, explicitly attach the model in chat.',
        doc: DOCS.powerBiCreate,
        docLabel: 'Create and refine an app',
      },
      {
        label: 'Edit & test',
        title: 'Refine appearance and test the local experience',
        location: 'App pane: View / Edit',
        actor: 'You',
        explanation:
          'Use View to try the app’s filters, buttons, and navigation. In Edit mode, adjust supported visual design properties such as theme, fonts, colors, and spacing; select static text or pin an element as chat context. Undo and Redo are available for changes.',
        behindScenes:
          'The preview runs locally and can read connected Power BI service semantic models. The app pane also offers Data, Refresh, Publish, and an optional VS Code entry point for the local project.',
        pitfall:
          'Local preview currently supports semantic-model data only—not other data sources, database connections, or write-back. Check displayed data, formatting, controls, and behavior before publishing.',
        doc: DOCS.powerBiCreate,
        docLabel: 'Edit and validate the app',
      },
      {
        label: 'Publish',
        title: 'Publish or update the app, then verify access',
        location: 'Local project → Fabric workspace',
        actor: 'Power BI Desktop for Apps + Fabric',
        explanation:
          'Choose Publish or Publish as and select a workspace on Fabric capacity. After publishing, open the success link or View in Fabric and verify the intended changes. Reopen the local project for later edits; Publish updates its existing deployment, while Publish as lets you choose a destination.',
        behindScenes:
          'The first publish creates the app in the selected workspace. Recipients need app permission and Read permission on every connected semantic model; app sharing alone does not grant model access. Manage sensitivity labels and rename a published app in the Fabric portal.',
        pitfall:
          'Publishing to Pro workspaces is not yet available. Workspace access, Fabric capacity, and model permissions must be checked separately; local preview is not proof that publishing or recipient access succeeded.',
        doc: DOCS.powerBiPublish,
        docLabel: 'Publish, update, and manage access',
      },
    ],
    docs: [
      { label: 'Overview and limitations', url: DOCS.powerBiDesktopApps },
      { label: 'Setup requirements', url: DOCS.powerBiSetup },
      { label: 'Create and edit', url: DOCS.powerBiCreate },
      { label: 'Publish and manage access', url: DOCS.powerBiPublish },
    ],
    relatedApproaches: ['local', 'fabric', 'automation'],
  },
  {
    id: 'local',
    label: 'VS Code + Rayfin',
    title: 'Develop locally with VS Code',
    symbol: 'CODE',
    summary:
      'Edit the project on your machine, run the frontend locally against a Fabric backend, and deliberately publish with the Rayfin CLI.',
    suitableFor:
      'Developers who want an IDE, local UI iteration, code review, and explicit control over when the hosted app is updated.',
    advantages: [
      'Fast local source editing and preview',
      'Rayfin applies configured backend settings and schema',
      'Separate local development from production publishing',
    ],
    considerations: [
      '`rayfin dev` keeps the backend in Fabric; it is not a fully local stack.',
      '`rayfin dev` does not publish static frontend assets.',
      'Review workspace/item targets before every deploy.',
    ],
    prerequisites: [
      'VS Code and optionally the Microsoft Fabric extension; Node.js/npm and the project dependencies.',
      'Fabric Apps enabled, a signed-in Fabric account, and a workspace where you can create or edit the app.',
      'To publish the Rayfin app, a workspace on usable Fabric capacity is required; development can use a Fabric backend or supported local services.',
      'This learning project requires Node.js 22.13 or later; the Microsoft quickstart lists Node.js 20 or later.',
    ],
    steps: [
      {
        label: 'Set up',
        title: 'Create or open the right app project',
        location: 'VS Code + Fabric workspace',
        actor: 'You + Fabric extension',
        explanation:
          'Create an App item in Fabric or VS Code, then use its Get Started command to scaffold the linked project. For a new CLI-only project, Rayfin can create the item on first deploy; `rayfin init` adds Rayfin to an existing codebase.',
        behindScenes:
          'Scaffolding creates local source and configuration. It is distinct from provisioning the hosted item; first `rayfin up` creates the item when one is not already recorded. The Microsoft VS Code quickstart runs `rayfin up` before starting local development, while the Rayfin CLI workflow also supports developing locally before the first publish.',
        pitfall:
          'Do not use a generic scaffold command when an existing app item is intended—start from its Get Started instructions or carefully target the correct workspace/item.',
        command: 'npm create @microsoft/rayfin@latest -- my-app --workspace <workspace-name>',
        doc: DOCS.fabricVsCode,
        docLabel: 'Create an app with VS Code',
      },
      {
        label: 'Sign in',
        title: 'Authenticate and start the local loop',
        location: 'Your machine + Fabric backend',
        actor: 'Rayfin CLI',
        explanation:
          'Sign in with Microsoft Entra ID, then run the template’s `npm run dev` script. In Rayfin templates it invokes `rayfin dev` and starts the local frontend.',
        behindScenes:
          '`rayfin dev` provisions or reuses a Fabric backend, syncs configured runtime settings and schema, emits local frontend configuration, and starts enabled local Functions. For the Microsoft VS Code quickstart, run the initial `rayfin up` before `npm run dev`; in the CLI-first workflow, you can start `rayfin dev` first and publish later with `rayfin up`. Frontend source remains on your machine.',
        pitfall:
          'A successful local page does not mean static hosting was updated. The Fabric backend is remote, and local API requests are routed to it.',
        command: 'npx rayfin login\nnpx rayfin up --workspace <dev-workspace>\nnpm run dev',
        doc: DOCS.localDevelopment,
        docLabel: 'Rayfin local development',
      },
      {
        label: 'Edit & verify',
        title: 'Change source and test against development',
        location: 'VS Code → local browser → Fabric backend',
        actor: 'You + Rayfin dev adapter',
        explanation:
          'Edit the project source, use the local browser preview, and validate behavior against the selected development backend. Use a development workspace rather than experimenting against production.',
        behindScenes:
          'The Vite local-development adapter routes SDK calls from the local origin to the Fabric backend. Rayfin writes generated local environment values; keep generated env/config files and credentials out of source control.',
        pitfall:
          'Restart `npm run dev` after configuration/schema changes that Rayfin says require a restart. Avoid committing secret values or treating generated deployment metadata as source.',
        command: 'npm run dev',
        doc: DOCS.localDevelopment,
        docLabel: 'Local development behavior',
      },
      {
        label: 'Deploy & verify',
        title: 'Publish an update only when it is ready',
        location: 'Your machine → target Fabric workspace',
        actor: 'Rayfin CLI + Fabric',
        explanation:
          'Run `npx rayfin up` to build and deploy configured services. The first deploy creates a Fabric App item if needed; later deploys update the recorded item. Pass `--workspace` when deliberately targeting another workspace.',
        behindScenes:
          'Rayfin validates configuration, syncs settings/schema, builds and uploads enabled static content, deploys enabled Functions, records the deployment target, and prints status/hosting details.',
        pitfall:
          'Use `--dry-run` to inspect a plan before a production deploy. `--force` can allow destructive schema changes; do not add it casually. Check `rayfin up status` after publishing.',
        command: 'npx rayfin up --workspace <dev-workspace>\nnpx rayfin up status',
        doc: DOCS.fabricDeploy,
        docLabel: 'Deploy and update an app',
      },
    ],
    docs: [
      { label: 'VS Code quickstart', url: DOCS.fabricVsCode },
      { label: 'Rayfin CLI quickstart', url: DOCS.fabricCli },
      { label: 'Local development', url: DOCS.localDevelopment },
      { label: 'Deploy/update details', url: DOCS.fabricDeploy },
    ],
    relatedApproaches: ['fabricator', 'git', 'automation'],
  },
  {
    id: 'git',
    label: 'Git + environments',
    title: 'Review and promote with Git',
    symbol: 'GIT',
    summary:
      'Use Fabric Git integration for the deployable app definition, keep the editable project source in your repository, and promote the Fabric item through supported pipeline stages.',
    suitableFor:
      'Teams that need branching, reviews, recoverable app definitions, and separate development, test, and production workspaces.',
    advantages: [
      'Workspace-level Git integration supports Azure DevOps, GitHub, and GitHub Enterprise',
      'Explicit commit/apply steps make sync reviewable',
      'Fabric deployment pipelines support Fabric App items',
    ],
    considerations: [
      'Git integration is workspace-level and requires workspace Admin to connect.',
      'Fabric sync is not automatic after the initial connection.',
      'The exported app definition is not the complete source project or a data backup.',
    ],
    prerequisites: [
      'A deployed Fabric app in a workspace on Fabric capacity.',
      'Workspace Admin role, enabled Fabric Git integration, and access to Azure DevOps, GitHub, or GitHub Enterprise (cloud).',
      'Distinct workspaces/stages and environment-specific settings for each release target.',
    ],
    steps: [
      {
        label: 'Connect',
        title: 'Connect the workspace to a repository branch',
        location: 'Fabric workspace settings',
        actor: 'Fabric Git integration',
        explanation:
          'An Admin connects the workspace to Azure DevOps or GitHub, chooses a branch and folder, and runs the initial sync. Git is connected to the workspace, not to an individual app.',
        behindScenes:
          'The initial sync can commit supported workspace items including the Fabric App definition. Later workspace and Git changes are presented for explicit commit or apply.',
        pitfall:
          'Git providers are cloud-based in the documented Fabric integration. Check organization Git settings and required workspace/repository permissions first.',
        doc: DOCS.fabricGit,
        docLabel: 'Configure Fabric Apps Git integration',
      },
      {
        label: 'Review',
        title: 'Review app-definition changes before syncing',
        location: 'Local source repo + Fabric Source control',
        actor: 'Developers + reviewers',
        explanation:
          'Keep editable source files in ordinary Git. Fabric Git integration stores the deployed definition (such as `rayfin.yml` and a built `static-app.zip`), not your full frontend source tree.',
        behindScenes:
          'Commit workspace definition changes to Git or apply incoming Git changes to the workspace from Fabric Source control. Changes are not silently synchronized.',
        pitfall:
          'The definition omits database rows, uploaded Storage objects, user accounts, and secret values. Keep source code separately versioned and never commit credentials.',
        doc: DOCS.fabricGit,
        docLabel: 'App structure and sync behavior',
      },
      {
        label: 'Branch',
        title: 'Isolate work and keep targets distinct',
        location: 'Git provider + Fabric workspaces',
        actor: 'Your team',
        explanation:
          'Use repository branches and review workflows for source changes. Connect each Fabric workspace to the intended branch/folder and validate the item in a non-production workspace before release.',
        behindScenes:
          'A Fabric workspace connects to one branch/folder at a time. Branching and workspace assignment are explicit lifecycle decisions, not automatic item deployment.',
        pitfall:
          'Do not assume source branch changes automatically publish to Fabric. Commit/apply Git changes explicitly or use a deployment workflow.',
        doc: DOCS.fabricGit,
        docLabel: 'Git connection and app source format',
      },
      {
        label: 'Promote',
        title: 'Deploy the reviewed definition to the next stage',
        location: 'Fabric deployment pipeline',
        actor: 'Fabric deployment pipeline',
        explanation:
          'Fabric documents Fabric App items as supported by deployment pipelines. After reviewing the source/target comparison, deploy the selected app item to test or production and validate it there.',
        behindScenes:
          'Pipelines move the app definition between stage workspaces; this is separate from a CI runner compiling project source. Preserve the logical item identity and generated folder when using Git integration.',
        pitfall:
          'Re-enter secret values in target apps and review connector IDs and redirect URIs. Deployment copies definitions, not runtime data or uploaded files.',
        doc: DOCS.fabricGit,
        docLabel: 'Use Fabric Apps with deployment pipelines',
      },
    ],
    docs: [
      { label: 'Fabric Apps Git integration', url: DOCS.fabricGit },
      { label: 'Fabric Git integration overview', url: 'https://learn.microsoft.com/en-us/fabric/cicd/git-integration/intro-to-git-integration' },
      { label: 'Deployment pipeline overview', url: 'https://learn.microsoft.com/en-us/fabric/cicd/deployment-pipelines/intro-to-deployment-pipelines' },
      { label: 'Rayfin dev/prod workflow', url: DOCS.fabricEnvironments },
    ],
    relatedApproaches: ['fabric', 'local', 'automation'],
  },
  {
    id: 'automation',
    label: 'Automation + CI/CD',
    title: 'Automate a controlled release',
    symbol: 'CI/CD',
    summary:
      'Automate checks and app deployment from a repository. Microsoft documents a GitHub Actions workflow for Fabric Apps that authenticates a service principal and runs the Rayfin CLI.',
    suitableFor:
      'Teams that want repeatable deployments on reviewed commits, non-interactive authentication, and controlled branch-to-workspace mapping.',
    advantages: [
      'Repeatable CLI deployment from a source repository',
      'GitHub Actions example is documented specifically for Fabric Apps',
      'Can pair automation with separate workspaces and Fabric item pipelines',
    ],
    considerations: [
      'The documented GitHub Actions route uses Rayfin; it is not a Rayfin-free Fabric feature.',
      'A service principal needs tenant API enablement and target workspace permissions.',
      'Microsoft documents Azure DevOps as a Git provider, but not an equivalent app-specific Azure Pipelines recipe.',
      'Fabric item-definition REST APIs can create or update an app definition, but they do not build source or perform Git sync/pipeline promotion.',
    ],
    prerequisites: [
      'A Rayfin project in Git and a target workspace on usable Fabric capacity for the app-specific `rayfin up` workflow.',
      'A Microsoft Entra service principal, securely stored CI secrets, and Fabric tenant settings that allow service principals to use Fabric APIs.',
      'Contributor or higher permission for the service principal on each target workspace.',
    ],
    steps: [
      {
        label: 'Plan targets',
        title: 'Map branches to isolated workspaces',
        location: 'Git repository + Fabric workspaces',
        actor: 'Release owner',
        explanation:
          'Decide which branch deploys to which existing workspace. Use a development target for routine validation; gate production deployment behind your repository review and approval process.',
        behindScenes:
          'The Microsoft sample deploys on pushes to `main` and offers a manual workflow run. Environment-specific target names are provided to the job as configuration/secrets.',
        pitfall:
          'The sample workflow does not create Fabric workspaces. Provision them and grant the deployment identity access before running CI.',
        doc: DOCS.fabricGitActions,
        docLabel: 'GitHub Actions prerequisites',
      },
      {
        label: 'Validate',
        title: 'Run checks before any deployment',
        location: 'CI runner',
        actor: 'Your build workflow',
        explanation:
          'Install the project dependencies and run the checks appropriate to the repository. Keep build/test validation separate from the deployment job so a failed check cannot publish changes.',
        behindScenes:
          'The CI runner operates on checked-out source. Rayfin deploy then validates its configuration and target; `--dry-run` can inspect the planned target/actions without applying the deployment.',
        pitfall:
          'Build commands differ by template. Use scripts declared in that project rather than assuming every Fabric App has this learning app’s workspace scripts.',
        command: 'npm ci\nnpm run lint\nnpm run typecheck\nnpm test\nnpm run build',
        doc: DOCS.fabricGitActions,
        docLabel: 'GitHub Actions deployment workflow',
      },
      {
        label: 'Authenticate',
        title: 'Use a service principal for headless sign-in',
        location: 'CI secret store → Fabric APIs',
        actor: 'Rayfin CLI',
        explanation:
          'Store the client ID, tenant ID, client secret, and target workspace name in the CI provider’s secret store. The documented GitHub Actions flow signs in non-interactively before deploying.',
        behindScenes:
          'Rayfin CLI accepts service-principal credentials. Fabric tenant policy must allow service principals to use Fabric APIs; the principal needs Contributor or higher access to the target workspace.',
        pitfall:
          'Never put credentials in workflow source or logs. `--yes` accepts non-destructive prompts; destructive schema changes remain blocked unless explicitly allowed.',
        command:
          'npx rayfin login --service-principal --client-id "$CLIENT_ID" --client-secret "$CLIENT_SECRET" --tenant "$TENANT_ID"',
        doc: DOCS.fabricGitActions,
        docLabel: 'Service-principal setup',
      },
      {
        label: 'Deploy & verify',
        title: 'Deploy the intended workspace and inspect the result',
        location: 'CI runner → Fabric workspace',
        actor: 'GitHub Actions + Rayfin CLI',
        explanation:
          'Run the deployment against the configured workspace, serialize jobs targeting the same workspace, and check the deployment output/status. The Microsoft sample deploys with `rayfin up`.',
        behindScenes:
          'Rayfin builds and applies the configured app; this automation is a CLI-based deployment. Fabric deployment pipelines are a separate native route for promoting supported Fabric item definitions between stages.',
        pitfall:
          'The documented app-specific automation example is GitHub Actions. Azure DevOps is a supported Fabric Git provider, but the reviewed Microsoft Apps docs do not provide a matching Azure Pipelines recipe; a custom job using Rayfin CLI is your responsibility.',
        command: 'npx rayfin up --workspace "$FABRIC_WORKSPACE_NAME" --yes\nnpx rayfin up status',
        doc: DOCS.fabricGitActions,
        docLabel: 'Deploy a Fabric app with GitHub Actions',
      },
    ],
    docs: [
      { label: 'Microsoft GitHub Actions workflow', url: DOCS.fabricGitActions },
      { label: 'Rayfin deployment command', url: DOCS.fabricDeploy },
      { label: 'Fabric REST item-definition automation', url: DOCS.fabricGit },
      { label: 'Rayfin dev/prod environments', url: DOCS.fabricEnvironments },
    ],
    relatedApproaches: ['git', 'fabricator'],
  },
  {
    id: 'fabricator',
    label: 'Fabricator',
    title: 'Build Rayfin apps in Fabricator',
    symbol: 'COMMUNITY WORKBENCH',
    summary:
      'Use Fabricator, a community desktop workbench, to prompt GitHub Copilot to change a Rayfin project, preview it on your computer, review its history and publish it to Microsoft Fabric.',
    suitableFor:
      'People who want an integrated AI-assisted workbench for building and previewing Rayfin apps without living in the terminal.',
    advantages: [
      'Chat, project preview, file inspection, Git history, and publishing are brought together',
      'Apps can run with a local backend before a Fabric workspace is needed',
      'Fabricator invokes the project’s Rayfin CLI for publishing rather than replacing Rayfin',
    ],
    considerations: [
      'Fabricator is an independent community project—not a Microsoft product, endorsement, or supported Fabric feature.',
      'A GitHub account with GitHub Copilot access is required; chat sends prompts and relevant project context to GitHub Copilot.',
      'Team workspaces are an experiment and require additional GitHub, Azure, Fabric, and capacity setup.',
    ],
    prerequisites: [
      'Windows 10/11 or macOS on Apple Silicon; Node.js 22.12 or newer, npm, and Git.',
      'A GitHub account with GitHub Copilot access. The Copilot engine and local Rayfin backend are bundled; a global Rayfin CLI is not required for ordinary projects.',
      'Fabric access and an eligible F-SKU or P-SKU workspace are needed to publish, not to create and try an app locally. Azure CLI and GitHub CLI are optional for specific features.',
    ],
    steps: [
      {
        label: 'Understand',
        title: 'Know where Fabricator, Rayfin, and Fabric fit',
        location: 'Community desktop workbench',
        actor: 'You + Fabricator',
        explanation:
          'Fabricator is a personal community project by Sachin Patney. It brings chat-driven building, a local preview, project inspection, history, and publishing controls into one desktop workbench for Rayfin apps.',
        behindScenes:
          'Fabricator edits a local Rayfin project and runs its app on your computer. Rayfin supplies the app platform, SDK, and CLI; Fabricator invokes the project’s Rayfin tooling to publish; Microsoft Fabric hosts and shares the published app. Fabricator is not a Microsoft product and is not required to build Fabric Apps.',
        resources:
          'A local Rayfin project during development; the Fabric App item and workspace only when you publish.',
        pitfall:
          'This conceptual workbench view is an actual screenshot from the Fabricator project documentation. Fabricator complements the underlying Rayfin and Fabric services; it does not replace them.',
        doc: DOCS.fabricatorDocs,
        docLabel: 'Fabricator project documentation',
        image: {
          src: 'https://spatney.github.io/rayfin-fabricator/screenshots/workbench.light.webp',
          alt: 'Fabricator workbench screenshot with the chat conversation on the left and a running app preview on the right.',
          caption:
            'Fabricator project documentation screenshot; this is the project’s UI, not a mock-up.',
        },
      },
      {
        label: 'Install',
        title: 'Install the desktop app and finish setup',
        location: 'Windows 10/11 or macOS Apple Silicon',
        actor: 'You + Fabricator setup',
        explanation:
          'Download the current installer from the project’s GitHub Releases. On first launch, setup checks Node.js, npm, and Git, then asks you to sign in to GitHub Copilot. Windows uses a current-user installer; the published macOS build targets Apple Silicon.',
        behindScenes:
          'Fabricator bundles its Copilot engine and rayfin-local backend, so you do not install a separate Copilot CLI or a global Rayfin CLI for ordinary projects. Azure CLI is optional for features such as sharing, adding Fabric data, report migration, and team workspaces. GitHub CLI is optional for repository browsing/cloning but required by team workspaces.',
        resources:
          'Fabricator application and bundled local backend on this computer; GitHub Copilot sign-in; optional Azure/GitHub CLI sign-ins.',
        pitfall:
          'The project documents Windows SmartScreen prompts and macOS quarantine handling in its install guide. Follow the project’s current release instructions and your organization’s software-installation policy.',
        doc: DOCS.fabricatorInstall,
        docLabel: 'Install Fabricator',
      },
      {
        label: 'Create project',
        title: 'Create or open a Rayfin project locally',
        location: 'Fabricator Home → project workbench',
        actor: 'Fabricator + Rayfin tooling',
        explanation:
          'Choose New project and enter a name, or open a local folder/clone a repository. A new project starts from Rayfin’s default Universal App template; there is no template picker in the normal new-project flow.',
        behindScenes:
          'Fabricator creates the project, installs its packages, initializes local Git history, and starts the app with its bundled local Rayfin backend. The app’s pages, data, sign-in, and functions can run on this computer before you publish.',
        resources:
          'Project folder and npm packages, local `.git` history, and a local backend with local app data.',
        pitfall:
          'You do not need a Fabric workspace just to build or try the local app. Keep the project folder: it contains the editable source you return to.',
        doc: DOCS.fabricatorFirstApp,
        docLabel: 'Build your first app',
      },
      {
        label: 'Prompt & review',
        title: 'Describe a change and inspect Copilot’s work',
        location: 'Build view → chat and work log',
        actor: 'GitHub Copilot agent',
        explanation:
          'Describe the audience, outcomes, and data. The built-in GitHub Copilot agent can read and change project files; you can steer follow-up turns and choose supported models and reasoning effort.',
        behindScenes:
          'Fabricator shows a live work log of reads, searches, commands, output, and edits. It runs the local app and gives Copilot checks for the running app. After a successful turn, you can inspect the resulting code diff and version snapshot.',
        resources:
          'Prompt and relevant project context sent to Copilot; project source files changed by the agent; local app checks and Git snapshot.',
        pitfall:
          'Treat generated code as a proposal: inspect changes and verify behavior yourself. Copilot chat sends your prompt and relevant project context to GitHub Copilot under your account’s terms.',
        doc: DOCS.fabricatorChat,
        docLabel: 'Chat with Copilot',
      },
      {
        label: 'Preview & edit',
        title: 'Try the running app and choose how to edit',
        location: 'Local preview + Code view',
        actor: 'Fabricator + local Rayfin backend',
        explanation:
          'The preview runs the app and its backend on your computer. Try the app, reload it, preview as another app role, or use Point & Edit to direct a change. Fabricator’s Code view lets you inspect files; open the folder in VS Code when you need to edit source manually.',
        behindScenes:
          'The local backend runs app data, sign-in, functions, connectors, and storage where supported. The Code view itself is read-only; chat changes source, while VS Code is the documented route for direct manual file edits.',
        resources:
          'Local Vite app, local Rayfin backend and its data, plus project files opened read-only in Fabricator or directly in VS Code.',
        pitfall:
          'Local data belongs to this computer and is separate from a published app’s data. A local preview is not proof of how every Fabric-only connector or deployment behaves.',
        doc: DOCS.fabricatorPreview,
        docLabel: 'Preview and develop locally',
      },
      {
        label: 'Git & history',
        title: 'Review changes, snapshots, and remote Git',
        location: 'Code → History / Git status',
        actor: 'Fabricator + Git',
        explanation:
          'Inspect file diffs and the saved history timeline. Fabricator records a snapshot after a chat turn that changes the app and when it publishes; you can restore an earlier snapshot. Connect a remote repository to commit, push, pull, and work with branches.',
        behindScenes:
          'The local history uses Git. Remote GitHub operations use GitHub tooling; team workspaces have a separate PR-based workflow. These are source-history functions, distinct from Fabric deployment pipelines.',
        resources:
          'Local `.git` repository, snapshots and diffs; optional remote repository, branch, commits, and pull requests.',
        pitfall:
          'Local history is not a remote backup or team repository by itself. Push important work to a remote and use your team’s normal review and backup practices.',
        doc: DOCS.fabricatorCode,
        docLabel: 'Code, diffs, and history',
      },
      {
        label: 'Check with Advisor',
        title: 'Use quick checks and a read-only review',
        location: 'Advisor tab',
        actor: 'Fabricator checks + optional Copilot review',
        explanation:
          'The Advisor combines automatic project checks with an optional Copilot deep review. It can flag potential access, data-policy, secrets, configuration, performance, accessibility, and code-quality issues, with links and suggested fixes.',
        behindScenes:
          'Quick checks run locally without Copilot. A deep review uses a separate read-only Copilot session: its tools cannot edit files, run shell commands, or publish. Findings can become outdated after code changes.',
        resources:
          'Current project snapshot and Advisor findings; the deep review is read-only and excludes `.env` files and local backend data.',
        pitfall:
          'Advisor is a helpful health dashboard, not a comprehensive security audit, certification, or guarantee. Review findings, test fixes, and rerun a deep review after changes.',
        doc: DOCS.fabricatorAdvisor,
        docLabel: 'Use the Advisor',
      },
      {
        label: 'Publish',
        title: 'Publish through the project’s Rayfin CLI',
        location: 'Fabricator → selected Fabric workspace',
        actor: 'Fabricator + project-pinned Rayfin CLI',
        explanation:
          'When you choose Publish, sign in to Fabric if prompted, select a workspace on eligible Fabric F-SKU or Power BI Premium P-SKU capacity, and confirm the destination. Fabricator runs the project’s own `rayfin up`; optional publish-after-each-chat-turn behavior starts off.',
        behindScenes:
          'Rayfin CLI performs the Fabric deployment and creates or updates the Fabric App item. Fabricator tracks deployment progress and logs, then lets you switch the preview between the local app and a published deployment. It can manage deployments to multiple workspaces.',
        resources:
          'Project configuration and source; selected Fabric workspace and App item; deployment log and published app preview.',
        pitfall:
          'A same-name app in a workspace can be replaced only after an explicit warning/confirmation. Review the selected workspace and app identity before publishing; do not publish to production accidentally.',
        command: 'npx rayfin up',
        doc: DOCS.fabricatorDeploy,
        docLabel: 'Publish and manage deployments',
      },
      {
        label: 'Share & collaborate',
        title: 'Share a published app; treat team workspaces as experimental',
        location: 'Fabric app permissions / team workspace',
        actor: 'Fabric + optional GitHub Actions workflow',
        explanation:
          'Use Share for a published app and grant the appropriate Fabric app permissions. Fabricator’s optional Team workspaces experiment supports shared Rayfin projects through a private GitHub repository, working branches and pull requests, with a pipeline for previews and published apps.',
        behindScenes:
          'Team workspaces create real GitHub, Entra, Fabric, and pipeline resources and require extra configuration, permissions, GitHub CLI, Azure CLI sign-in, and eligible Fabric capacity. A chat turn updates a working branch and draft pull request; publishing marks it ready and starts the preview/publish pipeline. Pull requests use a preview identity; merged changes use the deployment identity.',
        resources:
          'Private GitHub repository and pull requests, preview and published Fabric workspaces, Entra deploy identities, and GitHub Actions pipeline.',
        pitfall:
          'Team workspaces are explicitly an experiment and may change or be removed. Do not equate an individual app share with the separate team-workspace workflow.',
        doc: DOCS.fabricatorTeam,
        docLabel: 'Team workspace experiment and prerequisites',
      },
      {
        label: 'Privacy',
        title: 'Understand telemetry, local files, and Copilot data',
        location: 'Settings + project privacy docs',
        actor: 'You + Fabricator / GitHub Copilot',
        explanation:
          'Review the project’s privacy page before using chat with sensitive source. It documents what telemetry may contain, what is not sent as product telemetry, and what chat context goes to GitHub Copilot. Projects and app data stay in their local folders; diagnostics are local unless you choose to share them.',
        behindScenes:
          'The project says product telemetry is a no-op unless configured in the app build; when enabled, it sends coarse events including sign-in domain and a salted hash, not code, prompts, app contents, or credentials. Chat prompts and relevant project context do go to GitHub Copilot; diagnostics are local unless you choose to share them.',
        resources:
          'Local project, app data, and diagnostics; optional coarse telemetry; chat context sent to GitHub Copilot.',
        pitfall:
          'Do not paste secrets or sensitive data into prompts. Read the current privacy documentation and your GitHub Copilot terms; enable Full diagnostics only when needed and inspect what you share.',
        doc: DOCS.fabricatorPrivacy,
        docLabel: 'Privacy, telemetry, and data handling',
      },
      {
        label: 'Troubleshoot',
        title: 'Use the documented checks for setup, preview, or publish problems',
        location: 'Status bar Help + troubleshooting guides',
        actor: 'You + Fabricator support tools',
        explanation:
          'If setup cannot find a tool you just installed, restart Fabricator and select Re-check in setup. For Copilot or Fabric sign-in problems, use the account-specific guide. For a blank/stale preview or failed publish, open Help (Ctrl+J or Cmd+J), inspect publish logs, and follow the symptom-specific steps.',
        behindScenes:
          'Fabricator’s Help can answer in-app and the troubleshooting index links directly to setup/sign-in, preview, and deployment symptoms. Share an exported diagnostics file only when you choose to report an issue.',
        resources:
          'Local setup checks, preview status, publish logs, and diagnostics file only if you choose to export/share it.',
        pitfall:
          'Confirm the symptom and selected account/workspace before retrying a publish. A successful local run does not mean the remote deployment succeeded.',
        doc: DOCS.fabricatorTroubleshooting,
        docLabel: 'Troubleshooting index',
      },
    ],
    docs: [
      { label: 'Fabricator guide', url: DOCS.fabricatorDocs },
      { label: 'How Fabricator works', url: DOCS.fabricatorHowItWorks },
      { label: 'Requirements and accounts', url: DOCS.fabricatorRequirements },
      { label: 'Troubleshooting', url: DOCS.fabricatorTroubleshooting },
      { label: 'Setup and sign-in fixes', url: 'https://spatney.github.io/rayfin-fabricator/docs/troubleshooting/setup-and-sign-in' },
      { label: 'Preview fixes', url: 'https://spatney.github.io/rayfin-fabricator/docs/troubleshooting/preview' },
      { label: 'Publishing fixes', url: 'https://spatney.github.io/rayfin-fabricator/docs/troubleshooting/deploy' },
      { label: 'Rayfin platform documentation', url: DOCS.rayfinHome },
      { label: 'Microsoft Fabric Apps', url: DOCS.fabricOverview },
    ],
    relatedApproaches: ['local', 'git', 'automation'],
  },
];

export const BUILD_COMPARISON: {
  area: string;
  values: Record<BuildApproachId, string>;
}[] = [
  {
    area: 'Working environment',
    values: {
      fabric: 'Fabric portal for app-item administration and lifecycle.',
      powerbi: 'A separate Windows desktop authoring app launched from Power BI Desktop or directly.',
      local: 'VS Code or another local editor plus the Rayfin CLI.',
      git: 'Git provider and Fabric workspace Source control.',
      automation: 'Repository and CI runner; not a primary authoring environment.',
      fabricator: 'Community desktop workbench for building Rayfin apps.',
    },
  },
  {
    area: 'AI assistance',
    values: {
      fabric: 'Not inherent to portal administration; pair with an authoring tool if wanted.',
      powerbi: 'Chat-based app generation and refinement with GitHub Copilot.',
      local: 'Optional; choose your editor and workflow.',
      git: 'Optional; use your repository review practices.',
      automation: 'Automates checks and releases, not interactive app authoring.',
      fabricator: 'Built-in GitHub Copilot agent; review generated changes.',
    },
  },
  {
    area: 'Source editing',
    values: {
      fabric: 'Not in the portal; edit a project with a separate source tool.',
      powerbi: 'Chat and supported Edit controls; optional VS Code access to local project.',
      local: 'Direct edits in your local project.',
      git: 'Edit source in the repo; sync the deployable definition separately.',
      automation: 'Build/deploy checked-out source using configured scripts.',
      fabricator: 'Chat edits source; Code view is read-only, with VS Code for manual edits.',
    },
  },
  {
    area: 'Preview and testing',
    values: {
      fabric: 'Validate the item in a workspace; no in-portal source preview.',
      powerbi: 'Local preview with service semantic models; no write-back.',
      local: '`rayfin dev`: local frontend against a Fabric backend.',
      git: 'Test locally or in a development workspace before syncing/promoting.',
      automation: 'Run repository checks, then verify the deployed target.',
      fabricator: 'App and backend on this computer; local data is separate.',
    },
  },
  {
    area: 'Source control',
    values: {
      fabric: 'Fabric Git tracks supported item definitions.',
      powerbi: 'Project files stay local; keep/reopen them for later edits.',
      local: 'Use your own Git repository and review workflow.',
      git: 'Workspace-level Git sync plus source-repository branches.',
      automation: 'Branch checks and history in the selected Git provider.',
      fabricator: 'Local Git snapshots; optional remote GitHub branches and pushes.',
    },
  },
  {
    area: 'How changes reach Fabric',
    values: {
      fabric: 'Manage the item or promote its definition with a Fabric pipeline.',
      powerbi: 'Publish / Publish as from the desktop app.',
      local: '`rayfin up` builds and publishes the targeted app.',
      git: 'Explicit Git commit/apply; pipeline promotes supported definitions.',
      automation: 'CI authenticates and runs Rayfin CLI or a custom supported API flow.',
      fabricator: 'Fabricator invokes the project-pinned Rayfin CLI (`rayfin up`).',
    },
  },
  {
    area: 'Best suited to',
    values: {
      fabric: 'App operators, workspace owners, and stage-based item management.',
      powerbi: 'Power BI authors shaping apps around existing semantic models.',
      local: 'Developers who want source control and code-first flexibility.',
      git: 'Teams collaborating on source and app-definition promotion.',
      automation: 'Teams needing repeatable, gated repository releases.',
      fabricator: 'People wanting an integrated, AI-assisted Rayfin workbench.',
    },
  },
  {
    area: 'Trade-off to remember',
    values: {
      fabric: 'Does not edit the project source or compile it.',
      powerbi: 'Preview is limited; Pro publishing and local-model workflows are not supported yet.',
      local: '`rayfin dev` uses a Fabric backend; `rayfin up` publishes the app.',
      git: 'Definition sync is not the full project source or a data backup.',
      automation: 'GitHub Actions is documented; Azure Pipelines is custom, not the cited sample.',
      fabricator: 'Community tool, not Microsoft-supported; Copilot and local-history limits apply.',
    },
  },
];

export const ARCHITECTURE_NODES = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'WEB',
    owner: 'You build it',
    title: 'The experience people use',
    description:
      'A TypeScript frontend—React in this workspace—renders the product experience. During `rayfin dev` it runs on your machine; after `rayfin up`, its built static assets are hosted by Fabric.',
    connection:
      'Calls the Rayfin client for the services you register. It does not connect directly to the app database.',
  },
  {
    id: 'client',
    label: 'Rayfin client',
    icon: 'SDK',
    owner: 'You compose it',
    title: 'A typed bridge to configured services',
    description:
      'The SDK client is composed from the capabilities the app uses, such as auth, data, Functions, or connectors. Generated types help the frontend call the registered service APIs.',
    connection:
      'Sends authorized requests to the app backend; do not assume every optional client service exists in every project.',
  },
  {
    id: 'backend',
    label: 'App backend',
    icon: 'API',
    owner: 'Fabric manages it',
    title: 'The managed service endpoint',
    description:
      'A deployed Fabric app has an app backend that provides the configured services. For Rayfin data, the API path documented by Microsoft is GraphQL; service composition depends on `rayfin.yml`.',
    connection:
      'Fabric manages app hosting, networking, and scaling. Rayfin CLI provisions and applies the project configuration.',
  },
  {
    id: 'hosting',
    label: 'Static hosting',
    icon: 'WEB',
    owner: 'Configured · protected here',
    title: 'The hosted frontend bundle',
    description:
      'When static hosting is enabled, Rayfin builds the frontend package and publishes its static assets to a Fabric Apps hosting URL. The `assetAccess` setting controls who can load those assets.',
    connection:
      'During local development the frontend is served from the developer machine instead. A `rayfin dev` session does not publish the static bundle.',
  },
  {
    id: 'data',
    label: 'SQL + GraphQL',
    icon: 'DB',
    owner: 'Optional · schema from code',
    title: 'App-owned data, when enabled',
    description:
      'When the data service is enabled, decorated TypeScript entities describe app-owned records. Rayfin applies the schema to a managed Fabric SQL database and exposes a generated GraphQL API.',
    connection:
      'The frontend uses the typed client and API; Fabric exposes the SQL item for read-oriented portal inspection. Schema changes belong in source code.',
  },
  {
    id: 'identity',
    label: 'Microsoft Entra ID',
    icon: 'ID',
    owner: 'Fabric SSO when deployed',
    title: 'Identity for the developer and app user',
    description:
      'Deployed Fabric apps use Fabric-brokered Microsoft Entra ID single sign-on. CLI sign-in authorizes the developer; the app’s sign-in establishes the caller identity for application requests.',
    connection:
      'Authorization is still designed by the developer. Use item permissions and service policies; do not confuse authentication with row-level authorization.',
  },
  {
    id: 'extensions',
    label: 'Optional capabilities',
    icon: '+',
    owner: 'Enable only when needed',
    title: 'Connectors, Functions, and Storage',
    description:
      'Connectors access supported data already in Fabric; Functions run server-side TypeScript; Storage handles configured files. These are separate capabilities, not automatic parts of every app.',
    connection:
      'Their availability and identity model vary by service. Functions are not available in every Fabric region or tenant; verify availability before depending on them.',
  },
] as const;

export interface ProjectTreeNode {
  name: string;
  path: string;
  kind: 'folder' | 'file' | 'generated' | 'optional';
  description: string;
  children?: readonly ProjectTreeNode[];
}

export const PROJECT_TREE: readonly ProjectTreeNode[] = [
  {
    name: 'my-app',
    path: 'my-app/',
    kind: 'folder',
    description:
      'The workspace root. In this repository it coordinates three npm packages and the Rayfin project configuration.',
    children: [
      {
        name: 'package.json',
        path: 'package.json',
        kind: 'file',
        description:
          'Declares npm workspaces, the installed Rayfin CLI range, and root scripts such as `dev`, `build`, `typecheck`, and `pack:add`.',
      },
      {
        name: 'rayfin',
        path: 'rayfin/',
        kind: 'folder',
        description:
          'Rayfin app configuration and deployment state. Keep generated credentials and environment files out of source control.',
        children: [
          {
            name: 'rayfin.yml',
            path: 'rayfin/rayfin.yml',
            kind: 'file',
            description:
              'Declares app services, enablement, package paths, build commands, and hosting settings. This repository enables auth and protected static hosting; data, Functions, and Storage are off.',
          },
          {
            name: '.env',
            path: 'rayfin/.env',
            kind: 'generated',
            description:
              'Rayfin-generated environment values for the active app/backend. Treat it as sensitive local configuration; do not publish its contents.',
          },
          {
            name: '.deployments.json',
            path: 'rayfin/.deployments.json',
            kind: 'generated',
            description:
              'CLI deployment metadata used to remember target Fabric deployments. It is generated as the project is deployed.',
          },
        ],
      },
      {
        name: 'packages',
        path: 'packages/',
        kind: 'folder',
        description:
          'The npm workspace packages. Use each package for its runtime boundary instead of mixing frontend, server, and model code.',
        children: [
          {
            name: 'frontend',
            path: 'packages/frontend/',
            kind: 'folder',
            description:
              'React and Vite application. Its production build output is the static content uploaded by the configured hosting service.',
            children: [
              {
                name: 'src',
                path: 'packages/frontend/src/',
                kind: 'folder',
                description:
                  'Screens, components, styles, hooks, and browser-side client integration.',
                children: [
                  {
                    name: 'App.tsx',
                    path: 'packages/frontend/src/App.tsx',
                    kind: 'file',
                    description:
                      'The authenticated application screen. In this project it mounts the interactive Fabric Apps learning experience.',
                  },
                  {
                    name: 'lib/',
                    path: 'packages/frontend/src/lib/',
                    kind: 'folder',
                    description:
                      'Frontend helpers, including the project’s Rayfin client composition.',
                  },
                ],
              },
              {
                name: 'package.json',
                path: 'packages/frontend/package.json',
                kind: 'file',
                description:
                  'Owns React, Vite, Rayfin frontend dependencies, and frontend-specific build and test scripts.',
              },
            ],
          },
          {
            name: 'data',
            path: 'packages/data/',
            kind: 'folder',
            description:
              'The Universal App workspace location for entity registration and data schema exports. The package can exist while `services.data` is disabled.',
            children: [
              {
                name: 'src/',
                path: 'packages/data/src/',
                kind: 'folder',
                description:
                  'Decorated TypeScript entities and schema registration belong here when app-owned data is enabled.',
              },
            ],
          },
          {
            name: 'shared',
            path: 'packages/shared/',
            kind: 'folder',
            description:
              'Isomorphic, browser-safe contracts shared across workspace packages. Avoid importing decorated runtime entities into the browser.',
            children: [
              {
                name: 'src/index.ts',
                path: 'packages/shared/src/index.ts',
                kind: 'file',
                description:
                  'Exports shared TypeScript contracts, including the record types the frontend can safely consume.',
              },
            ],
          },
          {
            name: 'functions (optional)',
            path: 'packages/functions/',
            kind: 'optional',
            description:
              'Created when the Functions capability is applied. It holds server-side TypeScript; the Functions service must also be available in the target Fabric environment.',
          },
        ],
      },
      {
        name: '.env.local (generated)',
        path: '.env.local',
        kind: 'generated',
        description:
          '`rayfin dev` can emit framework-specific public settings here so the local frontend can reach its configured backend. Do not treat it as a place for secrets.',
      },
    ],
  },
];

export const CAPABILITIES = [
  {
    id: 'models',
    title: 'Model app-owned data',
    status: 'Opt-in',
    description:
      'Decorated TypeScript entities can generate a database schema, GraphQL API, typed client surface, and validation rules. Define row permissions with the model; the data service is not on in this repository.',
    example: '@entity()  →  managed SQL + GraphQL',
    codeExample: `import { authenticated, entity, text, uuid } from '@microsoft/rayfin-core';

@entity()
@authenticated('*', {
  policy: (claims, item) => claims.sub.eq(item.owner_id),
})
export class Item {
  @uuid() id!: string;
  @text({ max: 200 }) title!: string;
  @text({ max: 128 }) owner_id!: string;
}`,
    doc: DOCS.data,
    docLabel: 'Data modeling and permissions',
  },
  {
    id: 'identity',
    title: 'Authenticate and authorize',
    status: 'Enabled here',
    description:
      'Deployed Fabric apps use Fabric SSO through Microsoft Entra ID. Authentication identifies a caller; item permissions and data policies determine what that caller may do.',
    example: 'Fabric SSO  ≠  row-level permission policy',
    doc: DOCS.auth,
    docLabel: 'Authentication approaches',
  },
  {
    id: 'connectors',
    title: 'Read existing Fabric data',
    status: 'Opt-in',
    description:
      'Connectors are for data that already lives in supported Fabric sources, including warehouses, SQL databases, Lakehouse SQL endpoints, and semantic models. SQL connectors can use the app identity or the signed-in user; semantic-model access uses the signed-in user.',
    example: 'Existing source  →  connector  →  typed client',
    doc: DOCS.connectors,
    docLabel: 'Connectors and identity',
  },
  {
    id: 'functions',
    title: 'Run trusted server logic',
    status: 'Opt-in · availability varies',
    description:
      'Functions are server-side TypeScript for trusted operations, secrets, and supported external or Microsoft resource calls. Microsoft resource connections run as the app identity; access to the app’s own data still follows the signed-in caller’s permissions. Functions are not available in every Fabric region or tenant.',
    example: 'Browser  →  Function  →  authorized resource',
    doc: DOCS.functions,
    docLabel: 'Functions and connections',
  },
  {
    id: 'storage',
    title: 'Store app files',
    status: 'Opt-in · rollout varies',
    description:
      'Rayfin Storage lets an app declare typed folders and perform file operations. Storage is new in Rayfin 2.0 and is not enabled in every Fabric environment yet; verify availability first.',
    example: 'Typed folder  →  authorized file operation',
    doc: DOCS.storage,
    docLabel: 'Storage setup and limitations',
  },
  {
    id: 'hosting',
    title: 'Publish the web experience',
    status: 'Enabled here · protected',
    description:
      'Static hosting serves the built frontend. This project requires protected asset access; an asset access setting does not replace the app’s authentication gate or data authorization.',
    example: 'Vite build  →  Fabric static content',
    doc: DOCS.hosting,
    docLabel: 'Static hosting options',
  },
] as const;

export const CLI_CATEGORIES = [
  'All',
  'Start',
  'Develop',
  'Deploy',
  'Configure',
  'Manage',
] as const;

export interface CliCommand {
  id: string;
  label: string;
  category: (typeof CLI_CATEGORIES)[number];
  synopsis: string;
  description: string;
  example: string;
  docs: string;
  subcommands?: readonly string[];
  options?: readonly {
    flag: string;
    description: string;
    warning?: boolean;
  }[];
}

export const CLI_COMMANDS: readonly CliCommand[] = [
  {
    id: 'init',
    label: 'Create a project',
    category: 'Start',
    synopsis: 'npm create @microsoft/rayfin@latest my-app',
    description:
      'Scaffolds a Rayfin project from a template. The create flow is the documented way to start a new app; `rayfin init` also supports adding Rayfin to an existing directory.',
    example:
      'npm create @microsoft/rayfin@latest my-app\ncd my-app\nnpm install',
    options: [
      {
        flag: '-t, --template <uri>',
        description: 'Select a template name or URL.',
      },
      {
        flag: '--project-name <name>',
        description: 'Set the project name independently of its folder.',
      },
      {
        flag: '--template-name <name>',
        description: 'Select a template from a multi-template source.',
      },
      {
        flag: '-l, --list-templates',
        description: 'List available templates.',
      },
      {
        flag: '--dialect <dialect>',
        description: 'Set the database dialect.',
      },
      {
        flag: '--services <list>',
        description: 'Select services: auth, data, storage, or functions.',
      },
      {
        flag: '--auth-methods <list>',
        description: 'Set authentication methods; Fabric is supported.',
      },
      {
        flag: '--static-hosting',
        description: 'Scaffold a static frontend (enabled by default).',
      },
      {
        flag: '--overwrite',
        description: 'Allow overwriting existing configuration files.',
      },
      {
        flag: '-w, --workspace <name> · --workspace-id <id>',
        description: 'Target a workspace; do not combine these two options.',
      },
      {
        flag: '--item-id <id>',
        description: 'Specify a Fabric App item ID.',
      },
    ],
    subcommands: ['ai-files'],
    docs: DOCS.cliInit,
  },
  {
    id: 'login',
    label: 'Sign in',
    category: 'Start',
    synopsis: 'npx rayfin login',
    description:
      'Starts Microsoft Entra sign-in for Fabric operations. The page also documents status, logout, and CI service-principal authentication.',
    example: 'npx rayfin login\nnpx rayfin login status',
    options: [
      {
        flag: '-t, --tenant <id>',
        description: 'Choose the Entra tenant used to sign in.',
      },
      {
        flag: '--service-principal',
        description: 'Use service-principal client-credential authentication.',
      },
      {
        flag: '-u, --client-id <id>',
        description: 'Set the service principal client ID.',
      },
      {
        flag: '-p, --client-secret <secret>',
        description: 'Set the service principal secret; protect it in CI.',
        warning: true,
      },
      {
        flag: '--encryption-fallback-enabled',
        description: 'Allow plaintext token storage if the OS keychain is unavailable.',
        warning: true,
      },
    ],
    subcommands: ['status'],
    docs: DOCS.cliLogin,
  },
  {
    id: 'dev',
    label: 'Develop locally',
    category: 'Develop',
    synopsis: 'npm run dev',
    description:
      'In bundled projects, this script runs `rayfin dev`: a local frontend and optional Functions runtime against the configured Fabric backend. It does not publish the static frontend.',
    example: 'npm run dev',
    options: [
      {
        flag: '--provider <provider>',
        description: 'Choose fabric (default) or docker.',
      },
      {
        flag: '-w, --workspace <name> · --workspace-id <id>',
        description: 'Choose a workspace for first-run backend setup.',
      },
      {
        flag: '--capacity-id <id>',
        description: 'Select capacity when the workspace needs assignment.',
      },
      {
        flag: '--tenant <id>',
        description: 'Choose the Entra tenant for the Fabric operation.',
      },
      {
        flag: '--export-env',
        description: 'Print Docker provider environment values to stdout.',
      },
      {
        flag: '--stop / --down',
        description:
          'Stop Docker services; --down also removes containers but preserves data.',
      },
      {
        flag: '--purge',
        description: 'Purge Docker volumes when used with --down.',
        warning: true,
      },
      {
        flag: '--skip-db-apply',
        description: 'Skip automatic database configuration apply.',
      },
      {
        flag: '--no-emit-env',
        description: 'Do not regenerate the frontend .env.local file.',
      },
      {
        flag: '--env-file <path>',
        description: 'Choose the environment file used for interpolation.',
      },
      {
        flag: '--encryption-fallback-enabled',
        description: 'Allow plaintext token storage if the OS keychain is unavailable.',
        warning: true,
      },
      {
        flag: '--verbose',
        description: 'Enable verbose logging.',
      },
    ],
    docs: DOCS.cliDev,
  },
  {
    id: 'up',
    label: 'Deploy and verify',
    category: 'Deploy',
    synopsis: 'npx rayfin up',
    description:
      'Builds and deploys the configured project to Fabric. The `up` command group also exposes deployment status, list and switch operations.',
    example:
      'npx rayfin up --dry-run --workspace-id <workspace-guid>\nnpx rayfin up\nnpx rayfin up status',
    options: [
      {
        flag: '-n, --dry-run',
        description: 'Validate local inputs and resolve the workspace without deploying.',
      },
      {
        flag: '-w, --workspace <name> · --workspace-id <id>',
        description: 'Select a Fabric workspace.',
      },
      {
        flag: '--workspace-uri <uri>',
        description: 'Resolve a workspace and target from its Fabric portal URL.',
      },
      {
        flag: '--capacity-id <id>',
        description: 'Choose capacity when assigning capacity is required.',
      },
      {
        flag: '--tenant <id>',
        description: 'Select the Entra tenant for the Fabric operation.',
      },
      {
        flag: '--item-name <name>',
        description: 'Set the Fabric item display name.',
      },
      {
        flag: '--env-file <path>',
        description: 'Use a specific configuration environment file.',
      },
      {
        flag: '--exclude-services <names>',
        description: 'Skip selected staticHosting or functions deploy phases.',
      },
      {
        flag: '--force-static-deploy',
        description: 'Upload static content even when unchanged.',
      },
      {
        flag: '--skip-connector-check',
        description: 'Skip checking access to connected items during takeover.',
        warning: true,
      },
      {
        flag: '--allow-takeover',
        description: 'Authorize taking over another owner’s app identity.',
        warning: true,
      },
      {
        flag: '--encryption-fallback-enabled',
        description: 'Allow plaintext token storage if the OS keychain is unavailable.',
        warning: true,
      },
      {
        flag: '--force',
        description: 'Allow destructive schema changes that may lose data.',
        warning: true,
      },
      {
        flag: '--provider <provider>',
        description: 'Choose the deployment target provider; Fabric is supported.',
      },
      {
        flag: '-y, --yes · --json · --verbose',
        description: 'Auto-accept prompts, emit JSON, or enable verbose output.',
      },
    ],
    subcommands: [
      'db',
      'staticapp',
      'status',
      'list',
      'switch',
      'functions',
      'connector',
      'storage',
    ],
    docs: DOCS.cliUp,
  },
  {
    id: 'env',
    label: 'Emit frontend config',
    category: 'Configure',
    synopsis: 'npx rayfin env --framework vite',
    description:
      'Projects public `RAYFIN_PUBLIC_*` values from `rayfin/.env` into framework-specific frontend environment files. It does not expose secrets.',
    example: 'npx rayfin env --framework vite --show',
    options: [
      {
        flag: '--framework <framework>',
        description: 'Choose vite, nextjs, or plain; defaults to auto-detect.',
      },
      {
        flag: '--output <dir>',
        description: 'Choose where the frontend .env.local file is written.',
      },
      {
        flag: '--show',
        description: 'Print resolved public variables without writing a file.',
      },
    ],
    docs: DOCS.cliEnv,
  },
  {
    id: 'secret',
    label: 'Manage secrets',
    category: 'Configure',
    synopsis: 'npx rayfin secret <command>',
    description:
      'Manages secrets for deployed Rayfin items. Functions can read configured secrets server-side; do not place secrets in frontend environment variables.',
    example: 'npx rayfin secret list',
    subcommands: ['set [name]', 'list', 'delete <name>'],
    docs: DOCS.cliSecret,
  },
  {
    id: 'connector',
    label: 'Manage connectors',
    category: 'Configure',
    synopsis: 'npx rayfin connector <command>',
    description:
      'Discovers and configures external Fabric data connectors. The exact subcommands depend on the connector type; consult the versioned reference before using one.',
    example: 'npx rayfin connector types',
    subcommands: [
      'invoke',
      'inspect',
      'types',
      'add',
      'list',
      'search',
      'remove <name>',
    ],
    docs: DOCS.cliConnector,
  },
  {
    id: 'functions',
    label: 'Manage Functions',
    category: 'Configure',
    synopsis: 'npx rayfin functions <command>',
    description:
      'Provides Functions-related project and deployment commands. Functions must be enabled in the project and available in the target Fabric environment.',
    example: 'npx rayfin functions init',
    subcommands: ['init [directory]'],
    docs: DOCS.cliFunctions,
  },
  {
    id: 'storage',
    label: 'Initialize Storage',
    category: 'Configure',
    synopsis: 'npx rayfin storage init',
    description:
      'Prepares the local project for Rayfin Storage. Initialization does not deploy folders; `rayfin up` or the documented apply commands apply configuration.',
    example: 'npx rayfin storage init',
    docs: DOCS.cliStorage,
  },
  {
    id: 'docs',
    label: 'Search Rayfin docs',
    category: 'Manage',
    synopsis: 'npx rayfin docs <command>',
    description:
      'Queries documentation from installed Rayfin packages or discovers packages that are not installed.',
    example: 'npx rayfin docs search "static hosting"',
    subcommands: ['list', 'search <query>', 'get', 'discover <query>', 'catalog'],
    docs: DOCS.cli,
  },
  {
    id: 'telemetry',
    label: 'Manage telemetry',
    category: 'Manage',
    synopsis: 'npx rayfin telemetry <command>',
    description:
      'Manages application telemetry. The command reference labels this capability experimental; read its options before enabling it.',
    example: 'npx rayfin telemetry enable',
    subcommands: ['enable', 'disable', 'query <kql>'],
    docs: DOCS.cliTelemetry,
  },
  {
    id: 'logout',
    label: 'Sign out',
    category: 'Manage',
    synopsis: 'npx rayfin logout',
    description:
      'Clears the CLI sign-in session for the current developer environment.',
    example: 'npx rayfin logout',
    docs: DOCS.cliLogin,
  },
] as const;

export const CLI_ROOT_OPTIONS = [
  { flag: '-V, --version', description: 'Print the installed CLI version.' },
  { flag: '-y, --yes', description: 'Auto-accept confirmation prompts.' },
  {
    flag: '--output <mode>',
    description: 'Select interactive, plain, or JSON output.',
  },
  { flag: '--verbose', description: 'Enable verbose output.' },
  { flag: '--json', description: 'Request machine-readable JSON output.' },
  { flag: '-h, --help', description: 'Show command or subcommand help.' },
] as const;
