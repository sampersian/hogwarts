$('.searchForm').submit(function(event) {
  event.preventDefault();
  var searchValue = $('.searchValue').val();
  var searchMethod = $('.searchMethod').val();
  window.location.href = "../"+searchMethod+"/"+searchValue;
});

$('.apiForm').submit(function(event) {
  event.preventDefault();
  var searchValue = $('.apiValue').val();
  window.location.href = "../api/"+searchValue;
});

$('.apiSectionSelect').change(function() {
  console.log($(this).val())
  $('.apiSection').hide()
  $('.'+$(this).val()).show();
})
