all: up logs

up:
	@docker-compose up -d --build --force-recreate  --remove-orphans

env:
	@docker-compose run --rm node /bin/sh

logs:
	@docker-compose logs -f node

start:
	@docker-compose start

stop:
	@docker-compose stop

down:
	@docker-compose down

down-v:
	@docker-compose down -v

pn-command:
	@docker-compose run --rm node pnpm $(command) --store-dir /node/pnpm-store
