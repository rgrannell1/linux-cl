
NODE           = node
DOCKER         = docker
CONTAINER_NAME = linux-cl

ESLINT         = ./node_modules/.bin/eslint
ESLINT_FLAGS   = --config config/eslint.json





install:
	sudo cp linux-cl /etc/bash_completion.d/linux-cl
	npm link && npm install --global

docker-build:
	$(DOCKER) build --tag=$(CONTAINER_NAME) .

docker-cleanbuild:
	$(DOCKER) build --no-cache=true --tag=$(CONTAINER_NAME) .

docker-run:
	$(DOCKER) run $(CONTAINER_NAME)

eslint:
	$(ESLINT) $(ESLINT_FLAGS) ./src

screenshot-images:
	bash scripts/capture-screenshots.sh

assemble-images:
	bash scripts/assemble-images.sh

build-palettes:
	bash scripts/build-schemes.sh

clean:
	rm -R images/
	mkdir images
