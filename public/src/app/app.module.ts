import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './materials';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent, BottomSheetShareToFriend } from './component/client/home/home.component';
import { GameComponent } from './component/client/game/game.component';
import { LoginComponent } from './component/client/login/login.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
} from "angular-6-social-login";
import { AdminComponent } from './component/admin/admin.component';
import { GameDetailComponent } from './component/admin/game-detail/game-detail.component';
import { AdminLoginComponent } from './component/admin/admin-login/admin-login.component';
import { AdminGameListComponent } from './component/admin/game-list/admin-game-list.component';
import { GameListComponent } from './component/client/gameList/gameList.component';
import { FormsModule } from '@angular/forms';
import { FeebackComponent } from './component/client/feeback/feeback.component';
import { ReferenceComponent } from './component/client/reference/reference.component';
import { HttpService } from './service/config/http.service';
import { getAuthServiceConfigs } from './service/config/socialloginConfig';
import { GameWinningDialog } from './component/client/game/dialog/game-winning-dialog';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
        FeebackComponent,
        ReferenceComponent,
        BottomSheetShareToFriend,
        GameWinningDialog
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        SocialLoginModule,
        FormsModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        HttpService,
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        }
    ],

    entryComponents: [HomeComponent, BottomSheetShareToFriend, GameComponent, GameWinningDialog],
    bootstrap: [AppComponent]
})
export class AppModule { }