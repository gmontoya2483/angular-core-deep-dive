import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit{
  @Input({
    required: true,
  })
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent, {read: ElementRef})
  imageElement: ElementRef;


  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>


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

  ngAfterViewInit(): void {
    console.log('Image', this.image);
    console.log('ImageElement', this.imageElement.nativeElement);

  }

  ngAfterContentInit(): void {
    console.log('Images', this.images);

  }
}
