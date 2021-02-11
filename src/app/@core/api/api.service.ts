// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { ModelMapper } from '../mapper/model-mapper';

// import { Logger } from '../logger.service';
// import { ActivatedRoute } from '@angular/router';
// import { AlertController, Platform } from '@ionic/angular';
// const logger = new Logger('ApiService');

// @Injectable({
//   providedIn: 'root',
// })

// export class ApiService {

//   public URL_API: string;
//   public URL_SITE: string;
//   public URL_MEDIA: string;
//   public URL_ASSETS: string;
//   public localHost: string = 'localhost:8888';
//   public isLocal: boolean = false;
//   public rootFolder: string = "clorent";
//   public authToken: any;

//   constructor(
//     private http: HttpClient,
//     public route: ActivatedRoute,
//     private alertCtrl: AlertController,
//     private platform: Platform,
//   ) {
//     // this.URL_API = window.location.hostname;
//     this.URL_API = "http://localhost:3333";
//   }

//   //   _apiCall(method: any, url: string, sendData: any, withLoading: boolean = false) {

//   //     return new Promise<any>((resolve, reject) => {

//   //         let headers = new HttpHeaders();
//   //         let opt: any = {};
//   //         let fullUrl = '';

//   //         opt.observe = 'response';
//   //         if (url.indexOf('://') > 0 || url.indexOf('../') >= 0) {
//   //             fullUrl = url;
//   //         } else {
//   //             fullUrl = this.URL_API + url;
//   //             if (this.authToken) {
//   //                 opt.headers = {'Authorization': this.authToken};
//   //             }
//   //             // if (localStorage.bearerToken) {
//   //             //     opt.headers = {'Authorization': 'Bearer' + localStorage.bearerToken};
//   //             // }
//   //             opt.withCredentials = true;
//   //         }

//   //         // if(this.isConnected()){
//   //         let httpRequest;

//   //         // console.log(fullUrl);
//   //         if (method == 'get' || method == 'delete') {
//   //             httpRequest = this.http[method](fullUrl, opt);
//   //         } else {
//   //             httpRequest = this.http[method](fullUrl, sendData, opt);
//   //         }

//   //         httpRequest.subscribe((response: any) => {
//   //             resolve(this.responseHandler(response));
//   //         }, (err: any) => {
//   //             // console.log('AAAAAAAAaa');
//   //             this.errorHandler(err);
//   //             reject(err);
//   //         });
//   //     });
//   //   }

//   //   _get(url: string, withLoading: boolean = true) {
//   //     return this._apiCall('get', url, {}, withLoading);
//   // }

//   // _post(url: string, sendData: any, withLoading: boolean = true) {
//   //     return this._apiCall('post', url, sendData, withLoading);
//   // }

//   // _put(url: string, sendData: any, withLoading: boolean = true) {
//   //     return this._apiCall('put', url, sendData, withLoading);
//   // }

//   // _delete(url: string, withLoading: boolean = true) {
//   //     return this._apiCall('delete', url, {}, withLoading);
//   // }

//   // responseHandler(response: any) {
//   //   try {
//   //       if (response.headers.get('Token')) {
//   //           this.authToken = response.headers.get('Token');
//   //           this.platform.ready().then(()=>{
//   //               this.storage.setItem('authToken', this.authToken);
//   //           });
//   //           // localStorage.bearerToken = response.headers.get('Token');
//   //       }
//   //       if (response.headers.get('Authenticated')) {
//   //           this.storage.setItem('authenticated',response.headers.get('Authenticated'));
//   //           // localStorage.setItem('authenticated', response.headers.get('Authenticated'));
//   //       }
//   //   } catch (e) { }
//   //   switch (response.status) {
//   //       case 200:
//   //           return response.body;
//   //       case 400:
//   //       case 401:
//   //           this.errorHandler(response.error);
//   //           return { status: false };
//   //       default:
//   //           break;
//   //   }
//   // }

