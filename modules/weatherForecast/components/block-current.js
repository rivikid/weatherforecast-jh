const Current = () => {
  return `
    <div class="weather__loader">
    </div>
    <div class="weather__current-content">
      <span class="weather__current-content__text"></span>
      <div class="weather__current-content__data">
        <div>
          <span class="weather__current-content__city"></span>
          <span class="weather__current-content__country"></span>
        </div>
        <span class="weather__current-content__temperature"></span>
      </div>
    </div>`;
};

export default Current;
