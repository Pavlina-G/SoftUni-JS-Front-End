function extractFile(path){
    let fileIdx = path.lastIndexOf('\\')+1;
    let extIdx = path.lastIndexOf('.');

    console.log(`File name: ${path.slice(fileIdx,extIdx)}`);
    console.log(`File extension: ${path.slice(extIdx+1)}`);
}

extractFile('C:\\desktop\\academy\\template.pptx');
extractFile('C:\\Projects\\website.folder\\file.name.js');