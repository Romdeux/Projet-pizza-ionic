import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { PizzaModalComponent } from './pizza-modal.component';

describe('FolderPage', () => {
  let component: PizzaModalComponent;
  let fixture: ComponentFixture<PizzaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaModalComponent],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(PizzaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
