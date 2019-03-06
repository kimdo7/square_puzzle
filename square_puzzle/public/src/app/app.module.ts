import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { HttpService } from './service/http.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/client/home/home.component';
import { GameComponent } from './component/client/game/game.component';
import { LoginComponent } from './component/client/login/login.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
} from "angular-6-social-login";
import { getAuthServiceConfigs } from './service/socialloginConfig';
import { AdminComponent } from './component/admin/admin.component';
import { GameDetailComponent } from './component/admin/game-detail/game-detail.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminGameListComponent } from './component/admin/game-list/admin-game-list.component';
import { GameListComponent } from './component/client/gameList/gameList.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        GameListComponent,
        GameComponent,
        LoginComponent,
        AdminComponent,
        AdminGameListComponent,
        GameDetailComponent,
        AdminLoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        SocialLoginModule,
        FormsModule
    ],
    providers: [
        HttpService,
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }