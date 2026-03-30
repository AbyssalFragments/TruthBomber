FROM oven/bun as builder

WORKDIR /build

COPY package.json bun.lock /build/

RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM oven/bun as prod

WORKDIR /truthbomber
COPY --from=builder /build/truthbomber.bin /truthbomber/bot

ENTRYPOINT [ "/truthbomber/bot" ]