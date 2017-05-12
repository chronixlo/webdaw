#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_files() {
  git add build/.
  git commit -m "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin https://${GITHUB_TOKEN}@github.com/chronixlo/webdaw.git > /dev/null 2>&1
  git subtree push --prefix build origin gh-pages
}

setup_git
commit_files
upload_files