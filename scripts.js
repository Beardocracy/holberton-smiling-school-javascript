// Loads the content for the quotes carousel on homepage.html
function loadQuotes() {
    
    function killLoader() {
        $('.loader-box').remove();
    }
    
    let url = 'https://smileschool-api.hbtn.info/quotes';
    //console.log("Quotes loading");
    $.get(url, function (data, status) {
        if (status == 'success') {
            killLoader();
            data.forEach(function (element) {
                $('#carousel-quotes').append(`
                    <div class="carousel-item">
                        <div class="carousel-content row px-2 h-100">
                            <div class="carousel-img-circle col-12 col-md-3 d-flex justify-content-center">
                                <img class="rounded-circle" src=${element.pic_url} alt="Carousel headshot">
                            </div>
                            <div class="carousel-text col-12 col-md-9 d-flex flex-column flex-wrap justify-content-center">
                                <p class="carousel-p">${element.text}</p>
                                <h5 class="carousel-title">${element.name}</h5>
                                <p class="carousel-p font-italic">${element.title}</p>
                            </div>
                        </div>
                    </div>
                `);
                //console.log(element);
            })
            $('#carousel-quotes .carousel-item:first-child').addClass('active');
        } else {
            alert("Server Error. Quotes could not be reached.");
        }
    })
}

