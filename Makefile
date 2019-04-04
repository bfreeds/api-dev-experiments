# Requirements
  # Docker

build-image:
	@echo building image "django-tutorial"
	docker build -t django-tutorial .

run-container: build-image
	docker run -it --rm --name django-app django-tutorial