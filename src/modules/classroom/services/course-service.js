import angular from 'angular';

class Course {
  constructor(id, title, description, lessons) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.lessons = lessons;
  }
}

class Lesson {
  constructor(title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

let CourseService = () => {

  const courses = {};

  function $create(id, title, description, lessons) {
    if (courses[id]) {
      throw new Error(`Course with ${id} already exists.`);
    }
    courses[id] = new Course(id, title, description, lessons);
    return service;
  }

  function $add(course) {
    courses[Object.keys().length] = course;
    return service;
  }

  function $get(id) {
    return id ? course[id]: courses;
  }

  function $update(course) {
    courses[course.id] = course;
    return service;
  }

  function $delete(id) {
    let course = courses[id];
    delete courses[id];
    return course;
  }

  const service = { $create, $add, $get, $update, $delete };

  return service;
};

export { Course, Lesson, CourseService };
