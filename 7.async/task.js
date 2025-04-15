class AlarmClock {
    constructor() {
        this.alarmCollection = []
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        const existingAlarm = this.alarmCollection.find((alarm) => alarm.time === time);

        if (existingAlarm) {
            console.warn(`Уже присутствует звонок на это же время: ${time}`);
        }


        const newAlarm = {
            callback,
            time,
            canCall: true
        };

        this.alarmCollection.push(newAlarm);
    }

    removeClock(time) {
        if (!time) {
            throw new Error('Время для удаления звонка не передано.');
        }

        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    start() {
        if (this.intervalId) {
            console.warn('Будильник уже запущен.');
            return;
        }

        this.intervalId = setInterval(() => {
            const currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach((alarm) => {
                if (alarm.canCall && alarm.time === currentTime) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        console.log(this.intervalId)
    }

    resetAllCalls() {
        this.alarmCollection.forEach((alarm) => {
            alarm.canCall = true;
        });
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}