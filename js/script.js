
// jQuery
$(function(){

    // draggable
    $( "#draggable" ).draggable();

    // accordian
    $( "#accordion" ).accordion({
           collapsible: true
    });

    var data = [
        "HTML",
        "CSS",
        "javaScript"
        ];

    $( "#c_name" ).autocomplete({
        source: data
    });

     $( function() {
    $( "input" ).checkboxradio();
  } );


     $( function() {
    $( "#resizable" ).resizable();



$( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).removeClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).addClass( "newClass" );
      }, 1500 );
    } };

 });


 $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).removeClass( "newClass", 1000, callback );
    });
 
// tabs

     $( function() {
    $( "#tabs" ).tabs();
  } );

// sortable
      $( function() {
    $( "#sortable" ).sortable();
  } );

// datepicker   

      $( function() {
    $( "#datepicker" ).datepicker();
  } );

 $( function() {
    $( "#resizable" ).resizable();
  } );


 $( function() {
    $( "#button" ).on( "click", function() {
      $( ".newClass" ).switchClass( "newClass", "anotherNewClass", 1000 );
      $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass", 1000 );
    });
  } );


$( function() {
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );
  </script>



  } );

  