import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../model/product';

// DL 1 isolated unit test for ProductListComponent

describe('Product List Component', () => {

  describe('Isolated unit tests', () => {

    describe ('Initialization tests', () => {

      it('should have ProductListComponent to initialize with 3 products', () => {
        const productListComponent = new ProductListComponent();
        expect(productListComponent.products).toBeUndefined();
        productListComponent.ngOnInit();
        expect(productListComponent.products.length).toEqual(3);
      });
  
      it('should have a correctly-formed first product member', () => {
        const productListComponent = new ProductListComponent();
        expect(productListComponent.products).toBeUndefined();
        let tempProduct = new Product(1,'Amaze-o-Widget from Ronco','../../../assets/img/Nerd.jpg',19.95,true,0)
        productListComponent.ngOnInit();
        expect(productListComponent.products[0].id).toEqual(tempProduct.id);
        expect(productListComponent.products[0].imagePath).toEqual(tempProduct.imagePath);
        expect(productListComponent.products[0].name).toEqual(tempProduct.name);
        expect(productListComponent.products[0].onSale).toEqual(tempProduct.onSale);
        expect(productListComponent.products[0].price).toEqual(tempProduct.price);
        expect(productListComponent.products[0].quantityInCart).toEqual(tempProduct.quantityInCart);
      });
  
  
      it('should have a correctly-formed second product member', () => {
        const productListComponent = new ProductListComponent();
        expect(productListComponent.products).toBeUndefined();
        let tempProduct = new Product(2,'Snarled Masses of Cable!!','../../../assets/img/ethertangle.jpg',16.99,false,0);
        productListComponent.ngOnInit();
        expect(productListComponent.products[1].id).toEqual(tempProduct.id);
        expect(productListComponent.products[1].imagePath).toEqual(tempProduct.imagePath);
        expect(productListComponent.products[1].name).toEqual(tempProduct.name);
        expect(productListComponent.products[1].onSale).toEqual(tempProduct.onSale);
        expect(productListComponent.products[1].price).toEqual(tempProduct.price);
        expect(productListComponent.products[1].quantityInCart).toEqual(tempProduct.quantityInCart);
      });
  
      it('should have a correctly-formed third product member', () => {
        const productListComponent = new ProductListComponent();
        expect(productListComponent.products).toBeUndefined();
        let tempProduct = new Product(3,'Random Keyclick Generator','../../../assets/img/questionbutton.jpg',5.95,true,0);
        productListComponent.ngOnInit();
        expect(productListComponent.products[2].id).toEqual(tempProduct.id);
        expect(productListComponent.products[2].imagePath).toEqual(tempProduct.imagePath);
        expect(productListComponent.products[2].name).toEqual(tempProduct.name);
        expect(productListComponent.products[2].onSale).toEqual(tempProduct.onSale);
        expect(productListComponent.products[2].price).toEqual(tempProduct.price);
        expect(productListComponent.products[2].quantityInCart).toEqual(tempProduct.quantityInCart);
      });
    });


    /* check the onQuantityChange functionality */
    describe('ProductList Component functionality', () => {
      it('should find and update quantity onQuantityChange', () => {
        const component = new ProductListComponent();
        component.ngOnInit();

        assertProducts(component.products, [0, 0, 0]);
        component.onQuantityChange({changeInQuantity: 2, product: getProduct(2)});

        assertProducts(component.products, [0, 2, 0]);

        component.onQuantityChange({changeInQuantity: 2, product: getProduct(2)});
        component.onQuantityChange({changeInQuantity: 1, product: getProduct(1)});
        assertProducts(component.products, [1, 4, 0]);

        component.onQuantityChange({changeInQuantity: -3, product: getProduct(2)});
        assertProducts(component.products, [1, 1, 0]);
      });

      function assertProducts(products, expectedQuantities) {
        expect(products[0].id).toEqual(1);
        expect(products[0].quantityInCart).toEqual(expectedQuantities[0]);
        expect(products[1].id).toEqual(2);
        expect(products[1].quantityInCart).toEqual(expectedQuantities[1]);
        expect(products[2].id).toEqual(3);
        expect(products[2].quantityInCart).toEqual(expectedQuantities[2]);
      }

      function getProduct(id: number) : Product {
        return {
          id: id,
          name: 'Test Product',
          imagePath: 'Random Image',
          onSale: false,
          price: 100,
          quantityInCart: 0
        };
      }
    });




  });


});


    describe('Angular tests', () => {
      let fixture, component;

        beforeEach(async(() => {
          TestBed.configureTestingModule({
            declarations: [ ProductListComponent, ProductItemComponent ]
          }).compileComponents();
        }));

        beforeEach(() => {
          fixture = TestBed.createComponent(ProductListComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
        });

        it('should render three product list items', () => {
          const productItems = fixture.debugElement.queryAll(By.css('app-product-item'));
          expect(productItems.length).toEqual(3);
          assertProduct(productItems[0], 'Amaze-o-Widget from Ronco', 19.95, 0);
          assertProduct(productItems[1], 'Snarled Masses of Cable!!', 16.99, 0);
          assertProduct(productItems[2], 'Random Keyclick Generator', 5.95, 0);
        });

        it('should handle increment item correctly from child product', () => {
          const productItems = fixture.debugElement.queryAll(By.css('app-product-item'));

          assertProduct(productItems[1], 'Snarled Masses of Cable!!', 16.99, 0);
          const incrementBtnForSecondProduct = productItems[1].query(By.css('button.increment'));
          incrementBtnForSecondProduct.triggerEventHandler('click', null);
          fixture.detectChanges();
          assertProduct(productItems[1], 'Snarled Masses of Cable!!', 16.99, 1);
          expect(component.products[1].quantityInCart).toEqual(1);

          const decrementBtnForSecondProduct = productItems[1].query(By.css('button.decrement'));
          decrementBtnForSecondProduct.triggerEventHandler('click', null);
          fixture.detectChanges();
          assertProduct(productItems[1], 'Snarled Masses of Cable!!', 16.99, 0);
          expect(component.products[1].quantityInCart).toEqual(0);
        });

        function assertProduct(element, name, price, qty) {
          const nameEl = element.query(By.css('.name'));
          expect(nameEl.nativeElement.textContent).toEqual(name);
          const priceEl = element.query(By.css('.price'));
          expect(priceEl.nativeElement.textContent).toEqual('$ ' + price);
          const qtyEl = element.query(By.css('.qty'));
          expect(qtyEl.nativeElement.textContent).toEqual(qty + '');
        }
    });