### elisescu.com website
Personal website hosted by github pages, generated with jekyll using https://github.com/biomadeira/sustain.


## Configure and start tailwindcss tool
```
npm i
npx tailwind -i static/css/in-main.css -o static/css/out-main.css --watch
```

### Build with docker
```
docker run -v $PWD/:/work/ ruby:2.2.0 /bin/bash -c "cd /work/ && bundle install && bundle exec jekyll build --destination out-site"
```

### Build locally
```
eval "$(rbenv init -)"
bundle install
bundle exec jekyll serve
bundle exec jekyll build --destination out-site
```

