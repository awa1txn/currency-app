import { FormGroup } from "@angular/forms";

export function TopupValidator(controlName: string, list:any) {
    return async (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      if (
        control.errors &&
        !control.errors["topupValidator"]
      ) {
        return;
      }
    //   console.log(control.value)
      if (await list.includes(control.value.toLowerCase())) {
        control.setErrors(null);
      } else {
        control.setErrors({ topupValidator: true });
      }
    };
  }
