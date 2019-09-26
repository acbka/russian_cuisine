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
*/


  constructor() { }

  ngOnInit() {
  }

}
