/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
class PhotosService extends __BaseService {
  static readonly savePhotoPath = '/gestiondestock/v1/photos/{id}/{title}/{context}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param file undefined
   * @return successful operation
   */
  savePhotoResponse(file: Blob, id:number, title:string, context:string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    console.log('****************');

    if (file != null) { __formData.append('file', file as string | Blob);}
    console.log(file)
    __body = __formData;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/photos/${encodeURIComponent(String(id))}/${encodeURIComponent(String(title))}/${encodeURIComponent(String(context))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * @param file undefined
   * @return successful operation
   */
  savePhoto(file: Blob, id: number, title: string, context:string): __Observable<{}> {
    return this.savePhotoResponse(file, id, title, context).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module PhotosService {
}

export { PhotosService }
