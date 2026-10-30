// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.6:0',
  releaseNotes: {
    en_US:
      'Makes large Electrs refreshes visible and recoverable while preserving restored balances after unchanged reconnects. Progress, 30-second log heartbeats, 500-address checkpoints, stalled-request timeouts, and automatic retries keep large watches responsive. Notification retries, quiet-hours queues, and daily digests now continue even when every watch is idle. [Full release notes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.6_0).',
    es_ES:
      'Hace visibles y recuperables las actualizaciones grandes de Electrs y conserva los saldos restaurados tras reconexiones sin cambios. El progreso, los registros cada 30 segundos, los puntos de control cada 500 direcciones, los tiempos de espera y los reintentos automáticos mantienen la respuesta. Los reintentos de notificaciones, las colas de horas silenciosas y los resúmenes diarios continúan aunque todos los monitores estén inactivos. [Notas completas](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.6_0).',
    de_DE:
      'Macht große Electrs-Aktualisierungen sichtbar und wiederaufnehmbar und bewahrt wiederhergestellte Guthaben nach unveränderten Neuverbindungen. Fortschritt, 30-Sekunden-Protokolle, Kontrollpunkte alle 500 Adressen, Zeitüberschreitungen und automatische Wiederholungen halten große Watches reaktionsfähig. Benachrichtigungswiederholungen, Ruhezeit-Warteschlangen und tägliche Zusammenfassungen laufen auch bei inaktiven Watches weiter. [Vollständige Versionshinweise](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.6_0).',
    pl_PL:
      'Duże odświeżenia Electrs są teraz widoczne i możliwe do wznowienia, a przywrócone salda pozostają zachowane po niezmienionym ponownym połączeniu. Postęp, wpisy co 30 sekund, punkty kontrolne co 500 adresów, limity czasu i automatyczne ponowienia utrzymują responsywność. Ponowienia powiadomień, kolejki godzin ciszy i codzienne podsumowania działają także przy bezczynnych obserwacjach. [Pełne informacje o wydaniu](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.6_0).',
    fr_FR: `Rend les actualisations Electrs volumineuses visibles et récupérables tout en préservant les soldes restaurés après une reconnexion sans changement. La progression, les journaux toutes les 30 secondes, les points de contrôle toutes les 500 adresses, les délais et les nouvelles tentatives automatiques maintiennent la réactivité. Les nouvelles tentatives de notification, les files d'heures calmes et les résumés quotidiens continuent même lorsque toutes les surveillances sont inactives. [Notes de version complètes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.6_0).`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
