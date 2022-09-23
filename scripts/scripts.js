
$.ajax({
    type: "GET",
    url: "http://localhost/news/news.php",
    dataType: "html",
    success: (json) => {
        let datas = JSON.parse(json);
        for(const data of datas){
            if(data['type'] == 1){
                $('#main').html(`<img class="img-fluid shadow" src="${data['art_img']}">
                <div class="hero-post-badges">
                    <a href="#">${data['title']}</a>
                </div>
                <div class="hero-post-content">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="img-fluid rounded-circle shadow" src="${data['auth_img']}">
                        </div>
                        <div class="col-md-9">
                            <h2>${data['title']}</h2>
                        </div>
                    </div>
                </div>`)
            }
        }
        
    }
})
