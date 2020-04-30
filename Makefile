#!make

PM = npm

PRERELEASE_FLAG ?= beta

modules = node_modules

.PHONY: all
all:
	@echo "Nothing to build"

$(modules):
	$(PM) i

.PHONY: clean
clean:
	rm -rf $(modules)

.PHONY: test
test:
	$(PM) t

.PHONY: release
release:
	$(PM) run release
	git push --follow-tags origin master
	npm publish --access public

.PHONY: prerelease
prerelease:
	$(PM) run release -- --prerelease $(PRERELEASE_FLAG)
	git push --follow-tags origin master
	npm publish --tag prerelease --access public
