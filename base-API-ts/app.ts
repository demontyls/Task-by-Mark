class Store {
  country: string;
  cityName: string;
  temperature: number;
  weather?: string;
  icon?: string;

  constructor(country: string, cityName: string, temperature: number, weather?: string, icon?: string) {
    this.country = country;
    this.cityName = cityName;
    this.temperature = temperature;
    this.weather = weather;
    this.icon = icon;

  }

  creatHtmlElement(parentElem:Element, store: object) {
    const rowElem:HTMLDivElement = document.createElement('div'),
          srcIcon:string = `https://openweathermap.org/img/w/${store.icon}.png`;

    rowElem.classList.add('row');

    Object.entries(store).forEach(([key, value]) => {
      const cell:HTMLDivElement = document.createElement('div');

      if (key !== 'icon') {
        cell.classList.add('cell', `cell-${key}`);
        cell.textContent = value;

        if (key === 'weather') {
          const img:HTMLImageElement = document.createElement('img');
          img.classList.add('img');
          img.setAttribute('src', srcIcon);
          cell.append(img);
        }
      }

      rowElem.append(cell);
    });

    parentElem.append(rowElem);
  }
}

const tableBody:Element = document.querySelector('#table-body'),
      cities: string[] = ['Saint Petersburg', 'London', 'Singapur', 'Shanghai', 'Moscow', 'Rostov-on-Don'],
      renderData:any = [],
      storeData:any = JSON.parse(localStorage.getItem('weather'));

!localStorage.getItem('weather') ? setDataWeather(cities) : setStoreFromArray(storeData);

function setStore (prop:any) {
  const weatherInfo:Store = new Store(prop.sys.country, prop.name, prop.main.temp, prop.weather[0].description, prop.weather[0].icon),
  intermediary:Store = weatherInfo;
  weatherInfo.creatHtmlElement(tableBody, intermediary);
}

function setStoreFromArray (data:any) {
  data.forEach((prop:any) => setStore(prop));
}

function setDataWeather(cities:string[]) {
  cities.forEach((city) => {
    const url: string = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=f9a1d1e4a73ba5fb25716826bec87998`;
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        renderData.push(data);
        setStore(data);
        localStorage.setItem('weather', JSON.stringify(renderData));
      })
      .catch(function () {
        confirm('error');
        confirm && location.reload();
      });
  })
}