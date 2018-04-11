import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sommarlovt',
  templateUrl: './sommarlovt.component.html',
  styleUrls: ['./sommarlovt.component.css']
})
export class SommarlovtComponent implements AfterViewInit {

      async ngAfterViewInit() {
	   await this.loadScript('../assets/dom-extensions.js');
		await this.loadScript('../assets/jquery.min.js');
		await this.loadScript('../assets/app_clown.js');
		await this.loadScript('../assets/IDRViewer.min.js');
	
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