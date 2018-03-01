import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'start.html'
})
export class StartPage {

  tab1Root = HomePage;
//   tab2Root = AboutPage;
//   tab3Root = ContactPage;

  constructor() {

  }
}
