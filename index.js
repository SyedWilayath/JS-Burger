const settings = {
  async: true,
  crossDomain: true,
  url: "https://burgers1.p.rapidapi.com/burgers",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "05fefddc5amshe82caa1862a2f8cp15fb97jsn1ee9dd9eb288",
    "X-RapidAPI-Host": "burgers1.p.rapidapi.com"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);

  for (var i = 1; i < response.length; i++) {
    var content = `
        <div class="col">
        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
          <div class="card-body">
            <h5 class="card-title">${response[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              ${response[i].restaurant}
            </h6>
            <p class="card-text">${response[i].description}</p>
             <button href='https://${response[i].web}' class="btn btn-outline-dark">VISIT HERE</button>
          </div>
        </div>
      </div>
        `;
    $(".row").append(content);
  }
});
