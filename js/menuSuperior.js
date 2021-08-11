$(document.body).ready(function(){
    let lastScrollTop = 0
    $(window).scroll(function(e) {
          if(e.scrollY === lastScrollTop) return
          if(this.scrollY < lastScrollTop){
            $("#blocoMenuSup").css("opacity", "1")
            $("#blocoMenuSup").css("position", "fixed")
          }else {
            if($(this).scrollTop()> 80){
                $("#blocoMenuSup").css("opacity", "0")
                $("#blocoMenuSup").css("position", "fixed")
            }else {
                $("#blocoMenuSup").css("opacity", "1")
                $("#blocoMenuSup").css("position", "absolute")
            }
          }
          lastScrollTop = this.scrollY
     })

    //Menu superior
    function abreSubMenu(){
        $("#subMenu ul").css("display", "block")
        $("#subMenu").off("click", abreSubMenu)
        $("#subMenu").on("click", fecharSubMenu)
    }

    $("#subMenu").on("click", abreSubMenu)

    function fecharSubMenu(){
        $("#subMenu ul").css("display", "none")
        $("#subMenu").on("click", abreSubMenu)
        $("#subMenu").off("click", fecharSubMenu)
    }

    function abreMenu(){
        $("#menuSup").css("display", "block")
        $("#menu").off("click", abreMenu)
        $("#menu").on("click", fecharMenu)
    }

    $("#menu").on("click", abreMenu)

    function fecharMenu(){
        $("#menuSup").css("display", "none")
        $("#menu").off("click", fecharMenu)
        $("#menu").on("click", abreMenu)
    }
})