import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**********  Prime NG *************** */

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ChipModule } from 'primeng/chip';
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BadgeModule } from 'primeng/badge';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { ListboxModule } from 'primeng/listbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChipsModule } from 'primeng/chips';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SliderModule } from 'primeng/slider';
import { CalendarModule } from 'primeng/calendar';
import { MenubarModule } from 'primeng/menubar';
import { TimelineModule } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

/*****************  Component  ************** */

import { AddProduitComponent } from './tp4/add-produit/add-produit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddUserComponent } from './tp5/add-user/add-user.component';
import { ProduitsComponent } from './tp4/produits/produits.component';
import { ListUserComponent } from './tp5/list-user/list-user.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './tp5/contact/contact.component';
import { HomeComponent } from './tp5/home/home.component';
import { LoginComponent } from './tp6/login/login.component';
import { NewCompteComponent } from './tp6/new-compte/new-compte.component';
import { MoviesComponent } from './tp7/movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    NavbarComponent,
    AddUserComponent,
    ListUserComponent,
    SidebarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NewCompteComponent,
    MoviesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    ToolbarModule,
    DropdownModule,
    PanelModule,
    MenuModule,
    TieredMenuModule,
    ChipModule,
    CheckboxModule,
    MessagesModule,
    ToastModule,
    SidebarModule,
    SlideMenuModule,
    ReactiveFormsModule,
    BadgeModule,
    FileUploadModule,
    TableModule,
    DropdownModule,
    ListboxModule,
    MultiSelectModule,
    CarouselModule,
    TabViewModule,
    CardModule,
    DividerModule,
    PaginatorModule,
    ProgressSpinnerModule,
    GalleriaModule,
    ImageModule,
    InputNumberModule,
    ConfirmDialogModule,
    RadioButtonModule,
    InputMaskModule,
    ConfirmPopupModule,
    InputSwitchModule,
    ChipsModule,
    RatingModule,
    InputTextareaModule,
    SliderModule,
    CalendarModule,
    MenubarModule,
    TimelineModule,
    AccordionModule,
    DynamicDialogModule,
    DialogModule,
    SkeletonModule,
    CKEditorModule,
  ],

  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
