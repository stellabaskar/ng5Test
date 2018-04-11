import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from "@angular/service-worker";
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule,
         MatSnackBarModule} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import 'hammerjs';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SommarlovtComponent } from './sommarlovt/sommarlovt.component';
import { RastenComponent } from './rasten/rasten.component';
import { SkattenComponent } from './skatten/skatten.component';
import { HalloweenComponent } from './halloween/halloween.component';
import { StadenComponent } from './staden/staden.component';
import { VinterComponent } from './vinter/vinter.component';
import { DjurComponent } from './djur/djur.component';
import { SimhallenComponent } from './simhallen/simhallen.component';
import { CirkusComponent } from './cirkus/cirkus.component';
import { Sommarlovet1Component } from './sommarlovet1/sommarlovet1.component';
import { Sommarlovet2Component } from './sommarlovet2/sommarlovet2.component';
import { Sommarlovet3Component } from './sommarlovet3/sommarlovet3.component';
import { Sommarlovet4Component } from './sommarlovet4/sommarlovet4.component';
import { Sommarlovet5Component } from './sommarlovet5/sommarlovet5.component';
import { Sommarlovet6Component } from './sommarlovet6/sommarlovet6.component';
import { Sommarlovet21Component } from './sommarlovet2-1/sommarlovet2-1.component';
import { Sommarlovet31Component } from './sommarlovet3-1/sommarlovet3-1.component';
import { Sommarlovet41Component } from './sommarlovet4-1/sommarlovet4-1.component';
import { Rasten1Component } from './rasten1/rasten1.component';
import { OrdOmKanslorComponent } from './ord-om-kanslor/ord-om-kanslor.component';
import { VokalerOchKonsonanterComponent } from './vokaler-och-konsonanter/vokaler-och-konsonanter.component';
import { VokalerOchKonsonanter1Component } from './vokaler-och-konsonanter1/vokaler-och-konsonanter1.component';
import { VokalerOchKonsonanter2Component } from './vokaler-och-konsonanter2/vokaler-och-konsonanter2.component';
import { VokalerOchKonsonanter3Component } from './vokaler-och-konsonanter3/vokaler-och-konsonanter3.component';
import { EnRoligRastComponent } from './en-rolig-rast/en-rolig-rast.component';
import { EnRoligRast1Component } from './en-rolig-rast1/en-rolig-rast1.component';
import { Skatten1Component } from './skatten1/skatten1.component';
import { Skatten2Component } from './skatten2/skatten2.component';
import { Skatten3Component } from './skatten3/skatten3.component';
import { VokalerHarTvaLjudComponent } from './vokaler-har-tva-ljud/vokaler-har-tva-ljud.component';
import { VokalerHarTvaLjud1Component } from './vokaler-har-tva-ljud1/vokaler-har-tva-ljud1.component';
import { VokalerHarTvaLjud2Component } from './vokaler-har-tva-ljud2/vokaler-har-tva-ljud2.component';
import { VokalerHarTvaLjud3Component } from './vokaler-har-tva-ljud3/vokaler-har-tva-ljud3.component';
import { IstalletForSenSaComponent } from './istallet-for-sen-sa/istallet-for-sen-sa.component';
import { AnalogierComponent } from './analogier/analogier.component';
import { Analogier1Component } from './analogier1/analogier1.component';
import { NarDetSpokadeComponent } from './nar-det-spokade/nar-det-spokade.component';
import { NarDetSpokade1Component } from './nar-det-spokade1/nar-det-spokade1.component';
import { SammansattaOrdComponent } from './sammansatta-ord/sammansatta-ord.component';
import { SammansattaOrd1Component } from './sammansatta-ord1/sammansatta-ord1.component';
import { SubstantivComponent } from './substantiv/substantiv.component';
import { Substantiv1Component } from './substantiv1/substantiv1.component';
import { Halloween1Component } from './halloween1/halloween1.component';
import { Staden1Component } from './staden1/staden1.component';
import { LjudComponent } from './ljud/ljud.component';
import { StadensSuperhjalteComponent } from './stadens-superhjalte/stadens-superhjalte.component';
import { StadensSuperhjalte1Component } from './stadens-superhjalte1/stadens-superhjalte1.component';
import { SynonymerComponent } from './synonymer/synonymer.component';
import { VerbComponent } from './verb/verb.component';
import { Verb1Component } from './verb1/verb1.component';
import { Vinter1Component } from './vinter1/vinter1.component';
import { AdjektivComponent } from './adjektiv/adjektiv.component';
import { Adjektiv1Component } from './adjektiv1/adjektiv1.component';
import { IstalletForSaComponent } from './istallet-for-sa/istallet-for-sa.component';
import { SnostormenComponent } from './snostormen/snostormen.component';
import { Snostormen1Component } from './snostormen1/snostormen1.component';
import { Synonymer1Component } from './synonymer1/synonymer1.component';
import { Djur1Component } from './djur1/djur1.component';
import { DjurensLatenComponent } from './djurens-laten/djurens-laten.component';
import { FaktaOmComponent } from './fakta-om/fakta-om.component';
import { FaktaOmEttDjurComponent } from './fakta-om-ett-djur/fakta-om-ett-djur.component';
import { NgLjudetComponent } from './ng-ljudet/ng-ljudet.component';
import { NgLjudet1Component } from './ng-ljudet1/ng-ljudet1.component';
import { NgLjudet2Component } from './ng-ljudet2/ng-ljudet2.component';
import { Simhallen1Component } from './simhallen1/simhallen1.component';
import { ALjudetComponent } from './a-ljudet/a-ljudet.component';
import { ALjudet1Component } from './a-ljudet1/a-ljudet1.component';

