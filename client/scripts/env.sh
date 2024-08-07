#!/bin/sh

# Replace placeholders with actual environment variables
sed -i 's|__REACT_APP_BACKEND_URI__|'${REACT_APP_BACKEND_URI}'|g' /usr/share/nginx/html/config.js

exec "$@"