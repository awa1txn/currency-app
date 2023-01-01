import { FormGroup } from "@angular/forms";

export function EmailExistsValidator(controlName: string, list:any) {
    return async (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      if (
        control.errors &&
        !control.errors["emailExistsValidator"]
      ) {
        return;
      }
    //   console.log(control.value)
      if (await list.includes(control.value.toLowerCase())) {
        control.setErrors({ emailExistsValidator: true });
      } else {
        control.setErrors(null);
      }
    };
  }
