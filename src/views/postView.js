class PostView {
// generate the html with url and caption arguments for a post styled as a materialze picture card.
  static render(url, caption) {
    return `<div class="row">
      <div class="col s8">
        <div class="card">
          <div class="card-image">
            <img src=${url}>
          </div>
          <div class="card-content">
            <p>${caption}</p>
          </div>
        </div>
      </div>
    </div>`
  }

}
