import angular from 'angular';

import MapDirective from './map/map.directive';

let MapModule = angular.module('Map', [])
    .directive('map', MapDirective);
    
export default MapModule;