//   // errorHandler(error: any) {
//   //   if (error.status === 401) {
//   //       this.userData = {};
//   //       this.authenticated = false;
//   //       // this.storage.remove('authenticated');
//   //       // this.storage.remove('userData');
//   //       // this.storage.remove("uid");
//   //       // localStorage.clear();
//   //   } else if (error.status === 400) {
//   //       let showMsg = true;
//   //       let title = 'Oops';
//   //       let msg = '';
//   //       let jsonError = error.error;
//   //       for(var i in jsonError.errorType){
//   //           if(typeof(jsonError.errorType[i]) === 'string'){
//   //               var errMsg = jsonError.errorType[i];
//   //           }
//   //       }
//   //       switch (errMsg) {
//   //           case "invalid_login":
//   //               msg = 'Login e/ou Senha inválidos!';
//   //               break;
//   //               case "invalid_pass":
//   //               msg = 'Login e/ou Senha inválidos!';
//   //               break;
//   //           case "existing_user":
//   //               msg = 'Usuário já existente';
//   //               break;
//   //           case "password_mismatch":
//   //               msg = 'Senhas não conferem';
//   //               break;
//   //           case "invalid_email":
//   //               msg = 'E-mail inválido';
//   //               break;
//   //           case "mandatory_fields":
//   //               msg = 'Campos obrigatórios';
//   //               break;
//   //           case "register_error":
//   //               msg = 'Erro ao realizar cadastro, verifique se os dados estão corretos';
//   //               break;
//   //           case "save_error":
//   //               msg = 'Erro ao salvar, verifique se os dados estão corretos';
//   //               break;
//   //           case "delete_error":
//   //               msg = 'Erro ao excluir, verifique se há conexão com a internet';
//   //               break;
//   //           case "share_error":
//   //               msg = 'Erro ao compartilhar';
//   //               break;
//   //           case "default_error":
//   //               msg = 'Erro ao processar, tente novamente';
//   //               break;
//   //           case "email_exists":
//   //               msg = 'E-mail já existente';
//   //               break;
//   //           case "deal_closed":
//   //               msg = 'Esse orçamento já está encerrado';
//   //               break;
//   //           case "item_already_in_cart":
//   //               msg = 'Esse produto já está no carrinho';
//   //               break;
//   //           case "invalid_product":
//   //               msg = 'Produto inválido';
//   //               break;
//   //           case "product_code_exists":
//   //               msg = 'Código do produto já cadastrado';
//   //               break;
//   //           case "product_code_required":
//   //               msg = 'Código do produto é obrigatório';
//   //               break;
//   //           case "save_error":
//   //               msg = 'Erro ao salvar';
//   //               break;
//   //           case "invalid_id":
//   //               msg = 'Id inválido';
//   //               break;
//   //           case "auth_required":
//   //               msg = 'Login necessário';
//   //               break;
//   //           case "favorite_error":
//   //               msg = 'Erro ao favoritar';
//   //               break;
//   //           default:
//   //               showMsg = false;
//   //               break;
//   //       }
//   //       if (showMsg) {
//   //           this._alert(title, msg);
//   //           // this.alertCtrl.create({
//   //           //   title: title,
//   //           //   subTitle: msg,
//   //           //   buttons: ['OK']
//   //           // }).present();
//   //       }
//   //   } else {
//   //       console.log(error);
//   //   }
//   // }

//   // async _alert(title: string = '', msg: string = '') {
//   //   const alert = await this.alertCtrl.create({ message: msg, buttons: ['OK'] });
//   //   alert.present();
//   // }

//   public query<T>(route: string, method: any = "", body: any = {}) {

//     // return new Promise<any>((resolve, reject) => {

//     //   this.http[method]<T[]>(this.URL_API + route, body).subscribe((response: any) => {
//     //     return response;
//     //   });
//     // });


//     let auth = {}
//      this.http[method]<T[]>(this.URL_API + route, body).subscribe((data: T[]) => {
//           logger.debug('API Data', data);
//           console.log(data)

//           /**
//            * Uncomment this and delete the snippet bellow in case you need to get the plan json response
//            * return data;
//            */

//           // Here we process the Mapping attributes or decorators defined in your Class Models
//           auth = data;
//           // return data.map((item: T) => {
//           //   return new ModelMapper<T>(itemType).map(item);
//           // });
//         })

//     return auth


//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ModelMapper } from '../mapper/model-mapper';

import { Logger } from '../logger.service';
const logger = new Logger('ApiService');

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  public URL_API: string;
  public URL_SITE: string;
  public URL_MEDIA: string;
  public URL_ASSETS: string;
  public localHost: string = 'localhost:8888';
  public isLocal: boolean = false;
  public rootFolder: string = "clorent";
  public authToken: any;
  public returnData: any;

  constructor(private http: HttpClient) {
    // this.URL_API = window.location.hostname;
    this.URL_API = "http://localhost:3333";
  }

  public query<T>(route: string, itemType: any): Observable<T[]> {

    return (
      this.http
        //.cache()
        .get<T[]>(this.URL_API + route)
        .pipe(
          map((data: T[]) => {
            logger.debug('API Data', data);

            /**
             * Uncomment this and delete the snippet bellow in case you need to get the plan json response
             * return data;
             */

            // Here we process the Mapping attributes or decorators defined in your Class Models
            return data.map((item: T) => {
              return new ModelMapper<T>(itemType).map(item);
            });
          })
        )
    );
  }

  public get<T>(route: string, itemType: any): Observable<T> {
    if (!route) {
      return;
    }

    return (
      this.http
        //.cache()
        .get<T>(this.URL_API + route)
        .pipe(
          map((data: T) => {
            return new ModelMapper<T>(itemType).map(data);
          })
        )
    );
  }

  public post<T>(route: string, itemType: any, dataRequest: any): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return (
      this.http
        .post<T>(this.URL_API + route, JSON.stringify(dataRequest), httpOptions)
        .pipe(
          map((data: T) => {
            return new ModelMapper<T>(itemType).map(data);
          })
        )
    );
  }


  public f(route: string, dataRequest: any) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.URL_API + route, dataRequest, httpOptions)

  }
}


