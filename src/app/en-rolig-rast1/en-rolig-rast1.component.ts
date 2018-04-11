import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-en-rolig-rast1',
  templateUrl: './en-rolig-rast1.component.html',
  styleUrls: ['./en-rolig-rast1.component.css']
})
export class EnRoligRast1Component implements AfterViewInit {

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