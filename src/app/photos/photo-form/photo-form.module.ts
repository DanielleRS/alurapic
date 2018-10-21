import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotoFormComponent } from "./photo-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { VMessageComponent } from "../../shared/components/vmessage/vmessage.component";

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class PhotoFormModule {}