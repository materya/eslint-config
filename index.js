module.exports = {
  configs: [
    'common',
    'pulumi',
    'typescript',
  ].reduce(
    // Yes, I know what I'm doing.
    // eslint-disable-next-line global-require, import/no-dynamic-require
    (configs, conf) => ({ ...configs, [conf]: require(`./configs/${conf}`) }),
    {},
  ),
}
