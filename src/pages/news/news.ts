import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  generalNews = []
  curriculumNews = []
  type : string = "general"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.generalNews = news.reverse();
    this.curriculumNews = curriculum_news.reverse();
  }

}

const news = [
  {
    title: "CodeTribe graduation",
    time: "March, the 2nd",
    article : "So, another chapter closes - no pun intended. March saw a lot of our CodeTribe students graduating and moving on to their next journey."
  },
  {
    title: "Digital-Gen graduation",
    time: "March, the 31st",
    article : "This chapter of CodeTribe saw us do something we have never done before..."
  },
  {
    title: "Applications open",
    time: "February, the 24th",
    article : "CodeTribe Academy applications 2018/2019 now open. Please ensure your loved ones read the requirements but also, we'd like to know who you are..."
  },
  {
    title: "Alex closed",
    time: "March, the 17th",
    article : "It's always sad when you endevour to create something , to plant a seed only to have it later uprooted. This was the case when we had to shut down..."
  },
  {
    title: "Slots still available",
    time: "A day ago",
    article : "Our Soweto and Tembisa chapters are still looking for people to be part of the programme. Should you know anyone that is deserving of this opportunity then by all means..."
  }
]

const curriculum_news = [
  {
    title: "New curriculum",
    time: "January, the 14th",
    article : "Every now and again there comes a time when..."
  },
  {
    title: "New lesson plans",
    time: "February, the 11th",
    article : "CodeTribe is predominantly lesson based and what this..."
  },
  {
    title: "New practice sets",
    time: "February, the 12th",
    article : "We have also added a couple of practice..."
  },
  {
    title: "Review",
    time: "March, the 6th",
    article : "To ensure a consistent standard throughout"
  },
  {
    title: "CodeTribe reopening",
    time: "A day ago",
    article : "It's important that you get yourself familiarized with this curriculum. This will go..."
  }
]