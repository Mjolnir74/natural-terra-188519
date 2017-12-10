import angualar from 'angular';

import MapModule from './map.module';
import WeatherModule from './weather.module';

import DarkSkyService from './darksky.service';

angular.module('App', [
    MapModule.name,
    WeatherModule.name
])

.service('DarkSkyService', DarkSkyService);

angular.element(document).ready(() => {
    angular.bootstrap(document.body, ['App'])
});
