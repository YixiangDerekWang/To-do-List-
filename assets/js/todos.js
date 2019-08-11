// cross off when completed
$('ul').on('click', 'li', function () {
  $(this).toggleClass('completed')
})

// delete item 
$('ul').on('click', 'span', function (event) {
  $(this).parent().fadeOut(300, function () {
    $(this).remove()
  })
  event.stopPropagation()
})

// add new item
$('input[type="text"]').keypress(function (event) {
  if (event.which === 13) {
    var newItem = $(this).val()
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + newItem + '</li>')
    $(this).val('')
  }
})

// toggle add item field
$('#plusIcon').click(function () {
  $('input[type="text"]').fadeToggle()
})