import { gettext } from "i18n";

const logger = DeviceRuntimeCore.HmLogger.getLogger('Home');
const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);

Page({
  build() {
    logger.debug('page build invoked');
    
    hmApp.setScreenKeep(true);

    const {
      width: DEVICE_WIDTH,
      height: DEVICE_HEIGHT
    } = hmSetting.getDeviceInfo();

    // Timer Settings
    let is_timer_running = false;

    // Logo
    const logo = hmUI.createWidget(hmUI.widget.IMG, {
      src: 'icon.png',
      x: (DEVICE_WIDTH - 60) / 2,
      y: 90
    });

    // Text
    const text = hmUI.createWidget(hmUI.widget.TEXT, {
      text: gettext('appName'),
      x: 42,
      y: 160,
      w: DEVICE_WIDTH - 42 * 2,
      h: 50,
      color: 0xffffff,
      text_size: 36,
      align_h: hmUI.align.CENTER_H,
      text_style: hmUI.text_style.WRAP
    });

    // Button
    const button = hmUI.createWidget(hmUI.widget.BUTTON, {
      x: (480 - 400) / 2,
      y: 240,
      w: DEVICE_WIDTH - 42 * 2,
      h: 100,
      radius: 30,
      normal_color: 0x71E0A9,
      press_color: 0x004d40,
      text: 'Start',
      text_size: 36,
      color: 0x000000,
      click_func: (button_widget) => {    
        const interval = timer.createTimer(
          0,
          1000,
          (option) => {
            vibrate.stop();
            vibrate.scene = 25;
            vibrate.start();
            is_timer_running = is_timer_running == true ? false : true;

            if(is_timer_running) {
              timer.stopTimer(interval);
            }

            //console.log(option.hour)
          },
          {
            hour: 0,
            minute: 0,
            second: 0
          }
        )
      }
    });
  },
  
  onInit() {
    logger.debug('page onInit invoked');
  },

  onDestroy() {
    logger.debug('page onDestroy invoked');
    
    vibrate && vibrate.stop();
  },
})