import controller from './map.controller';
import template from './map.pug';
import './map.less';

let MapDirective = () => {
    return {
        controller,
        template,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {},
        bindToController: true
    };
};

export default MapDirective;
