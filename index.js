/*let tbl1data =['001','002','003','004','005','006','007','008','009','010,'];
let tbl2data =['011','012'];*/

$(document).ready(function(){
    var tbl1data = [];var tbl2data = [];
    $('#table1').on('click','.btnadd',function(){
        loadTableLeadNo();
        let tblrow = $(this).closest('tr');
        let leadno = tblrow.find("td:eq(0)").text();
        let leadname = tblrow.find("td:eq(1)").text();        
        let leadjoin = tblrow.find("td:eq(2)").text();
        let leadphone = tblrow.find("td:eq(3)").text();
        let row = `<tr>
                    <td>${leadno}</td>
                    <td>${leadname}</td>
                    <td>${leadjoin}</td>
                    <td>${leadphone}</td>
                    <td><button class="btn btn-danger btn-sm btnrmv">Remove</button></td>
                </tr>`;
        if(!tbl2data.includes(leadno)){
            tbl2data.push(leadno);
            tbl1data = tbl1data.filter(x=>x!==leadno);
            $(this).closest('tr').remove();
           $('#table2').append(row); 
        }
        popolateCurrArr();
    })
    $('#table2').on('click','.btnrmv',function(){
        loadTableLeadNo();
        let tblrow = $(this).closest('tr');
        let leadno = tblrow.find("td:eq(0)").text();
        let leadname = tblrow.find("td:eq(1)").text();        
        let leadjoin = tblrow.find("td:eq(2)").text();
        let leadphone = tblrow.find("td:eq(3)").text();
        let row = `<tr>
                    <td>${leadno}</td>
                    <td>${leadname}</td>
                    <td>${leadjoin}</td>
                    <td>${leadphone}</td>
                    <td><button class="btn btn-info btn-sm btnadd">Add</button></td>
                </tr>`;

        if(!tbl1data.includes(leadno)){
            tbl1data.push(leadno);
            tbl2data = tbl2data.filter(x=>x!==leadno);
            $(this).closest('tr').remove();
            $('#table1').append(row);
        }
        popolateCurrArr();
    })
    let loadTableLeadNo = () =>{
        var selectedCells = document.querySelectorAll('#table1 td:nth-child(2)');
        tbl1data =[];
        selectedCells.forEach(function(singleCell) {
            tbl1data.push(singleCell.innerText);
        });
        var selectedCells = document.querySelectorAll('#table2 td:nth-child(2)');
        tbl2data=[];
        selectedCells.forEach(function(singleCell) {
            tbl2data.push(singleCell.innerText);
        });
        console.log(tbl1data);
        console.log(tbl2data);
    }

    let popolateCurrArr = () =>{
        var firstCells = document.querySelectorAll('#table2 td:nth-child(2)');
        var cellValues = [];
        firstCells.forEach(function(singleCell) {
            cellValues.push(singleCell.innerText);
        });
        console.log(cellValues);
    }
    $('#tabletojson').click(() =>{
        var table = $('#table2').tableToJSON({
            ignoreColumns: [4]
        });
        console.log(table);
        let jsontable = JSON.stringify(table);
        console.log(jsontable);
    })
})
