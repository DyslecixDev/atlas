#!/usr/bin/env bash
# PostToolUse hook that formats the file Claude just edited using the project Biome.
#
# Reads the hook payload as JSON on stdin and extracts tool_input.file_path with
# Node, which is a hard project dependency so contributors do not need jq. Runs
# Biome on that single file. The hook never blocks. It always exits 0, and Biome
# ignores files it cannot handle.

root="${CLAUDE_PROJECT_DIR:-.}"

file="$(node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{process.stdout.write(JSON.parse(s).tool_input?.file_path||"")}catch{process.stdout.write("")}})')"

if [ -n "$file" ]; then
  "$root/node_modules/.bin/biome" check --write --no-errors-on-unmatched "$file" >/dev/null 2>&1 || true
fi

exit 0