import { ALjudet2Component } from './a-ljudet2/a-ljudet2.component';
import { ISimhallenComponent } from './i-simhallen/i-simhallen.component';
import { ISimhallen1Component } from './i-simhallen1/i-simhallen1.component';
import { SattOrdPaKanslorComponent } from './satt-ord-pa-kanslor/satt-ord-pa-kanslor.component';
import { Cirkus1Component } from './cirkus1/cirkus1.component';
import { HomonymerComponent } from './homonymer/homonymer.component';
import { Homonymer1Component } from './homonymer1/homonymer1.component';
import { JagEnCirkusartistComponent } from './jag-en-cirkusartist/jag-en-cirkusartist.component';
import { JagEnCirkusartist1Component } from './jag-en-cirkusartist1/jag-en-cirkusartist1.component';
import { JLjudetComponent } from './j-ljudet/j-ljudet.component';
import { JLjudet1Component } from './j-ljudet1/j-ljudet1.component';
import { JLjudet2Component } from './j-ljudet2/j-ljudet2.component';




const appRoutes: Routes =[
{path: '', redirectTo: '/main', pathMatch:'full'},
{path: 'main', component:MainComponent},
{path: 'sommarlovt', component:SommarlovtComponent},
{path: 'rasten', component:RastenComponent},
{path: 'skatten', component:SkattenComponent},
{path: 'halloween', component:HalloweenComponent},
{path: 'staden', component:StadenComponent},
{path: 'vinter', component:VinterComponent},
{path: 'djur', component:DjurComponent},
{path: 'simhallen', component:SimhallenComponent},
{path: 'cirkus', component:CirkusComponent},

{path: 'sommarlovet1', component:Sommarlovet1Component},
{path: 'sommarlovet2', component:Sommarlovet2Component},
{path: 'sommarlovet2-1', component:Sommarlovet21Component},
{path: 'sommarlovet3', component:Sommarlovet3Component},
{path: 'sommarlovet3-1', component:Sommarlovet31Component},
{path: 'sommarlovet4', component:Sommarlovet4Component},
{path: 'sommarlovet4-1', component:Sommarlovet41Component},
{path: 'sommarlovet5', component:Sommarlovet5Component},
{path: 'sommarlovet6', component:Sommarlovet6Component},


{path: 'rasten1', component:Rasten1Component},
{path: 'ord-om-kanslor', component:OrdOmKanslorComponent},
{path: 'vokaler-och-konsonanter', component:VokalerOchKonsonanterComponent},
{path: 'vokaler-och-konsonanter1', component:VokalerOchKonsonanter1Component},
{path: 'vokaler-och-konsonanter2', component:VokalerOchKonsonanter2Component},
{path: 'vokaler-och-konsonanter3', component:VokalerOchKonsonanter3Component},
{path: 'en-rolig-rast', component:EnRoligRastComponent},
{path: 'en-rolig-rast1', component:EnRoligRast1Component},


{path: 'skatten1', component:Skatten1Component},
{path: 'skatten2', component:Skatten2Component},
{path: 'skatten3', component:Skatten3Component},
{path: 'vokaler-har-tva-ljud', component:VokalerHarTvaLjudComponent},
{path: 'vokaler-har-tva-ljud1', component:VokalerHarTvaLjud1Component},
{path: 'vokaler-har-tva-ljud2', component:VokalerHarTvaLjud2Component},
{path: 'vokaler-har-tva-ljud3', component:VokalerHarTvaLjud3Component},
{path: 'istallet-for-sen-sa', component:IstalletForSenSaComponent},

{path: 'analogier', component:AnalogierComponent},
{path: 'analogier1', component:Analogier1Component},
{path: 'nar-det-spokade', component:NarDetSpokadeComponent},
{path: 'nar-det-spokade1', component:NarDetSpokade1Component},
{path: 'sammansatta-ord', component:SammansattaOrdComponent},
{path: 'sammansatta-ord1', component:SammansattaOrd1Component},
{path: 'substantiv', component:SubstantivComponent},
{path: 'substantiv1', component:Substantiv1Component},
{path: 'halloween1', component:Halloween1Component},


{path: 'staden1', component:Staden1Component},
{path: 'ljud', component:LjudComponent},
{path: 'stadens-superhjalte', component:StadensSuperhjalteComponent},
{path: 'stadens-superhjalte1', component:StadensSuperhjalte1Component},
{path: 'synonymer', component:SynonymerComponent},
{path: 'verb', component:VerbComponent},
{path: 'verb1', component:Verb1Component},


{path: 'vinter1', component:Vinter1Component},
{path: 'adjektiv', component:AdjektivComponent},
{path: 'adjektiv1', component:Adjektiv1Component},
{path: 'istallet-for-sa', component:IstalletForSaComponent},
{path: 'snostormen', component:SnostormenComponent},
{path: 'snostormen1', component:Snostormen1Component},
{path: 'synonymer1', component:Synonymer1Component},


{path: 'djur1', component:Djur1Component},
{path: 'djurens-laten', component:DjurensLatenComponent},
{path: 'fakta-om', component:FaktaOmComponent},
{path: 'fakta-om-ett-djur', component:FaktaOmEttDjurComponent},
{path: 'ng-ljudet', component:NgLjudetComponent},
{path: 'ng-ljudet1', component:NgLjudet1Component},
{path: 'ng-ljudet2', component:NgLjudet2Component},

{path: 'simhallen1', component:Simhallen1Component},
{path: 'a-ljudet', component:ALjudetComponent},
{path: 'a-ljudet1', component:ALjudet1Component},
{path: 'a-ljudet2', component:ALjudet2Component},
{path: 'i-simhallen', component:ISimhallenComponent},
{path: 'i-simhallen1', component:ISimhallen1Component},
{path: 'satt-ord-pa-kanslor', component:SattOrdPaKanslorComponent},



{path: 'cirkus1', component:Cirkus1Component},
{path: 'homonymer', component:HomonymerComponent},
{path: 'homonymer1', component:Homonymer1Component},
{path: 'jag-en-cirkusartist', component:JagEnCirkusartistComponent},
{path: 'jag-en-cirkusartist1', component:JagEnCirkusartist1Component},
{path: 'j-ljudet', component:JLjudetComponent},
{path: 'j-ljudet1', component:JLjudet1Component},
{path: 'j-ljudet2', component:JLjudet2Component}


];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SommarlovtComponent,
    RastenComponent,
    SkattenComponent,
    HalloweenComponent,
    StadenComponent,
    VinterComponent,
    DjurComponent,
    SimhallenComponent,
    CirkusComponent,
    Sommarlovet1Component,
    Sommarlovet2Component,
    Sommarlovet3Component,
    Sommarlovet4Component,
    Sommarlovet5Component,
    Sommarlovet6Component,
    Sommarlovet21Component,
    Sommarlovet31Component,
    Sommarlovet41Component,
    Rasten1Component,
    OrdOmKanslorComponent,
    VokalerOchKonsonanterComponent,
    VokalerOchKonsonanter1Component,
    VokalerOchKonsonanter2Component,
    VokalerOchKonsonanter3Component,
    EnRoligRastComponent,
    EnRoligRast1Component,
    Skatten1Component,
    Skatten2Component,
    Skatten3Component,
    VokalerHarTvaLjudComponent,
    VokalerHarTvaLjud1Component,
    VokalerHarTvaLjud2Component,
    VokalerHarTvaLjud3Component,
    IstalletForSenSaComponent,
    AnalogierComponent,
    Analogier1Component,
    NarDetSpokadeComponent,
    NarDetSpokade1Component,
    SammansattaOrdComponent,
    SammansattaOrd1Component,
    SubstantivComponent,
    Substantiv1Component,
    Halloween1Component,
    Staden1Component,
    LjudComponent,
    StadensSuperhjalteComponent,
    StadensSuperhjalte1Component,
    SynonymerComponent,
    VerbComponent,
    Verb1Component,
    Vinter1Component,
    AdjektivComponent,
    Adjektiv1Component,
    IstalletForSaComponent,
    SnostormenComponent,
    Snostormen1Component,
    Synonymer1Component,
    Djur1Component,
    DjurensLatenComponent,
    FaktaOmComponent,
    FaktaOmEttDjurComponent,
    NgLjudetComponent,
    NgLjudet1Component,
    NgLjudet2Component,
    Simhallen1Component,
    ALjudetComponent,
    ALjudet1Component,
    ALjudet2Component,
    ISimhallenComponent,
    ISimhallen1Component,
    SattOrdPaKanslorComponent,
    Cirkus1Component,
    HomonymerComponent,
    Homonymer1Component,
    JagEnCirkusartistComponent,
    JagEnCirkusartist1Component,
    JLjudetComponent,
    JLjudet1Component,
    JLjudet2Component

  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(appRoutes),
     MatSnackBarModule,
      MatButtonModule, 
      MatIconModule, 
      MatInputModule, 
      MatSelectModule, 
      MatSliderModule,
      MatToolbarModule, 
      MatCardModule,
     MatSlideToggleModule,
     BrowserAnimationsModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
