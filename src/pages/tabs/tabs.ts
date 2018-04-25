import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewsPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
