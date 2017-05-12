class PostController {
  // assume this is only being constructed on doc load
  constructor() {
    // + create an event listener for the submit action
    $('#photo-form').on('submit', function(e){
      e.preventDefault()
      // + grab the url and caption from the form as data
      const caption = this.cap.value
      const url = this.url.value
      // + render those to the html by appending them to #photo-list
      const html = PostView.render(url, caption)
      $('#photo-list').append(html)
      // clear out the form
      this.cap.value = ''
      this.url.value = ''
    })

  }


}
