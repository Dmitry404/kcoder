import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePanelComponent } from './code-panel.component';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import { SourcesKbService } from '../sources.kb.service';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

describe('CodePanelComponent', () => {
  let component: CodePanelComponent;
  let fixture: ComponentFixture<CodePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodePanelComponent ],
      imports: [
        FormsModule,
        CodemirrorModule,
      ],
      providers: [
        SourcesKbService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePanelComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should render codemirror editor', () => {
    const htmlElement: HTMLElement = fixture.nativeElement;
    const editor = htmlElement.querySelector('ngx-codemirror');

    expect(editor).toBeDefined();
  });

  it('should handle active solutions on switch', () => {
    fixture.detectChanges();

    const solutions = fixture.debugElement.nativeElement.querySelectorAll('.file-ref-link');

    const sol1 = solutions[0];
    const sol2 = solutions[1];

    expect(sol1.className).toContain('active');
    expect(sol2.className).not.toContain('active');

    sol2.click();
    fixture.detectChanges();

    expect(sol1.className).not.toContain('active');
    expect(sol2.className).toContain('active');
  });

  it('should load first solution content on load', () => {
    const kbService = fixture.debugElement.injector.get(SourcesKbService);
    spyOn(kbService, 'getSources').and.returnValue(of('solution_1_code'));

    fixture.detectChanges();
    const editor = fixture.debugElement.nativeElement.querySelector('ngx-codemirror')
    const code = editor.getAttribute('ng-reflect-model');

    expect(code).toEqual('solution_1_code');
  });

  it('should load different content on switch', () => {
    const kbService = fixture.debugElement.injector.get(SourcesKbService);
    spyOn(kbService, 'getAvailableIds').and.returnValue(of(['sol1_id', 'sol2_id', 'sol3_id']));
    spyOn(kbService, 'getSources').and.callFake((id) => {
      if (id === 'sol2_id') {
        return of('solution_2_code');
      }
      return empty();
    });

    fixture.detectChanges();
    const solutions = fixture.debugElement.nativeElement.querySelectorAll('.file-ref-link');
    solutions[1].click();

    fixture.detectChanges();
    const editor = fixture.debugElement.nativeElement.querySelector('ngx-codemirror');
    const code = editor.getAttribute('ng-reflect-model');

    expect(code).toEqual('solution_2_code');
  });
});
