// Copyleft 2026 StellarStoic
// SPDX-License-Identifier: AGPL-3.0-or-later

import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.2:3',
  releaseNotes: {
    en_US:
      'Updated the Go toolchain the service is built with. Stops trusting certificates from a compromised certificate authority (eMudhra).',
    es_ES:
      'Se actualizó la cadena de herramientas Go con la que se compila el servicio. Deja de confiar en los certificados de una autoridad de certificación comprometida (eMudhra).',
    de_DE:
      'Die Go-Toolchain, mit der der Dienst gebaut wird, wurde aktualisiert. Vertraut Zertifikaten einer kompromittierten Zertifizierungsstelle (eMudhra) nicht mehr.',
    pl_PL:
      'Zaktualizowano zestaw narzędzi Go, którym budowana jest usługa. Przestaje ufać certyfikatom przejętego urzędu certyfikacji (eMudhra).',
    fr_FR: `Mise à jour de la chaîne d’outils Go utilisée pour compiler le service. Ne fait plus confiance aux certificats d'une autorité de certification compromise (eMudhra).`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
