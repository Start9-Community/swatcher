// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.2:2',
  releaseNotes: {
    en_US: `Adds stable case-insensitive tag colors, editable derivation coverage, safer bulk imports, removal confirmation, a favicon, transaction fixes, and wallet highlighting.

- The Theme action describes the colors of each theme.
- Corrected spelling in the German, Polish and French action text.
- The quiet-hours fields in Notifications explain when held messages are sent.`,
    es_ES: `Añade colores de etiqueta estables sin distinguir mayúsculas, cobertura de derivación editable, importaciones más seguras y resaltado de cartera.

- La acción Tema describe los colores de cada tema.
- Ortografía corregida en los textos de las acciones en alemán, polaco y francés.
- Los campos de horas de silencio en Notificaciones explican cuándo se envían los mensajes retenidos.`,
    de_DE: `Ergänzt stabile Tag-Farben ohne Beachtung der Großschreibung, bearbeitbare Ableitungsabdeckung, sicherere Massenimporte und Wallet-Hervorhebung.

- Die Aktion „Design“ beschreibt die Farben jedes Designs.
- Rechtschreibung in den deutschen, polnischen und französischen Aktionstexten korrigiert.
- Die Ruhezeit-Felder unter „Benachrichtigungen“ erklären, wann zurückgehaltene Nachrichten gesendet werden.`,
    pl_PL: `Dodaje trwałe kolory etykiet niezależne od wielkości liter, edytowalny zakres derywacji, bezpieczniejszy import i wyróżnienie portfela.

- Akcja Motyw opisuje kolory każdego motywu.
- Poprawiono pisownię w niemieckich, polskich i francuskich tekstach akcji.
- Pola godzin ciszy w Powiadomieniach wyjaśniają, kiedy wysyłane są wstrzymane wiadomości.`,
    fr_FR: `Ajoute des couleurs d’étiquette stables sans distinction de casse, une dérivation modifiable, des imports plus sûrs et la surbrillance du portefeuille.

- L'action Thème décrit les couleurs de chaque thème.
- Orthographe corrigée dans les textes des actions en allemand, polonais et français.
- Les champs des heures calmes dans Notifications expliquent quand les messages retenus sont envoyés.`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
