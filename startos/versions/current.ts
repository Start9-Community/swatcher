// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.4:0',
  releaseNotes: {
    en_US:
      'Fixes excessive Electrs CPU and index load for large wallets. Only changed script hashes are refreshed, healthy watches are no longer scanned every 30 seconds, restart status is persisted, and large baselines or reconnections are paced. CA-store hardening now also lives in the upstream image. [Full release notes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.4_0).',
    es_ES:
      'Corrige la carga excesiva de CPU e índice de Electrs con carteras grandes. Solo se actualizan los hashes de script modificados, ya no se revisan los monitores sin cambios cada 30 segundos, el estado se conserva tras reiniciar y las líneas base o reconexiones grandes se dosifican. El refuerzo del almacén de CA también está ahora en la imagen original. [Notas completas](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.4_0).',
    de_DE:
      'Behebt übermäßige Electrs-CPU- und Indexlast bei großen Wallets. Nur geänderte Skript-Hashes werden aktualisiert, unveränderte Watches werden nicht mehr alle 30 Sekunden geprüft, der Status bleibt über Neustarts erhalten und große Erstscans oder Neuverbindungen werden gedrosselt. Die CA-Store-Härtung ist nun ebenfalls im Upstream-Image enthalten. [Vollständige Versionshinweise](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.4_0).',
    pl_PL:
      'Naprawia nadmierne obciążenie procesora i indeksu Electrs przy dużych portfelach. Odświeżane są tylko zmienione skróty skryptów, niezmienione obserwacje nie są już sprawdzane co 30 sekund, stan jest zachowywany po restarcie, a duże skany początkowe i ponowne połączenia są ograniczane. Wzmocnienie magazynu CA znajduje się teraz także w obrazie upstream. [Pełne informacje o wydaniu](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.4_0).',
    fr_FR: `Corrige la charge excessive du processeur et de l'index Electrs avec les grands portefeuilles. Seuls les hachages de script modifiés sont actualisés, les surveillances inchangées ne sont plus vérifiées toutes les 30 secondes, l'état est conservé après redémarrage et les grandes analyses initiales ou reconnexions sont limitées. Le renforcement du magasin d'autorités de certification se trouve désormais aussi dans l'image amont. [Notes de version complètes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.4_0).`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
