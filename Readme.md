### elisescu.com website
Personal website hosted by github pages, generated with jekyll using https://github.com/biomadeira/sustain.

### Build
```
docker run -v $PWD/:/work/ ruby /bin/bash -c "cd /work/ && bundle install && jekyll build --destination out-site"
```

