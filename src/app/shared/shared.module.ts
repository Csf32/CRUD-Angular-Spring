
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';


@NgModule({
  //Declarations é somente a parte de componentes
  declarations: [
    ErrorDialogComponent,

  ],

  //Módulos é no import
  imports: [
    CommonModule,
    AppMaterialModule

  ],
  exports: [
     ErrorDialogComponent
  ]

})

export class SharedModule { }
