export class User {
  constructor(Name?: String, Email?: String, Address?: String, Telephone?: String, Dateofbirth?: String,Password?: String, Id?: Number) {
    this.name = !Name ? "" : Name;
    this.email = !Email ? "" : Email;
    this.address = !Address ? "" : Address;
    this.telephone = !Telephone ? "" : Telephone;
    this.dateofbirth = !Dateofbirth ? "" : Dateofbirth;
    this.password = !Password ? "" : Password;
    this.age = this.calculateAge();
    this.id = !Id ? 0 : Id;
  }
  name: String;
  email: String;
  address: String;
  telephone: String;
  dateofbirth: String;
  password: String;
  age: Number;
  id: Number;

  calculateAge = () => {
    // @ts-ignore
    let dob = new Date(this.dateofbirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math. abs(age_dt.getUTCFullYear() - 1970);
  }
}
