const logger = DeviceRuntimeCore.HmLogger.getLogger('Settings');

Page({
  build() {
    logger.debug('page build invoked');

    //hmUI.updateStatusBarTitle('Metronome - Settings');
  },

  onInit() {
    logger.debug('page onInit invoked');
  },

  onDestroy() {
    logger.debug('page onDestroy invoked');
  },
})