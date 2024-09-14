import fs from 'fs/promises';

const read = async () => {
    const data = await fs.readFile('text.txt', 'utf-8');
    console.log(data);
}

// read as a promise
// fs.readFile('text.txt', 'utf-8').then((data) => console.log(data))
// .catch((err) => console.log(err));

const write = async () => {
    try {
        await fs.writeFile('text.txt', 'written data.')
    } catch (error) {
        console.log(error);
    }
}

const append = async () => {
    try {
        await fs.appendFile('text.txt', '\nappended text , 2nd line');
    } catch (err) {
        console.log(err);
    }
}

const main = async () => {
    await write();    // Wait for write operation to finish
    await append();   // Then append data
    await read();     // Finally, read the file
}

main();  // Run the main function
