#!/usr/bin/env bash
set -euo pipefail
PORT="${PORT:-3000}"
BASE="http://localhost:${PORT}"
(node src/server.js > /dev/null 2>&1 &) 
PID=$!
trap 'kill $PID >/dev/null 2>&1 || true' EXIT
sleep 2
LIVE=$(curl -fsS "${BASE}/live"); echo "[live] ${LIVE}"; echo "$LIVE" | grep -q "OK"
READY=$(curl -fsS "${BASE}/ready"); echo "[ready] ${READY}"; echo "$READY" | grep -q '"ok":true'
echo "✅ Verificación local OK"
