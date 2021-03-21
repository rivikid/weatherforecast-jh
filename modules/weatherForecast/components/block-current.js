const Current = () => {
  return `
    <div class="weather__loader">
    </div>
    <div class="weather__current">
      <span class="weather__message"></span>
      <div class="weather__data">
        <div>
          <span class="weather__city"></span>
          <span class="weather__country"></span>
        </div>
        <span class="weather__temperature"></span>
      </div>
    </div>`;
};

export default Current;
