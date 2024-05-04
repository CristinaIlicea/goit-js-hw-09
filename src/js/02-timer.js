
// flatpicker

flatpickr("#datetime-picker", {});

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

//default button disabled

const btn = document.getElementById('btn');
btn.disabled = true;

//today's date:

const todayDate = new Date().getTime();
let selectedDates = [0];
var onClose = selectedDates[0];
const input = document.getElementsByTagName("input");


//convert time to ms:

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


//onClose, if date is in the future, enable button and start counter; clear when timer reaches 0


input.addEventListener(onClose, () => {
    if (selectedDates[0] < todayDate) {
        btn.disabled = true;
        window.alert("Please choose a date in the future");
    }
    else if(selectedDates[0] >= todayDate) {
        btn.disabled = false;
        //timer:
        const timer = setInterval(function() {
        count--;
        console.log(count);
        if(count === 0) {
            clearInterval(timer);
            console.log("Time's up!"); 
        }
        }, 1000);
        }
    
});


