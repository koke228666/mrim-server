/**
 * @file Главный скрипт MRIM-сервера
 * @author Vladimir Barinov <veselcraft@icloud.com>
 * @author mikhail "synzr" <mikhail@tskau.team>
 */

const { ServerConstructor } = require('../../constructors/server')
const onConnection = require('./implementation')

function createMrimServer (options) {
  return new ServerConstructor({
    logger: options.logger,
    onConnection
  }).finish()
}

module.exports = createMrimServer
