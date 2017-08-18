import DefaultResult from './defaultResult.model'

export default class JsonResultList extends DefaultResult {
    count:number

    constructor(state:boolean,result:any,count:number,message:string){
        super(state,result,message);
        this.count = count;
    }
}