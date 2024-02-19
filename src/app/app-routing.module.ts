import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListagemProdutosComponent } from './pages/produtos/listagem-produtos/listagem-produtos.component';
import { EnderecoMatrizComponent } from './pages/enderecos/endereco-matriz/endereco-matriz.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'produtos', component:ListagemProdutosComponent},
  {path:'endereco', component:EnderecoMatrizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
