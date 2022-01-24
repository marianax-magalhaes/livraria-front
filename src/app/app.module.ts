import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/view/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/view/categoria/categoria-update/categoria-update.component';
import { LivroReadAllComponent } from './components/view/livro/livro-read-all/livro-read-all.component';
import { LivroCreateComponent } from './components/view/livro/livro-create/livro-create.component';
import { LivroUpdateComponent } from './components/view/livro/livro-update/livro-update.component';
import { LivroDeleteComponent } from './components/view/livro/livro-delete/livro-delete.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoriaReadComponent,
    CategoriaCreateComponent,
    CategoriaDeleteComponent,
    CategoriaUpdateComponent,
    LivroReadAllComponent,
    LivroCreateComponent,
    LivroUpdateComponent,
    LivroDeleteComponent,
    LivroReadComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
