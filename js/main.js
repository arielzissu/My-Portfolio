'use strict'

renderprojs();

function renderprojs() {
    var projs = getProjs();
    var newProjs = projs.map(proj => {

        var strHtml =
            `<div class="col-md-4 col-sm-6 portfolio-item">

            <a class="portfolio-link" data-toggle="modal" onclick="renderCurrModal('${proj.id}')" href="#portfolioModal1">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
            </a>

            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
            </div>

        </div>`;

        return strHtml;
    });

    var elGamesPictures = document.querySelector('.all-pictures');
    elGamesPictures.innerHTML = newProjs.join('');
}






function renderCurrModal(id) {
    var projs = getProjs();
    var proj = projs.find(currProj => currProj.id === id);
    var strHtml =
        `<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal">
                    <div class="lr">
                        <div class="rl"></div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto">
                            <div class="modal-body">
                                <h2>${proj.name}</h2>
                                <p class="item-intro text-muted">${proj.title}</p>
                                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg">
                                <p>${proj.desc}</p>
                                <ul class="list-inline">
                                    <li>Date:${proj.publishedAt}</li>
                                    <li>Client:${proj.name}</li>
                                    <li>
                                        <a href="${proj.url}" >Link to this game</a>
                                    </li>
                                </ul>
                                <button class="btn btn-primary" data-dismiss="modal" type="button">
                                    <i class="fa fa-times"></i>
                                Close Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>`;

    var elModal = document.querySelector('.big-all-modal');
    elModal.innerHTML = strHtml;

}