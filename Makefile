#!make

PM = npm

PRERELEASE_TAG ?= beta
PUBLISH_FLAGS = publish --access public

MODULES = node_modules

.PHONY: all
all:
	@echo "Nothing to build"

$(MODULES):
	$(PM) i

.PHONY: clean
clean:
	rm -rf $(MODULES)

.PHONY: test
test:
	$(PM) t

.PHONY: release
release:
ifneq (,$(findstring n,$(MAKEFLAGS)))
	+$(PM) run release -- --dry-run
	+$(PM) $(PUBLISH_FLAGS) --dry-run
else
	$(PM) run release
	git push --follow-tags origin master
	$(PM) $(PUBLISH_FLAGS)
endif

.PHONY: prerelease
prerelease:
	$(PM) run release -- --prerelease $(PRERELEASE_TAG)
	git push --follow-tags origin master
	$(PM) $(PUBLISH_FLAGS) --tag prerelease
