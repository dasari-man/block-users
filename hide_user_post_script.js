var users = "Catalpha,AFDBRAJA,kevinUsa"

setInterval(function(){ 
  $.each(users.split(','), function(){
    $(`span:contains(${this})`).closest(".ipsDataItem").remove();     
  });
 }, 100);





 