
echo "Get Config"
$env:CONFIG=docker run --rm -v ${PWD}/config.json:/config.json --entrypoint="" stedolan/jq /bin/bash -c "cat /config.json | jq -r tostring"

echo $env:CONFIG

echo "Run crawl"

# docker run -it --env-file=.env -e CONFIG --entrypoint="" algolia/docsearch-scraper bash
docker run -it --env-file=.env -e CONFIG algolia/docsearch-scraper 
