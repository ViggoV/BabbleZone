var should_scroll = false;
var mouseOffset = 0;

$(document).ready(function() {
    $(".babble-scroll").each(function() {
        var container_height
        var content_height
        var scroll_bar_height
        
        container_height = $(this).height();
        content_height = $(this).find(".babble-scroll-content").height();
        scroll_bar_height = container_height*(container_height/content_height);
        
        $(this).find(".babble-scroll-content").attr('unselectable','on').css('UserSelect','none').css('MozUserSelect','none');
        
        if (content_height > container_height) {        
            var scroll_bar_string = "<div class=\"babble-scroll-bar\" style=\"height:"+Math.round(scroll_bar_height)+"px;\"></div>";
            $(this).append(scroll_bar_string);
            
            $(this).find(".babble-scroll-bar").mousedown(function(event) {
                should_scroll = true;
                mouseOffset = event.pageY - ($(this).offset().top - parseInt($(this).css("margin-top")));
                $("#showcase").html(String(should_scroll));
            });
            
            $(document).mouseup(function() {
                should_scroll = false;
                $("#showcase").html(String(should_scroll));
            });
            
            $(this).mousemove(function(event) {
                mouseY = event.pageY;
                parentTop = $(this).offset().top;
                maxTop = $(this).innerHeight() - $(this).find(".babble-scroll-bar").outerHeight(true);
                
                scroll_distance = mouseY - parentTop;
                
                $("#showcase").html(mouseY + ", " + mouseOffset + ", " + scroll_distance);
                
                newTop = scroll_distance - mouseOffset;
                contentHeight = $(this).find(".babble-scroll-content").height() - $(this).height();
                
                if (should_scroll) {
                    if (newTop <= 0) {
                        $(this).find(".babble-scroll-bar").css("top", 0 + "px");
                        $(this).find(".babble-scroll-content").css("top", 0 + "px")
                    } else if (newTop >= maxTop) {
                        $(this).find(".babble-scroll-bar").css("top", maxTop + "px");
                        $(this).find(".babble-scroll-content").css("top", -contentHeight + "px");
                    } else if (newTop > 0 && newTop < maxTop) {
                        $(this).find(".babble-scroll-bar").css("top", newTop + "px");
                        $(this).find(".babble-scroll-content").css("top", -(contentHeight*(newTop/maxTop)) + "px");
                    }
                }  
            })
            
            var mousewheelevt=(/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
            
            $(this).on("mousewheel DOMMouseScroll", function(e) {
                e.preventDefault();
                var delta = e.originalEvent.detail ? e.originalEvent.detail : -e.originalEvent.wheelDelta;
                
                parentTop = $(this).offset().top;
                maxTop = $(this).innerHeight() - $(this).find(".babble-scroll-bar").outerHeight(true);
                
                newTop = parseInt($(this).find(".babble-scroll-bar").css("top")) + delta;
                contentHeight = $(this).find(".babble-scroll-content").height() - $(this).height();
                
                if (newTop <= 0) {
                    $(this).find(".babble-scroll-bar").css("top", 0 + "px");
                    $(this).find(".babble-scroll-content").css("top", 0 + "px")
                } else if (newTop >= maxTop) {
                    $(this).find(".babble-scroll-bar").css("top", maxTop + "px");
                    $(this).find(".babble-scroll-content").css("top", -contentHeight + "px");
                } else if (newTop > 0 && newTop < maxTop) {
                    $(this).find(".babble-scroll-bar").css("top", newTop + "px");
                    $(this).find(".babble-scroll-content").css("top", -(contentHeight*(newTop/maxTop)) + "px");
                }
            });
        }
    })
})