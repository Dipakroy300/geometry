function displayData(x, y, z){
    const tableBody = document.getElementById('table-container');
    const tRow = document.createElement('tr');
    tRow.innerHTML = `
    <td>${x}</td>
    <td>${y}</td>
    <td>${z}cm<sup>2</sup></td>
    <td><button class="bg-blue-500 hover:bg-sky-700 rounded-sm px-1 py-1 w-32 text-white font-medium">Convert to m<sup>2</sup></button></td>
    `
    tableBody.appendChild(tRow);
}