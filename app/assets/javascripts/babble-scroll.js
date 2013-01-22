var should_scroll = false

$(document).ready(function() {
    $(".babble-scroll").each(function() {
        var container_height
        var content_height
        var scroll_bar_height
        
        container_height = $(this).height()
        content_height = $(this).find(".babble-scroll-content").height()
        scroll_bar_height = container_height*(container_height/content_height)
        
        if (content_height > container_height) {        
            var scroll_bar_string = "<div class=\"babble-scroll-bar\" style=\"height:"+Math.round(scroll_bar_height)+"px;\"></div>"
            $(this).append(scroll_bar_string);
            
            $(this).find(".babble-scroll-bar").mousedown(function() {
                should_scroll = true
            })
            
            $(this).find(".babble-scroll-bar").mouseup(function() {
                should_scroll = false
            })
            
            $(this).find(".babble-scroll-bar").mousemove(function() {
                var mouseOffsetX
                
                if (should_scroll) {
                    
                }
            })
        }
    })
})

$(".babble-scroll").load(function() {
    
})

$(".babble-scroll").click(function() {
    alert("Halløj")
})