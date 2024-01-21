import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { TagComponent } from './tag/tag.component';
import { ColorComponent } from './color/color.component';
import { CategoryComponent } from './category/category.component';
import { SizeComponent } from './size/size.component';
import { UserTypeComponent } from './user-type/user-type.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';


@NgModule({
  declarations: [
    TagComponent,
    ColorComponent,
    CategoryComponent,
    SizeComponent,
    UserTypeComponent,
    BrandLogoComponent
  ],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
