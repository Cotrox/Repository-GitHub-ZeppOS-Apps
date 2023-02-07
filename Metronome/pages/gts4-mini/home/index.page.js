import { LOGO_PARAMS, TEXT_PARAMS, BUTTON_PARAMS } from './index.style';

const logger = DeviceRuntimeCore.HmLogger.getLogger('Home');

Page({
  build() {
    logger.debug('page build invoked');

    // Logo
    const logo = hmUI.createWidget(hmUI.widget.IMG, {
      ...LOGO_PARAMS
    });

    // Text
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_PARAMS
    });

    // Button
    const button = hmUI.createWidget(hmUI.widget.BUTTON, {
      ...BUTTON_PARAMS
    });
  },
  
  onInit() {
    logger.debug('page onInit invoked');
  },

  onDestroy() {
    logger.debug('page onDestroy invoked');
  },
})