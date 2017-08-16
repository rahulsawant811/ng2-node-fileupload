import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class FileuploadService{

    constructor(private http: Http){}

    uploadFile(formData){
        return this.http.post('http://localhost:3000/fileupload/upload', formData)
          .map(files => files.json())
    }
}
