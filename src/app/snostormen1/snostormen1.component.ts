import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-snostormen1',
  templateUrl: './snostormen1.component.html',
  styleUrls: ['./snostormen1.component.css']
})
export class Snostormen1Component implements AfterViewInit {

       async ngAfterViewInit() {
		await this.loadScript('../assets/jquery.min.js');
		await this.loadScript('../assets/app_clown.js');
		await this.loadScript('../assets/IDRViewer.js');
		await this.loadScript('../assets/dom-extensions.js');

	
	}
   
	 private loadScript(scriptUrl: string) {
	   return new Promise((resolve, reject) => {
		 const scriptElement = document.createElement('script');
		 scriptElement.src = scriptUrl;
		 scriptElement.onload = resolve;
		 document.body.appendChild(scriptElement);
		})
	 }
}