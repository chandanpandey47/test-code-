import { Component, Inject } from '@angular/core';
import {Http} from "@angular/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tab_data
  constructor(@Inject(Http) public obj){
this.funget()
  }
  t1;t2
  funins(){
    var ob={uname:this.t1,city:this.t2}
    this.obj.post("insrec",ob).subscribe(dt=>{
      alert(dt._body)
      this.funget()
    })
  }
  funget(){
    this.obj.get("getdata").subscribe(x=>{
      this.tab_data=(JSON.parse(x._body))
    })
  }
  fundelall(){
    this.obj.delete("delall").subscribe(dt=>{
      alert(dt._body)
      this.funget()
    })
  }
  fundel(un){
this.obj.post("delone",{uname:un}).subscribe(dt=>{
  alert(dt._body)
  this.funget()
})
  }
  oldobj;t11;t22
  funupdate(userobject){
    this.oldobj={uname:userobject.uname}
    this.t11=userobject.uname
    this.t22=userobject.city
  }
  funsave(){
    var newobj={uname:this.t11,city:this.t22}
    var arr=[this.oldobj,newobj]
    this.obj.post("updaterec",arr).subscribe(dt=>{
      alert(dt._body)
      this.funget()
    })
  }

}

