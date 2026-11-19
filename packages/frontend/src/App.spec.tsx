//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';

import App from '@/App';

beforeEach(() => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
  );
});

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('App', () => {
  it('renders the learning experience', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /Make Fabric Apps/ })
    ).toBeVisible();
  });

  it('navigates to the interactive architecture view', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Architecture/ }));
    expect(
      await screen.findByRole('heading', {
        name: 'A small app, backed by managed services.',
      })
    ).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', { name: 'Local development' })
    );
    expect(await screen.findByText(/frontend stays on your machine/i)).toBeVisible();
  });

  it('explains the Fabric Apps ecosystem and navigates to architecture', async () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'One product, several distinct roles.' })
    ).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: /Rayfin SDK/ }));
    expect(
      screen.getByRole('heading', { name: 'Rayfin SDK' })
    ).toBeVisible();
    expect(
      screen.getByText(/CLI reads code-owned metadata/i)
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'See the runtime map' }));
    expect(
      await screen.findByRole('heading', {
        name: 'A small app, backed by managed services.',
      })
    ).toBeVisible();
  });

  it('distinguishes licensing paths, app access, and cost drivers', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Licensing & costs/ }));
    expect(
      await screen.findByRole('heading', {
        name: 'Choose a path. Understand the costs.',
      })
    ).toBeVisible();
    expect(
      screen.getByText(/Power BI Pro portal creation is a separate/i)
    ).toBeVisible();
    expect(
      screen.getByRole('row', { name: /Power BI portal · Pro/ })
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Share an app' }));
    expect(
      screen.getByText(/Recipients do not buy a separate capacity or Pro license/i)
    ).toBeVisible();
    expect(screen.getByText(/F64 is not the app-item sharing threshold/i)).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Plan production' }));
    expect(
      screen.getByText(/Capacity Metrics app/i)
    ).toBeVisible();
    expect(
      screen.getByText(/no reliable per-app fixed estimate/i)
    ).toBeVisible();
    expect(document.body.textContent).not.toMatch(/\$\s?\d/);
  });

  it('offers independent approaches and guides the local VS Code journey', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    expect(
      await screen.findByRole('heading', {
        name: 'Choose the workflow that fits your team.',
      })
    ).toBeVisible();
    expect(screen.getByText(/not an in-portal editor/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', { name: 'Explore VS Code + Rayfin journey' })
    );
    expect(
      await screen.findByRole('button', { name: 'Play walkthrough' })
    ).toBeDisabled();
    expect(
      screen.getByRole('progressbar', { name: 'VS Code + Rayfin journey progress' })
    ).toHaveAttribute('aria-valuenow', '1');
    fireEvent.click(await screen.findByRole('button', { name: 'Step forward' }));
    expect(
      await screen.findByRole('heading', {
        name: 'Authenticate and start the local loop',
      })
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Step backward' }));
    expect(
      await screen.findByRole('heading', {
        name: 'Create or open the right app project',
      })
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Git + environments' }));
    expect(
      await screen.findByRole('heading', {
        name: 'Review and promote with Git',
      })
    ).toBeVisible();
    expect(
      await screen.findByText(/The exported app definition is not the complete source project/i)
    ).toBeVisible();
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 4: Promote — Fabric deployment pipeline',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Deploy the reviewed definition to the next stage',
      })
    ).toBeVisible();
    expect(
      screen.getByText(/secret values in target apps/i)
    ).toBeVisible();
  });

  it('compares approaches and explains the documented automation boundary', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    fireEvent.click(
      await screen.findByRole('button', { name: /Compare approaches/ })
    );
    expect(
      await screen.findByRole('region', {
        name: 'Build and deployment approach comparison',
      })
    ).toBeVisible();
    expect(
      screen.getByRole('cell', {
        name: /Azure Pipelines is custom, not the cited sample/i,
      })
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'All approaches' }));
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Explore Automation + CI/CD journey',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Map branches to isolated workspaces',
      })
    ).toBeVisible();
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 4: Deploy & verify — GitHub Actions + Rayfin CLI',
      })
    );
    expect(
      await screen.findByText(/not provide a matching Azure Pipelines recipe/i)
    ).toBeVisible();
  });

  it('explains Fabric-native item creation and app-definition promotion', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    fireEvent.click(
      await screen.findByRole('button', {
        name: 'Explore Fabric workspace journey',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Choose the workspace and licensing path',
      })
    ).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Step forward' }));
    expect(
      await screen.findByRole('heading', { name: 'Create the Fabric App item' })
    ).toBeVisible();
    expect(screen.getByText(/App \(preview\)/)).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Step forward' }));
    expect(
      await screen.findByRole('heading', {
        name: 'Manage access and prepare a release',
      })
    ).toBeVisible();
    expect(screen.getByText(/no documented in-portal editor/i)).toBeVisible();

    fireEvent.click(screen.getByRole('button', { name: 'Step forward' }));
    expect(
      await screen.findByRole('heading', {
        name: 'Promote the app definition between stages',
      })
    ).toBeVisible();
    expect(
      screen.getByText(/does not build your original source tree/i)
    ).toBeVisible();
  });

  it('guides Power BI Desktop for Apps authoring through local preview and publish', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    fireEvent.click(
      await screen.findByRole('button', {
        name: 'Explore Power BI Desktop for Apps journey',
      })
    );

    expect(
      await screen.findByRole('heading', {
        name: 'Choose a conversational, model-connected workflow',
      })
    ).toBeVisible();
    expect(
      screen.getByRole('img', {
        name: /Microsoft documentation screenshot showing chat beside a Fabric app preview/i,
      })
    ).toBeVisible();
    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 3: Start & connect — You',
      })
    );
    expect(
      await screen.findByText(/does not convert its report pages or visuals/i)
    ).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 2: Prepare — You + Fabric administrator',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Meet the preview, account, and model requirements',
      })
    ).toBeVisible();
    expect(screen.getByText(/Windows 11 and Power BI Desktop November 2026/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 5: Edit & test — You',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Refine appearance and test the local experience',
      })
    ).toBeVisible();
    expect(screen.getByText(/does not support write-back/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 6: Publish — Power BI Desktop for Apps + Fabric',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Publish or update the app, then verify access',
      })
    ).toBeVisible();
    expect(screen.getByText(/Read permission on every connected semantic model/i)).toBeVisible();
  });

  it('explains Fabricator as a community Rayfin workbench with interactive stages', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    fireEvent.click(
      await screen.findByRole('button', {
        name: 'Explore Fabricator journey',
      })
    );

    expect(
      await screen.findByRole('heading', {
        name: 'Know where Fabricator, Rayfin, and Fabric fit',
      })
    ).toBeVisible();
    expect(
      screen.getByText(/personal community project by Sachin Patney/i)
    ).toBeVisible();
    expect(
      screen.getByRole('img', {
        name: /Fabricator workbench screenshot with the chat conversation/i,
      })
    ).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 7: Check with Advisor — Fabricator checks + optional Copilot review',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Use quick checks and a read-only review',
      })
    ).toBeVisible();
    expect(screen.getByText(/not a comprehensive security audit/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 8: Publish — Fabricator + project-pinned Rayfin CLI',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Publish through the project’s Rayfin CLI',
      })
    ).toBeVisible();
    expect(screen.getByText(/Fabricator runs the project’s own `rayfin up`/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 9: Share & collaborate — Fabric + optional GitHub Actions workflow',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Share a published app; treat team workspaces as experimental',
      })
    ).toBeVisible();
    expect(screen.getByText(/Team workspaces are explicitly an experiment/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 10: Privacy — You + Fabricator / GitHub Copilot',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Understand telemetry, local files, and Copilot data',
      })
    ).toBeVisible();
    expect(screen.getByText(/Chat prompts and relevant project context do go to GitHub Copilot/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Step 11: Troubleshoot — You + Fabricator support tools',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Use the documented checks for setup, preview, or publish problems',
      })
    ).toBeVisible();
    expect(screen.getByText(/FILES \/ RESOURCES/i)).toBeVisible();

    fireEvent.click(
      screen.getByRole('button', {
        name: 'Explore related approach: VS Code + Rayfin',
      })
    );
    expect(
      await screen.findByRole('heading', {
        name: 'Develop locally with VS Code',
      })
    ).toBeVisible();
  });

  it('compares all six approaches without treating tools as exclusive', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    fireEvent.click(
      await screen.findByRole('button', { name: /Compare approaches/ })
    );
    const comparison = await screen.findByRole('region', {
      name: 'Build and deployment approach comparison',
    });

    expect(
      within(comparison).getByRole('columnheader', {
        name: 'Power BI Desktop for Apps',
      })
    ).toBeVisible();
    expect(
      within(comparison).getByRole('columnheader', { name: 'Fabricator' })
    ).toBeVisible();
    expect(
      within(comparison).getByRole('cell', {
        name: /Azure Pipelines is custom, not the cited sample/i,
      })
    ).toBeVisible();
  });

  it('keeps diagram step-through available when reduced motion is requested', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Build & deploy/ }));
    fireEvent.click(
      await screen.findByRole('button', {
        name: 'Explore VS Code + Rayfin journey',
      })
    );
    expect(screen.getByRole('button', { name: 'Play walkthrough' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: 'Step forward' }));
    expect(
      screen.getByRole('progressbar', { name: 'VS Code + Rayfin journey progress' })
    ).toHaveAttribute('aria-valuenow', '2');
    expect(
      screen.getByRole('button', {
        name: 'Step 2: Sign in — Rayfin CLI',
        current: 'step',
      })
    ).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Restart journey' }));
    expect(
      screen.getByRole('progressbar', { name: 'VS Code + Rayfin journey progress' })
    ).toHaveAttribute('aria-valuenow', '1');
  });

  it('filters the CLI reference and copies the selected example', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText },
    });

    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /CLI reference/ }));
    const search = await screen.findByRole('searchbox', {
      name: 'Search CLI commands',
    });
    fireEvent.change(search, { target: { value: 'telemetry' } });
    expect(screen.getByRole('option', { name: /Manage telemetry/ })).toBeVisible();
    expect(screen.queryByRole('option', { name: /Sign in/ })).toBeNull();

    fireEvent.change(search, { target: { value: '' } });
    fireEvent.click(await screen.findByRole('option', { name: /Deploy and verify/ }));
    fireEvent.click(
      screen.getAllByRole('button', { name: 'Copy command' })[0]
    );
    await waitFor(() => expect(screen.getByText('Copied')).toBeVisible());
    expect(writeText).toHaveBeenCalledWith(
      'npx rayfin up --dry-run --workspace-id <workspace-guid>\nnpx rayfin up\nnpx rayfin up status'
    );
    fireEvent.click(screen.getByText(/Supported options in CLI 2\.0\.0/));
    expect(screen.getByText(/destructive schema changes/)).toBeVisible();
  });

  it('shows project relationships when files are selected', async () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Project map/ }));
    fireEvent.click(
      await screen.findByRole('button', {
        name: 'Select rayfin/rayfin.yml',
      })
    );
    expect(
      await screen.findByText(/The CLI reads service configuration/)
    ).toBeVisible();
    expect(await screen.findByText('Rayfin CLI')).toBeVisible();
    fireEvent.click(
      screen.getByRole('button', { name: 'Collapse rayfin' })
    );
    expect(
      screen.queryByRole('button', { name: 'Select rayfin/rayfin.yml' })
    ).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Expand rayfin' }));
    expect(
      screen.getByRole('button', { name: 'Select rayfin/rayfin.yml' })
    ).toBeVisible();
  });
});
