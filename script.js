function toggleMenu() {
    const menuOn = document.getElementById("sidebar-menu")
    const sidebar = document.getElementById("sidebar")
    const logoImg = document.getElementById("logoImg")
    const searchBar = document.getElementById("searchBar")
    const btns1 = document.getElementById("btns1")
    const btns2 = document.getElementById("btns2")
    const btns3 = document.getElementById("btns3")
    const btns4 = document.getElementById("btns4")
    const btns5 = document.getElementById("btns5")
    const perfil = document.getElementById("perfil")
    const perfilInfos = document.getElementById("perfilInfos")
    const btnLogout = document.getElementById("btnLogout")
    const main = document.getElementById("main")


    if(menuOn.className === "sidebar-menu-hide") {
        menuOn.className = "sidebar-menu"
        sidebar.className = "sidebar"
        logoImg.className = "logo-img" 
        searchBar.className = "search-bar"
        btns1.className = "btns"
        btns2.className = "btns"
        btns3.className = "btns"
        btns4.className = "btns"
        btns5.className = "btns"
        perfil.className = "perfil"
        perfilInfos.className = "perfil-infos"
        btnLogout.className = "btn-logout"
        main.className = "main"
    } else {
        menuOn.className = "sidebar-menu-hide"
        sidebar.className = "sidebarOff"
        logoImg.className = "logo-imgOff"
        searchBar.className = "search-bar-hide"
        btns1.className = "btnsOff"
        btns2.className = "btnsOff"
        btns3.className = "btnsOff"
        btns4.className = "btnsOff"
        btns5.className = "btnsOff"
        perfil.className = "perfil-hide"
        perfilInfos.className = "perfil-infos-hide"
        btnLogout.className = "btn-logout-hide"
        main.className = "main-hide"
    }
}