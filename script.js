$(document).ready(function () {
  $("#quoteavies").show();

  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    success: function (response) {
      $("#quoteavies").hide();

      response.forEach(function (quote, index) {
        let itemClass = index === 0 ? "carousel-item active" : "carousel-item";
        let quoteHtml = `
          <div class="${itemClass}">
            <div class="row mx-auto align-items-center">
              <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                <img src="${
                  quote.pic_url
                }" class="d-block align-self-center" alt="Carousel Pic ${
          index + 1
        }" />
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
        $(".first-quote").append(quoteHtml);
      });
    },
    error: function () {
      $(".quoteavies").hide();
      console.log("Error fetching");
    },
  });

  // Most popular tutorials

  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    beforeSend: function () {
      $("#quotevideo").show();
    },
    success: function (data) {
      $("#quotevideo").hide();

      let carouselHtml = ""; // HTML pour le contenu interne du carousel

      // Boucle sur chaque citation et génère le HTML de la carte
      for (let i = 0; i < data.length; i += 4) {
        // Détermine la classe active pour la première carte
        let activeClass = i === 0 ? "active" : "";

        // Débute le div pour un item du carousel
        carouselHtml += `<div class="carousel-item ${activeClass}"><div class="row">`;

        // Génère le HTML pour chaque carte dans cet item du carousel
        for (let j = i; j < i + 4 && j < data.length; j++) {
          let quote = data[j];
          let cardHtml = `
            <div class="col-lg-3">
              <div class="card">
                <img src="${
                  quote.thumb_url
                }" class="card-img-top" alt="Video thumbnail" />
                <div class="card-img-overlay text-center">
                  <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${quote.title}</h5>
                  <p class="card-text text-muted">${quote["sub-title"]}</p>
                  <div class="creator d-flex align-items-center">
                    <img src="${
                      quote.author_pic_url
                    }" alt="Creator of Video" width="30px" class="rounded-circle" />
                    <h6 class="pl-3 m-0 main-color">${quote.author}</h6>
                  </div>
                  <div class="info pt-3 d-flex justify-content-between">
                    <div class="rating">
                      ${generateStars(quote.star)}
                    </div>
                    <span class="main-color">${quote.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          `;

          // Ajoute la carte au contenu du carousel
          carouselHtml += cardHtml;
        }

        // Termine le div pour un item du carousel
        carouselHtml += `</div></div>`;
      }

      // Remplace le contenu du carousel par le HTML généré
      $(".quotevideo").html(carouselHtml);
    },
    error: function () {
      $("#quotevideo").hide();
      alert("Error fetching video data");
    },
  });

  // latest video

  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    beforeSend: function () {
      $("#quotevideo").show();
    },
    success: function (data) {
      $("#quotevideo").hide();

      let carouselHtml = ""; // HTML pour le contenu interne du carousel

      // Boucle sur chaque citation et génère le HTML de la carte
      for (let i = 0; i < data.length; i += 4) {
        // Détermine la classe active pour la première carte
        let activeClass = i === 0 ? "active" : "";

        // Débute le div pour un item du carousel
        carouselHtml += `<div class="carousel-item ${activeClass}"><div class="row">`;

        // Génère le HTML pour chaque carte dans cet item du carousel
        for (let j = i; j < i + 4 && j < data.length; j++) {
          let quote = data[j];
          let cardHtml = `
            <div class="col-lg-3">
              <div class="card">
                <img src="${
                  quote.thumb_url
                }" class="card-img-top" alt="Video thumbnail" />
                <div class="card-img-overlay text-center">
                  <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${quote.title}</h5>
                  <p class="card-text text-muted">${quote["sub-title"]}</p>
                  <div class="creator d-flex align-items-center">
                    <img src="${
                      quote.author_pic_url
                    }" alt="Creator of Video" width="30px" class="rounded-circle" />
                    <h6 class="pl-3 m-0 main-color">${quote.author}</h6>
                  </div>
                  <div class="info pt-3 d-flex justify-content-between">
                    <div class="rating">
                      ${generateStars(quote.star)}
                    </div>
                    <span class="main-color">${quote.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          `;

          // Ajoute la carte au contenu du carousel
          carouselHtml += cardHtml;
        }

        // Termine le div pour un item du carousel
        carouselHtml += `</div></div>`;
      }

      // Remplace le contenu du carousel par le HTML généré
      $(".latestVideo").html(carouselHtml);
    },
    error: function () {
      $("#quotevideo").hide();
      alert("Error fetching video data");
    },
  });

  // quote page pricing

  $.ajax({
    url: "https://smileschool-api.hbtn.info/quotes",
    method: "GET",
    beforeSend: function () {
      $("#pricing").show();
    },
    success: function (response) {
      $("#pricing").hide();

      response.forEach(function (quote, index) {
        let itemClass = index === 0 ? "carousel-item active" : "carousel-item";
        let quoteHtml = `
          <div class="${itemClass}">
            <div class="row mx-auto align-items-center">
              <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                <img src="${
                  quote.pic_url
                }" class="d-block align-self-center" alt="Carousel Pic ${
          index + 1
        }" />
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
        $(".pricing").append(quoteHtml);
      });
    },
    error: function () {
      $("#pricing").hide();
      console.log("Error fetching");
    },
  });

  // quote courses

  $.ajax({
    url: "https://smileschool-api.hbtn.info/courses",
    type: "get",
    data: {
      action: "query",
      list: "search",
      format: "json",
      // q: '',
      // topic: 'all',
      // sort: 'most_viewed',
    },
    beforeSend: function () {
      $("#CoursesLoader").show();
    },
    success: function (response) {
      $("#CoursesLoader").hide();
      let $t = response.topics;
      $("#topic-menu-container")
        .append(`<button class="btn btn-secondary border-0 rounded-0 search-element w-100 text-left" type="button" id="current-topic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${$t[0].substr(0, 1).toUpperCase() + $t[0].substr(1)}
        </button>
        <div class="dropdown-menu" id="topic-menu" aria-labelledby="topic-menu-container"></div>`);
      let $topics = "";
      for (let i = 0; i < $t.length; i++) {
        $topics += `<button data-value="${
          $t[i]
        }" class="dropdown-item" type="button">${
          $t[i].substr(0, 1).toUpperCase() + $t[i].substr(1)
        }</button>`;
      }
      $("#topic-menu").append($topics);

      let $s = response.sorts;
      $("#sort-menu-container")
        .append(`<button class="btn btn-secondary border-0 rounded-0 search-element w-100 text-left" type="button" id="current-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ${
            $s[0].substr(0, 1).toUpperCase() +
            $s[0].substr(1, 3) +
            " " +
            $s[0].substr(5, 1).toUpperCase() +
            $s[0].substr(6)
          }
        </button>
        <div class="dropdown-menu" id="sort-menu" aria-labelledby="sort-menu-container"></div>`);
      let $sorts = "";
      for (let i = 0; i < $s.length; i++) {
        $sorts += `<button data-value="${
          $s[i]
        }" class="dropdown-item" type="button">${
          $s[i].substr(0, 1).toUpperCase() +
          $s[i].substr(1, 3) +
          " " +
          $s[i].substr(5, 1).toUpperCase() +
          $s[i].substr(6)
        }</button>`;
      }
      $("#sort-menu").append($sorts);
      $.displayCourses(
        "",
        $("#current-topic").text().trim(),
        $("#current-sort").text().trim()
      );

      let $topicVal;
      $("#topic-menu button").click(function (e) {
        $topicVal = e.target.getAttribute("data-value");
        $("#current-topic").text(e.target.textContent);
        $.displayCourses(
          $("#user_search").val(),
          $("#current-topic").text().trim(),
          $("#current-sort").text().trim()
        );
        console.log($("#user_search").val());
      });
      $("#sort-menu button").click(function (e) {
        $topicVal = e.target.getAttribute("data-value");
        $("#current-sort").text(e.target.textContent);
        $.displayCourses(
          $("#user_search").val(),
          $("#current-topic").text().trim(),
          $("#current-sort").text().trim()
        );
      });
      $("#user_search").on("input", function (e) {
        setTimeout(function () {
          $.displayCourses(
            $("#user_search").val(),
            $("#current-topic").text().trim(),
            $("#current-sort").text().trim()
          );
        }, 500);
      });
    },
  });

  $.displayCourses = function ($q, $t, $s) {
    $.ajax({
      url: "https://smileschool-api.hbtn.info/courses",
      type: "get",
      data: {
        action: "query",
        list: "search",
        format: "json",
        q: $q,
        topic: $t,
        sort: $s,
      },
      beforeSend: function () {
        $("#CoursesLoader").show();
      },
      success: function (response) {
        $("#CoursesLoader").hide();
        let $c = response.courses;
        $("#coursesvideos").empty();
        $("#numberofvideos").text(
          `${$c.length === 1 ? "1 video" : $c.length + " videos"}`
        );
        for (let i = 0; i < $c.length; i++) {
          let $stars = "";
          for (let j = 0; j < $c[i].star; j++) {
            $stars +=
              '<img src="./images/star_on.png" class="mr-1 carousel-star-icon" alt="star icon filled in purple">';
          }
          for (let j = 0; j < 5 - $c[i].star; j++) {
            $stars +=
              '<img src="./images/star_off.png" class="carousel-star-icon" alt="star icon filled in grey">';
          }
          let $html = $(`
                  <div class="text-center col-12 col-sm-6 col-md-3">
                      <div class="carousel-item active">
                          <img class="w-100" src="${$c[i].thumb_url}" alt="smile image">
                          <div class="mx-3">
                              <div class="font-weight-bold text-dark text-left mt-3">
                                  ${$c[i].title}
                              </div>
                          
                              <div class="text-secondary text-left mt-3 mb-3">
                                  ${$c[i]["sub-title"]}
                              </div>

                              <div class="d-flex align-items-center mb-3">
                                  <img src="${$c[i].author_pic_url}" width="30px" class="rounded-circle" alt="profile image">
                                  <div class="pl-3 m-0 main-color">${$c[i].author}</div>
                              </div>

                              <div class="d-flex justify-content-between">
                                  <div class="d-flex pt-1">
                                  ${$stars}
                                  </div>
                                  <div class="purple-text font-weight-bold">
                                      ${$c[i].duration}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>`);
          $("#coursesvideos").append($html);
        }
      },
    });
  };

  function generateStars(rating) {
    var stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars += '<img src="images/star_on.png" alt="star on" width="15px" />';
      } else {
        stars +=
          '<img src="images/star_off.png" alt="star off" width="15px" />';
      }
    }
    return stars;
  }
});
