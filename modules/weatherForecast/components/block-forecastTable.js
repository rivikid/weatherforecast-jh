const ForecastTable = () => {
  return `<table>
    <thead>
    <tr>
    <th scope="col">Day</th>
    <th scope="col">Temperature</th>
    </tr>
    </thead>
    <tbody class="weather__forecast-content-rows">
      <tr><td>Pondělí 1. března 2021</td><td>5 °C</td></tr>
      <tr><td>Úterý 2. března 2021</td><td>6 °C</td></tr>
      <tr><td>Středa 3. března 2021</td><td>4 °C</td></tr>
      <tr><td>Čtvrtek 4. března 2021</td><td>5 °C</td></tr>
      <tr><td>Pátek 5. března 2021</td><td>3 °C</td></tr>
    </tbody>
    </table>`;
};

export default ForecastTable;
