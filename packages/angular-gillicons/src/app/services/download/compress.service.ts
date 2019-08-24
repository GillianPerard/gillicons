import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Data } from '../../interfaces/data';

@Injectable({
    providedIn: 'root'
})
export class CompressService {

    private readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        }),
        responseType: 'blob' as 'json'
    };

    public constructor(private readonly http: HttpClient) {}

    public compress(conf: {filename: string, filesExtension: string, data: Array<Data>}) {
        return this.http.post('/compress', conf, this.httpOptions);
    }

}
