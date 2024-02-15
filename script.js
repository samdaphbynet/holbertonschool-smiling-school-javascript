$(document).ready(function() {
    $(".leader").show();

    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      method: "GET",
      success: function(response) {
        $(".loader").hide();

        response.forEach(function(quote, index) {
          let itemClass = index === 0 ? "carousel-item active" : "carousel-item";
          let quoteHtml = `
          <div class="${itemClass}">
            <div class="row mx-auto align-items-center">
              <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${index + 1}" />
              </div>
              <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                <div class="quote-text">
                  <p class="text-white">« ${quote.text} »</p>
                  <h4 class="text-white font-weight-bold">${quote.name}</h4>
                  <span class="text-white">${quote.title}</span>
                </div>
              </div>
            </div>
          </div>
          `;
          $('.carousel-inner').append(quoteHtml);
        });
      }, error: function() {
        $(".loader").hide();
        console.log("Error fetching")
      }
    });
  });