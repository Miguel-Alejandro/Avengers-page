import { Component, OnInit } from '@angular/core';
import lax from 'lax.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initScroll();
    this.configLax();
    this.addAnimations();
  }

  private initScroll(): void {
    window.addEventListener('scroll', () => {
      console.log('SCROLL',window.scrollY);
      
    });
  }

  private configLax(): void {
    lax.init();
    lax.addDriver('scrollY', () => {
      return window.scrollY;
    });
  }


  private addAnimations(): void {

    lax.addElements('.logo', {

      scrollY: {
        scale: [
          [ 0, 80 ], //scroll position
          [ 1, 3 ]
        ],

        opacity: [
          [ 0, 70 ], //scroll position
          [ 1, 0 ]
        ],

        translateY: [
          [ 0, 80 ], //scroll position
          [ 0, 200 ]
        ]
      }

    });


    lax.addElements('.ultron', {

      scrollY: {
        opacity: [
          [ 0, 80 ],
          [ 0, 1 ]
        ],

        translateY: [
          [ 0, 400 ],
          [ 0, 80 ]
        ]
      }

    });


    lax.addElements('.loki', {

      scrollY: {
        opacity: [
          [ 40, 120 ],
          [ 0, 1 ]
        ],

        translateY: [
          [ 0, 400 ],
          [ 0, -80 ]
        ]
      }

    });


    lax.addElements('.thanos', {

      scrollY: {
        opacity: [
          [ 80, 160 ],
          [ 0, 1 ]
        ],

        translateY: [
          [ 0, 400 ],
          [ 0, 80 ]
        ]
      }

    });


    lax.addElements('.villains-text', {

      scrollY: {
        opacity: [
          [ 0, 800 ],
          [ 1, 0 ]
        ],

        translateY: [
          [ 0, 800 ],
          [ -85, 0 ]
        ],

        'letter-spacing': [
          [ 0, 800 ],
          [ 0, 150 ], 
          { // declare unit type:  px | % | rem
            cssUnit: 'px'
          }
        ]
      }

    });



    lax.addElements('.ironman-title', {

      scrollY: {
        filter: [
          [ 400, 700, 800, 900, 1000, ],
          [ 0, 10, 0, 10, 0 ],
          {
            cssFn: (value) => {
              return ` drop-shadow( 0 0 ${value}px yellow ) `; 
              //los dos primeros 0 indican la posicion de la sombre en el eje x,y
              // el value es el valo de la expancion en este caso es 20 por que es el 2 valor del segundo arreglo de arriba
            }
          }
        ],

        //translateY: [
        //  [ 0, 800 ],
        //  [ -85, 0 ]
        //],

        //'letter-spacing': [
        //  [ 0, 800 ],
        //  [ 0, 150 ], { // declare unit type:  px | % | rem
        //    cssUnit: 'px'
        //  }
        //]

      }

    });
  }


}
