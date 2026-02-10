ARG PACKAGE
ARG PACKAGE_PATH=./packages/${PACKAGE}

FROM caddy:2.11 AS caddy

FROM scratch AS spa-runtime

COPY --from=caddy /usr/bin/caddy /usr/bin/caddy
RUN ["/usr/bin/caddy", "version"]

WORKDIR /srv

ARG PACKAGE_PATH

COPY ${PACKAGE_PATH}/Caddyfile /etc/Caddyfile
COPY ${PACKAGE_PATH}/dist /srv

CMD ["/usr/bin/caddy", "run", "--config", "/etc/Caddyfile", "--adapter", "caddyfile"]
