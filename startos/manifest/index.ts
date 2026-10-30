// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 's-watcher',
  title: 's/watcher',
  license: 'AGPL-3.0-or-later',
  packageRepo: 'https://github.com/Start9-Community/swatcher',
  upstreamRepo: 'https://github.com/StellarStoic/swatcher',
  marketingUrl: 'https://github.com/StellarStoic/swatcher',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    's-watcher': {
      source: {
        dockerBuild: {
          dockerfile: './swatcher/Dockerfile',
          workdir: './swatcher',
        },
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
})
