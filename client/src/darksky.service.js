class DarkSkyService {
    /* @ngInject */
    constructor($http) {
        this.data = [];
        this.$http = $http;
    }
    
    refresh(coords) {
        let url = '/api/weather/' + coords.lat + '/' + coords.lng;
        this.$http({
            url,
            method: 'GET'
        }).then((res) => {
            this.data = res.data;
        }).catch((e) => {
            console.error(e);
        });
    }
};

export default DarkSkyService;
