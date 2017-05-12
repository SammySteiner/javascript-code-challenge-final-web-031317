$(document).ready(function(){
  // your code here!
  // + create an event listener for the submit action
  $('#photo-form').on('submit', function(e){
    e.preventDefault()
    // + grab the url and caption from the form as data
    const caption = this.cap.value
    const url = this.url.value
    // + render those to the html by appending them to #photo-list
    html = `<div class="row">
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
    $('#photo-list').append(html)
  })
  // clear out the form
})
