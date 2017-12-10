import angular from 'angular';

import WeatherDirective from './weather/weather.directive';

let WeatherModule = angular.module('Weather', [])
    .directive('weather', WeatherDirective);
    
export default WeatherModule;
