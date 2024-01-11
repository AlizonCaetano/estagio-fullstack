export class WeatherFetchApi {
  constructor(root) {
    this.root = document.querySelector(root);
    this.fetcher();
  }

  async fetcher() {
    this.searchButton = this.root.querySelector(".search-wrapper button");
    this.cardContainer = this.root.querySelector(".weather-card");

    const searchInputValue = this.root.querySelector("input#search-input");

    searchButton.onclick = () => {
      console.log(searchInputValue.value);
    };
  }
}
