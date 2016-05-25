import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app.component";
import {enableProdMode} from "@angular/core";

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

bootstrap(AppComponent);