import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, CamelToTitlePipe, FloorPipe } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimePanelComponent } from './time-panel/time-panel.component';
import { AttributesPanelComponent } from './attributes-panel/attributes-panel.component';
import { HealthPanelComponent } from './health-panel/health-panel.component';
import { HomePanelComponent } from './home-panel/home-panel.component';
import { LogPanelComponent } from './log-panel/log-panel.component';
import { InventoryPanelComponent } from './inventory-panel/inventory-panel.component';
import { ActivityPanelComponent } from './activity-panel/activity-panel.component';
import { EquipmentPanelComponent } from './equipment-panel/equipment-panel.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { StoreModalComponent } from './store-modal/store-modal.component';

const materialModules = [
  MatDialogModule
];

@NgModule({
  declarations: [
    AppComponent,
    TimePanelComponent,
    AttributesPanelComponent,
    HealthPanelComponent,
    HomePanelComponent,
    LogPanelComponent,
    InventoryPanelComponent,
    ActivityPanelComponent,
    EquipmentPanelComponent,
    FloorPipe,
    CamelToTitlePipe,
    StoreModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
