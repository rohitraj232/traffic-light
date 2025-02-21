const lights = [
    { id: 'light1', timerId: 'timer1', statusId: 'status1', duration: 5 },
    { id: 'light2', timerId: 'timer2', statusId: 'status2', duration: 10 },
    { id: 'light3', timerId: 'timer3', statusId: 'status3', duration: 15 },
    { id: 'light4', timerId: 'timer4', statusId: 'status4', duration: 20 }
];

function startCycle() {
    function startTimer(index) {
        let light = document.getElementById(lights[index].id);
        let timerElement = document.getElementById(lights[index].timerId);
        let statusElement = document.getElementById(lights[index].statusId);
        let duration = lights[index].duration;

        let counter = 1;
        let interval = setInterval(() => {
            timerElement.innerText = counter;
            counter++;

            if (counter > duration) {
                clearInterval(interval);
                light.classList.add('green');
                statusElement.innerText = 'GO';

                if (index > 0) {
                    let prevLight = document.getElementById(lights[index - 1].id);
                    let prevStatus = document.getElementById(lights[index - 1].statusId);
                    prevLight.classList.remove('green');
                    prevStatus.innerText = 'STOP';
                }

                if (index === lights.length - 1) {
                    startTimer(0);
                    
                    setTimeout(() => {
                        let lastLight = document.getElementById(lights[index].id);
                        let lastStatus = document.getElementById(lights[index].statusId);
                        lastLight.classList.remove('green');
                        lastStatus.innerText = 'STOP';
                    }, lights[0].duration * 1000); 
                } else {
                    startTimer(index + 1);
                }
            }
        }, 1000);
    }

    startTimer(0);
}

startCycle();
