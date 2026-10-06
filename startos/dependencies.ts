// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { notificationConfig } from './fileModels/notifications.json'
import {
  electrsDescription,
  mempoolDescription,
  torDescription,
} from './manifest/i18n'
import { sdk } from './sdk'
import { mempoolHost, usesOnionRelay } from './utils'

// The optional dependencies are enabled only while in use: an enabled one that
// is missing or stopped reports the service as degraded.
export const dependencies = sdk.Dependencies.of()
  .addDependency(
    sdk.Dependency.required('electrs', {
      description: electrsDescription,
      metadata: {
        title: 'Electrs',
        icon: 'https://raw.githubusercontent.com/Start9Labs/electrs-startos/refs/heads/master/icon.svg',
      },
      versionRange: '>=0.11.1:11',
      kind: 'running',
      healthChecks: ['electrs', 'sync'],
    }),
  )
  .addDependency(
    sdk.Dependency.optional('mempool', {
      description: mempoolDescription,
      metadata: {
        title: 'Mempool',
        icon: 'https://raw.githubusercontent.com/Start9Labs/mempool-startos/refs/heads/master/icon.svg',
      },
      versionRange: '>=3.3.1:11',
      kind: 'running',
      healthChecks: ['webui'],
      enabled: async ({ effects }) => !!(await mempoolHost(effects)),
    }),
  )
  .addDependency(
    sdk.Dependency.optional('tor', {
      description: torDescription,
      metadata: {
        title: 'Tor',
        icon: 'https://raw.githubusercontent.com/Start9Labs/tor-startos/refs/heads/master/icon.svg',
      },
      versionRange: '>=0.4.9.11:1',
      kind: 'running',
      healthChecks: ['tor'],
      enabled: async ({ effects }) => {
        const notifications = await notificationConfig.read().const(effects)
        return (
          !!notifications?.nostrEnabled &&
          usesOnionRelay(notifications.nostrRelays)
        )
      },
    }),
  )
