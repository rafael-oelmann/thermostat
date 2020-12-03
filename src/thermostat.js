'use strict';

class Thermostat{

  constructor() {
    this.MINIMUM_TEMP = 10;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.DEFAULT_TEMP = 20;
    this._temperature = this.DEFAULT_TEMP;
    this.powerSavingMode = true;
    this.HIGH_ENERGY_USEAGE_LIMIT = 25;
    this.MEDIUM_ENERGY_USEAGE_LIMIT = 18;
  }

  getCurrentTemp() {
    return this._temperature
  }

  up() {
    if(this.isMaxTemp()) {
      return;
    }
    return this._temperature += 1;
  }

  down() {
    if(this.isMinimumTemp()) {
      return;
    }
    return this._temperature -= 1;
  }

  resetTemp() {
    this._temperature = this.DEFAULT_TEMP;
  }

  energyUseage () {
    if (this._temperature < this.MEDIUM_ENERGY_USEAGE_LIMIT) {
      return 'low-useage';
    }
    if (this._temperature <= this.HIGH_ENERGY_USEAGE_LIMIT) {
      return 'medium-useage';
    }
    return 'high-useage';
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }

  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  isMinimumTemp() {
    return this._temperature === this.MINIMUM_TEMP;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }
  isMaxTemp() {
    if(this.isPowerSavingModeOn() === false){
      return this._temperature === this.MAX_LIMIT_PSM_OFF;
    }
    return this._temperature === this.MAX_LIMIT_PSM_ON;
  }
}