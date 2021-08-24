import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform{ 
    transform(value: String, limit?:number) {
        if(!value) return null;
        return value.substring(0, limit ? limit : 5);
    }
}