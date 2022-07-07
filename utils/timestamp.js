function convertToTimeStamp(fecha){
    const dt = new Date(fecha).getTime();  
    return dt / 1000;  
}

function convertToDate(fecha){
    let date = new Date(fecha * 1000)
    return date
}

module.exports = {convertToTimeStamp, convertToDate}