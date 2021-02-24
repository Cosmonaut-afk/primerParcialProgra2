function addRow() {
    var date = document.getElementById('date').value;
    var bebida = document.getElementById('bebida').value;
    var vasos = document.getElementById('vasos').value;
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(0);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML = date;
    cel2.innerHTML = bebida;
    cel3.innerHTML = vasos;
}