import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pikachu-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    code = `// A Jasmine suite
      describe('Adder', () => {
        // A jasmine spec
        it('should be able to add two whole numbers', () => '{'
          expect(Adder.add(2, 2)).toEqual(4);
        });

        it('should be able to add a whole number and a negative number', () => {
          expect(Adder.add(2, -1)).toEqual(1);
        });

        it('should be able to add a whole number and a zero', () => {
          expect(Adder.add(2, 0)).toEqual(2);
        });
      });`;
  
  constructor() { }

  ngOnInit() {
  }

}
