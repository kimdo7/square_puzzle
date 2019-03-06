import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/client/home/home.component';
import { GameComponent } from './component/client/game/game.component';
import { LoginComponent } from './component/client/login/login.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { GameDetailComponent } from './component/admin/game-detail/game-detail.component';
import { AdminGameListComponent } from './component/admin/game-list/admin-game-list.component';
import { GameListComponent } from './component/client/gameList/gameList.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "admin", component: AdminComponent, children: [
            { path: "", component: AdminLoginComponent },
            {
                path: "gameList", component: AdminGameListComponent, children: [
                    { path: "new", component: GameDetailComponent },
                    { path: "eidt/:id", component: GameDetailComponent }
                ]
            },

        ]
    },
    { path: "home", component: HomeComponent },
    { path: "gameList", component: GameListComponent },
    { path: "game/:id", component: GameComponent },
    { path: "login", component: LoginComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
