export default class{
    id;
    handler;
    start;
    TimeLeft;

    constructor(handler: TimerHandler, timer: number){
        this.id = setTimeout(handler, timer)
        this.handler = handler
        this.start = Date.now();
        this.TimeLeft = timer;
    }

    clear(){
        clearInterval(this.id);
    }

    pause(){
        const passed = Date.now() - this.start;
        this.TimeLeft = this.TimeLeft - passed;
        this.clear();
    }

    continue(){
        this.clear();
        this.id = setTimeout(this.handler, this.TimeLeft);
        this.start = Date.now();
    }
}