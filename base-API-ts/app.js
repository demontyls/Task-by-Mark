var Store = /** @class */ (function () {
    function Store(country, cityName, temperature, weather, icon) {
        this.country = country;
        this.cityName = cityName;
        this.temperature = temperature;
        this.weather = weather;
        this.icon = icon;
    }
    Store.prototype.creatHtmlElement = function (parentElem, store) {
        var rowElem = document.createElement('div'), srcIcon = "https://openweathermap.org/img/w/".concat(store.icon, ".png");
        rowElem.classList.add('row');
        Object.entries(store).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            var cell = document.createElement('div');
            if (key !== 'icon') {
                cell.classList.add('cell', "cell-".concat(key));
                cell.textContent = value;
                if (key === 'weather') {
                    var img = document.createElement('img');
                    img.classList.add('img');
                    img.setAttribute('src', srcIcon);
                    cell.append(img);
                }
            }
            rowElem.append(cell);
        });
        parentElem.append(rowElem);
    };
    return Store;
}());
var tableBody = document.querySelector('#table-body');
var cities = ['Saint Petersburg', 'London', 'Singapur', 'Shanghai', 'Moscow', 'Rostov-on-Don'];
var renderData = [];
var storeData = JSON.parse(localStorage.getItem('weather'));
!localStorage.getItem('weather') ? setDataWeather(cities) : setStoreFromArray(storeData);
function setStore(prop) {
    var weatherInfo = new Store(prop.sys.country, prop.name, prop.main.temp, prop.weather[0].description, prop.weather[0].icon), intermediary = weatherInfo;
    weatherInfo.creatHtmlElement(tableBody, intermediary);
}
function setStoreFromArray(data) {
    data.forEach(function (prop) { return setStore(prop); });
}
function setDataWeather(cities) {
    cities.forEach(function (city) {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&lang=ru&units=metric&appid=f9a1d1e4a73ba5fb25716826bec87998");
        fetch(url)
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            renderData.push(data);
            setStore(data);
            localStorage.setItem('weather', JSON.stringify(renderData));
        })["catch"](function () {
            confirm('error');
            confirm && location.reload();
        });
    });
}
