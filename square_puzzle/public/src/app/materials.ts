import { NgModule } from "@angular/core";
import { MatButtonModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatCardModule, MatExpansionModule, MatIconModule } from "@angular/material"
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
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatGridListModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatExpansionModule,
        MatIconModule
    ]
})

export class MaterialModule {

}