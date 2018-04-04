import { Component } from '@angular/core';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  config = {
    lineNumbers: true,
    tabSize: 2,
    mode: 'javascript',
  };
  code = `/*
 edit code below
>> ¯\\_(ツ)_/¯ <<
 edit code below
*/
function sayHello() {
  console.log('Hello Worm');
}

sayHello(); // Hi there!`;
}
