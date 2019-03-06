import { NgModule } from "@angular/core";
import { MatButtonModule, MatSortModule, MatPaginatorModule, MatGridListModule } from "@angular/material"
import { MatListModule } from '@angular/material/list'
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
        MatButtonModule, 
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule, 
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule
    ]
})

export class MaterialModule {

}