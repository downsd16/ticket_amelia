import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private msalService: MsalService) {}

  login() {
    this.msalService.loginPopup().subscribe((response) => {
      console.log(response);
      this.msalService.instance.setActiveAccount(response.account);
    });
  }

  logout(): void {
    this.msalService.logout();
  }

  getAccessToken(): string {
    return this.msalService.acquireTokenSilent({
      scopes: ['User.Read', 'openid', 'profile'],
    }).subscribe((response) => {
      return response.accessToken;
    }
  }
}
