import { Component, OnInit } from '@angular/core';
import { SourcesKbService } from '../sources.kb.service';

import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-code-panel',
  templateUrl: './code-panel.component.html',
  styleUrls: ['./code-panel.component.css'],
  providers: [
    SourcesKbService
  ]
})
export class CodePanelComponent implements OnInit {
  code: string;
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
