// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.3:0',
  releaseNotes: {
    en_US:
      'Uses persistent Electrum subscriptions to stop repeated unsubscribed-script-hash warnings, reduce idle queries, refresh changed watches promptly, and reconnect automatically after Electrs restarts.',
    es_ES:
      'Usa suscripciones Electrum persistentes para eliminar los avisos repetidos sobre hashes de script no suscritos, reducir las consultas inactivas, actualizar rápidamente los monitores modificados y reconectarse automáticamente tras reiniciar Electrs.',
    de_DE:
      'Verwendet dauerhafte Electrum-Abonnements, um wiederholte Warnungen zu nicht abonnierten Skript-Hashes zu vermeiden, Leerlaufabfragen zu reduzieren, geänderte Watches zeitnah zu aktualisieren und nach Electrs-Neustarts automatisch neu zu verbinden.',
    pl_PL:
      'Używa trwałych subskrypcji Electrum, aby usunąć powtarzające się ostrzeżenia o niesubskrybowanych skrótach skryptów, ograniczyć bezczynne zapytania, szybko odświeżać zmienione obserwacje i automatycznie łączyć się ponownie po restarcie Electrs.',
    fr_FR: `Utilise des abonnements Electrum persistants pour supprimer les avertissements répétés concernant les hachages de script non abonnés, réduire les requêtes inutiles, actualiser rapidement les surveillances modifiées et se reconnecter automatiquement après un redémarrage d'Electrs.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
