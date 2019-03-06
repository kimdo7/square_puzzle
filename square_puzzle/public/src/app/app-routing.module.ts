import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { PlayComponent } from './component/play/play.component';
import { GameComponent } from './component/game/game.component';
import { LoginComponent } from './component/login/login.component';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "admin", component: AdminComponent},
    {path: "home", component: HomeComponent},
    {path: "play", component: PlayComponent},
    {path: "game/:id", component: GameComponent},
    {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
