import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  ChartNoAxesCombined,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Code2,
  CreditCard,
  ExternalLink,
  File,
  Folder,
  FolderOpen,
  GitBranch,
  Layers3,
  Menu,
  Moon,
  Pause,
  PanelsTopLeft,
  Play,
  RotateCcw,
  Search,
  ShieldCheck,
  Sun,
  Terminal,
  Waypoints,
  Workflow,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import { useTheme } from '@/hooks/theme.context';

import './LearningExperience.css';
import {
  ARCHITECTURE_NODES,
  BUILD_APPROACHES,
  BUILD_COMPARISON,
  CAPABILITIES,
  CLI_CATEGORIES,
  CLI_COMMANDS,
  CLI_ROOT_OPTIONS,
  DOCS,
  COST_CATEGORIES,
  FABRIC_ECOSYSTEM,
  LICENSE_SCENARIOS,
  PROJECT_TREE,
  type BuildApproachId,
  type LicenseScenarioId,
  type ProjectTreeNode,
} from './learning-content';

type PageId =
  | 'overview'
  | 'architecture'
  | 'journey'
  | 'project'
  | 'capabilities'
  | 'cli'
  | 'licensing';

const NAV_ITEMS: {
  id: PageId;
  label: string;
  eyebrow: string;
  icon: typeof BookOpen;
}[] = [
  { id: 'overview', label: 'Start here', eyebrow: '01', icon: BookOpen },
  { id: 'architecture', label: 'Architecture', eyebrow: '02', icon: Waypoints },
  { id: 'journey', label: 'Build & deploy', eyebrow: '03', icon: Play },
  { id: 'project', label: 'Project map', eyebrow: '04', icon: Folder },
  { id: 'capabilities', label: 'Capabilities', eyebrow: '05', icon: Layers3 },
  { id: 'cli', label: 'CLI reference', eyebrow: '06', icon: Terminal },
  { id: 'licensing', label: 'Licensing & costs', eyebrow: '07', icon: CreditCard },
];

const PAGE_TITLES: Record<PageId, string> = {
  overview: 'A practical guide to Fabric Apps',
  architecture: 'See how the pieces connect',
  journey: 'Build locally. Publish deliberately.',
  project: 'Explore a Rayfin project',
  capabilities: 'Choose the services your app needs',
  cli: 'The Rayfin CLI, at a glance',
  licensing: 'Choose a path. Understand the costs.',
};

function ExternalLinkButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="learn-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{kicker}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function CopyButton({
  value,
  copied,
  onCopy,
}: {
  value: string;
  copied: string | null;
  onCopy: (value: string) => void;
}) {
  const isCopied = copied === value;
  const didFail = copied === `failed:${value}`;

  return (
    <button
      className="copy-button"
      type="button"
      onClick={() => onCopy(value)}
      aria-label={didFail ? 'Copy failed' : isCopied ? 'Copied' : 'Copy command'}
      title={didFail ? 'Copy failed' : isCopied ? 'Copied' : 'Copy'}
    >
      {didFail ? (
        <CircleHelp size={15} aria-hidden="true" />
      ) : isCopied ? (
        <Check size={15} aria-hidden="true" />
      ) : (
        <Clipboard size={15} aria-hidden="true" />
      )}
      <span>{didFail ? 'Copy failed' : isCopied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

function LearningExperience() {
  const { isDark, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [page, setPage] = useState<PageId>('overview');
  const [buildView, setBuildView] = useState<'select' | 'journey' | 'compare'>(
    'select'
  );
  const [selectedBuildApproach, setSelectedBuildApproach] =
    useState<BuildApproachId>('local');
  const [buildStep, setBuildStep] = useState(0);
  const [isBuildPlaying, setIsBuildPlaying] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string>(
    ARCHITECTURE_NODES[0].id
  );
  const [architectureMode, setArchitectureMode] = useState<
    'local' | 'deployed'
  >('deployed');
  const [selectedCapability, setSelectedCapability] = useState<string>(
    CAPABILITIES[0].id
  );
  const [selectedCommandId, setSelectedCommandId] = useState<string>('up');
  const [cliCategory, setCliCategory] =
    useState<(typeof CLI_CATEGORIES)[number]>('All');
  const [cliSearch, setCliSearch] = useState('');
  const [selectedProjectPath, setSelectedProjectPath] =
    useState('rayfin/rayfin.yml');
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    () =>
      new Set([
        'my-app/',
        'rayfin/',
        'packages/',
        'packages/frontend/',
        'packages/frontend/src/',
        'packages/data/',
        'packages/shared/',
      ])
  );
  const [copied, setCopied] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (
      !isBuildPlaying ||
      prefersReducedMotion ||
      buildView !== 'journey'
    ) {
      return;
    }

    const activeApproach =
      BUILD_APPROACHES.find(
        (approach) => approach.id === selectedBuildApproach
      ) ?? BUILD_APPROACHES[0];

    const timer = window.setInterval(() => {
      setBuildStep((current) => {
        if (current >= activeApproach.steps.length - 1) {
          setIsBuildPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 4200);

    return () => window.clearInterval(timer);
  }, [
    buildView,
    isBuildPlaying,
    prefersReducedMotion,
    selectedBuildApproach,
  ]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(null), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const selectedArchitectureNode =
    ARCHITECTURE_NODES.find((node) => node.id === selectedNode) ??
    ARCHITECTURE_NODES[0];
  const selectedCapabilityInfo =
    CAPABILITIES.find((capability) => capability.id === selectedCapability) ??
    CAPABILITIES[0];
  const selectedCommand =
    CLI_COMMANDS.find((command) => command.id === selectedCommandId) ??
    CLI_COMMANDS[0];
  const visibleCommands = useMemo(() => {
    const query = cliSearch.trim().toLowerCase();
    return CLI_COMMANDS.filter((command) => {
      const matchesCategory =
        cliCategory === 'All' || command.category === cliCategory;
      const matchesQuery =
        !query ||
        `${command.label} ${command.synopsis} ${command.description} ${command.category}`
          .toLowerCase()
          .includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [cliCategory, cliSearch]);

  function navigate(nextPage: PageId) {
    setPage(nextPage);
    setMobileNavOpen(false);
  }

  function toggleFolder(path: string) {
    setExpandedFolders((current) => {
      const next = new Set(current);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  }

  async function copyToClipboard(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
    } catch {
      setCopied(`failed:${value}`);
    }
  }

  function selectCommand(commandId: string) {
    setSelectedCommandId(commandId);
  }

  return (
    <div className="learn-app">
      <aside className={`learn-sidebar${mobileNavOpen ? ' is-open' : ''}`}>
        <div className="sidebar-brand">
          <div className="brand-icon" aria-hidden="true">
            <BookOpen size={18} />
          </div>
          <div>
            <strong>Fabric Apps</strong>
            <span>LEARNING STUDIO</span>
          </div>
          <button
            className="mobile-close"
            type="button"
            aria-label="Close navigation"
            onClick={() => setMobileNavOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="sidebar-label">YOUR LEARNING PATH</div>
        <nav className="side-nav" aria-label="Learning sections">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.id}
                className={`nav-item${page === item.id ? ' is-active' : ''}`}
                onClick={() => navigate(item.id)}
                aria-current={page === item.id ? 'page' : undefined}
              >
                <Icon size={17} aria-hidden="true" />
                <span>{item.label}</span>
                <small>{item.eyebrow}</small>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-version">
          <span className="version-dot" />
          <div>
            <strong>Rayfin 2.0</strong>
            <span>Docs matched to this project</span>
          </div>
        </div>
        <ExternalLinkButton href={DOCS.rayfinHome}>
          Rayfin documentation
        </ExternalLinkButton>
      </aside>

      <div className="learn-workspace">
        <header className="learn-topbar">
          <button
            className="mobile-menu"
            type="button"
            aria-label="Open navigation"
            onClick={() => setMobileNavOpen(true)}
          >
            <Menu size={19} />
          </button>
          <div className="breadcrumb">
            <span>LEARNING PATH</span>
            <ChevronRight size={14} aria-hidden="true" />
            <strong>{PAGE_TITLES[page]}</strong>
          </div>
          <div className="topbar-actions">
            <span className="version-pill">RAYFIN 2.0.0</span>
            <button
              className="theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
              title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
            >
              {isDark ? (
                <Sun size={17} aria-hidden="true" />
              ) : (
                <Moon size={17} aria-hidden="true" />
              )}
            </button>
          </div>
        </header>

        <main className="learn-main">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="page-content"
              key={page}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            >
              {page === 'overview' && (
                <OverviewPage
                  onNavigate={navigate}
                  onSelectJourneyStep={() => {
                    setBuildView('select');
                    setBuildStep(0);
                    navigate('journey');
                  }}
                />
              )}
              {page === 'licensing' && <LicensingPage />}
              {page === 'architecture' && (
                <ArchitecturePage
                  mode={architectureMode}
                  onModeChange={setArchitectureMode}
                  selectedNode={selectedNode}
                  onSelectNode={setSelectedNode}
                  node={selectedArchitectureNode}
                />
              )}
              {page === 'journey' && (
                <JourneyPage
                  view={buildView}
                  approachId={selectedBuildApproach}
                  step={buildStep}
                  isPlaying={isBuildPlaying}
                  prefersReducedMotion={Boolean(prefersReducedMotion)}
                  onChooseApproach={(approachId) => {
                    setSelectedBuildApproach(approachId);
                    setBuildStep(0);
                    setIsBuildPlaying(false);
                    setBuildView('journey');
                  }}
                  onShowSelector={() => {
                    setBuildView('select');
                    setIsBuildPlaying(false);
                  }}
                  onShowComparison={() => {
                    setBuildView('compare');
                    setIsBuildPlaying(false);
                  }}
                  onSelectStep={(nextStep) => {
                    setBuildStep(nextStep);
                    setIsBuildPlaying(false);
                  }}
                  onTogglePlay={() => setIsBuildPlaying((playing) => !playing)}
                  onRestart={() => {
                    setBuildStep(0);
                    setIsBuildPlaying(false);
                  }}
                  copied={copied}
                  onCopy={copyToClipboard}
                />
              )}
              {page === 'project' && (
                <ProjectPage
                  expandedFolders={expandedFolders}
                  selectedPath={selectedProjectPath}
                  onToggleFolder={toggleFolder}
                  onSelectPath={setSelectedProjectPath}
                />
              )}
              {page === 'capabilities' && (
                <CapabilitiesPage
                  selectedId={selectedCapability}
                  selected={selectedCapabilityInfo}
                  onSelect={setSelectedCapability}
                />
              )}
              {page === 'cli' && (
                <CliPage
                  category={cliCategory}
                  search={cliSearch}
                  selectedCommand={selectedCommand}
                  visibleCommands={visibleCommands}
                  copied={copied}
                  onCategoryChange={setCliCategory}
                  onSearchChange={setCliSearch}
                  onSelectCommand={selectCommand}
                  onCopy={copyToClipboard}
                />
              )}
            </motion.div>
          </AnimatePresence>
          <footer className="page-footer">
            <span>Built as a guided tour, not a substitute for the docs.</span>
            <ExternalLinkButton href={DOCS.fabricOverview}>
              Microsoft Fabric Apps docs
            </ExternalLinkButton>
          </footer>
        </main>
      </div>
    </div>
  );
}

function OverviewPage({
  onNavigate,
  onSelectJourneyStep,
}: {
  onNavigate: (page: PageId) => void;
  onSelectJourneyStep: (step: number) => void;
}) {
  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <div className="hero-overline">
            <span className="overline-mark" />
            AN INTERACTIVE DEVELOPER GUIDE
          </div>
          <h1>
            Make Fabric Apps
            <br />
            <em>make sense.</em>
          </h1>
          <p>
            Follow a real project from its first command to a managed app in
            Microsoft Fabric. Learn what Rayfin automates—and what you still
            own.
          </p>
          <div className="hero-actions">
            <button
              type="button"
              className="primary-button"
              onClick={() => onSelectJourneyStep(0)}
            >
              Begin the guided journey
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="text-button"
              onClick={() => onNavigate('architecture')}
            >
              Explore the architecture
            </button>
          </div>
          <div className="hero-caption">
            <span>01 — UNDERSTAND</span>
            <span>02 — BUILD</span>
            <span>03 — DEPLOY</span>
          </div>
        </div>
        <div className="hero-art" aria-label="Microsoft Fabric">
          <div className="art-glow" aria-hidden="true" />
          <img
            src="/fabric_48_color.png"
            alt="Microsoft Fabric mark"
            width="512"
            height="512"
          />
          <div className="art-caption">
            <span>ONE PLATFORM</span>
            <span>YOUR APPLICATION</span>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>FIELD GUIDE</span>
          <strong>FABRIC<br />/ APPS</strong>
          <span>RAYFIN 2.0.0</span>
        </div>
      </section>

      <div className="intro-row">
        <div>
          <span className="eyebrow">THE IDEA</span>
          <h2>More than a report. A managed application.</h2>
        </div>
        <p>
          A Fabric App combines a custom web experience with managed backend
          services. Rayfin is the TypeScript SDK and CLI used to model,
          configure, develop, and deploy that app. Power BI reports remain
          valuable—but an app gives you a different way to shape interactions
          and application behavior.
        </p>
      </div>

      <EcosystemOverview onNavigate={onNavigate} />

      <div className="overview-grid">
        <button
          type="button"
          className="overview-card card-architecture"
          onClick={() => onNavigate('architecture')}
        >
          <span className="card-number">01 / MAP</span>
          <Waypoints size={20} aria-hidden="true" />
          <h3>Trace the architecture</h3>
          <p>
            Select a component and see where it runs, how it connects, and
            which parts are optional.
          </p>
          <span className="card-action">
            Open the diagram <ArrowRight size={15} />
          </span>
        </button>
        <button
          type="button"
          className="overview-card card-journey"
          onClick={() => onSelectJourneyStep(0)}
        >
          <span className="card-number">02 / BUILD</span>
          <Terminal size={20} aria-hidden="true" />
          <h3>Walk the workflow</h3>
          <p>
            Step through prerequisites, local development, deployment, and
            verification—at your own pace.
          </p>
          <span className="card-action">
            Start at step one <ArrowRight size={15} />
          </span>
        </button>
        <button
          type="button"
          className="overview-card card-reference"
          onClick={() => onNavigate('cli')}
        >
          <span className="card-number">03 / REFERENCE</span>
          <Code2 size={20} aria-hidden="true" />
          <h3>Find the right command</h3>
          <p>
            Search the Rayfin 2.0 command map and follow links to its full
            versioned references.
          </p>
          <span className="card-action">
            Browse the CLI <ArrowRight size={15} />
          </span>
        </button>
        <button
          type="button"
          className="overview-card card-licensing"
          onClick={() => onNavigate('licensing')}
        >
          <span className="card-number">04 / PLAN</span>
          <CreditCard size={20} aria-hidden="true" />
          <h3>Understand licensing & costs</h3>
          <p>
            Choose a creation or publishing route, check who needs which
            license, and identify the real cost drivers.
          </p>
          <span className="card-action">
            Compare the paths <ArrowRight size={15} />
          </span>
        </button>
      </div>

      <section className="reality-note">
        <div className="note-icon">
          <ShieldCheck size={19} aria-hidden="true" />
        </div>
        <div>
          <strong>Read the platform status before you plan</strong>
          <p>
            Microsoft’s current deployment docs label the Fabric App item
            preview. Availability, licensing, and some service features depend
            on your tenant, region, and workspace. Microsoft’s overview is the
            authority for platform prerequisites; Rayfin’s docs describe its
            CLI and SDK behavior.
          </p>
        </div>
        <ExternalLinkButton href={DOCS.fabricLicensing}>
          Licensing options
        </ExternalLinkButton>
      </section>

      <div className="source-note">
        <span>RESEARCHED AGAINST</span>
        <ExternalLinkButton href={DOCS.fabricOverview}>
          Microsoft Fabric Apps
        </ExternalLinkButton>
        <ExternalLinkButton href={DOCS.quickstart}>
          Rayfin 2.0 quickstart
        </ExternalLinkButton>
        <ExternalLinkButton href={DOCS.cli}>
          Rayfin CLI reference
        </ExternalLinkButton>
      </div>
    </>
  );
}

function EcosystemOverview({
  onNavigate,
}: {
  onNavigate: (page: PageId) => void;
}) {
  const [selectedId, setSelectedId] = useState<(typeof FABRIC_ECOSYSTEM)[number]['id']>(
    'apps'
  );
  const selected =
    FABRIC_ECOSYSTEM.find((item) => item.id === selectedId) ??
    FABRIC_ECOSYSTEM[0];

  return (
    <section className="ecosystem-section" aria-labelledby="ecosystem-title">
      <div className="ecosystem-heading">
        <div>
          <span className="eyebrow">THE ECOSYSTEM</span>
          <h2 id="ecosystem-title">One product, several distinct roles.</h2>
        </div>
        <button
          type="button"
          className="text-button ecosystem-link"
          onClick={() => onNavigate('architecture')}
        >
          See the runtime map
        </button>
      </div>
      <div className="ecosystem-layout">
        <div className="ecosystem-options" role="group" aria-label="Ecosystem components">
          {FABRIC_ECOSYSTEM.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`ecosystem-option${selectedId === item.id ? ' is-selected' : ''}`}
              onClick={() => setSelectedId(item.id)}
              aria-pressed={selectedId === item.id}
            >
              <span className="ecosystem-option-icon">{item.icon}</span>
              <span>
                <small>{item.category}</small>
                <strong>{item.label}</strong>
              </span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="ecosystem-detail" aria-live="polite">
          <span className="ecosystem-detail-category">{selected.category}</span>
          <h3>{selected.label}</h3>
          <p>{selected.description}</p>
          <div className="ecosystem-relationship">
            <ArrowRight size={15} aria-hidden="true" />
            <span>{selected.relationship}</span>
          </div>
          <ExternalLinkButton href={selected.doc}>{selected.docLabel}</ExternalLinkButton>
        </div>
      </div>
    </section>
  );
}

function LicensingPage() {
  const [scenarioId, setScenarioId] = useState<LicenseScenarioId>('publish');
  const selected =
    LICENSE_SCENARIOS.find((scenario) => scenario.id === scenarioId) ??
    LICENSE_SCENARIOS[0];

  return (
    <>
      <SectionHeading
        kicker="07 / ACCESS & COST"
        title="Choose a path. Understand the costs."
      >
        There is no single license that unlocks every Fabric Apps workflow.
        Separate the authoring route, the app’s hosting capacity, and access
        to any connected data.
      </SectionHeading>

      <section className="licensing-principle">
        <div className="licensing-principle-mark">
          <CreditCard size={20} aria-hidden="true" />
        </div>
        <div>
          <strong>Start with the exact way you will create and publish.</strong>
          <p>
            Power BI Pro portal creation is a separate, limited route from
            Fabric-capacity publishing. A user license and a capacity are
            different things; Pro or PPU alone does not provide Fabric
            capacity.
          </p>
        </div>
        <ExternalLinkButton href={DOCS.fabricLicensing}>
          Microsoft licensing options
        </ExternalLinkButton>
      </section>

      <section className="scenario-section" aria-labelledby="scenario-title">
        <div className="scenario-heading">
          <span className="eyebrow">PICK YOUR SCENARIO</span>
          <h2 id="scenario-title">What do you need to do?</h2>
        </div>
        <div className="scenario-tabs" role="group" aria-label="Licensing scenario">
          {LICENSE_SCENARIOS.map((scenario) => (
            <button
              type="button"
              key={scenario.id}
              className={`scenario-tab${scenarioId === scenario.id ? ' is-selected' : ''}`}
              onClick={() => setScenarioId(scenario.id)}
              aria-pressed={scenarioId === scenario.id}
            >
              {scenario.label}
            </button>
          ))}
        </div>
        <div className="scenario-answer" aria-live="polite">
          <span className="eyebrow">{selected.label}</span>
          <h3>{selected.headline}</h3>
          <ul>
            {selected.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <ExternalLinkButton href={selected.doc}>{selected.docLabel}</ExternalLinkButton>
        </div>
      </section>

      <section className="path-comparison" aria-labelledby="path-comparison-title">
        <SectionHeading
          kicker="CREATION ROUTES"
          title="Two portal paths; other tools have their own rules."
        >
          Microsoft’s licensing matrix governs the portal routes. Do not infer
          that a Pro workspace can publish a Rayfin, Fabricator, or desktop
          project.
        </SectionHeading>
        <div className="licensing-table-wrap">
          <table className="licensing-table">
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">User entitlement</th>
                <th scope="col">Workspace / publish destination</th>
                <th scope="col">Important boundary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Power BI portal · Pro</th>
                <td>Power BI Pro for the creator</td>
                <td>Microsoft-managed capacity; no assigned Fabric capacity needed for this route</td>
                <td>Pro limits apply: for example, PostgreSQL app DB up to 1 GB; no Functions, file storage, anonymous data access, or public sites.</td>
              </tr>
              <tr>
                <th scope="row">Fabric portal · capacity-backed</th>
                <td>Fabric Free or paid Fabric user license</td>
                <td>Fabric F SKU, active Fabric trial, or existing Power BI Premium P SKU with Fabric enabled</td>
                <td>Capacity pays the app’s applicable compute usage. A Fabric user license alone is not capacity.</td>
              </tr>
              <tr>
                <th scope="row">Rayfin CLI · Fabricator</th>
                <td>Fabric account and project/workspace permissions</td>
                <td>Usable Fabric capacity for the app-specific publish workflow</td>
                <td>Local preview and editing do not publish or make a hosted app free.</td>
              </tr>
              <tr>
                <th scope="row">Power BI Desktop for Apps</th>
                <td>Power BI sign-in, GitHub sign-in with Copilot access</td>
                <td>Currently requires an eligible capacity-backed workspace for publishing</td>
                <td>This preview’s capacity requirement is distinct from the Power BI Pro portal route.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="license-footnote">
          <strong>F64 is not the app-item sharing threshold.</strong> The F64
          rule commonly cited for free users applies to viewing Power BI content
          in qualifying scenarios. A capacity-backed Fabric App item has its
          own licensing guidance; dependent Power BI semantic models still
          follow their separate permissions and license rules.
        </div>
      </section>

      <section className="cost-section" aria-labelledby="cost-title">
        <SectionHeading
          kicker="WHO PAYS FOR WHAT"
          title="Separate software, AI access, and Fabric consumption."
        >
          Avoid hard-coded totals: SKU, region, duration, workload, storage,
          entitlements, and current plan terms all change the result.
        </SectionHeading>
        <div className="cost-grid">
          {COST_CATEGORIES.map((category) => (
            <article className="cost-card" key={category.label}>
              <span className="cost-owner">{category.owner}</span>
              <span className="cost-icon">{category.icon}</span>
              <h3>{category.label}</h3>
              <p>{category.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cost-drivers" aria-labelledby="cost-drivers-title">
        <div className="cost-drivers-copy">
          <span className="eyebrow">CAPACITY-BACKED APPS</span>
          <h2 id="cost-drivers-title">Measure the workload, not the source code.</h2>
          <p>
            Microsoft’s current meter list includes app database compute and
            storage; GraphQL request/response processing (10 CUs per hour);
            User Data Functions execution and metadata/storage operations
            (portal test sessions have a 15-minute minimum); and OneLake static
            content reads, writes, and storage. The amount depends on actual
            activity and enabled services, so there is no reliable per-app
            fixed estimate. Check the live meter definitions before estimating.
          </p>
          <div className="cost-links">
            <ExternalLinkButton href={DOCS.fabricPricing}>
              Fabric Apps pricing meters
            </ExternalLinkButton>
            <ExternalLinkButton href={DOCS.fabricCapacityMetrics}>
              Capacity Metrics app
            </ExternalLinkButton>
            <ExternalLinkButton href={DOCS.fabricCapacityPricing}>
              Live Azure Fabric pricing
            </ExternalLinkButton>
          </div>
        </div>
        <div className="cost-checklist">
          <strong>Before estimating, record</strong>
          <ul>
            <li>Capacity SKU, region, pay-as-you-go or reservation, and operating hours</li>
            <li>Which app services are enabled and expected request volume</li>
            <li>Storage needs and any separately hosted semantic models or data sources</li>
            <li>Who needs Pro, Fabric, model Build/read, or GitHub Copilot access</li>
            <li>Whether capacity can be paused without interrupting users</li>
          </ul>
          <ExternalLinkButton href={DOCS.fabricPauseResume}>
            Pause and resume behavior
          </ExternalLinkButton>
        </div>
      </section>

      <section className="license-source-strip" aria-label="Official pricing and license references">
        <span className="eyebrow">CHECK CURRENT TERMS</span>
        <ExternalLinkButton href={DOCS.powerBiPricing}>Power BI plans</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.copilotPlans}>GitHub Copilot plans</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.powerBiDesktopDownload}>Power BI Desktop</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.rayfinLicense}>Rayfin MIT license</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.rayfinPricing}>Rayfin capacity billing</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.fabricatorFaq}>Fabricator terms and FAQ</ExternalLinkButton>
      </section>
    </>
  );
}

function ArchitecturePage({
  mode,
  onModeChange,
  selectedNode,
  onSelectNode,
  node: selectedArchitectureNode,
}: {
  mode: 'local' | 'deployed';
  onModeChange: (mode: 'local' | 'deployed') => void;
  selectedNode: string;
  onSelectNode: (id: string) => void;
  node: (typeof ARCHITECTURE_NODES)[number];
}) {
  const isLocal = mode === 'local';

  return (
    <>
      <SectionHeading
        kicker="02 / SYSTEM MAP"
        title="A small app, backed by managed services."
      >
        Not every project turns on every service. Switch between local
        development and a deployed app, then select a component to follow its
        responsibilities.
      </SectionHeading>

      <div className="mode-switch" role="group" aria-label="Architecture view">
        <button
          type="button"
          className={isLocal ? 'is-selected' : ''}
          aria-pressed={isLocal}
          onClick={() => onModeChange('local')}
        >
          <span className="mode-dot local-dot" />
          Local development
        </button>
        <button
          type="button"
          className={!isLocal ? 'is-selected' : ''}
          aria-pressed={!isLocal}
          onClick={() => onModeChange('deployed')}
        >
          <span className="mode-dot fabric-dot" />
          Deployed in Fabric
        </button>
      </div>

      <div
        className={`architecture-map${isLocal ? ' is-local' : ' is-deployed'}`}
        role="group"
        aria-label={
          isLocal
            ? 'Architecture during local development'
            : 'Deployed Fabric app architecture'
        }
      >
        <div className="map-outside">
          <div className="map-boundary-label">
            {isLocal ? 'DEVELOPER MACHINE' : 'USER BROWSER'}
          </div>
          <ArchitectureNodeButton
            node={ARCHITECTURE_NODES[0]}
            selected={selectedNode === 'frontend'}
            onSelect={onSelectNode}
            status={isLocal ? 'Runs locally' : 'Browser runtime'}
          />
        </div>
        <div className="map-connector map-link-client">
          <span>{isLocal ? 'local requests' : 'HTTPS'}</span>
        </div>
        <div className="map-client">
          <ArchitectureNodeButton
            node={ARCHITECTURE_NODES[1]}
            selected={selectedNode === 'client'}
            onSelect={onSelectNode}
            status="Registered services"
          />
        </div>
        <div className="map-connector map-link-backend">
          <span>{isLocal ? 'configured Fabric endpoint' : 'app endpoint'}</span>
        </div>
        <div className="fabric-boundary">
          <div className="fabric-boundary-header">
            <div>
              <span className="boundary-overline">MANAGED RUNTIME</span>
              <strong>Microsoft Fabric</strong>
            </div>
            <span className="boundary-badge">
              {isLocal ? 'BACKEND IS IN FABRIC' : 'APP SERVICES'}
            </span>
          </div>
          <div className="fabric-nodes">
            <ArchitectureNodeButton
              node={ARCHITECTURE_NODES[2]}
              selected={selectedNode === 'backend'}
              onSelect={onSelectNode}
              status="Configured backend"
            />
            <ArchitectureNodeButton
              node={ARCHITECTURE_NODES[3]}
              selected={selectedNode === 'hosting'}
              onSelect={onSelectNode}
              status={isLocal ? 'Not publishing now' : 'Serves app bundle'}
            />
            <ArchitectureNodeButton
              node={ARCHITECTURE_NODES[4]}
              selected={selectedNode === 'data'}
              onSelect={onSelectNode}
              status="Optional · off here"
            />
            <ArchitectureNodeButton
              node={ARCHITECTURE_NODES[5]}
              selected={selectedNode === 'identity'}
              onSelect={onSelectNode}
              status={isLocal ? 'CLI + local auth' : 'Fabric SSO'}
            />
            <ArchitectureNodeButton
              node={ARCHITECTURE_NODES[6]}
              selected={selectedNode === 'extensions'}
              onSelect={onSelectNode}
              status="Optional services"
            />
          </div>
          <div className="map-footnote">
            <span className="map-footnote-mark" />
            {isLocal
              ? 'The CLI prepares the backend; the frontend stays on your machine. No static bundle is published by this step.'
              : 'Fabric manages hosting, networking, and scaling. Service composition follows the project configuration.'}
          </div>
        </div>
      </div>

      <div className="architecture-detail">
        <div className="detail-index">
          <span>SELECTED COMPONENT</span>
          <strong>{selectedArchitectureNode.icon}</strong>
        </div>
        <div className="detail-copy">
          <div className="detail-meta">
            <span>{selectedArchitectureNode.owner}</span>
          </div>
          <h3>{selectedArchitectureNode.title}</h3>
          <p>{selectedArchitectureNode.description}</p>
          <div className="connection-note">
            <ArrowRight size={15} aria-hidden="true" />
            <span>{selectedArchitectureNode.connection}</span>
          </div>
        </div>
        <div className="mode-explainer">
          <span>{isLocal ? 'LOCAL DEVELOPMENT' : 'DEPLOYED APP'}</span>
          <p>
            {isLocal
              ? 'Rayfin dev bridges local frontend work to the configured backend in Fabric. It is not a local full-stack emulator.'
              : 'Rayfin up publishes the production frontend and configured services to the target Fabric app.'}
          </p>
          <ExternalLinkButton
            href={isLocal ? DOCS.localDevelopment : DOCS.fabricOverview}
          >
            {isLocal ? 'Local dev details' : 'Microsoft architecture'}
          </ExternalLinkButton>
        </div>
      </div>

      <div className="gap-callout">
        <div className="gap-label">A USEFUL DISTINCTION</div>
        <p>
          Microsoft documents the managed Fabric app and its child services.
          Rayfin adds the developer workflow and optional capabilities. The data
          service is off in this project, so its SQL database and generated
          GraphQL API are not present just because the workspace has a data
          package.
        </p>
        <ExternalLinkButton href={DOCS.projectStructure}>
          How services map to config
        </ExternalLinkButton>
      </div>
    </>
  );
}

function ArchitectureNodeButton({
  node,
  selected,
  onSelect,
  status,
}: {
  node: (typeof ARCHITECTURE_NODES)[number];
  selected: boolean;
  onSelect: (id: string) => void;
  status: string;
}) {
  return (
    <button
      type="button"
      className={`architecture-node${selected ? ' is-selected' : ''}`}
      onClick={() => onSelect(node.id)}
      aria-pressed={selected}
    >
      <span className="architecture-node-icon">{node.icon}</span>
      <span className="architecture-node-copy">
        <strong>{node.label}</strong>
        <small>{status}</small>
      </span>
      <ChevronRight size={16} aria-hidden="true" />
    </button>
  );
}

function JourneyPage({
  view,
  approachId,
  step,
  isPlaying,
  prefersReducedMotion,
  onChooseApproach,
  onShowSelector,
  onShowComparison,
  onSelectStep,
  onTogglePlay,
  onRestart,
  copied,
  onCopy,
}: {
  view: 'select' | 'journey' | 'compare';
  approachId: BuildApproachId;
  step: number;
  isPlaying: boolean;
  prefersReducedMotion: boolean;
  onChooseApproach: (approachId: BuildApproachId) => void;
  onShowSelector: () => void;
  onShowComparison: () => void;
  onSelectStep: (step: number) => void;
  onTogglePlay: () => void;
  onRestart: () => void;
  copied: string | null;
  onCopy: (value: string) => void;
}) {
  const approach =
    BUILD_APPROACHES.find((item) => item.id === approachId) ??
    BUILD_APPROACHES[0];
  const activeStep = approach.steps[Math.min(step, approach.steps.length - 1)];
  const progress = ((step + 1) / approach.steps.length) * 100;
  const approachIcons: Record<BuildApproachId, typeof Building2> = {
    fabric: Building2,
    powerbi: ChartNoAxesCombined,
    local: Code2,
    git: GitBranch,
    automation: Workflow,
    fabricator: PanelsTopLeft,
  };
  const ApproachIcon = approachIcons[approach.id];

  if (view === 'select') {
    return (
      <>
        <SectionHeading
          kicker="03 / BUILD & DEPLOY"
          title="Choose the workflow that fits your team."
        >
          Explore Fabric-native item management, Power BI Desktop authoring,
          code-first Rayfin development, Git, CI/CD, and Fabricator’s community
          workbench. These tools can complement one another; the release paths
          are not all mutually exclusive.
        </SectionHeading>

        <div className="build-approach-grid">
          {BUILD_APPROACHES.map((item) => {
            const Icon = approachIcons[item.id];
            return (
              <article className="build-approach-card" key={item.id}>
                <div className="build-approach-card-top">
                  <span className="build-approach-icon">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span>{item.symbol}</span>
                </div>
                <h2>{item.title}</h2>
                <p>{item.summary}</p>
                <div className="build-card-meta">
                  <span>BEST FOR</span>
                  <p>{item.suitableFor}</p>
                </div>
                <div className="build-card-meta">
                  <span>KEY BENEFIT</span>
                  <p>{item.advantages[0]}</p>
                </div>
                <div className="build-card-caution">
                  <CircleHelp size={14} aria-hidden="true" />
                  <span>{item.considerations[0]}</span>
                </div>
                <button
                  type="button"
                  className="build-explore-button"
                  onClick={() => onChooseApproach(item.id)}
                  aria-label={`Explore ${item.label} journey`}
                >
                  Explore this approach <ArrowRight size={15} aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="build-compare-cta"
          onClick={onShowComparison}
        >
          <span>
            <strong>Not sure which route fits?</strong>
            Compare tooling, testing, source control, environments, and release
            behavior side by side.
          </span>
          <span>Compare approaches <ArrowRight size={15} aria-hidden="true" /></span>
        </button>

        <div className="build-fact-callout">
          <span className="eyebrow">IMPORTANT DISTINCTION</span>
          <p>
            The Fabric portal creates and manages the App item; the current
            Microsoft docs describe source editing through a local project in
            VS Code, not an in-portal editor for the app project. Fabric Git and
            deployment pipelines manage the deployable item definition. Power BI
            Desktop for Apps is a separate Microsoft preview authoring app;
            Fabricator is an independent community workbench for Rayfin.
          </p>
        </div>
      </>
    );
  }

  if (view === 'compare') {
    return (
      <>
        <div className="build-view-toolbar">
          <button
            type="button"
            className="build-back-button"
            onClick={onShowSelector}
          >
            <ChevronRight size={14} aria-hidden="true" />
            All approaches
          </button>
          <span>APPROACH COMPARISON</span>
        </div>
        <SectionHeading
          kicker="03 / BUILD & DEPLOY"
          title="Compare the trade-offs before choosing."
        >
          These tools can be combined. Power BI Desktop and Fabricator are
          authoring workbenches; Git tracks source; Fabric pipelines promote
          supported item definitions; Rayfin CLI publishes project source.
        </SectionHeading>

        <div
          className="build-comparison-wrap"
          role="region"
          aria-label="Build and deployment approach comparison"
          tabIndex={0}
        >
          <table className="build-comparison">
            <thead>
              <tr>
                <th scope="col">Area</th>
                {BUILD_APPROACHES.map((item) => (
                  <th scope="col" key={item.id}>{item.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BUILD_COMPARISON.map((row) => (
                <tr key={row.area}>
                  <th scope="row">{row.area}</th>
                  {BUILD_APPROACHES.map((item) => (
                    <td key={item.id}>{row.values[item.id]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="build-fact-callout">
          <span className="eyebrow">PICK THE RELEASE MECHANISM SEPARATELY</span>
          <p>
            Fabric deployment pipelines promote supported Fabric item
            definitions between stages.             Microsoft’s Fabric Apps CI example uses GitHub Actions plus Rayfin
            CLI to deploy checked-out project source. Fabricator also invokes
            Rayfin CLI for publishing. These differ from Fabric pipelines,
            which promote supported item definitions rather than build source.
          </p>
        </div>
        <div className="build-doc-links">
          <ExternalLinkButton href={DOCS.fabricGit}>
            Fabric Apps Git and pipelines
          </ExternalLinkButton>
          <ExternalLinkButton href={DOCS.fabricGitActions}>
            Microsoft GitHub Actions guide
          </ExternalLinkButton>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="build-view-toolbar">
        <button
          type="button"
          className="build-back-button"
          onClick={onShowSelector}
        >
          <ChevronRight size={14} aria-hidden="true" />
          All approaches
        </button>
        <button
          type="button"
          className="build-compare-button"
          onClick={onShowComparison}
        >
          Compare approaches <ArrowRight size={14} aria-hidden="true" />
        </button>
      </div>
      <nav className="build-approach-tabs" aria-label="Choose a development approach">
        {BUILD_APPROACHES.map((item) => (
          <button
            type="button"
            key={item.id}
            className={item.id === approach.id ? 'is-active' : ''}
            aria-pressed={item.id === approach.id}
            onClick={() => onChooseApproach(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <SectionHeading
        kicker={`03 / ${approach.symbol} APPROACH`}
        title={approach.title}
      >
        {approach.summary}
      </SectionHeading>

      <div className="build-prerequisite-panel">
        <div>
          <span className="eyebrow">BEFORE YOU START</span>
          <ul>
            {approach.prerequisites.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div className="build-considerations">
          <span className="eyebrow">KEEP IN MIND</span>
          <ul>
            {approach.considerations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>

      <div className="journey-progress">
        <div className="progress-copy">
          <span>YOUR PLACE IN THIS APPROACH</span>
          <strong>
            {String(step + 1).padStart(2, '0')}
            <span> / {String(approach.steps.length).padStart(2, '0')}</span>
          </strong>
        </div>
        <div
          className="progress-track"
          role="progressbar"
          aria-label={`${approach.label} journey progress`}
          aria-valuemin={1}
          aria-valuemax={approach.steps.length}
          aria-valuenow={step + 1}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-copy progress-stage">
          <span>STEP {String(step + 1).padStart(2, '0')}</span>
          <strong>{activeStep.label}</strong>
        </div>
      </div>

      <div
        className={`build-flow${approach.steps.length > 4 ? ' has-many-steps' : ''}`}
        aria-label={`${approach.label} process diagram`}
      >
        <div className="build-flow-line" aria-hidden="true">
          <span
            style={{
              width: `${approach.steps.length > 1 ? (step / (approach.steps.length - 1)) * 100 : 100}%`,
            }}
          />
        </div>
        {approach.steps.map((item, index) => (
          <button
            type="button"
            key={item.label}
            className={`build-flow-node${index === step ? ' is-active' : ''}${index < step ? ' is-complete' : ''}`}
            onClick={() => onSelectStep(index)}
            aria-current={index === step ? 'step' : undefined}
            aria-label={`Step ${index + 1}: ${item.label} — ${item.actor}`}
          >
            <span>
              {index < step ? (
                <Check size={13} aria-hidden="true" />
              ) : (
                String(index + 1).padStart(2, '0')
              )}
            </span>
            <strong>{item.label}</strong>
            <small>{item.actor}</small>
          </button>
        ))}
      </div>

      <div className="journey-layout">
        <nav
          className="journey-step-list"
          aria-label={`${approach.label} journey steps`}
        >
          {approach.steps.map((item, index) => (
            <button
              type="button"
              key={item.label}
              className={`journey-step${step === index ? ' is-active' : ''}${step > index ? ' is-done' : ''}`}
              onClick={() => onSelectStep(index)}
              aria-current={step === index ? 'step' : undefined}
            >
              <span className="step-marker">
                {step > index ? (
                  <Check size={13} aria-hidden="true" />
                ) : (
                  String(index + 1).padStart(2, '0')
                )}
              </span>
              <span>{item.label}</span>
              {step === index && <ChevronRight size={15} aria-hidden="true" />}
            </button>
          ))}
        </nav>

        <section className="journey-stage" aria-live="polite">
          <div className="stage-topline">
            <span>{activeStep.location}</span>
            <span>{activeStep.actor}</span>
          </div>
          <div className="stage-heading">
            <span className="stage-icon">
              <ApproachIcon size={19} aria-hidden="true" />
            </span>
            <div>
              <span className="eyebrow">STEP {String(step + 1).padStart(2, '0')}</span>
              <h2>{activeStep.title}</h2>
            </div>
          </div>
          <p className="stage-explanation">{activeStep.explanation}</p>

          {activeStep.image && (
            <figure className="build-stage-image">
              <img src={activeStep.image.src} alt={activeStep.image.alt} />
              <figcaption>{activeStep.image.caption}</figcaption>
            </figure>
          )}

          {activeStep.command && (
            <div className="stage-command">
              <div className="terminal-bar">
                <span className="terminal-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>VERIFIED COMMAND</span>
                <CopyButton
                  value={activeStep.command}
                  copied={copied}
                  onCopy={onCopy}
                />
              </div>
              <pre>
                <code>
                  {activeStep.command.split('\n').map((line, index) => (
                    <span className="command-line" key={`${line}-${index}`}>
                      <span className="command-prompt">$</span> {line}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          )}

          <div className="stage-why">
            <span>BEHIND THE SCENES</span>
            <p>{activeStep.behindScenes}</p>
          </div>
          {activeStep.resources && (
            <div className="stage-resources">
              <span>FILES / RESOURCES</span>
              <p>{activeStep.resources}</p>
            </div>
          )}
          <div className="stage-note">
            <CircleHelp size={16} aria-hidden="true" />
            <p>{activeStep.pitfall}</p>
          </div>
          <div className="stage-footer">
            <ExternalLinkButton href={activeStep.doc}>
              {activeStep.docLabel}
            </ExternalLinkButton>
            <div className="step-controls">
              <button
                className="control-button"
                type="button"
                aria-label="Restart journey"
                title="Restart journey"
                onClick={onRestart}
              >
                <RotateCcw size={16} aria-hidden="true" />
              </button>
              <button
                className="control-button"
                type="button"
                onClick={onTogglePlay}
                disabled={prefersReducedMotion}
                aria-label={isPlaying ? 'Pause walkthrough' : 'Play walkthrough'}
                title={
                  prefersReducedMotion
                    ? 'Autoplay is disabled by reduced-motion preference'
                    : isPlaying
                      ? 'Pause walkthrough'
                      : 'Play walkthrough'
                }
              >
                {isPlaying ? (
                  <Pause size={16} aria-hidden="true" />
                ) : (
                  <Play size={16} aria-hidden="true" />
                )}
              </button>
              <button
                className="control-button"
                type="button"
                onClick={() => onSelectStep(Math.max(step - 1, 0))}
                disabled={step === 0}
                aria-label="Step backward"
                title="Step backward"
              >
                <ArrowRight className="build-back-icon" size={16} aria-hidden="true" />
              </button>
              <button
                className="control-button control-next"
                type="button"
                onClick={() => onSelectStep(Math.min(step + 1, approach.steps.length - 1))}
                disabled={step === approach.steps.length - 1}
                aria-label="Step forward"
                title="Step forward"
              >
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="build-doc-links">
        {approach.docs.map((doc) => (
          <ExternalLinkButton key={doc.label} href={doc.url}>
            {doc.label}
          </ExternalLinkButton>
        ))}
      </div>
      {approach.relatedApproaches && (
        <div className="build-related-approaches">
          <span>RELATED JOURNEYS</span>
          {approach.relatedApproaches.map((relatedId) => {
            const relatedApproach = BUILD_APPROACHES.find(
              (item) => item.id === relatedId
            );
            return relatedApproach ? (
              <button
                type="button"
                key={relatedApproach.id}
                aria-label={`Explore related approach: ${relatedApproach.label}`}
                onClick={() => onChooseApproach(relatedApproach.id)}
              >
                {relatedApproach.label} <ArrowRight size={13} aria-hidden="true" />
              </button>
            ) : null;
          })}
        </div>
      )}
    </>
  );
}

function ProjectPage({
  expandedFolders,
  selectedPath,
  onToggleFolder,
  onSelectPath,
}: {
  expandedFolders: Set<string>;
  selectedPath: string;
  onToggleFolder: (path: string) => void;
  onSelectPath: (path: string) => void;
}) {
  const node = findProjectNode(selectedPath);

  return (
    <>
      <SectionHeading
        kicker="04 / PROJECT STRUCTURE"
        title="A project is a map of responsibilities."
      >
        Expand folders and select a file to see its job. This is the Universal
        App workspace used here—not a promise that every Rayfin template has
        the same tree.
      </SectionHeading>

      <div className="project-template-note">
        <div className="template-icon">
          <FolderOpen size={19} aria-hidden="true" />
        </div>
        <div>
          <strong>Universal App workspace</strong>
          <p>
            This repo uses `packages/frontend`, `packages/data`, and
            `packages/shared`. Flat templates can put entities under
            `rayfin/data` instead.
          </p>
        </div>
        <ExternalLinkButton href={DOCS.projectStructure}>
          Template layouts
        </ExternalLinkButton>
      </div>

      <div className="project-explorer">
        <div className="tree-panel">
          <div className="tree-titlebar">
            <span>PROJECT FILES</span>
            <span>RAYFIN WORKSPACE</span>
          </div>
          <div className="project-tree" role="tree" aria-label="Project files">
            <TreeNode
              node={PROJECT_TREE[0]}
              depth={0}
              expandedFolders={expandedFolders}
              selectedPath={selectedPath}
              onToggleFolder={onToggleFolder}
              onSelectPath={onSelectPath}
            />
          </div>
          <div className="tree-key">
            <span><i className="key-dot current" />This project</span>
            <span><i className="key-dot generated" />Generated</span>
            <span><i className="key-dot optional" />Optional</span>
          </div>
        </div>

        <div className="file-detail">
          <div className="file-detail-top">
            <span className="file-kind">
              {node?.kind === 'folder' ? 'FOLDER' : 'FILE'}
            </span>
            <span className={`file-status file-status-${node?.kind ?? 'file'}`}>
              {node?.kind === 'generated'
                ? 'GENERATED'
                : node?.kind === 'optional'
                  ? 'OPTIONAL'
                  : node?.kind === 'folder'
                    ? 'EXPLORE'
                    : 'SOURCE'}
            </span>
          </div>
          <div className="file-detail-icon">
            {node?.kind === 'folder' ? (
              <FolderOpen size={24} aria-hidden="true" />
            ) : (
              <File size={23} aria-hidden="true" />
            )}
          </div>
          <code className="file-path">{node?.path ?? selectedPath}</code>
          <h2>{node?.name ?? selectedPath}</h2>
          <p>{node?.description ?? 'Select a file or folder to learn more.'}</p>
          <div className="file-relations">
            <span>HOW IT FITS</span>
            <div className="relation-flow">
              <span>{relationshipForPath(selectedPath).source}</span>
              <ArrowRight size={14} aria-hidden="true" />
              <span>{relationshipForPath(selectedPath).target}</span>
            </div>
            <p>{relationshipForPath(selectedPath).detail}</p>
          </div>
        </div>
      </div>

      <div className="schema-flow">
        <div className="schema-flow-copy">
          <span className="eyebrow">A MODEL BECOMES A SERVICE</span>
          <h2>One TypeScript definition. A configured data path.</h2>
          <p>
            When the optional data service is enabled, Rayfin compiles
            registered entities, applies the schema to its managed database,
            and exposes a generated API. This sequence is not active in this
            repository’s current configuration.
          </p>
        </div>
        <div className="schema-flow-steps">
          <div><code>@entity()</code><span>TypeScript model</span></div>
          <ArrowRight size={16} aria-hidden="true" />
          <div><code>schema.ts</code><span>Registration</span></div>
          <ArrowRight size={16} aria-hidden="true" />
          <div><code>rayfin up</code><span>Apply / deploy</span></div>
          <ArrowRight size={16} aria-hidden="true" />
          <div><code>SQL + API</code><span>Managed service</span></div>
        </div>
        <ExternalLinkButton href={DOCS.data}>
          Follow the data guide
        </ExternalLinkButton>
      </div>
    </>
  );
}

function TreeNode({
  node,
  depth,
  expandedFolders,
  selectedPath,
  onToggleFolder,
  onSelectPath,
}: {
  node: ProjectTreeNode;
  depth: number;
  expandedFolders: Set<string>;
  selectedPath: string;
  onToggleFolder: (path: string) => void;
  onSelectPath: (path: string) => void;
}) {
  const hasChildren = Boolean(node.children?.length);
  const isExpanded = expandedFolders.has(node.path);
  const isFolder = node.kind === 'folder';
  const isSelected = selectedPath === node.path;

  return (
    <div role="none">
      <div
        className={`tree-row${isSelected ? ' is-selected' : ''}${node.kind === 'generated' ? ' is-generated' : ''}${node.kind === 'optional' ? ' is-optional' : ''}`}
        style={{ paddingLeft: `${12 + depth * 17}px` }}
        role="treeitem"
        aria-selected={isSelected}
        aria-expanded={isFolder ? isExpanded : undefined}
      >
        <button
          type="button"
          className="tree-item-button"
          onClick={() => {
            onSelectPath(node.path);
            if (isFolder) onToggleFolder(node.path);
          }}
          aria-label={
            isFolder
              ? `${isExpanded ? 'Collapse' : 'Expand'} ${node.name}`
              : `Select ${node.path}`
          }
        >
          <span className="tree-chevron">
            {isFolder ? (
              isExpanded ? (
                <ChevronDown size={14} aria-hidden="true" />
              ) : (
                <ChevronRight size={14} aria-hidden="true" />
              )
            ) : null}
          </span>
          <span className={`tree-icon tree-icon-${node.kind}`}>
            {isFolder ? (
              isExpanded ? (
                <FolderOpen size={15} aria-hidden="true" />
              ) : (
                <Folder size={15} aria-hidden="true" />
              )
            ) : (
              <File size={14} aria-hidden="true" />
            )}
          </span>
          <span className="tree-name">{node.name}</span>
          {node.kind === 'generated' && <span className="tree-badge">GEN</span>}
          {node.kind === 'optional' && <span className="tree-badge">OPT</span>}
        </button>
      </div>
      {hasChildren && node.children && isExpanded && (
        <div role="group">
          {node.children.map((child) => (
            <TreeNode
              key={child.path}
              node={child}
              depth={depth + 1}
              expandedFolders={expandedFolders}
              selectedPath={selectedPath}
              onToggleFolder={onToggleFolder}
              onSelectPath={onSelectPath}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function findProjectNode(path: string): ProjectTreeNode | undefined {
  const search = (nodes: readonly ProjectTreeNode[]): ProjectTreeNode | undefined => {
    for (const node of nodes) {
      if (node.path === path) return node;
      if (node.children) {
        const found = search(node.children);
        if (found) return found;
      }
    }
    return undefined;
  };
  return search(PROJECT_TREE);
}

function relationshipForPath(path: string) {
  if (path.includes('frontend')) {
    return {
      source: 'Frontend source',
      target: 'Static hosting',
      detail:
        'Vite builds the frontend package; the configured static hosting service publishes that output during `rayfin up`.',
    };
  }
  if (path.includes('data') || path.includes('Item')) {
    return {
      source: 'Data package',
      target: 'Fabric SQL + API',
      detail:
        'Registered entities are applied only when the data service is enabled. A workspace folder alone does not provision a database.',
    };
  }
  if (path.includes('shared')) {
    return {
      source: 'Shared contracts',
      target: 'Frontend + packages',
      detail:
        'Browser-safe types can be used across packages without importing decorated runtime entity classes into the frontend.',
    };
  }
  if (path.includes('rayfin.yml') || path.startsWith('rayfin/')) {
    return {
      source: 'rayfin.yml',
      target: 'Rayfin CLI',
      detail:
        'The CLI reads service configuration and package paths to decide what to prepare and deploy.',
    };
  }
  return {
    source: 'Workspace root',
    target: 'Package scripts',
    detail:
      'Root scripts coordinate package builds and the Rayfin development/deployment workflow.',
  };
}

function CapabilitiesPage({
  selectedId,
  selected,
  onSelect,
}: {
  selectedId: string;
  selected: (typeof CAPABILITIES)[number];
  onSelect: (id: string) => void;
}) {
  return (
    <>
      <SectionHeading
        kicker="05 / CAPABILITIES"
        title="Start small. Compose what the app needs."
      >
        Rayfin makes several backend capabilities available, but a package
        folder or an SDK dependency does not mean a service is deployed.
        Configuration, environment availability, and permissions still
        matter.
      </SectionHeading>

      <div className="capability-layout">
        <div className="capability-list" aria-label="Rayfin capabilities">
          {CAPABILITIES.map((capability, index) => (
            <button
              type="button"
              key={capability.id}
              className={`capability-item${selectedId === capability.id ? ' is-active' : ''}`}
              onClick={() => onSelect(capability.id)}
              aria-pressed={selectedId === capability.id}
            >
              <span className="capability-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="capability-title">{capability.title}</span>
              <span className="capability-status">{capability.status}</span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="capability-detail" aria-live="polite">
          <span className="eyebrow">CAPABILITY EXPLAINED</span>
          <div className="capability-detail-mark">
            <Layers3 size={20} aria-hidden="true" />
          </div>
          <span className="capability-detail-status">{selected.status}</span>
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
          <div className="capability-example">
            <span>MENTAL MODEL</span>
            <code>{selected.example}</code>
          </div>
          {'codeExample' in selected && selected.codeExample && (
            <div className="capability-code">
              <div>
                <span>TYPE-SAFE MODEL + ROW POLICY</span>
                <span>rayfin/data/Item.ts</span>
              </div>
              <pre><code>{selected.codeExample}</code></pre>
              <p>
                A text field has an explicit maximum length, and the row policy
                scopes access to the signed-in user. Register the entity and
                enable the data service before applying it.
              </p>
            </div>
          )}
          <ExternalLinkButton href={selected.doc}>
            {selected.docLabel}
          </ExternalLinkButton>
        </div>
      </div>

      <div className="security-callout">
        <div className="security-icon">
          <ShieldCheck size={20} aria-hidden="true" />
        </div>
        <div>
          <span className="eyebrow">SECURITY IS PART OF THE DESIGN</span>
          <h2>Identity is not authorization.</h2>
          <p>
            Fabric SSO answers who signed in. App item permissions, entity
            policies, connector identity, and trusted server-side code answer
            what that identity may access. Review the identity path for each
            service before shipping.
          </p>
        </div>
        <ExternalLinkButton href={DOCS.limitations}>
          Limitations and safeguards
        </ExternalLinkButton>
      </div>

      <div className="capability-docs">
        <span className="eyebrow">GO DEEPER</span>
        <ExternalLinkButton href={DOCS.auth}>Authentication</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.functions}>Functions</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.connectors}>Connectors</ExternalLinkButton>
        <ExternalLinkButton href={DOCS.storage}>Storage</ExternalLinkButton>
      </div>
    </>
  );
}

function CliPage({
  category,
  search,
  selectedCommand,
  visibleCommands,
  copied,
  onCategoryChange,
  onSearchChange,
  onSelectCommand,
  onCopy,
}: {
  category: (typeof CLI_CATEGORIES)[number];
  search: string;
  selectedCommand: (typeof CLI_COMMANDS)[number];
  visibleCommands: (typeof CLI_COMMANDS)[number][];
  copied: string | null;
  onCategoryChange: (category: (typeof CLI_CATEGORIES)[number]) => void;
  onSearchChange: (query: string) => void;
  onSelectCommand: (commandId: string) => void;
  onCopy: (value: string) => void;
}) {
  const selectedIsVisible = visibleCommands.some(
    (command) => command.id === selectedCommand.id
  );
  const activeCommand = selectedIsVisible ? selectedCommand : visibleCommands[0];

  return (
    <>
      <SectionHeading
        kicker="06 / RAYFIN CLI"
        title="Look up the command. Understand the moment."
      >
        This reference is aligned to Rayfin CLI 2.0.0, installed in this
        project. Search or filter the documented top-level commands, then open
        the official page for its complete syntax and flags.
      </SectionHeading>

      <div className="cli-toolbar">
        <label className="cli-search">
          <Search size={17} aria-hidden="true" />
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search commands, tasks, or terms…"
            aria-label="Search CLI commands"
          />
          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onSearchChange('')}
            >
              <X size={15} />
            </button>
          )}
        </label>
        <span className="cli-version-note">
          <span className="version-dot" />
          2.0.0 · version matched
        </span>
      </div>

      <div className="cli-categories" role="group" aria-label="CLI categories">
        {CLI_CATEGORIES.map((item) => (
          <button
            type="button"
            aria-pressed={category === item}
            className={category === item ? 'is-active' : ''}
            key={item}
            onClick={() => onCategoryChange(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="cli-reference">
        <div className="command-list" role="listbox" aria-label="Rayfin commands">
          <div className="command-list-header">
            <span>DOCUMENTED COMMANDS</span>
            <span>{visibleCommands.length} shown</span>
          </div>
          {visibleCommands.length > 0 ? (
            visibleCommands.map((command) => (
              <button
                type="button"
                role="option"
                aria-selected={activeCommand?.id === command.id}
                key={command.id}
                className={`command-list-item${activeCommand?.id === command.id ? ' is-active' : ''}`}
                onClick={() => onSelectCommand(command.id)}
              >
                <span className="command-icon"><Terminal size={15} /></span>
                <span className="command-list-copy">
                  <strong>{command.label}</strong>
                  <code>{command.synopsis}</code>
                </span>
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            ))
          ) : (
            <div className="command-empty">
              <Search size={18} aria-hidden="true" />
              <strong>No matching commands</strong>
              <span>Try another phrase or choose “All”.</span>
            </div>
          )}
        </div>

        {activeCommand ? (
          <div className="command-detail" aria-live="polite">
            <div className="command-detail-header">
              <span className="command-category-tag">
                {activeCommand.category}
              </span>
              <ExternalLinkButton href={activeCommand.docs}>
                Full command reference
              </ExternalLinkButton>
            </div>
            <h2>{activeCommand.label}</h2>
            <p>{activeCommand.description}</p>
            {activeCommand.subcommands && (
              <div className="command-subcommands">
                <span>DOCUMENTED SUBCOMMANDS</span>
                <div>
                  {activeCommand.subcommands.map((subcommand) => (
                    <code key={subcommand}>{subcommand}</code>
                  ))}
                </div>
              </div>
            )}
            <div className="syntax-block">
              <div className="terminal-bar">
                <span>QUICK EXAMPLE</span>
                <CopyButton
                  value={activeCommand.example}
                  copied={copied}
                  onCopy={onCopy}
                />
              </div>
              <pre><code>{activeCommand.example}</code></pre>
            </div>
            <div className="cli-reference-note">
              <CircleHelp size={16} aria-hidden="true" />
              <p>
                Examples are intentionally limited to documented forms. Use
                the linked Rayfin reference or run <code>npx rayfin --help</code>{' '}
                for the exact options supported by your installed CLI.
              </p>
            </div>
            {activeCommand.options && (
              <details className="command-options">
                <summary>
                  Supported options in CLI 2.0.0
                  <span>{activeCommand.options.length}</span>
                </summary>
                <div className="command-options-list">
                  {activeCommand.options.map((option) => (
                    <div className="command-option" key={option.flag}>
                      <code>{option.flag}</code>
                      <span>{option.description}</span>
                      {option.warning && (
                        <strong className="option-warning">USE WITH CARE</strong>
                      )}
                    </div>
                  ))}
                </div>
              </details>
            )}
          </div>
        ) : (
          <div className="command-detail command-no-selection">
            <Terminal size={24} aria-hidden="true" />
            <h2>Choose a command</h2>
            <p>Select a result to see its use and a documented example.</p>
          </div>
        )}
      </div>

      <section className="cli-options">
        <div className="cli-options-heading">
          <div>
            <span className="eyebrow">ROOT OPTIONS</span>
            <h2>Flags you can use across the CLI.</h2>
          </div>
          <div className="root-help-command">
            <code>npx rayfin --help</code>
            <CopyButton
              value="npx rayfin --help"
              copied={copied}
              onCopy={onCopy}
            />
          </div>
        </div>
        <div className="root-option-grid">
          {CLI_ROOT_OPTIONS.map((option) => (
            <div className="root-option" key={option.flag}>
              <code>{option.flag}</code>
              <span>{option.description}</span>
            </div>
          ))}
        </div>
        <p className="option-footnote">
          Some subcommands redeclare common flags so they work after the command
          name. See each command page for its own parameters, defaults, and
          examples.
        </p>
      </section>

      <div className="cli-source">
        <span>THE DOCUMENTED COMMAND SET</span>
        <ExternalLinkButton href={DOCS.cli}>
          Rayfin CLI 2.0.0 reference
        </ExternalLinkButton>
      </div>
    </>
  );
}

export { LearningExperience };
