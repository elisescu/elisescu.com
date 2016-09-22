CURR_DIR=$(shell pwd)

all: build

docker-build:
	docker run -v $(CURR_DIR)/:/work/ ruby /bin/bash -c "cd /work/ && bundle install && bundle exec jekyll build --destination elisescu.github.io/"

docker-serve:
	docker run -p 4000:4000 -v $(CURR_DIR)/:/work/ ruby /bin/bash -c "cd /work/ && bundle install && bundle exec jekyll serve"

clean:
	rm -fr out-site

build:
	bundle install
	bundle exec jekyll build --destination elisescu.github.io/

serve:
	bundle install
	bundle exec jekyll serve
