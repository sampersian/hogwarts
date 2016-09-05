$('.searchForm').submit(function(event) {
  event.preventDefault();
  var searchValue = $('.searchValue').val();
  var searchMethod = $('.searchMethod').val();
  window.location.href = "./"+searchMethod+"/"+searchValue;
});

$('.apiSectionSelect').change(function() {
  console.log($(this).val())
  $('.apiSection').hide()
  $('.'+$(this).val()).show();
})
