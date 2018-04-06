import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { SourcesKbService } from './sources.kb.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

describe('AppComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        FormsModule,
        CodemirrorModule,
      ],
      providers: [
        SourcesKbService
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app component', () => {
    expect(component).toBeDefined();
  });

  it(`should have as title 'app'`, () => {
    expect(component.title).toEqual('app');
  });

  it('should render codemirror editor', () => {
    fixture.detectChanges();
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
    const editor = fixture.debugElement.nativeElement.querySelector('ngx-codemirror');
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
