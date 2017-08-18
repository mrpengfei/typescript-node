export default class DefaultResult{
    constructor(state:boolean,result:any,message:string){
        this.state = state;
        this.result = result;
        this.message = message;
    }
    state:boolean;
    message:string;
    result:any
}