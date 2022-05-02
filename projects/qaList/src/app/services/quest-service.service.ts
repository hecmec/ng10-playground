import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User as ParseUser } from 'parse';

@Injectable({
  providedIn: 'root',
})
export class QuestServiceService {
  b4aServerUrl = 'https://lang-resources.b4a.io';
  b4aAppId_hmTest = 'a7Ks26xEic6sbrcqW0QQTdDwnnRyLF27rJBykcpv';
  b4aJsKey = 'pOC5gubX9ZQ9QRfeYHjxjm5g6PwP5Y9SC2pR51k4';

  constructor(private httpClient: HttpClient) {
    Parse.serverURL = this.b4aServerUrl;
    Parse.applicationId = this.b4aAppId_hmTest;
    Parse.javaScriptKey = this.b4aJsKey;
  }

  public getAllQuests() {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.httpClient.request('GET', this.b4aServerUrl, { responseType: 'json', params });
  }

  /**
   * login using parse
   * @param userName
   * @param password
   */
  public async loginUser(userName: string, password: string): Promise<ParseUser> {
    let user: ParseUser = null;

    try {
      // Pass the username and password to logIn function
      user = await Parse.User.logIn(userName, password);
      // Do stuff after successful login
      console.log('Logged in user', user);
    } catch (error: any) {
      console.error('Error while logging in user', error);
    }
    return user;
  }

  public async registerUser(userName: string, password: string): Promise<ParseUser> {
    let user: ParseUser;

    try {
      user = new ParseUser();
      user.setUsername(userName);
      user.setPassword(password);
      await user.signUp();
      console.log('User created!');
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      console.error('Error: ' + error.code + ' ' + error.message);
    }

    return user;
  }
}
