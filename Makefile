install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node games/brain-even.js
brain-progression:
	node games/brain-progression.js
brain-gcd:
	node games/brain-gcd.js
brain-calc:
	node games/brain-calc.js
brain-prime:
	node games/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint