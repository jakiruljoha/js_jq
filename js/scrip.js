  
$(document).ready(function (){
  // // animate function
  // $("#animate_btn").click(function (){
  //   $(".animation").animate({
  //     right:'500px',
  //     width:'500px',
  //     height:'43px'
  //   });
  // });
  // Stop function
  // $("#slide_btn").click(function (){
  //   $(".slide_p").slideToggle(5000);
  // });
  // $("#stop_btn").click(function (){
  //   $(".slide_p").stop()
  // });

  // Callback function
  $("#hide_btn").click(function (){
    $(".hide_p").hide("slow",function(){
      alert("The paragraph is now hidden");
    });
  });

  // Change function
  $("#cng_btn").click(function (){
    $(".cng_p").css("color","red",).slideUp(1000).slideDown(1000)
  });

  // Get Html function
  $("#know_btn").click(function (){
    alert("Message:" + $(".know_p").text());
  });
  $("#know_html_btn").click(function (){
    alert("Message:" + $(".know_p").html());
  });


  // Set  function
  $("#set_text_btn").click(function (){
    $(".set_text").text("Hello world");
  });
  $("#set_html_btn").click(function (){
    $(".set_html").html("<b><i> I am a frelancer<i/></b>");
  });
  $("#set_value_btn").click(function (){
    $("#input").val("full stack web developer ");
  });

  // remove and empty

  $("#remove_btn").click(function (){
    $("#remove_em").remove();
  });

  $("#emty_btn").click(function (){
    $("#remove_em").empty();
  });

  // switch class
  $( function() {
    $( "#button" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });
  } );

  // JQ UI

 // sortable
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

  // draggable
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  } );

  // accordion
  $( function() {
    $( "#accordion" ).accordion();
  } );

  // autocomplete
  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

  // datepicker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  // dialog
  $( function() {
    $( "#dialog" ).dialog();
  } );

  // selectmenu
  $( function() {
    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();
  } );

  // slider
   $( function() {
    $( "#slider" ).slider();
  } );

   // tabs
   $( function() {
    $( "#tabs" ).tabs();
  } );

});


