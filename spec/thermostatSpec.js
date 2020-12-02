describe('thermostat', () => {
  let thermostat;

  beforeEach(function() {

    thermostat = new Thermostat();

  });

  describe('temperature', () => {

    it('Starts at 20', () => {

      expect(thermostat.temperature).toEqual(20);

    }); 

    it('increases by 1 when user increases temp', () => {

      thermostat.increaseTemp();
      expect(thermostat.temperature).toEqual(21);

    });

  });

});