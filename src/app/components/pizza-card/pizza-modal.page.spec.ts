import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PizzaCardComponent } from './pizza-card.component';

describe('FolderPage', () => {
  let component: PizzaCardComponent;
  let fixture: ComponentFixture<PizzaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaCardComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
