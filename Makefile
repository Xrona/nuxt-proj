up:
	docker-compose up -d --build --remove-orphans

start:
	docker-compose star

stop:
	docker-compose stop

down:
	docker-compose down

down-v:
	docker-compose down -v

pn-command:
	@docker-compose run --rm node pnpm $(command)
