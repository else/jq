var section_names = $.map(section_map, function(v,k){return k});
$(function(){
  $('#searchbox').typeahead({source: section_names})
  $('#searchbox').change(function() {
    if ($(this).val() in section_map) {
      location.hash = '#' + section_map[$(this).val()];
    }
  });
});
// add "Run" button to execute examples on jqplay.org
$(function() {
  $.each($('.manual-example table'), function(index, value) {
    $value = $(value)
    var j = $value.find('tr:nth-child(2) td:first').text();
    var q = $value.find('.jqprogram').text().replace(/^jq /, '').replace(/^'(.+)'$/, '$1');
    var url = 'https://jqplay.org/jq?q=' + encodeURIComponent(q) +'&j=' + encodeURIComponent(j)
    var $last_tr = $value.find('tr:last');
    $last_tr.after('<tr class="jqplay-btn"><th><a href="' + url + '" class="btn btn-primary btn-sm">Run</a></th><th></th></tr><tr><th></th><th></th></tr>');
  });
});
