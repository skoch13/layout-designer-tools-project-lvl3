install:
	npm install

lint:
	npx stylelint ./app/scss/**/*.scss
	pug-lint ./app/pug/**/*.pug
	npx htmlhint ./build/*.html

pug-index:
	pug ./app/pug/pages/index.pug --pretty -o ./build/

pug-chat:
	pug ./app/pug/pages/chat.pug --pretty -o ./build/

pug:
	make pug-index
	make pug-chat

sass:
	sass ./app/scss/custom.scss ./build/css/style.css
	npx stylelint --fix ./build/css/style.css

build-pug-sass:
	make pug
	make sass

deploy:
	npx surge ./build/