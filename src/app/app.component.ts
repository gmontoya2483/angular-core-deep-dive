import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses: Course[] = COURSES;

  // @ViewChild('cardRef1', {read: ElementRef})
  // card1: CourseCardComponent;
  //
  // @ViewChild('cardRef2')
  // card2: CourseCardComponent;
  //
  // @ViewChild('container')
  // containerDiv: ElementRef;
  //
  // @ViewChild('courseImage') // NOT POSSIBLE
  // courseImage: ElementRef;

  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;

  constructor() {
    // console.log('constructor', this.containerDiv); //Undefined
  }


  ngAfterViewInit() {
    // console.log('AfterViewInit', this.containerDiv);
    // console.log('Cards', this.cards);
    //
    // console.log('firstCard', this.cards.first);
    // console.log('lastCard', this.cards.last);

    // this.cards.changes.subscribe(
    //   cards => {
    //     console.log('changes!!!');
    //     console.log('modified =>', cards);
    //   }
    // );


    this.cards.changes.subscribe(
      cards => {
        console.log(cards);
      }
    );
  }




  onCourseSelected(course: Course) {
    console.log('App component - click event bubbled....', course);
    // console.log('card1: ', this.card1);
    // console.log('containerDiv: ', this.containerDiv);
    // console.log('card2: ', this.card2);
    // console.log('courseImage', this.courseImage);

  }

  onCoursesEdited() {

    console.log('onEditClicked');
    this.courses.push(  {
      id: 1,
      description: 'Angular Core Deep Dive NEW',
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      category: 'INTERMEDIATE',
      lessonsCount: 10
    });
  }
}
