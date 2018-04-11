import { Component } from '@angular/core';
//import { MatSnackBar } from "@angular/material";
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor() {
    }

    updateNetworkStatusUI() {
        if (navigator.onLine) {
            (document.querySelector("body") as any).style = "";
        } else {
            (document.querySelector("body") as any).style = "filter:grayscale(1)";
        }
    }

    ngOnInit() {

        this.updateNetworkStatusUI();
        window.addEventListener("online", this.updateNetworkStatusUI);
        window.addEventListener("offline", this.updateNetworkStatusUI);
        //IOS Device browser
        if ((navigator as any).standalone == false) {
           // this.snackBar.open("You can Add this Application to the Home Screen", "", { duration: 3000 });
        }
        //its not IOS
        if ((navigator as any).standalone == false) {
            if (window.matchMedia("(display-mode:browser").matches) {
                window.addEventListener("beforeinstallprompt", event => {
                    event.preventDefault();
                    //const sb = this.snackBar.open("", " Do you want to Install this app", { duration: 5000 });
                    //sb.onAction().subscribe(() => {
                    //    (event as any).prompt();
                    //    (event as any).userChoice.then(result => {
                    //        if (result.outcome == "dismissed") {

                    //        } else {

                    //        }
                    //    });
                    //});
                    return false;
                });
            }
        }
    }
}
