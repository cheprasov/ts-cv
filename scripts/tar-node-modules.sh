#!/usr/bin/env bash

COMMAND="$1"

if [[ "$COMMAND" == 'pack' ]]; then
  echo "Packing node modules..."
  if [[ ! -d './node_modules' ]]; then
    echo "Dir ./node_modules is not found"
    exit 1
  fi
  rm -f ./node_modules.tar.gz
  tar -czf ./node_modules.tar.gz ./node_modules || exit 1
  exit 0;
fi

if [[ "$COMMAND" == 'unpack' ]]; then
  echo "Unpacking node modules..."
  if [[ -d './node_modules' ]]; then
    echo "Dir ./node_modules is exist already"
    exit 1
  fi
  tar -xzf ./node_modules.tar.gz ./node_modules || exit 1
  exit 0
fi

echo "Please provide action param: 'pack' or 'unpack'"
exit 1