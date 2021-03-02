// Loads the content for the quotes carousel on homepage.html
function loadQuotes() {
    
    function killLoader() {
        $('#loader-quotes').remove();
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

/* One at a time carousel stuff */
function loadVideoCarousel() {

    $('.carousel-multi .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      
        for (var i = 0; i < 4; i++) {
          next = next.next();
          if (!next.length) {
            next = $(this).siblings(':first');
          }
      
          next.children(':first-child').clone().appendTo($(this));
        }
      });

}

function loadTutorials() {
    function killLoader() {
        $('#loader-popular-tutorials').remove();
    }
    
    let url = 'https://smileschool-api.hbtn.info/popular-tutorials';
    $.get(url, function (data, status) {
        if (status == 'success') {
            killLoader();
            data.forEach(function (element) {               
                $('#popular-tutorials-inner').append(`
                    <div class="carousel-item">
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div class="card card-video mx-auto">
                                <img class="card-img-top" src="${element.thumb_url}" alt="thumbnail_4">
                                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                    <img class="" src="images/play.png" alt="play" width="64px" height="64px">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text text-darkblue-subdued">${element['sub-title']}</p>
                                    <div class="d-flex">
                                        <img class="rounded-circle" src="${element.author_pic_url}" alt="${element.author} headshot" width="30px" height="30px" loading="lazy">
                                        <p class="text-primary text-author my-0 py-0 align-self-center ml-2">${element.author}</p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex pt-2" id="stars-${element.star}-id-${element.id}"></div>
                                        <p class="text-primary text-author">${element.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                /* Add stars for this element */
                for (let i = 0; i < 5; i++) {
                    if (i < element.star) {
                        $(`#stars-${element.star}-id-${element.id}`).append('<img class="ml-1" src="images/star_on.png" alt="star_on" width="15px" height="15px" loading="lazy">');
                    } else {
                        $(`#stars-${element.star}-id-${element.id}`).append('<img class="ml-1" src="images/star_off.png" alt="star_off" width="15px" height="15px" loading="lazy">');
                    };
                }
                //console.log(element);
            })
            
            /* Make first carousel item active */
            $('#popular-tutorials-inner .carousel-item:first-child').addClass('active');
            
            loadVideoCarousel();
        } else {
            alert("Server Error. Quotes could not be reached.");
        }
    })
}

function loadLatestVideos() {
    function killLoader() {
        $('#loader-latest-videos').remove();
    }
    
    let url = 'https://smileschool-api.hbtn.info/latest-videos';
    $.get(url, function (data, status) {
        if (status == 'success') {
            killLoader();
            data.forEach(function (element) {               
                $('#latest-videos-inner').append(`
                    <div class="carousel-item">
                        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <div class="card card-video mx-auto">
                                <img class="card-img-top" src="${element.thumb_url}" alt="thumbnail_4">
                                <div class="card-img-overlay d-flex justify-content-center align-items-center">
                                    <img class="" src="images/play.png" alt="play" width="64px" height="64px">
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">${element.title}</h5>
                                    <p class="card-text text-darkblue-subdued">${element['sub-title']}</p>
                                    <div class="d-flex">
                                        <img class="rounded-circle" src="${element.author_pic_url}" alt="${element.author} headshot" width="30px" height="30px" loading="lazy">
                                        <p class="text-primary text-author my-0 py-0 align-self-center ml-2">${element.author}</p>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex pt-2" id="v-stars-${element.star}-id-${element.id}"></div>
                                        <p class="text-primary text-author">${element.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                /* Add stars for this element */
                for (let i = 0; i < 5; i++) {
                    if (i < element.star) {
                        $(`#v-stars-${element.star}-id-${element.id}`).append('<img class="ml-1" src="images/star_on.png" alt="star_on" width="15px" height="15px" loading="lazy">');
                    } else {
                        $(`#v-stars-${element.star}-id-${element.id}`).append('<img class="ml-1" src="images/star_off.png" alt="star_off" width="15px" height="15px" loading="lazy">');
                    };
                }
                //console.log(element);
            })
            
            /* Make first carousel item active */
            $('#latest-videos-inner .carousel-item:first-child').addClass('active');
            
            loadVideoCarousel();
        } else {
            alert("Server Error. Quotes could not be reached.");
        }
    })
}

