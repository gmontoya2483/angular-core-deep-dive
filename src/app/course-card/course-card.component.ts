import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({
    required: true
  })
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();


  onCourseView() {
    console.log('card component - button clicked');
    this.courseEmitter.emit(this.course);

  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {

    // if (this.course.category === 'BEGINNER') {
    //   return ['beginner'];
    // }

    // if (this.course.category === 'BEGINNER') {
    //   return 'beginner';
    // }

    return {
      'beginner': this.course.category === 'BEGINNER',
    };
  }

  cardStyles() {
    return {
      'background-image': `url(${this.course.iconUrl})`
    };
  }
}
