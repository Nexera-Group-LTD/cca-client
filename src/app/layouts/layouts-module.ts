import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Main } from './main/main';
import { SharedModule } from '../shared/shared-module';

const LAYOUT_COMPONENTS = [Main];

@NgModule({
  declarations: LAYOUT_COMPONENTS,
  imports: [CommonModule, RouterModule, SharedModule],
  exports: LAYOUT_COMPONENTS,
})
export class LayoutsModule {}
