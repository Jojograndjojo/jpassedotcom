# jpassedotcom task runner
# https://github.com/casey/just

# Run the test suite
test:
    npx vitest run

# Run tests in watch mode
test-watch:
    npx vitest

# Build the site for production
build:
    npm run build

# Start the dev server
dev:
    npx astro dev

# Stop the dev server
dev-stop:
    npx astro dev stop

# Lint and format check
lint:
    npx eslint . && npx prettier --check .

# Run all quality gates (what CI runs)
check: lint test build
