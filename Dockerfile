FROM golang:1.26.10-alpine AS builder
WORKDIR /src
COPY go.mod go.sum ./
RUN go mod download
COPY embed.go icon.png ./
COPY cmd ./cmd
COPY internal ./internal
RUN CGO_ENABLED=0 go build -trimpath -ldflags="-s -w" -o /out/s-watcher ./cmd/s-watcher

FROM alpine:3.22
RUN apk add --no-cache su-exec \
    && addgroup -S swatcher \
    && adduser -S -G swatcher swatcher
# The base image's CA store is only as current as its last release.
RUN apk upgrade --no-cache ca-certificates-bundle \
 && if [ -f /etc/ssl/certs/ca-certificates.crt.apk-new ]; then mv /etc/ssl/certs/ca-certificates.crt.apk-new /etc/ssl/certs/ca-certificates.crt; fi \
 && ! grep -q MIICTjCCAdOgAwIBAgIKPPYHqWhwDtqLhDAKBggqhkjOPQQDAzBr /etc/ssl/certs/ca-certificates.crt
COPY --from=builder /out/s-watcher /usr/local/bin/s-watcher
USER swatcher
EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/s-watcher"]
