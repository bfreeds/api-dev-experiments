# Requirements
  # Docker

IMAGE_NAME = django-tutorial

# TODO: Handle image build tags, don't rebuild if it's up to date
build-image:
	@echo building image "$(IMAGE_NAME)"

	docker build -t django-tutorial .

run-container: build-image
	@echo running container from image "$(IMAGE_NAME)"

	docker run -it --rm --name django-app \
	-p 8000:8000 \
	$(IMAGE_NAME)

# Instantiates an interactive bash shell inside running container
interactive-container: build-image
	@echo entering shell in container from image "$(IMAGE_NAME)"

	docker run -it --rm --name django-interactive \
	-p 8000:8000 \
	$(IMAGE_NAME) \
	/bin/bash