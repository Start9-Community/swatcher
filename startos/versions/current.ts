// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.7:0',
  releaseNotes: {
    en_US:
      'Protects Electrs from oversized watch sets with a 500-address everyday recommendation, clear load warnings, 1,000-address per-wallet and 2,000-address service limits, and refresh pacing of five scripts per second. Existing large watches remain saved and can now be safely reduced without losing known active coverage; obsolete subscriptions are released immediately. [Full release notes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.7_0).',
    es_ES:
      'Protege Electrs de conjuntos de vigilancia excesivos con una recomendación diaria de 500 direcciones, avisos claros, límites de 1.000 direcciones por monedero y 2.000 por servicio, y un ritmo de cinco scripts por segundo. Las vigilancias grandes existentes se conservan y ahora pueden reducirse de forma segura sin perder direcciones activas conocidas. [Notas completas](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.7_0).',
    de_DE:
      'Schützt Electrs vor übergroßen Watch-Sätzen: empfohlen sind höchstens 500 Adressen, mit klaren Warnungen, 1.000 Adressen pro Wallet, 2.000 insgesamt und fünf Skripten pro Sekunde. Bestehende große Watches bleiben gespeichert und können nun sicher verkleinert werden, ohne bekannte aktive Abdeckung zu verlieren. [Vollständige Versionshinweise](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.7_0).',
    pl_PL:
      'Chroni Electrs przed zbyt dużymi zestawami obserwacji: zalecane jest 500 adresów, dostępne są jasne ostrzeżenia, limit 1.000 adresów na portfel i 2.000 łącznie oraz tempo pięciu skryptów na sekundę. Istniejące duże obserwacje pozostają zapisane i można je bezpiecznie zmniejszyć bez utraty znanych aktywnych adresów. [Pełne informacje o wydaniu](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.7_0).',
    fr_FR: `Protège Electrs des ensembles de surveillance trop grands avec une recommandation de 500 adresses, des avertissements clairs, des limites de 1 000 adresses par portefeuille et 2 000 au total, et cinq scripts par seconde. Les grandes surveillances existantes restent enregistrées et peuvent désormais être réduites sans perdre les adresses actives connues. [Notes de version complètes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.7_0).`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
