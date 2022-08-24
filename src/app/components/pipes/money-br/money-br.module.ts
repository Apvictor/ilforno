import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoneyBr } from './money-br.pipe';

@NgModule({
    declarations: [MoneyBr],
    exports: [MoneyBr],
    imports: [CommonModule],
})
export class MoneyBrModule { }
