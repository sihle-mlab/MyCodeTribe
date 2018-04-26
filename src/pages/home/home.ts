import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  courses = []
  lessons = []

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.courses = courses;
  }

  viewLessons(lessons: any[], course : any){
    this.lessons = [];
    lessons.forEach(element => {
        let item = {
          text: element.title,
          handler: () => {
            console.log('Item clicked');
          }
        }
        this.lessons.push(item);
    });


    let cancel = {
      text: "Cancel",
      role: 'cancel',
      handler: () => {
        console.log('cancel clicked');
      }
    }

    this.lessons.push(cancel);
    this.presentActionSheet("Course " + course.number + " : " + course.title);
  }

  presentActionSheet(title: string) {
    let actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: this.lessons
    });
    actionSheet.present();
  }

}

const courses = [
  {
    title: "Soft Skills in Programming",
    number: 1,
    icon: 'bicycle',
    weeks : 3,
    lessons : [
      {
        title: "Introduction and Team Building",
        number: 1
      }, 
      {
        title: "Agile Scrum Training",
        number: 2
      }, 
      {
        title: "Intro to Web Development",
        number: 3
      }, 
    ]
  },
  {
    title: "Building Blocks of the Web",
    number: 2,
    icon: 'logo-html5',
    weeks : 4,
    lessons : [
      {
        title: "Dive Deeper into HTML",
        number: 1
      }, 
      {
        title: "Styling HTML Pages",
        number: 2
      }, 
      {
        title: "JavaScript : An Intro to Angular",
        number: 3
      }, 
      {
        title: "Angular",
        number: 4
      }, 
    ]
  },
  {
    title: "Ionic Development for Beginners",
    number: 3,
    weeks : 3,
    icon: 'ionic',
    lessons : [
      {
        title: "Building Layouts",
        number: 1
      }, 
      {
        title: "Making an app interactive",
        number: 2
      }, 
      {
        title: "Ionic Framework and Control Flow",
        number: 3
      }, 
    ]
  },
  {
    title: "Multi Screen Apps",
    number: 4,
    icon: 'logo-angular',
    weeks : 4,
    lessons : [
      {
        title: "Pages and Navigation",
        number: 1
      }, 
      {
        title: "Data, Loops, and Custom Classes",
        number: 2
      }, 
      {
        title: "Images and Visual Polish",
        number: 3
      }, 
      {
        title: "Native API Libraries",
        number: 4
      }, 
    ]
  },
  {
    title: "Networking",
    number: 5,
    icon: 'wifi',
    weeks : 4,
    lessons : [
      {
        title: "JSON Parsing",
        number: 1
      }, 
      {
        title: "HTTP Networking",
        number: 2
      }
    ]
  },
  {
    title: "The Cloud",
    number: 6,
    icon: 'cloud',
    weeks : 4,
    lessons : [
      {
        title: "Firebase",
        number: 1
      } 
    ]
  }
]
