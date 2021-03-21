const ForecastTable = () => {
  return `<table class="table table--rounded table--light">
      <thead>
      <tr>
        <th scope="col">Day</th>
        <th scope="col">Temperature</th>
      </tr>
      </thead>
      <tbody class="js-weather__forecast__rows">
      </tbody>
    </table>`;
};

export default ForecastTable;
