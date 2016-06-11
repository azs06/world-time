var storage = (function () {
    var key = 'world-time';
    function save(timezone){
        localStorage.setItem(key, JSON.stringify(timezone));
    }

    function fetch(){
        return JSON.parse(localStorage.getItem(key) || '[]');
    }
    return{
        save: save,
        fetch: fetch
    }
})();