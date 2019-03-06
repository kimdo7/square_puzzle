import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider
} from 'angular-6-social-login';

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider("1049275049902-7732ffs6cpah9d36u2odomg016vtou8p.apps.googleusercontent.com")
        },
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider("383309409116895")
        },

    ]);

    return config;
}