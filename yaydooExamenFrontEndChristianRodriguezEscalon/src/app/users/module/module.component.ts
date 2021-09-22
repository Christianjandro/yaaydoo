import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {User} from "../user";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-module',
  templateUrl: './module.html',
  styleUrls: ['./module.css']
})
export class ModuleComponent implements OnInit {
  listUser: User[] = [];
  form: FormGroup;
  action:String;

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => {
    // @ts-ignore
    let pass = group.get('password').value;
    // @ts-ignore
    let confirmPass = group.get('confirm').value
    return pass === confirmPass ? null : { notSame: true }
  }

  constructor(private fm: FormBuilder,
              private toastr: ToastrService,
              private _userService: UserService) {
    this.form = fm.group({
      name : ["",Validators.required],
      email : ["",Validators.required],
      address : ["",Validators.required],
      telephone : ["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      dateofbirth : ["",[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      password : ["",Validators.required],
      confirm : ["",Validators.required],
      id :[]
    }, { validators: this.checkPasswords });
    this.action = "Registrar";
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this._userService.getListUsers().subscribe(
      data => {
        this.listUser = data.data[0];
      },error => {
        console.log(error);
      }
    )
  }

  addUser() {
    const usr = new User(
      this.form.get("name")?.value,
      this.form.get("email")?.value,
      this.form.get("address")?.value,
      this.form.get("telephone")?.value,
      this.form.get("dateofbirth")?.value.split("/").reverse().join("-"),
      this.form.get("password")?.value,
      this.form.get("id")?.value
    )

    this._userService.saveUsers(usr).subscribe(
      data => {
        if(data.message){
          this.toastr.success(data.message, 'Guardado!');
        }else{
          this.toastr.error(data.Err, 'Guardado!');
        }
        this.getUsers();
      },error => {
        console.log(error);
      }
    )
    this.form.reset();

  }

  deleteUser(id: Number){

    this._userService.deleteUsers(id).subscribe(
      data => {
        if(data.message){
          this.toastr.success(data.message, 'Eliminado!');
        }else{
          this.toastr.error(data.Err, 'Eliminado!');
        }
        this.getUsers();
      },error => {
        console.log(error);
      }
    )

  }

  editUser(usr: User){
    this.action = "Actualizar";
    this.form.patchValue({
      name : usr.name,
      email : usr.email,
      address : usr.address,
      telephone : usr.telephone,
      dateofbirth : usr.dateofbirth,
      password : usr.password,
      id : usr.id
    });
  }
}
