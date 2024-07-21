import { Injectable } from '@angular/core';
import{HttpClient}from"@angular/common/http"
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  putPayPaymentDetail() {
    throw new Error('Method not implemented.');
  }

url:string=environment.apiBaseUrl+'/PaymentDetail'
list:PaymentDetail []=[]
formData :PaymentDetail=new
PaymentDetail()
formSubmitted:boolean=false;
  constructor(private http: HttpClient) { }


refreshList(){
this.http.get(this.url)
.subscribe({
next:res=>{
//console.log(res);
this.list= res as
PaymentDetail[]
},
error:err=>{console.log(err)}
})
}

postPayPaymentDetail(){
return this.http.post(this.url,this.formData)
}

deletePayPaymentDetail(id:number){
  return this.http.delete (this.url +'/'+ id)
  }


puttPayPaymentDetail(){
  return this.http.put (this.url +'/'+ this.formData.paymentDetailId, this.formData)
  }

resetForm(form:NgForm){
form.form.reset()
this.formData=new
PaymentDetail()
this.formSubmitted=false


}
}
