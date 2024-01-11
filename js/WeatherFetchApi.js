export class WeatherFetchApi {
  constructor(root) {
    this.root = document.querySelector(root);
    this.upload();
  }

  async fetchAPI(city) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=51a46a1aa607fd2229efee61b085e8a3&lang=pt_br`;

    let res = await fetch(endpoint)
      .then((data) => data.json())
      .then((data) => console.log(data));

    return res;
  }

  async upload() {
    const searchButton = this.root.querySelector(".search-wrapper button");

    this.cardContainer = this.root.querySelector(".weather-card");

    searchButton.onclick = () => {
      let searchInput = this.root.querySelector("#search-input");
      let city = searchInput.value;
      return this.fetchAPI(city);
    };
  }
}
