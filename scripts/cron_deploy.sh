#!/usr/bin/env bash

LOGS_TRIGGER_FILE="./logs/deploy.log"

if [[ ! -s "$LOGS_TRIGGER_FILE" ]]; then
    exit 0;
fi

wget -O ./public.tar.gz https://github.com/cheprasov/ts-cv/raw/master/public.tar.gz \
    && mkdir -p ./deploy \
    && tar -xf ./public.tar.gz -C ./deploy \
    && rsync -avzr ./deploy/ ./public/ \
    && echo -n "" > "$LOGS_TRIGGER_FILE" \
    && rm ./public.tar.gz \
    && rm -r ./deploy \
    && echo "Done" || echo "Fail"


