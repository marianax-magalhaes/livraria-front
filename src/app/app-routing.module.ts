import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriaCreateComponent } from './components/view/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/view/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/view/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/view/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/view/home/home.component';
import { LivroCreateComponent } from './components/view/livro/livro-create/livro-create.component';
import { LivroDeleteComponent } from './components/view/livro/livro-delete/livro-delete.component';
import { LivroReadAllComponent } from './components/view/livro/livro-read-all/livro-read-all.component';
import { LivroReadComponent } from './components/view/livro/livro-read/livro-read.component';
import { LivroUpdateComponent } from './components/view/livro/livro-update/livro-update.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'categorias', component:CategoriaReadComponent},
  {path:'categorias/create', component:CategoriaCreateComponent},
  {path:'categorias/delete/:id', component: CategoriaDeleteComponent},
  {path:'categorias/update/:id', component: CategoriaUpdateComponent},
  {path:'categorias/:id_cat/livros', component: LivroReadAllComponent},
  {path:'categorias/:id_cat/livros/create', component: LivroCreateComponent},
  {path:'categorias/:id_cat/livros/:id/update', component: LivroUpdateComponent},
  {path:'categorias/:id_cat/livros/:id/delete', component: LivroDeleteComponent},
  {path:'categorias/:id_cat/livros/:id/read', component: LivroReadComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
