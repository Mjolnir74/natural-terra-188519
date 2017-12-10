import controller from './weather.controller';
import template from './weather.pug';
import './weather.less';

let WeatherDirective = () => {
    return {
        controller,
        template,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default WeatherDirective;
