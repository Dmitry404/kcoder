import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { SourcesKbService } from './sources.kb.service';

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
});
