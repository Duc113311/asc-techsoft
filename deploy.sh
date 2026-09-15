#!/bin/bash
# Manual deploy script — requires deploy password

set -e

VPS_HOST="76.13.16.235"
VPS_USER="root"
VPS_PATH="/var/www/asctechsoft.com"
DEPLOY_PASSWORD_HASH="$(cat .deploy_secret 2>/dev/null || echo '')"

if [ -z "$DEPLOY_PASSWORD_HASH" ]; then
  echo "❌ .deploy_secret file not found. Run: echo -n 'yourpassword' | sha256sum > .deploy_secret"
  exit 1
fi

read -s -p "🔐 Enter deploy password: " INPUT_PASS
echo ""

INPUT_HASH="$(echo -n "$INPUT_PASS" | sha256sum | awk '{print $1}')"
STORED_HASH="$(awk '{print $1}' .deploy_secret)"

if [ "$INPUT_HASH" != "$STORED_HASH" ]; then
  echo "❌ Wrong password. Aborted."
  exit 1
fi

echo "✅ Authenticated. Deploying..."
echo ""

echo ">>> Building..."
npm run build

echo ">>> Uploading to VPS..."
scp -o StrictHostKeyChecking=no -r dist/* "$VPS_USER@$VPS_HOST:$VPS_PATH/"

echo ">>> Reloading nginx..."
ssh -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" "systemctl reload nginx"

echo ""
echo "✅ Done! https://asctechsoft.com"
