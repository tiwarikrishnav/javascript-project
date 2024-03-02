const endDate = "11 March 2024 05:45 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock() 
{
    const end = new Date(endDate)
    const now = new Date()
    // console.log(end);
    // console.log(now);
    // // console.log(end,now)
    const diff = (end-now) / 1000;

    if(diff<= 0) return 0 ;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    // console.log(Math.floor(diff / 24 / 60));

    // console.log(diff);
    // // console.log(diff/3600/60/24);
    // console.log(Math.floor(diff / 3600 / 24));
    // console.log(Math.floor(diff / 3600) % 24);
    // console.log(Math.floor(diff / 60) % 60);

    // inputs[0].value = math.floor(diff / 3600 / 24);
    // convert into days;
}

//initial call
clock()

// setInterval(
//     () => {
//         clock()
//     }, 1000
// )

/**
 * 1 day = 24 hrs
 * 1hrs = 60mins
 * 60 mins = 3600 sec
*/
setInterval(
    () => {
        clock()
    },
    1000
) 