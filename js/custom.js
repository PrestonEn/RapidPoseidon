$(document).ready(function() {

    $('#albumMode').click(function (){
        if($('#album_view').hasClass('kill') == false){
            alert('teasd');     
        }else{
            $('#album_view').removeClass('kill');
            $('.info_head').addClass('kill');
            $('#draggable').addClass('kill');
        }
    });


    $('#listMode').click(function (){
        if($('#draggable').hasClass('kill') == false){
        }else{
            $('#album_view').addClass('kill');
            $('.info_head').removeClass('kill');
            $('#draggable').removeClass('kill');
        }
    });


    var selectedClass = 'ui-state-highlight',
        clickDelay = 600,
        // click time (milliseconds)
        lastClick, diffClick; // timestamps
    $("#draggable li")
        // Script to deferentiate a click from a mousedown for drag event
        .bind('mousedown mouseup', function(e) {
            if (e.type == "mousedown") {
                lastClick = e.timeStamp; // get mousedown time
            } else {
                diffClick = e.timeStamp - lastClick;
                if (diffClick < clickDelay) {
                    // add selected class to group draggable objects
                    $(this).toggleClass(selectedClass);
                }
            }
        }).draggable({
            tolerance: "pointer",
            helper: 'clone',
            revertDuration: 10,
            // grouped items animate separately, so leave this number low
            containment: '.demo',
            start: function(e, ui) {
                ui.helper.addClass(selectedClass);
            },
            stop: function(e, ui) {
                // reset group positions
                $('.' + selectedClass).css({
                    top: 0,
                    left: 0
                });
            },
            drag: function(e, ui) {
                // set selected group position to main dragged object
                // this works because the position is relative to the starting position
                $('.' + selectedClass).css({
                    top: ui.position.top,
                    left: ui.position.left
                });
            }
        });
    $('.drag_item').draggable({
        appendTo: 'body'
    });
    $("#droppable").sortable().droppable({
        drop: function(e, ui) {
            $('.' + selectedClass).clone().appendTo(
                    $(this)).add(ui.draggable) // ui.draggable is appended by the script, so add it after
            $('.' + selectedClass).removeClass(
                selectedClass).css({
                top: 0,
                left: 0
            });
            $('.' + selectedClass).removeClass(
                'ui-state-active');
            $('#background').addClass('kill');
        }
    });
    $("#songItem").dblclick(function() {
        alert("Handler for .dblclick() called.");
    });

    function toggleSidebar(side) {
        if (side !== "left" && side !== "right") {
            return false;
        }
        var left = $("#sidebar-left"),
            right = $("#sidebar-right"),
            content = $("#content"),
            openSidebarsCount = 0,
            contentClass = "";
        // toggle sidebar
        if (side === "left") {
            left.toggleClass("collapsed");
        } else if (side === "right") {
            right.toggleClass("collapsed");
            if(right.hasClass('collapsed') == false){
                                        $('#playname').focus();

            }
        }
        // determine number of open sidebars
        if (!left.hasClass("collapsed")) {
            openSidebarsCount += 1;
        }
        if (!right.hasClass("collapsed")) {
            openSidebarsCount += 1;

        }
        // determine appropriate content class
        if (openSidebarsCount === 0) {
            contentClass = "col-md-12";
        } else if (openSidebarsCount === 1) {
            contentClass = "col-md-9";
        } else {
            contentClass = "col-md-6";
        }
        // apply class to content
        content.removeClass("col-md-12 col-md-9 col-md-6").addClass(
            contentClass);
    }
    $("#toggle-sidebar-left").click(function() {
        toggleSidebar("left");
        return false;
    });
    $("#new_list").click(function() {
        toggleSidebar("right");
        return false;
    });
    $("#search").click(function() {
        alert("Search Happens!");
    });
    $(".fa-play").click(function() {
        $(this).removeClass("fa-play");
        $(this).addClass("fa-pause");
    });
    $(".fa-pause").click(function() {
        $(this).removeClass("fa-pause");
        $(this).addClass("fa-play");
    });


    $(".drag_item").dblclick(function() {
            $('.playpause i').removeClass('fa-play');
            $('.playpause i').addClass('fa-pause');
                    document.getElementById('song_name').innerHTML = $('.ui-state-active div song_name').innerHTML;

        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        $("#progressbar").progressbar("value", 0);
        // remove class from anything else
        $('.ui-state-active').removeClass(
            'ui-state-active');
        $('.' + selectedClass).removeClass(
            selectedClass).css({
            top: 0,
            left: 0
        });
        // add class to this one
        $(this).addClass('ui-state-active');
        // call "startplaying " helper function
        window.setTimeout(tick_function, tick_interval *
            100);
    });
    $(function() {
        $("#progressbar").progressbar({
            value: 0
        });
    });
    toggleSidebar("right");
    var tick_interval = 1;
    var tick_increment = 1;
    var tick_function = function() {
        var value = $("#progressbar").progressbar("option",
            "value");
        value += tick_increment;
        $("#progressbar").progressbar("option", "value",
            value);
        if (value < 100) {

            window.setTimeout(tick_function, tick_interval *
                100);
        } else {
        var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        $("#progressbar").progressbar("value", 0);
            var index = $('.ui-state-active').index();
 
            $('.ui-state-active').removeClass(
                'ui-state-active');

            $("#draggable li").eq(index+1).addClass('ui-state-active');
            // alert($("#draggable li").eq(index+1).eq(0));
            document.getElementById('song_name').innerHTML = $('.ui-state-active div song_name').innerHTML;

            window.setTimeout(tick_function, tick_interval *
            100);
        }
    };

        $("#listlist").append('<li id="playli"></li>');

    $('#playname').blur(function(){
         document.getElementById('playli').innerHTML = document.getElementById('playname').innerHTML;
    })

    $('.topbar_info').dblclick(function(){
        alert("sorting by:" +this.innerHTML);
    } );

    $('#new_in_files_button').click(function(){
           $("#new_in_files").trigger('click');

    });

    $('.playpause').click(function(){
        if($('.playpause i').hasClass('fa-play')){
            $('.playpause i').removeClass('fa-play');
            $('.playpause i').addClass('fa-pause');



        }else{
            $('.playpause i').addClass('fa-play');
            $('.playpause i').removeClass('fa-pause');
                    var id = window.setTimeout(function() {}, 0);
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
        }

    });

    $(".vol_btn").click(function(){
        if($('.vol_btn').hasClass('fa-volume-up')){
            $('.vol_btn').removeClass('fa-volume-up');
            $('.vol_btn').addClass('fa-volume-off');
        }else{
                        $('.vol_btn').addClass('fa-volume-up');
            $('.vol_btn').removeClass('fa-volume-off');
        }
    });

});