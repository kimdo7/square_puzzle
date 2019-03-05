import { NgModule } from "@angular/core";
import { MatButtonModule, MatSortModule, MatPaginatorModule } from "@angular/material"
import { MatListModule } from '@angular/material/list'
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        MatButtonModule, 
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ],
    exports: [
        MatButtonModule, 
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
    ]
})

export class MaterialModule {

}