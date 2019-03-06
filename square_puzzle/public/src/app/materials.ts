import { NgModule } from "@angular/core";
import { MatButtonModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatTooltipModule, MatFormFieldModule } from "@angular/material"
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatTooltipModule,
        MatFormFieldModule
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatTooltipModule,
        MatFormFieldModule
    ]
})

export class MaterialModule {

}