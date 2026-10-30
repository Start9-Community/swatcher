// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.5:0',
  releaseNotes: {
    en_US:
      'Makes large Electrs refreshes visible and recoverable. s/watcher now shows progress, logs a heartbeat every 30 seconds, saves a checkpoint every 500 addresses, times out stalled requests, and pauses after repeated connection failures before retrying automatically. Saved balances and history remain available during an outage. [Full release notes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.5_0).',
    es_ES:
      'Hace visibles y recuperables las actualizaciones grandes de Electrs. s/watcher ahora muestra el progreso, registra una señal cada 30 segundos, guarda un punto de control cada 500 direcciones, cancela las solicitudes bloqueadas y se pausa tras fallos de conexión repetidos antes de reintentarlo automáticamente. Los saldos y el historial guardados siguen disponibles durante una interrupción. [Notas completas](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.5_0).',
    de_DE:
      'Macht große Electrs-Aktualisierungen sichtbar und wiederaufnehmbar. s/watcher zeigt jetzt den Fortschritt an, protokolliert alle 30 Sekunden ein Lebenszeichen, speichert alle 500 Adressen einen Kontrollpunkt, beendet blockierte Anfragen und pausiert nach wiederholten Verbindungsfehlern vor einem automatischen neuen Versuch. Gespeicherte Guthaben und Verläufe bleiben während eines Ausfalls verfügbar. [Vollständige Versionshinweise](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.5_0).',
    pl_PL:
      'Duże odświeżenia Electrs są teraz widoczne i możliwe do wznowienia. s/watcher pokazuje postęp, zapisuje komunikat co 30 sekund i punkt kontrolny co 500 adresów, przerywa zablokowane żądania oraz wstrzymuje pracę po powtarzających się błędach połączenia, po czym automatycznie ponawia próbę. Zapisane salda i historia pozostają dostępne podczas awarii. [Pełne informacje o wydaniu](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.5_0).',
    fr_FR: `Rend les actualisations Electrs volumineuses visibles et récupérables. s/watcher affiche désormais la progression, journalise un signal toutes les 30 secondes, enregistre un point de contrôle toutes les 500 adresses, interrompt les requêtes bloquées et se met en pause après des échecs de connexion répétés avant de réessayer automatiquement. Les soldes et l'historique enregistrés restent disponibles pendant une panne. [Notes de version complètes](https://github.com/StellarStoic/swatcher/releases/tag/v0.1.5_0).`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
