const fs = require('fs');
const csv = require('csv-parser');

// Function to filter and write data to a file
function filterData(country, outputFilePath) {
    const filteredData = [];
    fs.createReadStream('input_countries.csv')
        .pipe(csv())
        .on('data', (row) => {
            if (row.country.toLowerCase() === country.toLowerCase()) {
                filteredData.push(row);
            }
        })
        .on('end', () => {
            const header = 'country,year,population\n';
            const content = filteredData.map((row) => `${row.country},${row.year},${row.population}`).join('\n');
            fs.writeFileSync(outputFilePath, header + content);
            console.log(`Data for ${country} filtered and written to ${outputFilePath}`);
        });
}


// Delete canda.txt and usa.txt if they exist
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log(`Deleted canada.txt`);
}

if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log(`Deleted usa.txt`);
}

// Filter and write data for Canada
filterData('Canada', "canada.txt");

// Filter and write data for United States
filterData('United States', "usa.txt");
