const colorList = [ '#ff8d85', '#87c38f', '#ffdd80', '#94a6ff' ];

function createNav() {
    const navList = document.querySelector("nav ul");
    
    const navButton = document.querySelector("#nav-button");
    const nav = document.querySelector("nav");
    navButton.onclick = () => {
        nav.classList.toggle("active");
        navButton.classList.toggle("active");
    }
    document.querySelector("#content").onclick = () => {
        nav.classList.remove("active");
        navButton.classList.remove("active");
    }


    const titles = Array.from(document.querySelectorAll("h2, h3"));
    titles.forEach((element,index) => {
        const newItem = document.createElement("li");
        newItem.classList.add("nav-item");
        newItem.classList.add(element.localName == "h2" ? "primary" : "secondary");

        const newLink = document.createElement("a");
        newLink.innerHTML = element.innerHTML;
        newLink.href = "#" + element.id;
        newLink.style.borderColor = colorList[index % colorList.length];
        
        newItem.append(newLink);
        navList.append(newItem);
    });

    document.querySelectorAll(".nav-item").forEach(e => {
        e.onclick = () => {
            nav.classList.remove("active");
            navButton.classList.remove("active");
        }
    });

}

function main(){
    createNav();
    
}

window.onload = main;
