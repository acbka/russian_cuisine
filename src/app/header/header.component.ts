import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

   /*
   burgerClass : string = "navbar-toggler collapsed";
   burgerShow : string = "navbar-collapse collapse";
   show : boolean = false;

   hide(){
      this.burgerShow = this.show ? "navbar-collapse collapse" : "navbar-collapse collapse show";
      this.show = !this.show; 
   }

      //let show = document.getElementsByClassName('collapse')[0];
  // let menuItems = document.getElementsByClassName('nav-link') || document.getElementsByClassName('dropdown-item');
  // menuItems.onClick() {
   //   show.classList.add("collapsed")
   //   };
   
*/

   
   menuHide() : void {
      let hide = document.getElementsByClassName('collapse')[0];
      hide.classList.remove('show')
   }


   constructor() { }

   ngOnInit() {
      let items : HTMLCollection = document.getElementsByClassName('item');
      for (let i = 0; i < items.length; i++) {
         items.item(i).addEventListener('click',this.menuHide)
      }
   }

}
