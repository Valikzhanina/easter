calc.onclick = function () {
    table.innerHTML = buildTableHtml(getEasters(from.value, to.value));
}
function buildTableHtml(arr) {
    let html = "";
    for (let i = 0; i < arr.length; i++) {
        html += "<tr>";
            for (let j = 0; j < arr[i].length; j++){
                html += "<td>" + arr[i][j] + "</td>";
            } 
        html += "</tr>";
    }
    return html;
}