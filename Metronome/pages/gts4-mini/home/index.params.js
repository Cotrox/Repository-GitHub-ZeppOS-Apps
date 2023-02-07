import { gettext } from "i18n";

export const {
  width: DEVICE_WIDTH,
  height: DEVICE_HEIGHT
} = hmSetting.getDeviceInfo();

export const LOGO_PARAMS = {
  src: 'icon.png',
  x: (DEVICE_WIDTH - 60) / 2,
  y: 90
}

export const TEXT_PARAMS = {
  text: gettext('appName'),
  x: 42,
  y: 160,
  w: DEVICE_WIDTH - 42 * 2,
  h: 50,
  color: 0xffffff,
  text_size: 36,
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP
}

export const BUTTON_PARAMS = {
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
    const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);

    const interval = timer.createTimer(
      10,
      1000,
      (option) => {
        vibrate.stop();
        vibrate.scene = 25;
        vibrate.start();
        
        //console.log(option.hour)
      },
      {
        hour: 0,
        minute: 0,
        second: 0
      }
    )

    //timer.stopTimer(interval)
  }
}