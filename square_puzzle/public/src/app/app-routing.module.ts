import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "play", component: PlayComponent},
    {path: "game/:id", component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
