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
    this.sourcesKbService.getAvailableIds().subscribe(ids => {
      this.availableFiles = ids;
      this.currentFile = ids[0];

      this.sourcesKbService.getSources(this.currentFile).subscribe(sources => this.code = sources);
    });
  }

  onExerciseSelected(solutionFile) {
    this.sourcesKbService.setSources(this.currentFile, this.code);
    this.currentFile = solutionFile;
    this.sourcesKbService.getSources(solutionFile).subscribe(sources => this.code = sources);
  }
}
