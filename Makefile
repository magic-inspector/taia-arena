.PHONY: all amazon-clone portal down logs logs-amazon-clone logs-portal rebuild

all:
	docker-compose up -d

re:
	docker-compose down
	docker-compose build
	docker-compose up -d 

amazon-clone:
	docker-compose up -d amazon-clone

portal:
	docker-compose up -d portal

down:
	docker-compose down

logs:
	docker-compose logs -f

logs-amazon-clone:
	docker-compose logs -f amazon-clone

logs-portal:
	docker-compose logs -f portal