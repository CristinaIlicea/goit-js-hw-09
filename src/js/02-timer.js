
// Descris în documentație
// Import suplimentar de stil

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

const btn = document.getElementById('btn');
btn.disabled = true;

var now = new Date().getTime();
let selectedDates = [0];
var onClose = selectedDates[0];
const input = document.getElementsByTagName("input");

input.addEventListener(onClose, () => {
    if (selectedDates[0] < now) {
        btn.disabled = true;
        window.alert("Please choose a date in the future");
    }
    else if(selectedDates[0] >= now) {
        btn.disabled = false;
    }
    
});


