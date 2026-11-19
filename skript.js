
const button = document.createElement("button");

button.textContent = "SOTIB OLISH";

button.onclick = function() {
    button.textContent = "SOTIB OLINDI ✓";
    button.style.background = "#008000";
    button.style.boxShadow = "0 0 20px green";
    button.disabled = true;
    button.style.cursor = "default";
};
