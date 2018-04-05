import { Component, OnInit } from '@angular/core';
import 'codemirror/mode/javascript/javascript';
import { SourcesKbService } from './sources.kb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SourcesKbService
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  code;
  options = {
    lineNumbers: true,
    tabSize: 2,
    mode: 'javascript',
  };
  availableFiles: string[];
  currentFile: string;

  constructor(private sourcesKbService: SourcesKbService) {
  }

  ngOnInit(): void {
    this.availableFiles = this.sourcesKbService.getAvailableIds();
    this.currentFile = this.availableFiles[0];
    this.code = this.sourcesKbService.getSources(this.currentFile);
  }

  onSolutionSelected(event) {
    this.sourcesKbService.setSources(this.currentFile, this.code);
    this.currentFile = event.target.text;
    this.code = this.sourcesKbService.getSources(this.currentFile);
  }
}
