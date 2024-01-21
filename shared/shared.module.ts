import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Error404Component } from './components/error404/error404.component';
import { FeatherIconComponent } from './components/feather-icon/feather-icon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    SidebarComponent,
    LayoutComponent,
    Error404Component,
    FeatherIconComponent
  ],
  imports: [
    CommonModule,
    RouterModule //for router-links
  ]
})
export class SharedModule { }
