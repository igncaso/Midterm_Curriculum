$(()=>{
    let coureseData = [];
    fetch("act.json")
    .then((rawData)=> rawData.json())
    .then(data =>{
        console.log(data);
        

        const semLevels = [
            "First Year, First Semester",
            "First Year, Second Semester",
            "Second Year, First Semester",
            "Second Year, Second Semester",
            "Third Year, First Semester",
            "Third Year, Second Semester",
            "Fourth Year, First Semester",
            "Fourth Year, Second Semester"
        ];
        let semCount = 1;
        semLevels.forEach(semLevel =>{
           
            $("#table-with-data").append(
                ` <tr>    
                     <th colspan="7" class="class-color1">${semLevel} </th>  
                    </tr>

                    <tr>
                       <th> Course</th>
                    <th>Description</th>
                    <th>Unit</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                    <th>Course</th>
                    <th>Term</th>
                    </tr>`
            );
            
            data.forEach(course => {
                if (course["semLevels"] == semCount) {
                    let rowClass = ''; 
                    if (course["remarks"] === "In progress") {
                        rowClass = 'class-yellow'; 
                    } else if (course["remarks"] === "") {
                        rowClass = 'class-white'; 
                    }

                    $("#table-with-data").append(
                        `<tr class="${rowClass}"> <!-- Apply the class here -->
                            <td>${course["course"]}</td>
                            <td>${course["des"]}</td>
                            <td>${course["unit"].toFixed(1)}</td>
                            <td>${course["grade"]}</td>
                            <td>${course["remarks"]}</td>
                            <td>${course["Course"]}</td>
                            <td>${course["term"]}</td>
                        </tr>`
                    );
                }
            });
            semCount++;
        });
    });
});