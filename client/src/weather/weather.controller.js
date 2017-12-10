class WeatherController {
    /* @ngInject */
    constructor(DarkSkyService) {
        this.DarkSkyService = DarkSkyService;
    }
    
    isoDate(time) {
        return new Date(time * 1000).toLocaleDateString();
    }
};

export default WeatherController;
