function bg(){

    const pt = document.getElementById("bg");
    const sw = document.getElementById("switch");

    if(pt.style.backgroundColor == "black")
        {
            pt.style.backgroundColor = "white";
            pt.style.color = "black";
            sw.innerHTML = "dark mode"
            }

            else{
                pt.style.backgroundColor = "black";
                pt.style.color = "white";
                sw.innerHTML = "light mode"
                }

}

    