
function DateFactory() {
    // Creating custom date
    function BuildDate(now) {
        let day = now.getDate();
        let month = now.getMonth();
        let year = now.getFullYear();

        let dateNow = `${month}/${day}/${year}`

        return dateNow
    }

    // Creating custom hour
    function BuildTime(now) {
        let minutes = now.getMinutes();
        let hour = now.getHours();

        let hourNow = ` ${hour}:${minutes} da`

        return hourNow
    }

    return {BuildDate, BuildTime}
}


export default DateFactory;