function loadSearchParameters() {
    let url = 'https://smileschool-api.hbtn.info/courses';
    $.get(url, function (data, status) {
        if (status == 'success') {
            data.topics.forEach(function (element) {               
                // Fill out topics dropdown.
                // Capitalize first letter.
                let topic = element.charAt(0).toUpperCase() + element.slice(1);
                $('#topic-list').append(`
                    <div onclick='loadNewSearch("topic-current-dropdown", "${topic}", "${element}")' class="dropdown-item" href="#">${topic}</div>
                `);
                //console.log(element);
            })
            data.sorts.forEach(function (sortOption) {
                let newSortOption = sortOption;
                newSortOption = newSortOption.split('_');
                console.log(newSortOption);
                newSortOption = newSortOption[0].charAt(0).toUpperCase() + newSortOption[0].slice(1) + ' ' + newSortOption[1].charAt(0).toUpperCase() + newSortOption[1].slice(1);
                $('#sort-options').append(`
                    <div onclick='loadNewSearch("sort-by-current-dropdown", "${newSortOption}", "${sortOption}")' class="dropdown-item" href="#">${newSortOption}</div>
                `);
                //console.log(newSortOption);
            })
            loadSearchResults('', 'all', 'most_popular');
        } else {
            alert("Server Error. Quotes could not be reached.");
        }
    })
}

function loadSearchResults(keywords, topic, sortBy) {
    $('#loader-search').css('display', 'block');
    function killLoader() {
        $('#loader-search').css('display', 'none');
    }
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/courses',
        dataType: 'json',
        data: {
            keywords,
            topic,
            sortBy,
        },
        success: function (response) {
            killLoader();
            // Set the results quantity
            if (response.courses.length == 1) {
                $('#search-results-quantity').text('1 video');
            } else {
                $('#search-results-quantity').text(`${response.courses.length} videos`);
            }
            // Build the cards.
            response.courses.forEach(function (course) {               
                $('#search-results').append(`
                <div class="card card-video col-12 col-md-4 col-xl-3">
                    <img class="card-img-top" src="${course.thumb_url}" alt="thumbnail_4">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                        <img class="" src="images/play.png" alt="play" width="64px" height="64px">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text text-darkblue-subdued">${course['sub-title']}</p>
                        <div class="d-flex">
                            <img class="rounded-circle" src="${course.author_pic_url}" alt="${course.author} headshot" width="30px" height="30px" loading="lazy">
                            <p class="text-primary text-author my-0 py-0 align-self-center ml-2">${course.author}</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <div class="d-flex pt-2" id="v-stars-${course.star}-id-${course.id}"></div>
                            <p class="text-primary text-author">${course.duration}</p>
                        </div>
                    </div>
                </div>
                        
                `);
                /* Add stars for this element */
                for (let i = 0; i < 5; i++) {
                    if (i < course.star) {
                        $(`#v-stars-${course.star}-id-${course.id}`).append('<img class="ml-1" src="images/star_on.png" alt="star_on" width="15px" height="15px" loading="lazy">');
                    } else {
                        $(`#v-stars-${course.star}-id-${course.id}`).append('<img class="ml-1" src="images/star_off.png" alt="star_off" width="15px" height="15px" loading="lazy">');
                    };
                }
            })
            //console.log(response);
        },
        error: function (errorMsg) {
            console.log(errorMsg); 
        },
    })
}

function loadNewSearch(listId, listTitle, sortOption) {
    //console.log(sortOption);
    $(`#${listId}`).text(listTitle);
    /*
    console.log(listTag);
    console.log(listTitle);
    console.log(queryValue);
    */
}