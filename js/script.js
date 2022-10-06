// Needs to have static view
// use existing classed to structure HTML
// create 8 click handlers

(function($) {
var currentHour = moment().hours()
$( "li" ).each(function( index ) {
    console.log( index + ": " + $( this ).text() );
  });
  function createRows() {
    var holder = $("#holder")
    for (let i = 9; i < 17; i++) {
    var timeBlock = $("<div>") 
        timeBlock.addClass("row time-block").attr("id", i)
    var hourBlock = $("<div>")
        hourBlock.addClass("col-1 hour").text(i+":00")
    var textBlock =$("<textarea>")
        textBlock.addClass("col-10 discription")
    var saveBtn = $("<button>")
        saveBtn.addClass("col-1 saveBtn").html(`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
      </svg>`)
    
        timeBlock.append(hourBlock).append(textBlock).append(saveBtn)
        holder.append(timeBlock)
    }
    
  }
  function colorDivs(){
    $( ".time-block" ).each(function( index ) {
        console.log( index + ": " + $( this ).text() );
        var blockHour = parseInt($(this).attr("id"))
        if (currentHour > blockHour) {
            $(this).addClass("past")
            
        }
        else if (currentHour === blockHour){
            $(this).addClass("present")  
        } else {
            $(this).addClass("future")
        }
      });
  }

    $(document).ready(function(){
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
        $(".saveBtn").on("click", function(){
            var value = $(this).siblings(".discription").val()
            var divs = $(this).parent().attr("id")
            localStorage.setItem("time", value)
        })
        function hourUpdate(){
            var currentHour = moment().hour()
            $(".time-block").each(function(){
                var blockHour = parseInt($(this).attr("id").split("r")[1])
                if(currentHour > blockHour) {
                    $(this).removeClass("future")
                    $(this).removeClass("present")
                    $(this).addClass("past")
                }
                else if (currentHour === blockHour) {
                    $(this).removeClass("past")
                    $(this).removeClass("future")
                    $(this).addClass("present")
                }
                else {
                    $(this).removeClass("present")
                    $(this).removeClass("past")
                    $(this).addClass("future")
                }
                    
                
            })
        }

        hourUpdate()
        $("#hour9 .discription").val(localStorage.getItem("hour9"))
        $("#hour10 .discription").val(localStorage.getItem("hour10"))
        $("#hour11 .discription").val(localStorage.getItem("hour11"))
        $("#hour12 .discription").val(localStorage.getItem("hour12"))
        $("#hour13 .discription").val(localStorage.getItem("hour13"))
        $("#hour14 .discription").val(localStorage.getItem("hour14"))
        $("#hour15 .discription").val(localStorage.getItem("hour15"))
        $("#hour16 .discription").val(localStorage.getItem("hour16"))
        $("#hour17 .discription").val(localStorage.getItem("hour17"))

    })


  createRows()
  colorDivs()
})(jQuery);
