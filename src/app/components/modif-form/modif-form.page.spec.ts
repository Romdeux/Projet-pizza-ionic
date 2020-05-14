import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifFormPage } from './modif-form.page';

describe('ModifFormPage', () => {
  let component: ModifFormPage;
  let fixture: ComponentFixture<ModifFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
