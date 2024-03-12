import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './contacts/list/list.component';
import { AddComponent } from './contacts/add/add.component';
import { ViewComponent } from './contacts/view/view.component';
import { EditComponent } from './contacts/edit/edit.component';

const routes: Routes = [
  {path: 'contacts', component: ListComponent},
  {path: 'contacts/add', component: AddComponent},
  {path: 'contacts/edit/:id', component: EditComponent},
  {path: 'contacts/:id', component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
