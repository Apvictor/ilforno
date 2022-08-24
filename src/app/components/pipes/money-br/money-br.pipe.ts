import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'moneyBr' })
export class MoneyBr implements PipeTransform {

    transform(preco: any) {
        if (preco == undefined) return preco;

        return (parseFloat(preco)).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })
        // .replace('R$', '').trim();
    }

}