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
    beforeSend: function() {
      $("#quotevideo").show();
    },
    success: function(data) {
      $("#quotevideo").hide();
  
      let carouselHtml = ''; // HTML pour le contenu interne du carousel
  
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
                <img src="${quote.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                <div class="card-img-overlay text-center">
                  <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${quote.title}</h5>
                  <p class="card-text text-muted">${quote["sub-title"]}</p>
                  <div class="creator d-flex align-items-center">
                    <img src="${quote.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
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
    error: function() {
      $("#quotevideo").hide();
      alert("Error fetching video data");
    }
  });



  $.ajax({
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    method: "GET",
    beforeSend: function() {
      $("#quotevideo").show();
    },
    success: function(data) {
      $("#quotevideo").hide();
  
      let carouselHtml = ''; // HTML pour le contenu interne du carousel
  
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
                <img src="${quote.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                <div class="card-img-overlay text-center">
                  <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                </div>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">${quote.title}</h5>
                  <p class="card-text text-muted">${quote["sub-title"]}</p>
                  <div class="creator d-flex align-items-center">
                    <img src="${quote.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
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
    error: function() {
      $("#quotevideo").hide();
      alert("Error fetching video data");
    }
  });
  

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










{/* <div class="row align-items-center mx-auto">
                <div
                  class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                  <div class="card">
                    <img src="images/thumbnail_4.jpg" class="card-img-top" alt="Video thumbnail" />
                    <div class="card-img-overlay text-center">
                      <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                        Diagonal Smile
                      </h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet, consect adipiscing elit,
                        sed do eiusmod.
                      </p>
                      <div class="creator d-flex align-items-center">
                        <img src="images/profile_1.jpg" alt="Creator of
                            Video" width="30px" class="rounded-circle" />
                        <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating">
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_off.png" alt="star on" width="15px" />
                        </div>
                        <span class="main-color">8 min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center">
                  <div class="card">
                    <img src="images/thumbnail_3.jpg" class="card-img-top" alt="Video thumbnail" />
                    <div class="card-img-overlay text-center">
                      <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">Sad Smile</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet, consect adipiscing elit,
                        sed do eiusmod.
                      </p>
                      <div class="creator d-flex align-items-center">
                        <img src="images/profile_1.jpg" alt="Creator of
                            Video" width="30px" class="rounded-circle" />
                        <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating">
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_off.png" alt="star on" width="15px" />
                        </div>
                        <span class="main-color">8 min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-none d-lg-flex justify-content-center">
                  <div class="card">
                    <img src="images/thumbnail_1.jpg" class="card-img-top" alt="Video thumbnail" />
                    <div class="card-img-overlay text-center">
                      <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                        Natural Smile
                      </h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet, consect adipiscing elit,
                        sed do eiusmod.
                      </p>
                      <div class="creator d-flex align-items-center">
                        <img src="images/profile_1.jpg" alt="Creator of
                            Video" width="30px" class="rounded-circle" />
                        <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating">
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_off.png" alt="star on" width="15px" />
                        </div>
                        <span class="main-color">8 min</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-3 d-none d-lg-flex justify-content-center">
                  <div class="card">
                    <img src="images/thumbnail_2.jpg" class="card-img-top" alt="Video thumbnail" />
                    <div class="card-img-overlay text-center">
                      <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">Happy Smile</h5>
                      <p class="card-text text-muted">
                        Lorem ipsum dolor sit amet, consect adipiscing elit,
                        sed do eiusmod.
                      </p>
                      <div class="creator d-flex align-items-center">
                        <img src="images/profile_1.jpg" alt="Creator of
                            Video" width="30px" class="rounded-circle" />
                        <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating">
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_on.png" alt="star on" width="15px" />
                          <img src="images/star_off.png" alt="star on" width="15px" />
                        </div>
                        <span class="main-color">8 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}